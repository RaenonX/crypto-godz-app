export const getRandomRange = (min: number, max: number): number => Math.random() * (max - min) + min;

export const permutation = <T>(array: T[], size: number): T[][] => {
  const p = (t: T[], i: number) => {
    if (t.length === size) {
      result.push(t);
      return;
    }
    if (i + 1 > array.length) {
      return;
    }
    p(t.concat(array[i]), i + 1);
    p(t, i + 1);
  };

  const result: T[][] = [];
  p([], 0);

  return result;
};
