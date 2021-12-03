type GetBreakEvenDaysOptions = {
  once: {
    badge: number,
    sentz: number,
  },
  daily: {
    vitalExpense: number,
    expectedReward: number,
  },
  sentzCount: number,
};

export const getBreakEvenDays = ({once, daily, sentzCount}: GetBreakEvenDaysOptions): number => {
  return (once.badge + once.sentz) / (daily.expectedReward - daily.vitalExpense * sentzCount);
};
