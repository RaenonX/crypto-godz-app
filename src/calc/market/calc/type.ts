import {RewardOutcome} from '../../data/rewards';
import {BadgeOnMarket, SentzOnMarket} from '../type';


export type Solution = {
  totalReturnUsd: number,
  reward: RewardOutcome,
  expenseUsd: {
    sentz: number,
    badge: number,
    vital: number,
    total: number,
  },
  picked: {
    sentz: SentzOnMarket[],
    badge: BadgeOnMarket[],
  },
  breakEvenDays: number,
};
