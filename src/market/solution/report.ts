import {sumAccumulator} from '../../utils/accumulator';
import {Solution} from '../calc/type';


type ReportSolutionOptions = {
  solution: Solution,
  days: number,
  godz: {
    price: number,
    owned: number
  }
};

export const reportSolution = ({solution, days, godz}: ReportSolutionOptions): void => {
  const {reward} = solution;

  const totalSentzPower = solution.picked.sentz
    .map(({willPower, count}) => willPower * count)
    .reduce(sumAccumulator);
  const totalSentzCount = solution.picked.sentz
    .map(({count}) => count)
    .reduce(sumAccumulator);

  console.log(`  Return after ${days} days: USD $${solution.totalReturnUsd.toFixed(2)}`);
  console.log();
  console.log(
    `  Initial Expense: USD $${solution.expenseUsd.total.toFixed(2)} ` +
    `(${(solution.expenseUsd.total / godz.price).toFixed(2)} GODZ)`,
  );
  console.log(`    Sentz Expense: USD $${solution.expenseUsd.sentz.toFixed(2)}`);
  console.log(`    Badge Expense: USD $${solution.expenseUsd.badge.toFixed(2)}`);
  console.log(`    Vital Expense: USD $${solution.expenseUsd.vital.toFixed(2)}`);
  console.log(`  Daily Reward: USD $${reward.expectedRewardUsd.toFixed(2)}`);
  console.log(
    `  Break even after ${solution.breakEvenDays.toFixed(2)} days ` +
    `(Lv ${reward.chosenReward.level} - Req. ${reward.chosenReward.powerReq} / ${reward.winRatePct}%)`,
  );
  console.log('--------------------');
  console.log(`Total Sentz Power: ${totalSentzPower} (${totalSentzCount})`);
  console.log('--------------------');
  console.log('Sentz selection');
  solution.picked.sentz
    .sort((a, b) => a.priceGodz - b.priceGodz)
    .forEach((sentz) => {
      const totalCostGodz = sentz.priceGodz * sentz.count;
      const totalCostUsd = totalCostGodz * godz.price;

      console.log(
        `WP ${sentz.willPower} x ${sentz.count.toString().padStart(2)} ` +
        `(${totalCostGodz.toFixed(2)} GODZ / $${totalCostUsd.toFixed(2)} USD)`);
    });
  console.log();
  console.log('Badge selection');
  solution.picked.badge
    .sort((a, b) => a.priceGodz - b.priceGodz)
    .forEach((badge) => {
      const totalCostGodz = badge.priceGodz * badge.count;
      const totalCostUsd = totalCostGodz * godz.price;

      console.log(
        `Carry ${badge.sentzCarryCount} x ${badge.count.toString().padStart(2)} ` +
        `(${totalCostGodz.toFixed(2)} GODZ / $${totalCostUsd.toFixed(2)} USD)`);
    });
};
