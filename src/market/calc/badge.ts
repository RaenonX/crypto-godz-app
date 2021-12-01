import {MarketCombinations} from '../combinations/market';
import {BadgeOnMarket} from '../type';


type OptimizedBadgeComb = {
  totalCostGodz: number,
  combination: BadgeOnMarket[],
};

export const optimizedBadgeComb = (
  badgeCombinations: MarketCombinations<BadgeOnMarket>,
  sentzCount: number,
): OptimizedBadgeComb => {
  return badgeCombinations
    .filter((badgeComb) => {
      const totalBadgeCarryCount = badgeComb
        .map((comb) => comb.count * comb.sentzCarryCount)
        .reduce((prev, curr) => prev + curr);

      return totalBadgeCarryCount >= sentzCount;
    })
    .mapNoNull((combination) => ({
      totalCostGodz: combination
        .map((comb) => comb.priceGodz * comb.count)
        .reduce((prev, curr) => prev + curr),
      combination,
    }))
    .takeAll()
    .reduce((prev, curr) => prev.totalCostGodz < curr.totalCostGodz ? prev : curr);
};
