import {Sentz as SentzPool, SentzData} from '../data/sentz';
import {Sentz} from '../types/sentz';
import {getRandomRange} from '../utils';


export const pullSingleSentz = (): Sentz => {
  let num = Math.random() * 100;
  const sentz = SentzPool.find((sentz) => {
    if (num < sentz.dropPct) {
      return true;
    } else {
      num -= sentz.dropPct;
      return false;
    }
  }) as SentzData;

  const {low, high} = sentz.willpower;
  return {willPower: getRandomRange(low, high), vitalDays: 0};
};
