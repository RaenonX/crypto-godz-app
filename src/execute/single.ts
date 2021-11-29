import {Account} from '../account';
import {SimulationParams} from '../types/params';


export const single = (account: Account, params: SimulationParams): void => {
  account.log.message('(Initial)');
  account.printStatus();

  for (let day = 1; day <= params.simDays; day++) {
    account.log.message(`Day ${day}`);
    // TODO: Pull certain count each day / Pull only if earned / Pull earned
    // TODO: Battle options (high W% vs high expected reward vs highest reward)
    account.pullUnits(params.pricesUsd, params.pullStrategy.maxCount);
    account.battle(params.pricesUsd);
    account.printStatus();
    account.log.message();

    account.dayPass();
  }
};
