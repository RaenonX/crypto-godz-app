import {BadgeOnMarket, SentzOnMarket} from '../../../calc/market/type';
import {AccountStatus} from '../../../calc/types/account';


export type MarketOptimizingParams = {
  account: AccountStatus,
  market: {
    sentz: SentzOnMarket[],
    badge: BadgeOnMarket[],
  }
  vitalCostUsd: number,
  days: number,
};
