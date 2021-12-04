import React from 'react';

import {InputGroup} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import {useI18n} from '../../../../i18n/hook';
import {NumberInput} from '../../../form/numInput';
import {AssetProps} from './type';


export const GodzAsset = ({account, setAccount}: AssetProps) => {
  const {t} = useI18n();

  return (
    <>
      <Row>
        <Col>
          <h5>{t((t) => t.asset.godz.title)}</h5>
        </Col>
      </Row>
      <Row className="gx-2">
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text>{t((t) => t.asset.godz.price)}</InputGroup.Text>
            <NumberInput
              value={account.godz.price}
              onChange={(price) => setAccount({...account, godz: {...account.godz, price}})}
              step={0.1}
            />
          </InputGroup>
        </Col>
        <Col md={6}>
          <InputGroup className="mb-3">
            <InputGroup.Text>{t((t) => t.asset.godz.owned)}</InputGroup.Text>
            <NumberInput
              value={account.godz.owned}
              onChange={(owned) => setAccount({...account, godz: {...account.godz, owned}})}
            />
          </InputGroup>
        </Col>
      </Row>
    </>
  );
};
