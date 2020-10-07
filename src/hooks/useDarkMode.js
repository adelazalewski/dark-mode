import {useState} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage(key, initialValue);
    //custom logic from the parent compoenet index.js here
    const toggleMode = e => {
        e.preventDefault();
        setSomeValue(!someValue);
      };

    return [someValue, toggleMode];
}