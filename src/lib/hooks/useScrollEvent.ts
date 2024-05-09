import React, { useEffect, useRef } from "react";

type UseScrollEventParams = {
    targetMounted?: boolean;
    target?: React.RefObject<HTMLElement>;
    listener: (this: Window, ev: Event) => any;
    deps?: React.DependencyList;
};

function useScrollEvent(params: UseScrollEventParams) {
    const { targetMounted, target, listener, deps = [] } = params;
    const prevListener = useRef<any>(null);

    const addScrollListener = (element: (HTMLElement | null) | Window) => {
        if (!element) return;
        element.addEventListener("scroll", listener);
    };

    const removeScrollListener = (element: (HTMLElement | null) | Window) => {
        if (!element) return;
        element.removeEventListener("scroll", prevListener.current);
    };

    useEffect(() => {
        const currentTarget = target ? target.current : window;
        const targetNotMounted = target && !targetMounted;

        if (targetNotMounted) return;

        if (prevListener.current) {
            removeScrollListener(currentTarget);
        }

        prevListener.current = listener;
        addScrollListener(currentTarget);

        return () => {
            removeScrollListener(currentTarget);
        };
    }, deps);
}

export default useScrollEvent;
