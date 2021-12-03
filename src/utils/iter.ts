import {sumAccumulator} from './accumulator';


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

type CounterHighFirstOptions<T, R> = {
  sets: T[],
  getElemMaxIdx: (elem: T) => number,
  maxCounterSum: number,
  transformElement: (item: T, counter: number) => R,
};

export function* counterHighFirst<T, R = T>({
  sets, getElemMaxIdx, transformElement, maxCounterSum,
}: CounterHighFirstOptions<T, R>): Generator<R[]> {
  const setLength = sets.length;
  const idxCounter = [...Array(setLength).keys()].map(() => 0);

  const counterToReturn = (counter: number[]): R[] => {
    return counter.map((count, idx) => transformElement(sets[idx], count));
  };

  for (let setIdx = 0; setIdx < setLength; setIdx++) {
    for (let count = 0; count < getElemMaxIdx(sets[setIdx]); count++) {
      idxCounter[setIdx]++;

      if (idxCounter.reduce(sumAccumulator) <= maxCounterSum) {
        yield counterToReturn(idxCounter);
        continue;
      }

      if (setIdx === 0) {
        idxCounter[setIdx]--;
        break;
      }

      const indexToZero = idxCounter.findIndex((elem) => elem > 0);

      if (indexToZero === -1) {
        throw new Error('No index to zero');
      }

      while (idxCounter[indexToZero] > 0) {
        idxCounter[indexToZero]--;

        yield counterToReturn(idxCounter);
      }

      break;
    }
  }
}
