"use client";
import { useState, useEffect } from "react";


export const useDebounce = (value, delay = 300) => {

    const [debouncedVal, setDebouncedVal] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedVal(value), delay);
        return (() => {
            clearTimeout(timer);
        });
    },[value, delay]);

    return debouncedVal;
}