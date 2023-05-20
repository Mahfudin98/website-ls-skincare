import { useEffect, useState } from "react";
const useLocalstorage = (key: any, initialValue: any) => {
  const [state, setState] = useState(() => {
    try {
      if (typeof window !== "undefined") {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
      }
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = (value: any) => {
    try {
      if (typeof window !== "undefined") {
        const valueToStore = value instanceof Function ? value() : value;
        localStorage.setItem(key, JSON.stringify(valueToStore));
        setState(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [state, setValue];
};

export default useLocalstorage;
