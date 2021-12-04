import React from 'react';

import {Solution} from '../../../calc/market/calc/type';
import {findSolution} from '../../../calc/market/solution/find';
import {CookiesKeys} from '../../../utils/cookies/keys';
import {MarketOptimizerInput} from './section/in';
import {MarketOptimizerOutput} from './section/out';
import {MarketOptimizingParams} from './type';


export const MarketOptimizer = () => {
  const [optimizeParams, setOptimizeParams] = React.useState<MarketOptimizingParams>();
  const [solution, setSolution] = React.useState<Solution | undefined | null>();
  const ref = React.useRef<HTMLHRElement | null>(null);

  React.useEffect(() => {
    ref?.current?.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'start'});
  }, [solution]);
  React.useEffect(() => {
    if (!optimizeParams) {
      return;
    }

    localStorage.setItem(CookiesKeys.MARKET_OPTIMIZER, JSON.stringify(optimizeParams));
  }, [optimizeParams]);
  React.useEffect(() => {
    const paramsFromCookies = localStorage.getItem(CookiesKeys.MARKET_OPTIMIZER);

    if (!paramsFromCookies) {
      setOptimizeParams({
        account: {
          godz: {owned: 100, price: 6.2},
          assets: {
            sentz: [],
            badge: 0,
          },
        },
        market: {
          sentz: [
            {willPower: 60, priceGodz: 1.5, count: 10},
          ],
          badge: [
            {sentzCarryCount: 1, priceGodz: 1.5, count: 10},
          ],
        },
        vitalCostUsd: 0.733,
        days: 30,
      });
    } else {
      setOptimizeParams(JSON.parse(paramsFromCookies));
    }
  }, []);

  if (!optimizeParams) {
    return <>Loading...</>;
  }

  return (
    <>
      <MarketOptimizerInput
        optimizeParams={optimizeParams}
        setOptimizeParams={setOptimizeParams}
        onPerformCalc={() => setSolution(findSolution(optimizeParams))}
      />
      <hr ref={ref}/>
      <MarketOptimizerOutput solution={solution} params={optimizeParams}/>
    </>
  );
};
