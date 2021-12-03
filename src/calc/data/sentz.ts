export type SentzData = {
  rarity: number,
  dropPct: number,
  willpower: {
    low: number,
    high: number,
  },
};

export const Sentz: SentzData[] = [
  {rarity: 1, dropPct: 41, willpower: {low: 50, high: 95}},
  {rarity: 2, dropPct: 25, willpower: {low: 96, high: 141}},
  {rarity: 3, dropPct: 15, willpower: {low: 142, high: 187}},
  {rarity: 4, dropPct: 8, willpower: {low: 188, high: 233}},
  {rarity: 5, dropPct: 6, willpower: {low: 234, high: 279}},
  {rarity: 6, dropPct: 3, willpower: {low: 280, high: 323}},
  {rarity: 7, dropPct: 2, willpower: {low: 324, high: 369}},
];
