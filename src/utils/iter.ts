import {sumAccumulator} from './accumulator';


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
