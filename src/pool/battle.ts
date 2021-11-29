import {Account} from '../account';
import {Reward, RewardData} from '../data/rewards';
import {BattleOption} from '../types/battleOptions';


export const runSingleBattle = (account: Account): RewardData | null => {
  const options: BattleOption[] = Reward
    .filter((reward) => account.totalWillPower >= reward.powerReq)
    .map((reward) => ({reward, expectedReward: reward.rewards * reward.winRatePct / 100}));

  const {reward} = options.reduce((prev, current) => {
    return (prev.expectedReward > current.expectedReward) ? prev : current;
  });

  const rand = Math.random() * 100;
  const additionalWRPct = Math.min(
    account.totalWillPower > 2550 ? (account.totalWillPower - 2550) / 50 : 0,
    90,
  );
  const won = rand < (reward.winRatePct + additionalWRPct);

  return won ? reward : null;
};
