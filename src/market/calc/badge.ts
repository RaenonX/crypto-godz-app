import {permutation} from '../../utils';
import {BadgeOnMarket} from '../type';


export const optimizedBadgeCostGodz = (listedBadges: BadgeOnMarket[], count: number): number => {
  return permutation(listedBadges, count)
    .filter((badgeComb) => {
      const totalSentzCarryCount = badgeComb
        .map((comb) => comb.sentzCarryCount)
        .reduce((prev, curr) => prev + curr);

      return totalSentzCarryCount >= count;
    })
    .reduce((prev, curr) => {
      const prevCost = prev
        .map((comb) => comb.priceGodz)
        .reduce((prev, curr) => prev + curr);
      const currCost = prev
        .map((comb) => comb.priceGodz)
        .reduce((prev, curr) => prev + curr);

      return prevCost > currCost ? prev : curr;
    })
    .map((badge) => badge.priceGodz)
    .reduce((prev, curr) => prev + curr);
};
