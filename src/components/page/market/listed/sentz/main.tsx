import React from 'react';

import {SentzOnMarket} from '../../../../../calc/market/type';
import {useI18n} from '../../../../../i18n/hook';
import {ListedMarketItems} from '../base';
import {ListedItemsProps} from '../type';
import {ListedSentzEntry} from './entry';


export const ListedSentz = ({listedItems, setListedItems}: ListedItemsProps<SentzOnMarket>) => {
  const {t} = useI18n();

  return (
    <ListedMarketItems
      listedItems={listedItems}
      setListedItems={setListedItems}
      generateNewElem={() => ({willPower: 0, priceGodz: 0, count: 0})}
      renderEntries={(sentz, onChange) => (
        <ListedSentzEntry onChange={onChange} item={sentz}/>
      )}
      title={t((t) => t.market.listed.sentz.title)}
    />
  );
};
