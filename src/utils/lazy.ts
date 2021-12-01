export abstract class Lazy<T> implements Iterator<T> {
  iterator: Iterator<T>;

  protected constructor(iterator: Iterator<T>) {
    this.iterator = iterator;
  }

  filter(predicate: (item: T) => boolean): LazyFilter<T> {
    return new LazyFilter(this, predicate);
  }

  filterFalsy(): LazyFilter<NonNullable<T>> {
    return new LazyFilter(this as Iterator<NonNullable<T>>, (item) => !!item);
  }

  mapNoNull<R>(callback: (item: T) => R): LazyMap<T, R> {
    return new LazyMap(this as Iterator<R>, callback);
  }

  next(): IteratorResult<T> {
    return this.iterator.next();
  }

  take(n?: number): T[] {
    const values = [];

    if (!n) {
      return this.takeAll();
    }

    for (let i = 0; i < n; i++) {
      values.push(this.next());
    }

    return values.map(({value}) => value);
  }

  takeAll(): T[] {
    const values = [];

    let next = this.next();

    while (!next.done) {
      values.push(next.value);
      next = this.next();
    }

    return values;
  }
}

export class LazyFilter<T> extends Lazy<T> {
  callback: (item: T) => boolean;

  constructor(iterator: Iterator<T>, callback: (item: T) => boolean) {
    super(iterator);
    this.callback = callback;
  }

  next(): IteratorResult<T> {
    while (true) {
      const item = this.iterator.next();

      if (item.done) {
        return {done: item.done, value: undefined};
      }

      if (this.callback(item.value)) {
        return item;
      }
    }
  }
}

export class LazyMap<T, R> extends Lazy<R> {
  callback: (item: T) => R;

  constructor(iterator: Iterator<R>, callback: (item: T) => R) {
    super(iterator);
    this.callback = callback;
  }

  next(): IteratorResult<R> {
    const {done, value} = this.iterator.next();

    if (!value) {
      return {done, value};
    }

    return {done, value: this.callback(value)};
  }
}
