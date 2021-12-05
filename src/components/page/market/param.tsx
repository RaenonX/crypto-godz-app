import React from 'react';

import {InputGroup} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {useI18n} from '../../../i18n/hook';
import {NumberInput} from '../../form/numInput';
import {MarketOptimizingParams} from './type';


type Props = {
  params: MarketOptimizingParams,
  setParams: (params: MarketOptimizingParams) => void,
};

export const MarketOptimizingParamsInput = ({params, setParams}: Props) => {
  const {t} = useI18n();

  return (
    <>
      <Row>
        <Col>
          <h5>{t((t) => t.market.param.title)}</h5>
        </Col>
      </Row>
      <Row className="gx-2">
        <Col lg={8}>
          <InputGroup className="mb-3">
            <InputGroup.Text>{t((t) => t.market.param.vitalCostUsd)}</InputGroup.Text>
            <NumberInput
              value={params.vitalCostUsd}
              onChange={(vitalCostUsd) => setParams({...params, vitalCostUsd})}
              step={0.001}
            />
          </InputGroup>
        </Col>
        <Col lg={4}>
          <InputGroup className="mb-3">
            <InputGroup.Text>{t((t) => t.market.param.days)}</InputGroup.Text>
            <NumberInput
              value={params.days}
              onChange={(days) => setParams({...params, days})}
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};
