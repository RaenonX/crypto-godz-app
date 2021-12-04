import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {SentzOnMarket} from '../../../../../calc/market/type';
import {useI18n} from '../../../../../i18n/hook';
import {NumberInput} from '../../../../form/numInput';
import {ListedItemEntryProps} from '../type';


export const ListedSentzEntry = <E extends SentzOnMarket>({onChange, item}: ListedItemEntryProps<E>) => {
  const {t} = useI18n();

  return (
    <Row className="gx-2">
      <Col md={3}>
        {t((t) => t.market.listed.sentz.willPower)}
        <NumberInput
          value={item.willPower}
          onChange={(willPower) => onChange('willPower')(willPower)}
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
