import { useEffect, useReducer } from "react";
import { handleAxiosError } from "../utils";

type UseAsyncParams = {
    callback: Function;
    args?: Array<any>;
    deps?: Array<any>;
    skip?: boolean;
};

type UseAsyncReturns = [
    {
        loading: boolean;
        data: any;
        error: any;
    },
    Function
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
                data: state.data ?? null,
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

function useAsync({
    callback,
    args = [],
    deps = [],
    skip = false,
}: UseAsyncParams): UseAsyncReturns {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const refetch = async (...refetchArgs: Array<any>) => {
        dispatch({ type: "LOADING" });
        try {
            const data = await callback(...refetchArgs);
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
                const data = await callback(...args);
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

export default useAsync;

// import { useEffect, useReducer } from "react";
// import { handleAxiosError } from "../utils";

// type UseAsyncParams<T> = {
//     callback: Function;
//     args?: Array<any>;
//     deps?: Array<any>;
//     skip?: boolean;
// };

// type UseAsyncReturns<T> = [
//     {
//         loading: boolean;
//         data: T | null;
//         error: any;
//     },
//     Function
// ];

// type Action<T> = {
//     data?: T;
//     error?: any;
//     type: "LOADING" | "SUCCESS" | "ERROR";
// };

// function reducer<T>(state: { loading: boolean, data: T | null, error: any }, action: Action<T>) {
//     switch (action.type) {
//         case "LOADING":
//             return {
//                 loading: true,
//                 data: null,
//                 error: null,
//             };
//         case "SUCCESS":
//             return {
//                 loading: false,
//                 data: action.data,
//                 error: null,
//             };
//         case "ERROR":
//             return {
//                 loading: false,
//                 data: null,
//                 error: action.error,
//             };
//         default:
//             throw new Error(`Unhandled type of action: ${action.type}`);
//     }
// };

// function useAsync<T>({
//     callback,
//     args = [],
//     deps = [],
//     skip = false,
// }: UseAsyncParams<T>): UseAsyncReturns<T> {
//     const [state, dispatch] = useReducer(reducer, {
//         loading: false,
//         data: null,
//         error: null,
//     });

//     const refetch = async (...refetchArgs: Array<any>) => {
//         dispatch({ type: "LOADING" });
//         try {
//             const data = await callback(...refetchArgs);
//             dispatch({ type: "SUCCESS", data });
//         } catch (e) {
//             handleAxiosError(e);
//             dispatch({ type: "ERROR", error: e });
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             dispatch({ type: "LOADING" });

//             try {
//                 const data = await callback(...args);
//                 dispatch({ type: "SUCCESS", data });
//             } catch (e) {
//                 handleAxiosError(e);
//                 dispatch({ type: "ERROR", error: e });
//             }
//         };

//         if (skip) return;
//         fetchData();
//     }, deps);

//     return [state, refetch];
// }

// export default useAsync;
