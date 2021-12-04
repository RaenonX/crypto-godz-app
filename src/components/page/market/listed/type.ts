import {ItemOnMarket} from '../../../../calc/market/type';
import {ArrayFormOnChangeHandler} from '../../../elements/form/array/main';


export type ListedItemsProps<E extends ItemOnMarket> = {
  listedItems: E[],
  setListedItems: (newList: E[]) => void
};

export type ListedItemEntryProps<E extends ItemOnMarket> = {
  item: E,
  onChange: ArrayFormOnChangeHandler<E>,
};
