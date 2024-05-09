import { useEffect, useReducer } from "react";
import { handleAxiosError } from "../utils";

type UseAsyncParams<ParamsType, ReturnType> = {
    callback: (params?: ParamsType) => Promise<ReturnType | undefined>;
    args?: ParamsType;
    deps?: Array<any>;
    skip?: boolean;
};

type UseAsyncReturns<ParamsType, ReturnType> = [
    {
        loading: boolean;
        data: ReturnType | null;
        error: any;
    },
    (params?: ParamsType) => Promise<void>
];

type Action = {
    data?: any;
    error?: any;
    type: "LOADING" | "SUCCESS" | "ERROR";
};

const reducer = (state: any, action: Action) => {
    switch (action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null,
            };
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled type of action: ${action.type}`);
    }
};

function useAsyncxx<ParamsType, ReturnType>({
    callback,
    args,
    deps = [],
    skip = false,
}: UseAsyncParams<ParamsType, ReturnType>): UseAsyncReturns<
    ParamsType,
    ReturnType
> {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const refetch = async (refetchParams?: ParamsType) => {
        dispatch({ type: "LOADING" });
        try {
            const data = await callback(refetchParams);
            dispatch({ type: "SUCCESS", data });
        } catch (e) {
            handleAxiosError(e);
            dispatch({ type: "ERROR", error: e });
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "LOADING" });

            try {
                const data = await callback(args);
                dispatch({ type: "SUCCESS", data });
            } catch (e) {
                handleAxiosError(e);
                dispatch({ type: "ERROR", error: e });
            }
        };

        if (skip) return;
        fetchData();
    }, deps);

    return [state, refetch];
}

export default useAsyncxx;
