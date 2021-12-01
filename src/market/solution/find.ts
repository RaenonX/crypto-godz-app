import {optimizedBadgeComb} from '../calc/badge';
import {optimizedSentzSelection, Solution} from '../calc/sentz';
import {MarketCombinations} from '../combinations/market';
import {BadgeOnMarket, SentzOnMarket} from '../type';


type FindSolutionOptions = {
  minSentzCount: number,
  maxSentzCount: number,
  godz: {
    owned: number,
    price: number,
  },
  market: {
    sentz: SentzOnMarket[],
    badges: BadgeOnMarket[],
  },
  params: {
    days: number,
    vitalCostUsd: number,
  }
};

export const findSolution = ({
  minSentzCount, maxSentzCount, godz, market, params,
}: FindSolutionOptions): Solution | null => {
  const {vitalCostUsd, days} = params;

  const solutionsForEachCount = [...Array(maxSentzCount - minSentzCount + 1).keys()]
    .map((num) => num + minSentzCount)
    .map((sentzCount) => {
      console.log();
      console.log(`Exploring options with ${sentzCount} sentz...`);

      const badgeComb = optimizedBadgeComb(new MarketCombinations(market.badges, godz.owned), sentzCount);
      const badgeCostUsd = badgeComb.totalCostGodz * godz.price;

      console.log(`Optimized badge cost ${badgeComb.totalCostGodz.toFixed(2)} GODZ ($${badgeCostUsd.toFixed(2)} USD)`);
      console.log(badgeComb.combination);

      return optimizedSentzSelection({
        badgeCostUsd,
        vitalCostUsd,
        sentzCombinations: new MarketCombinations(market.sentz, godz.owned - badgeComb.totalCostGodz),
        sentzCount,
        days,
        godz,
      });
    })
    .filter((solution): solution is Solution => !!solution);

  if (!solutionsForEachCount.length) {
    return null;
  }

  return solutionsForEachCount
    .reduce((prev, curr) => prev.totalReturn > curr.totalReturn ? prev : curr);
};
