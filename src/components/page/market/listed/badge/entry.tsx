import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {BadgeOnMarket} from '../../../../../calc/market/type';
import {useI18n} from '../../../../../i18n/hook';
import {NumberInput} from '../../../../form/numInput';
import {ListedItemEntryProps} from '../type';


export const ListedBadgeEntry = <E extends BadgeOnMarket>({onChange, item}: ListedItemEntryProps<E>) => {
  const {t} = useI18n();

  return (
    <Row className="gx-2">
      <Col md={3}>
        {t((t) => t.market.listed.badge.carryCount)}
        <NumberInput
          value={item.sentzCarryCount}
          onChange={(sentzCarryCount) => onChange('sentzCarryCount')(sentzCarryCount)}
        />
      </Col>
      <Col md={5}>
        {t((t) => t.market.listed.generic.priceGodz)}
        <NumberInput
          value={item.priceGodz}
          onChange={(priceGodz) => onChange('priceGodz')(priceGodz)}
          step={0.1}
        />
      </Col>
      <Col md={4}>
        {t((t) => t.market.listed.count)}
        <NumberInput
          value={item.count}
          onChange={(count) => onChange('count')(count)}
        />
      </Col>
    </Row>
  );
};
