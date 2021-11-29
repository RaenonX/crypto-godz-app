import {LegionBadge, LegionBadgeData} from '../data/badge';


export const pullBadge = (): LegionBadgeData => {
  let num = Math.random() * 100;

  return LegionBadge.find((badge) => {
    if (num < badge.chancePct) {
      return true;
    } else {
      num -= badge.chancePct;
      return false;
    }
  }) as LegionBadgeData;
};
