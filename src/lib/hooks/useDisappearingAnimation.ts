import { useEffect, useRef, useState } from "react";

type UseDisappearingAnimationParams = {
    startDisappearing: boolean;
    animationTime: number;
};

type UseDisappearingAnimationReturns = [boolean];

function useDisappearingAnimation(
    params: UseDisappearingAnimationParams
): UseDisappearingAnimationReturns {
    const { startDisappearing, animationTime } = params;
    const [isAnimated, setIsAnimated] = useState(false);
    const [isAnimationFinished, setIsAnimationFinished] = useState(true);
    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isMounted = useRef(false);
    const totallyDisappeared =
        !isAnimated && startDisappearing && isAnimationFinished;

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        setIsAnimated(true);
        timeoutId.current = setTimeout(() => {
            setIsAnimated(false);

            if (startDisappearing) {
                setIsAnimationFinished(true);
            }
        }, animationTime);

        if (!startDisappearing) {
            setIsAnimationFinished(false);
        }

        return () => {
            if (!timeoutId.current) return;
            clearTimeout(timeoutId.current);
        };
    }, [startDisappearing]);

    return [totallyDisappeared];
}

export default useDisappearingAnimation;
