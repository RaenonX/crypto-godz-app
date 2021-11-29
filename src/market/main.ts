import {optimizedBadgeCostGodz} from './calc/badge';
import {optimizedSentzSelection} from './calc/sentz';
import {BadgeOnMarket, SentzOnMarket} from './type';


const listedSentz: SentzOnMarket[] = [
  {willPower: 70, priceGodz: 1},
  {willPower: 75, priceGodz: 1.5},
  {willPower: 80, priceGodz: 2},
  {willPower: 105, priceGodz: 3.5},
  {willPower: 130, priceGodz: 7},
  {willPower: 150, priceGodz: 7},
  {willPower: 200, priceGodz: 8},
  {willPower: 220, priceGodz: 9},
  {willPower: 250, priceGodz: 10},
  {willPower: 300, priceGodz: 12},
];

const listedBadges: BadgeOnMarket[] = [
  {sentzCarryCount: 1, priceGodz: 0.5},
  {sentzCarryCount: 1, priceGodz: 0.5},
  {sentzCarryCount: 1, priceGodz: 0.5},
  {sentzCarryCount: 1, priceGodz: 0.5},
  {sentzCarryCount: 1, priceGodz: 0.6},
  {sentzCarryCount: 1, priceGodz: 0.6},
  {sentzCarryCount: 1, priceGodz: 0.6},
  {sentzCarryCount: 2, priceGodz: 0.7},
  {sentzCarryCount: 2, priceGodz: 0.7},
  {sentzCarryCount: 3, priceGodz: 1},
  {sentzCarryCount: 4, priceGodz: 1.5},
  {sentzCarryCount: 5, priceGodz: 2},
];

const vitalCostUsd = 22 / 30;

const godz = {
  price: 7.08,
  owned: 10000,
};

const days = 30;

const solution = [...Array(Math.min(50, listedSentz.length)).keys()]
  .map((num) => num + 1)
  .map((count) => {
    const badgeCostUsd = optimizedBadgeCostGodz(listedBadges, count) * godz.price;

    return optimizedSentzSelection({badgeCostUsd, vitalCostUsd, listedSentz, count, days, godz});
  })
  .reduce((prev, curr) => prev.totalReturn > curr.totalReturn ? prev : curr);

console.log(`Sentz #: ${solution.sentzCount}:`);
console.log(`  Best return after ${days} days: USD $${solution.totalReturn.toFixed(2)}`);
console.log(`  Daily Reward: USD $${solution.reward.expectedRewardUsd.toFixed(2)}`);
console.log(`  Sentz Expense: USD $${solution.expense.sentz.toFixed(2)}`);
console.log(`  Badge Expense: USD $${solution.expense.badge.toFixed(2)}`);
console.log(`  Vital Expense: USD $${solution.expense.vital.toFixed(2)}`);
