import {RewardOutcome} from '../../data/rewards';
import {sumAccumulator} from '../../utils/accumulator';
import {Solution} from '../calc/type';
import {getBreakEvenDays} from './breakEvenDays';
import {CalculatedBadge, CalculatedSentz} from './type';


type CalculateSolutionOptions = {
  combo: {
    sentz: CalculatedSentz[],
    badge: CalculatedBadge[],
  }
  reward: RewardOutcome,
  days: number,
  vitalCostUsd: number,
  godzPrice: number,
};

export const calculateSolution = ({
  combo, reward, days, vitalCostUsd, godzPrice,
}: CalculateSolutionOptions): Solution => {
  const expenseSentzUsd = combo.sentz
    .map(({item}) => item.count * item.priceGodz * godzPrice)
    .reduce(sumAccumulator);
  const expenseBadgeUsd = (combo.badge as CalculatedBadge[])
    .map(({item}) => item.count * item.priceGodz * godzPrice)
    .reduce(sumAccumulator);
  const expenseVitalUsd = vitalCostUsd * days * combo.sentz.map(({item}) => item.count).reduce(sumAccumulator);
  const expenseTotalUsd = expenseSentzUsd + expenseBadgeUsd + expenseVitalUsd;

  const totalReturnUsd = reward.expectedRewardUsd * days - expenseTotalUsd;

  return {
    totalReturnUsd,
    reward,
    expenseUsd: {
      sentz: expenseSentzUsd,
      badge: expenseBadgeUsd,
      vital: expenseVitalUsd,
      total: expenseTotalUsd,
    },
    picked: {
      sentz: combo.sentz.map(({item}) => item).filter(({count}) => count > 0),
      badge: combo.badge.map(({item}) => item).filter(({count}) => count > 0),
    },
    breakEvenDays: getBreakEvenDays({
      once: {
        sentz: expenseSentzUsd,
        badge: expenseBadgeUsd,
      },
      daily: {
        vitalExpense: vitalCostUsd,
        expectedReward: reward.expectedRewardUsd,
      },
      sentzCount: combo.sentz.map(({item}) => item.count).reduce(sumAccumulator),
    }),
  };
};
