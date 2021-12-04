import React from 'react';

import {Container} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {MarketOptimizer} from './components/page/market/main';
import {LanguageSwitch} from './i18n/switch';


export const App = () => {
  return (
    <Container>
      <Row>
        <Col md={{span: 8, offset: 2}} className="p-2">
          <Row className="mb-2">
            <Col>
              <LanguageSwitch/>
            </Col>
          </Row>
          <Row>
            <Col>
              <MarketOptimizer/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
