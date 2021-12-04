import React from 'react';

import Alert from 'react-bootstrap/Alert';

import {Solution} from '../../../../calc/market/calc/type';
import {useI18n} from '../../../../i18n/hook';
import {MarketOptimizerSolutionSelection} from '../solution/selection';
import {MarketOptimizerSolutionStats} from '../solution/stats';
import {MarketOptimizingParams} from '../type';


type Props = {
  solution: Solution | null | undefined,
  params: MarketOptimizingParams,
};

export const MarketOptimizerOutput = ({solution, params}: Props) => {
  const {t} = useI18n();

  if (solution === null) {
    return (
      <Alert variant="danger">
        {t((t) => t.market.solution.error.noSolution)}
      </Alert>
    );
  } else if (!solution) {
    return <></>;
  }

  return (
    <>
      <MarketOptimizerSolutionStats solution={solution} params={params}/>
      <hr/>
      <MarketOptimizerSolutionSelection solution={solution} params={params}/>
    </>
  );
};
