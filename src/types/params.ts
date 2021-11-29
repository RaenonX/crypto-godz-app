export type GamePrices = {
  sentz: number,
  badge: number,
};

export type SimulationParams = {
  pullStrategy: {
    maxCount: number,
  },
  simDays: number,
  pricesUsd: GamePrices,
  count: number,
};
