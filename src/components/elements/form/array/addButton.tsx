import React, {MouseEventHandler} from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {IconAdd} from '../../../../const/icons';


type Props = {
  onAdded: MouseEventHandler,
  atTop: boolean,
};

export const ArrayAddButtonRow = ({onAdded, atTop}: Props) => (
  <Row className={atTop ? 'mb-2' : 'mt-2'}>
    <Col>
      <Button
        className="d-inline float-end"
        variant="outline-success"
        onClick={onAdded}
        size="sm"
      >
        <IconAdd/>
      </Button>
    </Col>
  </Row>
);
