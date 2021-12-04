export type TranslationStruct = {
  lang: {
    inUse: string,
  },
  asset: {
    sentz: {
      title: string,
      willPower: string,
      vital: string,
    },
    badge: string,
    godz: {
      title: string,
      price: string,
      owned: string,
    },
  },
  market: {
    listed: {
      count: string,
      generic: {
        priceGodz: string,
      }
      sentz: {
        willPower: string,
        title: string,
      },
      badge: {
        carryCount: string,
        title: string,
      },
    },
    param: {
      title: string,
      vitalCostUsd: string,
      days: string,
    },
    calculate: string,
    solution: {
      error: {
        noSolution: string,
      },
      buy: {
        sentz: string,
        badge: string,
        count: string,
      },
      stats: {
        return: string,
        day: string,
        cost: {
          total: string,
          sentz: string,
          badge: string,
          vital: string,
        },
        fight: {
          totalPower: string,
          level: string,
          actualWinRatePct: string,
          expectedRewardUsd: string,
          breakEvenDays: string,
        },
      },
    },
  },
  misc: {
    showCollapse: string,
    donate: string,
  },
};
