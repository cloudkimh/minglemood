import { useReducer } from "react";

export type IdxAction = {
    type: "INCREASE" | "DECREASE";
    max: number;
};

const reducer = (state: number, action: IdxAction) => {
    switch (action.type) {
        case "INCREASE":
            if (state < action.max) {
                return state + 1;
            } else {
                return 0;
            }
        case "DECREASE":
            if (state > 0) {
                return state - 1;
            } else {
                return action.max;
            }
        default:
            throw new Error("Unhandled type of action");
    }
};

export default function useLoopIndex(
    max: number
): [number, () => void, () => void] {
    const [idx, idxDispatch] = useReducer(reducer, 0);

    const increaseIdx = (): void => idxDispatch({ type: "INCREASE", max });
    const decreaseIdx = (): void => idxDispatch({ type: "DECREASE", max });

    return [idx, increaseIdx, decreaseIdx];
}
