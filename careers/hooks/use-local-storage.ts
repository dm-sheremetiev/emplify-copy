import { useCallback, useState } from 'react';
import MemoryStorage from '../utils/memory-storage';

let storage;
if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
  storage = window.localStorage;
} else {
  storage = new MemoryStorage();
}

function useLocalStorage(key: string, initialValue?: string): [string, (value: string) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = storage.getItem(key);
      return item || initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  const setValue = useCallback(
    (value: string) => {
      if (typeof window === 'undefined') {
        return;
      }
      try {
        setStoredValue(value);
        storage.setItem(key, value);
      } catch (error) {
        console.error(error);
      }
    },
    [key]
  );
  return [storedValue, setValue];
}

export default useLocalStorage;
