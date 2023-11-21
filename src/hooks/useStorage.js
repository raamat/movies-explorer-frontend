import { useEffect, useState } from "react";

export default function useStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    const stateFromStorage = localStorage.getItem(key);

    if (stateFromStorage) {
      return stateFromStorage;
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
}
