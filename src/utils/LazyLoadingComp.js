
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import React, { useState, useEffect } from "react";

const LazyLoadingComp = ({ componentName }) => {

    const [inView, ref] = useIntersectionObserver();
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        if (inView && !hasLoaded) {
            setHasLoaded(true);
        }
    }, [inView, hasLoaded]);

    const ComponentToRender = inView ? eval(componentName) : null;
    
    return (
        <div ref={ref}>
            {hasLoaded ? <ComponentToRender /> : <div>Loading...</div>}
        </div>
    )
}
export default LazyLoadingComp;
