import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {useI18n} from '../../../../i18n/hook';
import {sumAccumulator} from '../../../../utils/accumulator';
import {MarketOptimizerSolutionProps} from './type';


export const MarketOptimizerSolutionStats = ({solution, params}: MarketOptimizerSolutionProps) => {
  const {t} = useI18n();

  const {days} = params;

  const totalSentzWP = solution.picked.sentz
    .map(({count, willPower}) => count * willPower)
    .reduce(sumAccumulator);

  return (
    <>
      <Row>
        <Col>
          {t((t) => t.market.solution.stats.return, {days})}:&nbsp;
          <span className="h3" style={{color: '#00fffc'}}>USD ${solution.totalReturnUsd.toFixed(2)}</span>
          &nbsp;(USD <span className="h4">${(solution.totalReturnUsd / days).toFixed(2)}</span>
          &nbsp;/ {t((t) => t.market.solution.stats.day)})
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          {t((t) => t.market.solution.stats.cost.total)}:&nbsp;
          <span className="h4">USD ${solution.expenseUsd.total.toFixed(2)}</span>
        </Col>
      </Row>
      <Row>
        <Col xs={1}/>
        <Col xs={4}>{t((t) => t.market.solution.stats.cost.sentz)}</Col>
        <Col>USD ${solution.expenseUsd.sentz.toFixed(2)}</Col>
      </Row>
      <Row>
        <Col xs={1}/>
        <Col xs={4}>{t((t) => t.market.solution.stats.cost.badge)}</Col>
        <Col>USD ${solution.expenseUsd.badge.toFixed(2)}</Col>
      </Row>
      <Row>
        <Col xs={1}/>
        <Col xs={4}>{t((t) => t.market.solution.stats.cost.vital)}</Col>
        <Col>USD ${solution.expenseUsd.vital.toFixed(2)}</Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          {t((t) => t.market.solution.stats.fight.totalPower)}&nbsp;
          <span className="h4">{totalSentzWP}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          {t((t) => t.market.solution.stats.fight.level)}&nbsp;
          <span className="h4">{solution.reward.chosenReward.level}</span> ({solution.reward.chosenReward.powerReq}+)
        </Col>
      </Row>
      <Row>
        <Col>
          {t((t) => t.market.solution.stats.fight.actualWinRatePct)}&nbsp;
          {solution.reward.winRatePct.toFixed(2)}&nbsp;%
        </Col>
      </Row>
      <Row>
        <Col>
          {t((t) => t.market.solution.stats.fight.expectedRewardUsd)}&nbsp;
          <span className="h4">USD ${solution.reward.expectedRewardUsd.toFixed(2)}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          {t((t) => t.market.solution.stats.fight.breakEvenDays)}&nbsp;
          <span className="h4">{solution.breakEvenDays.toFixed(2)}</span>&nbsp;
          {t((t) => t.market.solution.stats.day)}
        </Col>
      </Row>
    </>
  );
};
