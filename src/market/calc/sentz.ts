import {getBestReward, RewardOutcome} from '../../data/rewards';
import {permutation} from '../../utils';
import {SentzOnMarket} from '../type';


type Solution = {
  totalReturn: number,
  reward: RewardOutcome,
  expense: {
    sentz: number,
    badge: number,
    vital: number,
  },
  sentzCount: number,
};

type GetOptimizedSentzOptions = {
  badgeCostUsd: number,
  vitalCostUsd: number,
  listedSentz: SentzOnMarket[],
  count: number,
  days: number,
  godz: {
    price: number,
    owned: number,
  },
};

export const optimizedSentzSelection = ({
  badgeCostUsd, vitalCostUsd, listedSentz, count, days, godz,
}: GetOptimizedSentzOptions): Solution => {
  return permutation(listedSentz, count)
    .map((sentzComb) => {
      const sentzTotal = sentzComb.reduce((prev, curr) => ({
        willPower: prev.willPower + curr.willPower,
        priceGodz: prev.priceGodz + curr.priceGodz,
      }));

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
        sentzCount: count,
      };
    })
    .filter((result): result is Solution => !!result)
    .filter(({expense}) => expense.sentz + expense.badge + expense.vital < godz.owned)
    .reduce((prev, curr) => prev.totalReturn > curr.totalReturn ? prev : curr);
};
