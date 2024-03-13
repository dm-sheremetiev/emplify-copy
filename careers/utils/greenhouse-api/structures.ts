export class ArrayMultiMap<K, V> {
  #map: Map<K, V[]>;

  constructor() {
    this.#map = new Map();
  }

  get size(): number {
    return this.#map.size;
  }

  get [Symbol.toStringTag](): string {
    return 'MultiArrayMap';
  }

  get(key: K): V[] {
    return this.#map.get(key);
  }

  has(key: K): boolean {
    return this.#map.has(key);
  }

  set(key: K, value: V): this {
    const existingValue = this.get(key);
    if (existingValue) {
      existingValue.push(value);
    } else {
      this.#map.set(key, [value]);
    }
    return this;
  }

  forEach(callbackfn: (value: V[], key: K, map: Map<K, V[]>) => void): void {
    return this.#map.forEach(callbackfn);
  }

  [Symbol.iterator](): IterableIterator<[K, V[]]> {
    return this.#map[Symbol.iterator]();
  }

  entries(): IterableIterator<[K, V[]]> {
    return this.#map.entries();
  }

  keys(): IterableIterator<K> {
    return this.#map.keys();
  }

  values(): IterableIterator<V[]> {
    return this.#map.values();
  }
}

// Based on https://raganwald.com/2018/09/12/auto-vivifying-hash.html
type HashMapDefaultValue<K, V> = V | ((key: K) => V);

export class HashMap<K, V> {
  #map: Map<K, V>;
  #defaultValue: HashMapDefaultValue<K, V>;

  constructor(defaultValue: HashMapDefaultValue<K, V>) {
    this.#map = new Map();
    this.#defaultValue = defaultValue;
  }

  has(key: K): boolean {
    return this.#map.has(key);
  }

  get(key: K): V {
    const existing = this.#map.get(key);
    if (existing !== undefined) {
      return existing;
    }

    let defaultValue: V;
    if (this.#defaultValue instanceof Function) {
      defaultValue = this.#defaultValue(key);
      this.set(key, defaultValue);
    } else {
      defaultValue = this.#defaultValue;
    }
    return defaultValue;
  }

  set(key: K, value: V): this {
    this.#map.set(key, value);
    return this;
  }
}
