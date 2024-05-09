import React, { useRef } from "react";

export type Slider = {
    speed: number;
    isDragging: boolean;
    touchStartPos: number;
    curTranslate: number;
    prevTranslate: number;
    width: number;
};

function useSwiper(
    containerRef: React.MutableRefObject<HTMLDivElement | null>,
    contentsNum: number,
    speed: number
): [
    React.MutableRefObject<number>,
    (arg: number) => void,
    (arg: number) => void,
    (arg: number) => void
] {
    const sliderIdx = useRef<number>(0);

    const onResize = (slideDistance: number) => {
        if (!containerRef.current) return;
        containerRef.current.style.transition = "none";
        containerRef.current.style.transform = `translateX(-${
            slideDistance * sliderIdx.current
        }px)`;
    };

    const onPrev = (slideDistance: number): void => {
        if (!containerRef.current) return;
        if (sliderIdx.current > 0) {
            containerRef.current.style.transition = `transform ${speed}ms`;
            containerRef.current.style.transform = `translateX(-${
                slideDistance * (sliderIdx.current - 1)
            }px)`;
            sliderIdx.current = sliderIdx.current - 1;
        }
    };

    const onNext = (slideDistance: number): void => {
        if (!containerRef.current) return;
        if (sliderIdx.current < contentsNum - 1) {
            containerRef.current.style.transition = `transform ${speed}ms`;
            containerRef.current.style.transform = `translateX(-${
                slideDistance * (sliderIdx.current + 1)
            }px)`;
            sliderIdx.current = sliderIdx.current + 1;
        }
    };

    return [sliderIdx, onResize, onPrev, onNext];
}

export default useSwiper;
