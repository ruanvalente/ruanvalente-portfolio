import { Language } from "@/types";
import { useState } from "react";


export const useLocalStorage = (
  key: string,
  initialValue: Language
): [Language, (value: Language) => void] => {
  const [storedValue, setStoredValue] = useState<Language>(() => {
    try {
      if (typeof window === "undefined") return initialValue;
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as Language) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: Language) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
