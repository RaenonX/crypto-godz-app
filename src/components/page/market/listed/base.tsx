import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';

import {ItemOnMarket} from '../../../../calc/market/type';
import {useI18n} from '../../../../i18n/hook';
import {ArrayForm, ArrayFormOnChangeHandler} from '../../../elements/form/array/main';


type Props<T extends ItemOnMarket> = {
  listedItems: T[],
  setListedItems: (newList: T[]) => void,
  generateNewElem: () => T,
  renderEntries: (
    element: T,
    onChangeHandler: ArrayFormOnChangeHandler<T>,
    idx: number,
  ) => React.ReactElement,
  title: string,
};

export const ListedMarketItems = <T extends ItemOnMarket>({
  listedItems,
  setListedItems,
  generateNewElem,
  renderEntries,
  title,
}: Props<T>) => {
  const {t} = useI18n();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="p-2 rounded bg-black-20 mb-2">
      <Row className="align-items-center">
        <Col className="text-center">
          <h4 className="mb-0">{title}</h4>
        </Col>
        <Col xs="auto">
          <Button onClick={() => setOpen(!open)} variant="outline-light" >
            {t((t) => t.misc.showCollapse)}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Collapse in={open}>
            <div className="mt-2">
              <ArrayForm
                payload={listedItems}
                minLength={0}
                getArray={(payload) => payload}
                setArray={(newPayload) => setListedItems(newPayload)}
                getUpdatedElement={(elem, key, value) => ({...elem, [key]: value})}
                generateNewElement={generateNewElem}
                renderEntries={renderEntries}
              />
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
