import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';

import {useI18n} from '../../../../i18n/hook';
import {MarketOptimizerSolutionProps} from './type';


export const MarketOptimizerSolutionSelection = ({solution}: MarketOptimizerSolutionProps) => {
  const {t} = useI18n();
  const {sentz, badge} = solution.picked;

  return (
    <>
      <Row>
        <Col>
          <h5>{t((t) => t.market.solution.buy.sentz)}</h5>
        </Col>
      </Row>
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>{t((t) => t.market.listed.sentz.willPower)}</th>
            <th>{t((t) => t.market.listed.generic.priceGodz)}</th>
            <th>{t((t) => t.market.solution.buy.count)}</th>
          </tr>
        </thead>
        <tbody>
          {sentz.map(({willPower, priceGodz, count}, idx) => (
            <tr key={idx}>
              <td>{willPower}</td>
              <td>{priceGodz}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row>
        <Col>
          <h5>{t((t) => t.market.solution.buy.badge)}</h5>
        </Col>
      </Row>
      <Table striped hover variant="dark">
        <thead>
          <tr>
            <th>{t((t) => t.market.listed.badge.carryCount)}</th>
            <th>{t((t) => t.market.listed.generic.priceGodz)}</th>
            <th>{t((t) => t.market.solution.buy.count)}</th>
          </tr>
        </thead>
        <tbody>
          {badge.map(({sentzCarryCount, priceGodz, count}, idx) => (
            <tr key={idx}>
              <td>{sentzCarryCount}</td>
              <td>{priceGodz}</td>
              <td>{count}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

