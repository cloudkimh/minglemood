import { useCallback } from "react";

function useDebouncer() {
    let isTimeout: boolean = true;
    let timeoutId: any | null = null;

    const debouncer = useCallback((time: number, callback: Function) => {
        if (isTimeout) {
            isTimeout = false;
        } else {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            callback();
            isTimeout = true;
        }, time);
    }, []);
    return debouncer;
}

export default useDebouncer;
