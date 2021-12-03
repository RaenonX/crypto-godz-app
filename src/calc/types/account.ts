import {Sentz} from './sentz';


export type AccountStatus = {
  godz: {
    owned: number,
    price: number,
  },
  assets: {
    sentz: Sentz[],
    badge: number,
  },
};
