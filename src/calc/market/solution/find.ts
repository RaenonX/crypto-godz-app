import {MarketOptimizingParams} from '../../../components/page/market/type';
import {sumAccumulator} from '../../../utils/accumulator';
import {counterHighFirst} from '../../../utils/iter';
import {getBestReward, Reward} from '../../data/rewards';
import {Solution} from '../calc/type';
import {calculateSolution} from './calc';
import {CalculatedBadge, CalculatedSentz} from './type';


export const findSolution = ({account, market, vitalCostUsd, days}: MarketOptimizingParams): Solution | null => {
  const solutions: Solution[] = [];

  const {sentz, badge} = market;
  const {godz} = account;
  const {sentz: sentzInAccount, badge: badgeInAccount} = account.assets;

  const sentzOnMarket: CalculatedSentz[] = sentz
    .map((sentz) => ({item: sentz, wpPerGodz: sentz.willPower / sentz.priceGodz}))
    .sort(({wpPerGodz: wpPerGodzA}, {wpPerGodz: wpPerGodzB}) => wpPerGodzB - wpPerGodzA);
  const badgesOnMarket: CalculatedBadge[] = badge
    .map((badge) => ({item: badge, sentzPerGodz: badge.sentzCarryCount / badge.priceGodz}))
    .sort(({sentzPerGodz: sentzPerGodzA}, {sentzPerGodz: sentzPerGodzB}) => sentzPerGodzB - sentzPerGodzA);

  const sentzGen = counterHighFirst({
    sets: sentzOnMarket,
    getElemMaxIdx: ({item}) => item.count,
    transformElement: (elem, count) => ({...elem, item: {...elem.item, count}}),
    maxCounterSum: 50,
  });
  const generateBadgeGen = () => counterHighFirst({
    sets: badgesOnMarket,
    getElemMaxIdx: ({item}) => item.count,
    transformElement: (elem, count) => ({...elem, item: {...elem.item, count}}),
    maxCounterSum: 10,
  });

  for (const rewardData of Reward) {
    for (const sentzCombo of sentzGen) {
      if (!sentzCombo.length) {
        continue;
      }

      let totalSentzPower = sentzCombo.map(({item}) => item.count * item.willPower).reduce(sumAccumulator);

      if (sentzInAccount.length) {
        totalSentzPower += sentzInAccount.map((sentz) => sentz.willPower).reduce(sumAccumulator);
      }

      if (totalSentzPower < rewardData.powerReq) {
        continue;
      }

      const reward = getBestReward(totalSentzPower);

      if (!reward) {
        return null;
      }

      const totalSentzCount = sentzCombo.map(({item}) => item.count).reduce(sumAccumulator);

      let badgeCombo;

      for (const combo of generateBadgeGen()) {
        const totalBadgeCarryCount = combo
          .map(({item}) => item.sentzCarryCount * item.count)
          .reduce(sumAccumulator) + badgeInAccount;

        if (totalBadgeCarryCount < totalSentzCount) {
          continue;
        }

        badgeCombo = combo;
        break;
      }

      if (!badgeCombo) {
        continue;
      }

      const solution = calculateSolution({
        combo: {
          sentz: sentzCombo,
          badge: badgeCombo,
        },
        reward,
        days,
        vitalCostUsd,
        godzPrice: godz.price,
      });

      solutions.push(solution);
    }
  }

  const ownedUsd = godz.owned * godz.price;

  const validSolutions = solutions
    .filter((solution) => solution.expenseUsd.total <= ownedUsd);

  if (!validSolutions.length) {
    return null;
  }

  return validSolutions
    .reduce((prev, curr) => prev.totalReturnUsd > curr.totalReturnUsd ? prev : curr);
};
