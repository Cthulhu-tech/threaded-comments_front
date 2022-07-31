import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: Array<string>) => {

    const [storedValue, setStoredValue] = useState(() => {

        if (typeof window === "undefined") return initialValue;

        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;

    });

    const setValue = (value:string) => {

        const data = [...Array.from(new Set([...storedValue, value]))];

        setStoredValue(data);

        if (typeof window !== "undefined") 
            window.localStorage.setItem(key, JSON.stringify(data));

    };

    return [storedValue, setValue];

}