export function* product<T, R>(
  sets: T[],
  getElemMaxIdx: (elem: T) => number,
  transformElement: (item: T, counter: number) => R,
  isValid?: (combination: R[]) => boolean,
): Generator<R[]> {
  const setLength = sets.length;
  const elemMaxIdx = [...Array(setLength).keys()].map((idx) => getElemMaxIdx(sets[idx]));

  const counterToReturn = (counter: number[]): R[] => {
    return counter.map((count, index) => transformElement(sets[index], count));
  };

  const counterToCurrentIndex = (counter: number[]): number => {
    return counter
      .map((count, index) => (
        count * (
          elemMaxIdx
            .slice(index + 1)
            .reduce((prev, curr) => prev * curr, 1)
        )
      ))
      .reduce((prev, curr) => prev + curr);
  };

  const possibilities = sets.map((setElem) => getElemMaxIdx(setElem)).reduce((prev, curr) => prev * curr);

  function* helper(arrCounter: number[], setIdx: number): Generator<R[]> {
    if (++setIdx >= setLength) {
      const ret = counterToReturn(arrCounter);

      const curIdx = counterToCurrentIndex(arrCounter);
      if (curIdx % 100000 === 0) {
        console.log(`${curIdx} / ${possibilities} (${(curIdx / possibilities * 100).toFixed(2)}%)`);
      }

      if (isValid && !isValid(ret)) {
        return;
      }

      yield ret;
    } else {
      for (let i = 0; i < elemMaxIdx[setIdx]; i++) {
        yield* helper(arrCounter.concat(i), setIdx);
      }
    }
  }

  yield* helper([], -1);
}
