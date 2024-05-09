import useDebouncer from "./useDebouncer";
import useScrollEvent from "./useScrollEvent";
import useThrottler from "./useThrottler";

type UseScrollEffectParams = {
    targetMounted?: boolean;
    target?: React.RefObject<HTMLElement>;
    onScrolled: Function;
    onTop: Function;
};

function useScrollEffect(params: UseScrollEffectParams) {
    const { targetMounted, target, onScrolled, onTop } = params;
    const currentTarget = target ? target?.current : window;
    const debouncer = useDebouncer();
    const throttler = useThrottler();

    const handleScroll = () => {
        if (!currentTarget) return;
        const scrolledLength =
            currentTarget instanceof HTMLElement
                ? currentTarget.scrollTop
                : currentTarget.scrollY;

        if (scrolledLength === 0) {
            onTop();
        } else {
            onScrolled();
        }
    };

    useScrollEvent({
        targetMounted,
        target,
        listener: () => {
            throttler(100, handleScroll);
            debouncer(100, handleScroll);
        },
        deps: [targetMounted],
    });
}

export default useScrollEffect;
