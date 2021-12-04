import React from 'react';

import {BadgeOnMarket} from '../../../../../calc/market/type';
import {useI18n} from '../../../../../i18n/hook';
import {ListedMarketItems} from '../base';
import {ListedItemsProps} from '../type';
import {ListedBadgeEntry} from './entry';


export const ListedBadge = ({listedItems, setListedItems}: ListedItemsProps<BadgeOnMarket>) => {
  const {t} = useI18n();

  return (
    <ListedMarketItems
      listedItems={listedItems}
      setListedItems={setListedItems}
      generateNewElem={() => ({sentzCarryCount: 0, priceGodz: 0, count: 0})}
      renderEntries={(sentz, onChange) => (
        <ListedBadgeEntry onChange={onChange} item={sentz}/>
      )}
      title={t((t) => t.market.listed.badge.title)}
    />
  );
};
