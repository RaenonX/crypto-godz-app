import {TranslationStruct} from '../definition';


export const translation: TranslationStruct = {
  lang: {
    inUse: 'In use',
  },
  asset: {
    sentz: {
      title: 'Owned Sentz',
      willPower: 'Will Power',
      vital: 'Vital (Days)',
    },
    badge: 'Total Badge Carry Count',
    godz: {
      title: 'GODZ',
      price: 'Price (USD)',
      owned: 'Owned',
    },
  },
  market: {
    listed: {
      count: 'Supply',
      generic: {
        priceGodz: 'Price (GODZ)',
      },
      sentz: {
        willPower: 'Will Power',
        title: 'Market Sentz Supply',
      },
      badge: {
        carryCount: 'Carry Count',
        title: 'Market Badge Supply',
      },
    },
    param: {
      title: 'Parameters',
      vitalCostUsd: 'Vital cost per Sentz for each day (USD)',
      days: 'Duration (Days)',
    },
    calculate: 'Calculate',
    solution: {
      error: {
        noSolution: 'No solution found.',
      },
      buy: {
        sentz: 'Sentz to buy',
        badge: 'Badge to buy',
        count: 'Amount',
      },
      stats: {
        return: 'Total return in {{days}} days',
        day: 'Day',
        cost: {
          total: 'Total initial expense',
          sentz: 'Expense on Sentz',
          badge: 'Expense on Badge',
          vital: 'Expense on Vital',
        },
        fight: {
          totalPower: 'Total Will Power',
          level: 'Fight Level',
          actualWinRatePct: 'Actual Win Rate',
          expectedRewardUsd: 'Expected Reward',
          breakEvenDays: 'Break Even Period',
        },
      },
    },
  },
  misc: {
    showCollapse: 'Show / Collapse',
    donate: 'Feel free to donate to 0xAD8e42dE98A2A8041be61A51D1a611Be662c5dB0 (BSC/ETH)！',
  },
};
