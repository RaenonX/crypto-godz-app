import {findSolution} from '../src/calc/market/solution/find';
import {reportSolution} from '../src/calc/market/solution/report';
import {BadgeOnMarket, SentzOnMarket} from '../src/calc/market/type';
import {AccountStatus} from '../src/calc/types/account';


const usdToBnb = 620;

const account: AccountStatus = {
  godz: {
    price: 6.2,
    owned: 224.742,
  },
  assets: {
    sentz: [
      {willPower: 297, vitalDays: 0},
      {willPower: 89, vitalDays: 0},
      {willPower: 55, vitalDays: 0},
    ],
    badge: 0,
  },
};

const bnbToGodz = usdToBnb / account.godz.price;

const listedSentz: SentzOnMarket[] = [
  {willPower: 60, priceGodz: 0.015 * bnbToGodz, count: 10},
  {willPower: 80, priceGodz: 0.03 * bnbToGodz, count: 10},
  {willPower: 100, priceGodz: 0.07 * bnbToGodz, count: 10},
  {willPower: 120, priceGodz: 0.1 * bnbToGodz, count: 10},
  {willPower: 140, priceGodz: 0.14 * bnbToGodz, count: 10},
  {willPower: 160, priceGodz: 0.16 * bnbToGodz, count: 10},
  {willPower: 180, priceGodz: 0.2 * bnbToGodz, count: 10},
  {willPower: 200, priceGodz: 0.274 * bnbToGodz, count: 5},
  {willPower: 220, priceGodz: 0.29 * bnbToGodz, count: 5},
  {willPower: 240, priceGodz: 0.35 * bnbToGodz, count: 5},
  {willPower: 260, priceGodz: 0.38 * bnbToGodz, count: 10},
  {willPower: 280, priceGodz: 0.40 * bnbToGodz, count: 10},
  {willPower: 300, priceGodz: 0.42 * bnbToGodz, count: 10},
  {willPower: 320, priceGodz: 0.5 * bnbToGodz, count: 10},
  {willPower: 340, priceGodz: 0.52 * bnbToGodz, count: 10},
  {willPower: 360, priceGodz: 0.65 * bnbToGodz, count: 10},
];

const listedBadges: BadgeOnMarket[] = [
  {sentzCarryCount: 1, priceGodz: 0.01 * bnbToGodz, count: 100},
  {sentzCarryCount: 2, priceGodz: 0.05 * bnbToGodz, count: 100},
  {sentzCarryCount: 3, priceGodz: 0.1 * bnbToGodz, count: 100},
  {sentzCarryCount: 4, priceGodz: 0.3 * bnbToGodz, count: 100},
  {sentzCarryCount: 5, priceGodz: 0.5 * bnbToGodz, count: 300},
];

const vitalCostUsd = 22 / 30;

const days = 30;

const main = (): void => {
  const solution = findSolution({
    account,
    market: {
      badge: listedBadges,
      sentz: listedSentz,
    },
    vitalCostUsd,
    days,
  });

  if (!solution) {
    console.log('No solution found.');
    return;
  }

  reportSolution({solution, days, account});
};

main();
