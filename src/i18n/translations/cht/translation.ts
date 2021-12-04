import {TranslationStruct} from '../definition';


export const translation: TranslationStruct = {
  lang: {
    inUse: '使用中',
  },
  asset: {
    sentz: {
      title: '擁有 Sentz',
      willPower: '戰力',
      vital: '生命 (天)',
    },
    badge: '勳章可攜帶人數',
    godz: {
      title: 'GODZ',
      price: '匯率 (USD)',
      owned: '擁有',
    },
  },
  market: {
    listed: {
      count: '市場供應量',
      generic: {
        priceGodz: '單價 (GODZ)',
      },
      sentz: {
        willPower: '戰力',
        title: '市場 Sentz 供貨',
      },
      badge: {
        carryCount: '攜帶人數',
        title: '市場勳章供貨',
      },
    },
    param: {
      title: '參數',
      vitalCostUsd: '每日每 Sentz Vital 成本 (USD)',
      days: '時長 (日)',
    },
    calculate: '計算',
    solution: {
      error: {
        noSolution: '沒有可用結果。',
      },
      buy: {
        sentz: '購入 Sentz',
        badge: '購入 Badge',
        count: '購入數量',
      },
      stats: {
        return: '{{days}} 日內總報酬',
        day: '日',
        cost: {
          total: '總初始成本',
          sentz: 'Sentz 成本',
          badge: '勳章成本',
          vital: 'Vital 成本',
        },
        fight: {
          totalPower: '總戰力',
          level: '關卡等級',
          actualWinRatePct: '實際勝率',
          expectedRewardUsd: '報酬期望值',
          breakEvenDays: '回本周期',
        },
      },
    },
  },
  misc: {
    showCollapse: '展開 / 摺疊',
  },
  alert: {
    donate: '歡迎捐款至 0xAD8e42dE98A2A8041be61A51D1a611Be662c5dB0 (BSC/ETH)！',
    dataSaved: '所有輸入的資訊都會存到瀏覽器的儲存空間。這些資料並 *不會* 上傳到任何地方。',
  },
};
