import {product} from '../../utils/iter';
import {Lazy} from '../../utils/lazy';
import {ItemOnMarket} from '../type';


export class MarketCombinations<T extends ItemOnMarket> extends Lazy<T[]> {
  listedItems: T[];

  constructor(listedItems: T[], ownedGodz: number) {
    super(MarketCombinations.generatorFromListed(listedItems, ownedGodz));
    this.listedItems = listedItems;
  }

  static* generatorFromListed<T extends ItemOnMarket>(listedItems: T[], ownedGodz: number): Iterator<T[]> {
    yield* product(
      listedItems,
      (item) => item.count + 1,
      (item, count) => ({...item, count: count}),
      (combination) => (
        ownedGodz >= combination
          .map(({priceGodz, count}) => priceGodz * count)
          .reduce((prev, curr) => prev + curr)
      ),
    );
  }
}
