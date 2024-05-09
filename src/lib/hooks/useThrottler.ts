import { useCallback } from "react";

function useThrottler() {
    let throttleTimeout: boolean = true;

    const throttler = useCallback((time: number, callback: Function) => {
        if (throttleTimeout) {
            throttleTimeout = false;
            setTimeout(() => {
                throttleTimeout = true;
            }, time);
            callback();
        }
    }, []);

    return throttler;
}

export default useThrottler;
