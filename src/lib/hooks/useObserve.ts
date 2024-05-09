import useWindowScrollEvent from "./useWindowScrollEvent";

function useObserve(
    targetRef: React.RefObject<HTMLElement>,
    callback: Function,
    type: "pixel" | "ratio",
    value: number,
    deps: React.DependencyList = []
) {
    useWindowScrollEvent(() => {
        if (!targetRef.current) return;
        const targetPosition =
            targetRef.current.getBoundingClientRect().top - window.innerHeight;
        const observePoint =
            type === "ratio"
                ? targetRef.current.getBoundingClientRect().height * -1 * value
                : targetRef.current.getBoundingClientRect().height - value;
        if (targetPosition < observePoint) {
            callback();
        }
    }, deps);
}

export default useObserve;
