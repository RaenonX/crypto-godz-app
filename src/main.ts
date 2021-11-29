import {Account} from './account';
import {commandExecutables} from './execute/lookup';
import {SimulationParams} from './types/params';


const account: Account = new Account({
  godz: {
    owned: 163.69,
    price: 9.03,
  },
  assets: {
    sentz: [
      {willPower: 297, vitalDays: 0},
      {willPower: 89, vitalDays: 0},
      {willPower: 55, vitalDays: 0},
    ],
    badge: 0,
  },
});

const params: SimulationParams = {
  pullStrategy: {
    maxCount: 1,
  },
  simDays: 30,
  pricesUsd: {
    sentz: 30,
    badge: 20,
  },
  count: 1000,
};

const command = process.argv.slice(2)[0];

const execute = commandExecutables[command];

if (!execute) {
  console.log(`Command not supported. Currently supported commands are: ${Object.keys(commandExecutables).join(', ')}`);
  process.exit(1);
}

execute(account, params);
