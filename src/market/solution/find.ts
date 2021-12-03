import {getBestReward, Reward} from '../../data/rewards';
import {sumAccumulator} from '../../utils/accumulator';
import {counterHighFirst} from '../../utils/iter';
import {Solution} from '../calc/type';
import {BadgeOnMarket, SentzOnMarket} from '../type';
import {calculateSolution} from './calc';
import {CalculatedBadge, CalculatedSentz} from './type';


type FindSolutionOptions = {
  godz: {
    owned: number,
    price: number,
  },
  market: {
    sentz: SentzOnMarket[],
    badges: BadgeOnMarket[],
  },
  params: {
    days: number,
    vitalCostUsd: number,
  }
};

export const findSolution = ({
  godz, market, params,
}: FindSolutionOptions): Solution | null => {
  const solutions: Solution[] = [];

  const {vitalCostUsd, days} = params;
  const {sentz, badges} = market;

  const sentzOnMarket: CalculatedSentz[] = sentz
    .map((sentz) => ({item: sentz, wpPerGodz: sentz.willPower / sentz.priceGodz}))
    .sort(({wpPerGodz: wpPerGodzA}, {wpPerGodz: wpPerGodzB}) => wpPerGodzB - wpPerGodzA);
  const badgesOnMarket: CalculatedBadge[] = badges
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
      const totalSentzPower = sentzCombo.map(({item}) => item.count * item.willPower).reduce(sumAccumulator);

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
          .reduce(sumAccumulator);

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

  return solutions
    .filter((solution) => solution.expenseUsd.total <= ownedUsd)
    .reduce((prev, curr) => prev.totalReturnUsd > curr.totalReturnUsd ? prev : curr);
};
