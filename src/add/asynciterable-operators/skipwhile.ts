import { AsyncIterableX } from '../../asynciterable';
import { skipWhile } from '../../asynciterable/skipwhile';

export function skipWhileProto<TSource>(
    this: AsyncIterableX<TSource>,
    predicate: (value: TSource, index: number) => boolean): AsyncIterableX<TSource> {
  return new AsyncIterableX(skipWhile(this, predicate));
}

AsyncIterableX.prototype.skipWhile = skipWhileProto;

declare module '../../asynciterable' {
  interface AsyncIterableX<T> {
    skipWhile: typeof skipWhileProto;
  }
}