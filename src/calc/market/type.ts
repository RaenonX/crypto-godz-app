export type ItemOnMarket = {
  priceGodz: number,
  count: number,
};

export type SentzOnMarket = ItemOnMarket & {
  willPower: number,
};

export type BadgeOnMarket = ItemOnMarket & {
  sentzCarryCount: number,
};
