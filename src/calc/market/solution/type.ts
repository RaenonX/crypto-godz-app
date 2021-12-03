import {BadgeOnMarket, ItemOnMarket, SentzOnMarket} from '../type';


export type CalculatedItemBase<T extends ItemOnMarket> = {
  item: T,
};

export type CalculatedSentz = CalculatedItemBase<SentzOnMarket> & {
  wpPerGodz: number,
};

export type CalculatedBadge = CalculatedItemBase<BadgeOnMarket> & {
  sentzPerGodz: number,
};
