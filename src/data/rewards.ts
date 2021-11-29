export type RewardData = {
  level: number,
  powerReq: number,
  rewards: number,
  winRatePct: number,
};

export const Reward: RewardData[] = [
  {level: 1, powerReq: 150, rewards: 4.89, winRatePct: 88},
  {level: 2, powerReq: 300, rewards: 9.78, winRatePct: 86},
  {level: 3, powerReq: 450, rewards: 14.67, winRatePct: 84},
  {level: 4, powerReq: 600, rewards: 20.18, winRatePct: 82},
  {level: 5, powerReq: 750, rewards: 25.68, winRatePct: 80},
  {level: 6, powerReq: 900, rewards: 31.79, winRatePct: 78},
  {level: 7, powerReq: 1050, rewards: 37.90, winRatePct: 76},
  {level: 8, powerReq: 1200, rewards: 44.02, winRatePct: 74},
  {level: 9, powerReq: 1350, rewards: 50.13, winRatePct: 72},
  {level: 10, powerReq: 1500, rewards: 56.86, winRatePct: 70},
  {level: 11, powerReq: 1650, rewards: 70.31, winRatePct: 65},
  {level: 12, powerReq: 1800, rewards: 78.87, winRatePct: 63},
  {level: 13, powerReq: 1950, rewards: 88.04, winRatePct: 61},
  {level: 14, powerReq: 2100, rewards: 97.21, winRatePct: 59},
  {level: 15, powerReq: 2250, rewards: 109.44, winRatePct: 57},
  {level: 16, powerReq: 2400, rewards: 117.99, winRatePct: 55},
  {level: 17, powerReq: 2550, rewards: 129.61, winRatePct: 53},
  {level: 18, powerReq: 2700, rewards: 141.23, winRatePct: 51},
  {level: 19, powerReq: 2850, rewards: 153.46, winRatePct: 49},
  {level: 20, powerReq: 3000, rewards: 166.29, winRatePct: 47},
  {level: 21, powerReq: 3150, rewards: 217.65, winRatePct: 43},
  {level: 22, powerReq: 3300, rewards: 237.22, winRatePct: 43},
  {level: 23, powerReq: 3450, rewards: 258.00, winRatePct: 43},
  {level: 24, powerReq: 3600, rewards: 280.01, winRatePct: 43},
  {level: 25, powerReq: 3750, rewards: 303.25, winRatePct: 43},
  {level: 26, powerReq: 3900, rewards: 328.31, winRatePct: 40},
  {level: 27, powerReq: 4050, rewards: 354.60, winRatePct: 40},
  {level: 28, powerReq: 4200, rewards: 382.73, winRatePct: 40},
  {level: 29, powerReq: 4350, rewards: 412.07, winRatePct: 40},
  {level: 30, powerReq: 4500, rewards: 443.87, winRatePct: 40},
];

export type RewardOutcome = {
  chosenReward: RewardData,
  expectedRewardUsd: number,
  winRatePct: number,
};

export const getBestReward = (willPower: number): RewardOutcome | null => {
  const eligibleLevels = Reward
    .filter((reward) => willPower >= reward.powerReq);

  if (!eligibleLevels.length) {
    return null;
  }

  return eligibleLevels
    .map((reward) => {
      const bonusWinRatePct = reward.powerReq >= 2550 ? (willPower - reward.powerReq) / 50 : 0;
      const actualWinRatePct = Math.min(reward.winRatePct + bonusWinRatePct, 90);

      return {
        chosenReward: reward,
        expectedRewardUsd: reward.rewards * actualWinRatePct / 100,
        winRatePct: actualWinRatePct,
      };
    })
    .reduce((prev, curr) => prev.expectedRewardUsd > curr.expectedRewardUsd ? prev : curr);
};
