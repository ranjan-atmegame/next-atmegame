"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import useDevice from "@/hooks/useDevice";

export const useInfiniteScroll = (initVal, curValue, desktopRow = 1, newValue = undefined) => {
    const [limit, setLimit] = useState(initVal || 0);
    const loadMoreRef = useRef(null);
    const [mobile] = useDevice();

    const handleObserver = useCallback((entries) => {
        const [target] = entries;
        if (target.isIntersecting) {
            setLimit((prevLimit) => prevLimit + curValue);
        }
    }, []);


    useEffect(() => {
        // const dataLength = limit + 10;
        // var rm = mobile ? dataLength : ((dataLength) / desktopRow) * 100;
        var rm = 0;
        const option = {
            root: null,
            rootMargin: `${rm}px`,
            threshold: 0.1
        }
        const observer = new IntersectionObserver(handleObserver, option);
        if (loadMoreRef.current) {
            observer.observe(loadMoreRef.current)
        }
        return (() => {
            if (loadMoreRef.current) {
                observer.unobserve(loadMoreRef.current);
            }
        })
    }, [handleObserver]);

    return { loadMoreRef, limit, setLimit }

}

export default useInfiniteScroll;