import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {useI18n} from '../../../../i18n/hook';
import {Assets} from '../asset/main';
import {ListedBadge} from '../listed/badge/main';
import {ListedSentz} from '../listed/sentz/main';
import {MarketOptimizingParamsInput} from '../param';
import {MarketOptimizingParams} from '../type';


type Props = {
  optimizeParams: MarketOptimizingParams,
  setOptimizeParams: (params: MarketOptimizingParams) => void,
  onPerformCalc: () => void,
};

export const MarketOptimizerInput = ({optimizeParams, setOptimizeParams, onPerformCalc}: Props) => {
  const {t} = useI18n();

  return (
    <>
      <Assets
        account={optimizeParams.account}
        setAccount={(account) => setOptimizeParams({...optimizeParams, account})}
      />
      <MarketOptimizingParamsInput params={optimizeParams} setParams={setOptimizeParams}/>
      <ListedSentz
        listedItems={optimizeParams.market.sentz}
        setListedItems={(sentz) => setOptimizeParams({...optimizeParams, market: {...optimizeParams.market, sentz}})}
      />
      <ListedBadge
        listedItems={optimizeParams.market.badge}
        setListedItems={(badge) => setOptimizeParams({...optimizeParams, market: {...optimizeParams.market, badge}})}
      />
      <Row>
        <Col/>
        <Col xs="auto">
          <Button onClick={onPerformCalc} variant="outline-light">
            {t((t) => t.market.calculate)}
          </Button>
        </Col>
      </Row>
    </>
  );
};
