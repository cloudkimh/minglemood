import { createContext, useContext } from "react";
import { toast } from "react-toastify";

export const setPreventScroll = (
    isScrollPrevented: boolean,
    selector?: string
) => {
    const targetElem: HTMLElement | null = selector
        ? document.querySelector(selector)
        : document.body;

    if (targetElem) {
        targetElem.style.overflowY = isScrollPrevented ? "hidden" : "auto";
    }
};

export const getDayString = (day: number): string => {
    switch (day) {
        case 0:
            return "일";
        case 1:
            return "월";
        case 2:
            return "화";
        case 3:
            return "수";
        case 4:
            return "목";
        case 5:
            return "금";
        case 6:
            return "토";
        default: {
            console.error(
                "Error occured in getDayString: day prop is invalid value"
            );
            return "";
        }
    }
};

export const parseDateString = (
    dateStr: string
): {
    year: number;
    month: number;
    date: number;
    day: string;
    hour: number;
    minute: number;
} => {
    const dateObj: Date = new Date(dateStr);
    const year: number = dateObj.getFullYear();
    const month: number = dateObj.getMonth() + 1;
    const date: number = dateObj.getDate();
    const day: string = getDayString(dateObj.getDay());
    const hour: number = dateObj.getHours();
    const minute: number = dateObj.getMinutes();

    return { year, month, date, day, hour, minute };
};

export const getCurrentPathName = (path: string): string => {
    const pathArr = path.split("/");
    const lastIdx = pathArr.length - 1;
    return pathArr[lastIdx];
};

export const handleAxiosError = (error: any) => {
    console.error(error);
    if (error.request) console.error("Error Request: ", error.request);
    if (error.config) console.error("Error Config: ", error.config);
    if (error.response) console.error("Error Response: ", error.response);
    if (error.message) console.error("Error Message: ", error.message);
};

export const copyToClipboard = (content: string, msg?: string) => {
    const type = "text/plain";
    const blob = new Blob([content], { type });
    const clipboardItem = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(clipboardItem).then(
        () => toast.success(!msg ? "클립보드에 링크를 복사했습니다." : msg),
        () => toast.error("클립보드 복사중 오류가 발생했습니다.")
    );
};

export function createCustomStore<T>(): [React.Provider<T | null>, () => T] {
    const CustomContext = createContext<T | null>(null);

    const useCustomContext = () => {
        const context = useContext(CustomContext);

        if (context) {
            return context;
        } else {
            throw new Error("Can not find CustomProvider");
        }
    };

    return [CustomContext.Provider, useCustomContext];
}

export const delay = (time: number) =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve("");
        }, time)
    );
