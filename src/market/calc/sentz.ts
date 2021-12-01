import {getBestReward, RewardOutcome} from '../../data/rewards';
import {MarketCombinations} from '../combinations/market';
import {SentzOnMarket} from '../type';


export type Solution = {
  totalReturn: number,
  reward: RewardOutcome,
  expense: {
    sentz: number,
    badge: number,
    vital: number,
  },
  sentzPicked: SentzOnMarket[],
};

type GetOptimizedSentzOptions = {
  badgeCostUsd: number,
  vitalCostUsd: number,
  sentzCombinations: MarketCombinations<SentzOnMarket>,
  sentzCount: number,
  days: number,
  godz: {
    price: number,
    owned: number,
  },
};

export const optimizedSentzSelection = ({
  badgeCostUsd, vitalCostUsd, sentzCombinations, sentzCount, days, godz,
}: GetOptimizedSentzOptions): Solution | null => {
  const combinations = sentzCombinations
    .mapNoNull((sentzComb) => {
      const sentzTotal = sentzComb.reduce((prev, curr) => ({
        willPower: prev.willPower + curr.willPower,
        priceGodz: prev.priceGodz + curr.priceGodz,
        count: prev.count + curr.count,
      }));

      if (sentzTotal.count !== sentzCount) {
        return null;
      }

      const reward = getBestReward(sentzTotal.willPower);

      if (!reward) {
        return null;
      }

      const sentz = sentzTotal.priceGodz * godz.price;
      const badge = badgeCostUsd;
      const vital = vitalCostUsd * sentzComb.length * days;

      const totalReturn = reward.expectedRewardUsd * days - sentz - badge - vital;

      return {
        totalReturn,
        reward,
        expense: {
          sentz,
          badge,
          vital,
        },
        sentzPicked: sentzComb,
      };
    })
    .filterFalsy()
    .filter(({expense}) => expense.sentz + expense.badge + expense.vital < godz.owned)
    .take();

  if (!combinations.length) {
    return null;
  }

  return combinations.reduce((prev, curr) => prev.totalReturn > curr.totalReturn ? prev : curr);
};
