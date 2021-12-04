import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {Sentz} from '../../../../calc/types/sentz';
import {useI18n} from '../../../../i18n/hook';
import {ArrayFormOnChangeHandler} from '../../../elements/form/array/main';
import {NumberInput} from '../../../form/numInput';


type Props<E> = {
  ownedSentz: E,
  onChange: ArrayFormOnChangeHandler<E>
};

export const SentzAssetEntry = <E extends Sentz>({onChange, ownedSentz}: Props<E>) => {
  const {t} = useI18n();

  return (
    <Row className="gx-2">
      <Col xs={6}>
        {t((t) => t.asset.sentz.willPower)}
        <NumberInput
          value={ownedSentz.willPower}
          onChange={(willPower) => onChange('willPower')(willPower)}
        />
      </Col>
      <Col xs={6}>
        {t((t) => t.asset.sentz.vital)}
        <NumberInput
          value={ownedSentz.vitalDays}
          onChange={(vitalDays) => onChange('vitalDays')(vitalDays)}
        />
      </Col>
    </Row>
  );
};
