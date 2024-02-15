import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (
) => {

    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasRendered, setHasRendered] = useState(false);
    const [count, setCount] = useState(0);
    const loadCompRef = useRef(null);


    const handleObserver = (entries) => {
        const [target] = entries;
        setIsIntersecting(target.isIntersecting);
        if (target.isIntersecting && !hasRendered) {
            if (target.isIntersecting && !hasRendered) {
                if (count > 1) setHasRendered(true);
                else setCount((prevCount) => ++prevCount);
            }
        }
    };


    useEffect(() => {

        const option = {
            root: null,
            rootMargin: `0px`,
            threshold: 0
        }
        const observer = new IntersectionObserver(handleObserver, option);

        if (loadCompRef.current) {
            observer.observe(loadCompRef.current)
        }
        return (() => {
            if(loadCompRef.current){
                observer.unobserve(loadCompRef.current);
            }
        })

    }, [hasRendered, count]);
    return [isIntersecting || hasRendered, loadCompRef];
};

export default useIntersectionObserver;