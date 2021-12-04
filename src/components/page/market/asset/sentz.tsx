import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';

import {useI18n} from '../../../../i18n/hook';
import {ArrayForm} from '../../../elements/form/array/main';
import {SentzAssetEntry} from './sentzEntry';
import {AssetProps} from './type';


export const SentzAsset = ({account, setAccount}: AssetProps) => {
  const {t} = useI18n();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="p-2 rounded bg-black-20 mb-2">
      <Row className="align-items-center">
        <Col className="text-center">
          <h4 className="mb-0">{t((t) => t.asset.sentz.title)}</h4>
        </Col>
        <Col xs="auto">
          <Button onClick={() => setOpen(!open)} variant="outline-light">
            {t((t) => t.misc.showCollapse)}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Collapse in={open}>
            <div className="mt-2">
              <ArrayForm
                payload={account}
                minLength={0}
                getArray={(payload) => payload.assets.sentz}
                setArray={(sentz) => setAccount({...account, assets: {...account.assets, sentz}})}
                getUpdatedElement={(elem, key, value) => ({...elem, [key]: value})}
                generateNewElement={() => ({willPower: 0, vitalDays: 0})}
                renderEntries={(elem, onChange) => <SentzAssetEntry ownedSentz={elem} onChange={onChange}/>}
              />
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
