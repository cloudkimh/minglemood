import { useEffect, useRef, useState } from "react";

type UseDisappearingAnimationTimeParams = {
    startDisapperingAnime: boolean;
    animationTime: number;
};
type UseDisappearingAnimationTimeReturns = [boolean, boolean];

function useDisappearingAnimationTime(
    params: UseDisappearingAnimationTimeParams
): UseDisappearingAnimationTimeReturns {
    const { startDisapperingAnime, animationTime } = params;
    const [isAnimationStarted, setIsAnimationStarted] = useState(false);
    const [disappearingAnimeFinished, setDisappearingAnimeFinished] =
        useState(false);
    const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }

        setIsAnimationStarted(true);
        timeoutId.current = setTimeout(() => {
            setIsAnimationStarted(false);

            if (startDisapperingAnime) {
                setDisappearingAnimeFinished(true);
            }
        }, animationTime);

        if (!startDisapperingAnime) {
            setDisappearingAnimeFinished(false);
        }

        return () => {
            if (!timeoutId.current) return;
            clearTimeout(timeoutId.current);
        };
    }, [startDisapperingAnime]);

    return [disappearingAnimeFinished, isAnimationStarted];
}

export default useDisappearingAnimationTime;
