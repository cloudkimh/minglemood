import React, { useRef } from "react";

type UseElementPosition = [
    React.RefObject<any>,
    () => {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }
];

function useElementPosition(): UseElementPosition {
    const targetElemRef = useRef<any>(null);

    const getPosition = () => {
        if (!targetElemRef.current)
            return {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            };

        const elemClientRect = targetElemRef.current.getBoundingClientRect();

        return {
            top: window.scrollY + elemClientRect.top,
            bottom: window.scrollY + elemClientRect.bottom,
            left: window.scrollX + elemClientRect.left,
            right: window.scrollX + elemClientRect.right,
        };
    };

    return [targetElemRef, getPosition];
}

export default useElementPosition;
