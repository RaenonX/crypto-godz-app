import {Account} from '../account';
import {SimulationParams} from '../types/params';
import {results} from './results';
import {single} from './single';


export const commandExecutables: {[commandName in string]: (account: Account, params: SimulationParams) => void} = {
  single,
  results,
};
