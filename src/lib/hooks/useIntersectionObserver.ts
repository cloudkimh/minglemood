import { useEffect, useRef } from "react";

const useIntersectionObserver = (
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
) => {
    const targetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, [callback, options]);

    return targetRef;
};

export default useIntersectionObserver;
