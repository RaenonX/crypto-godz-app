import {findSolution} from './solution/find';
import {BadgeOnMarket, SentzOnMarket} from './type';


const listedSentz: SentzOnMarket[] = [
  {willPower: 70, priceGodz: 1, count: 20},
  {willPower: 80, priceGodz: 2, count: 10},
  {willPower: 105, priceGodz: 3.5, count: 10},
  {willPower: 150, priceGodz: 7, count: 10},
  {willPower: 200, priceGodz: 8, count: 10},
  {willPower: 220, priceGodz: 9, count: 10},
  {willPower: 250, priceGodz: 10, count: 10},
  {willPower: 300, priceGodz: 12, count: 10},
];

const listedBadges: BadgeOnMarket[] = [
  {sentzCarryCount: 1, priceGodz: 0.5, count: 10},
  {sentzCarryCount: 2, priceGodz: 0.7, count: 2},
  {sentzCarryCount: 3, priceGodz: 1, count: 1},
  {sentzCarryCount: 4, priceGodz: 1.5, count: 1},
  {sentzCarryCount: 5, priceGodz: 2, count: 1},
];

const vitalCostUsd = 22 / 30;

const godz = {
  price: 6,
  owned: 10000,
};

const days = 30;


const main = () => {
  const minSentzCount = 10;
  const maxSentzCount = 10;

  const solution = findSolution({
    minSentzCount,
    maxSentzCount,
    godz,
    market: {
      badges: listedBadges,
      sentz: listedSentz,
    },
    params: {
      vitalCostUsd,
      days,
    },
  });

  if (!solution) {
    console.log('No solution found. Might need more GODZ.');
    return;
  }

  console.log(`Sentz #: ${solution.sentzPicked.length}`);
  console.log(solution.sentzPicked);
  console.log(`  Best return after ${days} days: USD $${solution.totalReturn.toFixed(2)}`);
  console.log(`  Daily Reward: USD $${solution.reward.expectedRewardUsd.toFixed(2)}`);
  console.log(`  Sentz Expense: USD $${solution.expense.sentz.toFixed(2)}`);
  console.log(`  Badge Expense: USD $${solution.expense.badge.toFixed(2)}`);
  console.log(`  Vital Expense: USD $${solution.expense.vital.toFixed(2)}`);
};

main();
