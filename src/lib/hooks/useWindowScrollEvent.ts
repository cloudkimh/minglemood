import React, { useEffect, useRef } from "react";

function useWindowScrollEvent(
    listener: (this: Window, ev: Event) => any,
    deps: React.DependencyList = []
) {
    const prevListener = useRef<any>(null);

    useEffect(() => {
        if (prevListener.current) {
            window.removeEventListener("scroll", prevListener.current);
        }
        prevListener.current = listener;
        window.addEventListener("scroll", listener);

        return () => {
            window.removeEventListener("scroll", prevListener.current);
        };
    }, deps);
}

export default useWindowScrollEvent;
