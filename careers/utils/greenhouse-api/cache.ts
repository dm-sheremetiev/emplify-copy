import { HashMap } from './structures';

class CacheRecord<T> {
  #etag: string;
  #value: T;

  getKey(): string {
    return this.#etag;
  }

  getValue(newEtag: string): T | undefined {
    if (newEtag === this.#etag) {
      return this.#value;
    }
    return undefined;
  }

  set(newEtag: string, newValue: T): T {
    this.#etag = newEtag;
    this.#value = newValue;
    return newValue;
  }
}

type CachedConstructorParams<FetchedDataT, OutputT> = {
  fetchData: (locale: string, etag: string) => Promise<FetchedDataT & { etag: string }>;
  convertData: (fetchedData: FetchedDataT) => OutputT;
};

export function createCachedConstructor<FetchedDataT, OutputT>({
  fetchData,
  convertData
}: CachedConstructorParams<FetchedDataT, OutputT>): (locale: string) => Promise<OutputT> {
  const cacheByLocale = new HashMap<string, CacheRecord<OutputT>>(() => new CacheRecord());
  return async function cachedConstructor(locale) {
    const cache = cacheByLocale.get(locale);
    const storedEtag = cache.getKey();
    const rawData = await fetchData(locale, storedEtag);
    const { etag } = rawData;
    const cachedValue = cache.getValue(etag);
    if (cachedValue !== undefined) {
      return cachedValue;
    }
    const value = convertData(rawData);
    return cache.set(etag, value);
  };
}
