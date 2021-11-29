type ItemOnMarket = {
  priceGodz: number
};

export type SentzOnMarket = ItemOnMarket & {
  willPower: number,
};

export type BadgeOnMarket = ItemOnMarket & {
  sentzCarryCount: number,
};
