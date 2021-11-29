import {Account} from '../account';
import {SimulationParams} from '../types/params';
import {single} from './single';


export const reportBalance = (balance: number, original: number): void => {
  const diffNum = balance - original;
  const diffPct = (diffNum / original) * 100;
  const sign = diffNum > 0 ? '+' : '';

  console.log(`${balance.toFixed(2)} (${sign}${diffNum.toFixed(2)} / ${sign}${diffPct.toFixed(2)}%)`);
};

export const results = (account: Account, params: SimulationParams): void => {
  const originalGodz = account.godz.owned;

  console.log(`Init GODZ: ${originalGodz}`);

  const balances: number[] = [];

  for (let i = 0; i < params.count; i++) {
    const accountCopy = account.copy();

    accountCopy.log.enabled = false;

    single(accountCopy, params);

    balances.push(accountCopy.godz.owned);
  }

  const min = Math.min(...balances);
  const max = Math.max(...balances);

  const breakEvenPct = balances.filter((balance) => balance > originalGodz).length / balances.length * 100;

  reportBalance(min, originalGodz);
  reportBalance(max, originalGodz);

  console.log(`Break even %: ${breakEvenPct.toFixed(2)}%`);
};
