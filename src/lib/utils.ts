import { createContext, useContext } from "react";
import { toast } from "react-toastify";

export type DeviceType = "MOBILE" | "TABLET" | "DESKTOP";

export const getDeviceType = (): DeviceType => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        return "MOBILE";
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        return "TABLET";
    } else {
        return "DESKTOP";
    }
};

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

export const formatTime = (dateStr: string, hideMinute?: boolean): string => {
    const dateObj: Date = new Date(dateStr);
    const hour: number = dateObj.getHours();
    const minute: number = dateObj.getMinutes();
    const minuteText = minute !== 0 ? `${minute}분` : "";

    if (hour > 12) {
        return `오후 ${hour - 12}시${hideMinute ? "" : ` ${minuteText}`}`;
    } else if (hour === 12) {
        return `오후 ${hour}시${hideMinute ? "" : ` ${minuteText}`}`;
    } else {
        return `오전 ${hour}시${hideMinute ? "" : ` ${minuteText}`}`;
    }
};

export const getAbsolutePosY = (elem: HTMLElement) =>
    window.scrollY + elem.getBoundingClientRect().top;

export const formatRemainingDays = (remainingDays: number): string => {
    switch (remainingDays) {
        case 1:
            return "내일 마감";
        case 0:
            return "오늘 마감";
        default:
            return `${remainingDays}일 남음`;
    }
};

export const getCurrentPathName = (path: string): string => {
    const pathArr = path.split("/");
    const lastIdx = pathArr.length - 1;
    return pathArr[lastIdx];
};

export const isScrollPosInTargetRange = (
    startPos: number,
    endPos: number
): boolean => {
    const curPos = window.scrollY;
    if (curPos >= startPos && curPos <= endPos) {
        return true;
    } else {
        return false;
    }
};

export const handleAxiosError = (error: any) => {
    console.error(error);
    if (error.request) console.error("Error Request: ", error.request);
    if (error.config) console.error("Error Config: ", error.config);
    if (error.response) console.error("Error Response: ", error.response);
    if (error.message) console.error("Error Message: ", error.message);
};

export const isIosDevice =
    typeof window !== "undefined" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
        (window.navigator.platform === "MacIntel" &&
            window.navigator.maxTouchPoints > 1));

export const isTargetElementTotallyScrolled = (targetElement: any): boolean =>
    targetElement
        ? targetElement.scrollHeight - targetElement.scrollTop <=
          targetElement.clientHeight
        : false;

export const formatAccessKey = (accessKey: string): string =>
    "Bearer " + accessKey;

export const getRemainingDates = (endDate: string): number => {
    const endDay = new Date(endDate);
    const today = new Date();
    const timeGap = endDay.getTime() - today.getTime();
    const remainingDates = Math.ceil(timeGap / (1000 * 60 * 60 * 24));

    return remainingDates;
};

export const formatPrice = (price: string | number): string =>
    typeof price === "string"
        ? parseInt(price).toLocaleString()
        : price.toLocaleString();

export const formatDate = (dateObj: {
    year: number;
    month: number;
    date: number;
    day: string;
}): string =>
    `${dateObj.year}년 ${dateObj.month}월 ${dateObj.date}일 ${dateObj.day}요일`;

export const parseAgeLimit = (ageLimit: number) => {
    switch (ageLimit) {
        case 0:
            return {
                label: "전체 관람가",
                content: "모든 연령의 관람객이 입장 가능합니다.",
            };
        case 12:
            return {
                label: "12세 이상 관람가",
                content: "만 12세 미만 관람객은 보호자 동반이 필수입니다.",
            };
        case 15:
            return {
                label: "15세 이상 관람가",
                content: "만 15세 미만 관람객은 보호자 동반이 필수입니다.",
            };
        case 18:
            return {
                label: "청소년 관람불가",
                content: "만 18세 미만 관람객은 공연 예매가 불가능합니다.",
            };
        default:
            return {
                label: `${ageLimit}세 이상 관람가`,
                content: `만 ${ageLimit}세 미만 관람객은 보호자 동반이 필수입니다.`,
            };
    }
};

export const getAgeInFull = (birthDate: string): number => {
    const birthday = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();

    // 생일까지 계산한 만 나이 계산, 생일이 지나지 않았을 경우 한 살을 더 빼는 과정.
    // 만 나이 계산을 한국나이에서 무조건 2살 뺀것으로 하기로 결정했기 때문에 주석처리
    // if (
    //     today.getMonth() - birthday.getMonth() < 0 ||
    //     (today.getMonth() - birthday.getMonth() === 0 &&
    //         today.getDay() - birthday.getDay() < 0)
    // ) {
    //     age -= 1;
    // }
    age -= 1;
    return age;
};

export const getAlphabetOrder = (num: number): string | undefined => {
    let str = "";
    let t;

    while (num > 0) {
        t = (num - 1) % 26;
        str = String.fromCharCode(65 + t) + str;
        num = ((num - t) / 26) | 0;
    }
    return str || undefined;
};

export const formatFundingState = (state: string): string => {
    switch (state) {
        case "scheduled":
            return "예정";
        case "running":
            return "진행";
        case "succeeded":
            return "완료";
        case "failed":
            return "종료";
        case "cancelled":
            return "취소";
        default:
            return "준비";
    }
};

export const getFundingBtnText = (state: string, startDate: string) => {
    const startDateObj = parseDateString(startDate);
    const startDateText = `${startDateObj.month}월 ${startDateObj.date}일`;
    switch (state) {
        case "running":
            return "예매 하기";
        case "scheduled":
            return `${startDateText} 공개 예정`;
        case "succeeded":
        case "failed":
        case "cancelled":
            return `예매 ${formatFundingState(state)}`;
        default:
            return "준비 중";
    }
};

export const testConsoleLog = (caller?: string, ...msgs: any) => {
    if (process.env.REACT_APP_MODE === "deploy") return;
    console.log(caller ? `${caller}` : "", ...msgs);
};

export const formatPhoneNum = (phone: string) => {
    const phoneArr = phone.split("");
    if (phoneArr.length !== 11) {
        console.error("Wrong data of phone number: ", phone);
        return false;
    }
    phoneArr.splice(3, 0, "-");
    phoneArr.splice(8, 0, "-");
    return phoneArr.join("");
};

export const setCookie = ({
    name,
    val,
    expDates,
    path,
    domain,
}: {
    name: string;
    val: string;
    expDates: number;
    path?: string;
    domain?: string;
}) => {
    const date = new Date();
    date.setTime(date.getTime() + expDates * 24 * 60 * 60 * 1000);
    const expiresStr = "expires=" + date.toUTCString();
    const pathStr = `path=${path ? path : "/"}`;
    document.cookie = name + "=" + val + ";" + expiresStr + ";" + pathStr;
};

export const getCookie = (name: string) => {
    const targetName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieList = decodedCookie.split(";");
    const l = cookieList.length;
    for (let i = 0; i < l; i++) {
        let curCookie = cookieList[i];
        while (curCookie.charAt(0) === " ") {
            //쿠키 앞부분의 공백 없애기 위해
            curCookie = curCookie.substring(1);
        }

        if (curCookie.indexOf(targetName) === 0) {
            return curCookie.substring(targetName.length, curCookie.length);
        }
    }

    console.error("Target cookie not found");
    return "";
};

export const getPlaceLinks = (placeId: number) => {
    switch (placeId) {
        case 2: // 핸들바
            return {
                googleForm:
                    "https://docs.google.com/forms/d/e/1FAIpQLSfvB1mgShWe8a_REaYqa-UUS8UjW3oC0Ocidpt8U2QUdOfLUg/viewform",
                naverMap:
                    "https://map.naver.com/v5/entry/place/1606225833?c=14325454.6900126,4148981.9836227,15,0,0,0,dh",
            };
        case 3: // 샴록카페
            return {
                googleForm: null,
                naverMap:
                    "https://map.naver.com/v5/entry/place/120079483?c=14325233.6128026,4149097.5985280,15,0,0,0,dh&isCorrectAnswer=true",
            };
        case 4: // 금샘다방
            return {
                googleForm:
                    "https://docs.google.com/forms/d/e/1FAIpQLSeuP-iQ8GjMNMpOBMNlPxq0XbRzIExJJ7e5a1E1UFPRHa06gw/viewform?usp=sf_link",
                naverMap:
                    "https://map.naver.com/v5/search/%EA%B8%88%EC%83%98%EB%8B%A4%EB%B0%A9/place/1743575271?c=14369239.9741943,4201122.8369803,15,0,0,0,dh",
            };
        case 5: // 개올라잇
            return {
                googleForm:
                    "https://docs.google.com/forms/d/e/1FAIpQLSeH9qJZVsu4Rb_zjJonU6v_pN1z8sRBia8USA7g5ICGym64eg/viewform?usp=sf_link",
                naverMap:
                    "https://map.naver.com/v5/entry/place/1806817089?c=14338835.4597852,4168050.1415421,15,0,0,0,dh",
            };
        case 6: // 오르디
            return {
                googleForm:
                    "https://docs.google.com/forms/d/e/1FAIpQLScOaUYJkbk_rbxRz8kOVBaArhvi_2lrRuCLhN99sOf6wP-ecA/viewform?usp=sf_link",
                naverMap:
                    "https://map.naver.com/v5/entry/place/1657655257?c=14357424.9687195,4182887.1505031,15,0,0,0,dh",
            };
        case 7: // 셀라스
            return {
                googleForm: null,
                naverMap:
                    "https://map.naver.com/v5/search/%EC%85%80%EB%9D%BC%EC%8A%A4/place/1853991691?c=14369248.0953893,4200673.5069519,15,0,0,0,dh&placePath=%3Fentry%253Dbmp",
            };
        case 8: // 논모르도
            return {
                googleForm: null,
                naverMap:
                    "https://map.naver.com/v5/search/%EB%85%BC%EB%AA%A8%EB%A5%B4%EB%93%9C%ED%8E%8D/place/1745306984?c=14366069.0908513,4184905.9232327,15,0,0,0,dh&isCorrectAnswer=true",
            };
        case 9: // 대보름
            return {
                googleForm: null,
                naverMap:
                    "https://map.naver.com/v5/entry/place/1646847275?c=14383433.3043301,4189377.5393881,15,0,0,0,dh",
            };
        case 10: // AG405
            return {
                googleForm: null,
                naverMap:
                    "https://map.naver.com/v5/entry/place/1403700905?c=14374734.9774318,4185168.1566066,15,0,0,0,dh&isCorrectAnswer=true",
            };
        case 11: // 아쿠아펠리스
            return {
                googleForm: null,
                naverMap:
                    "https://map.naver.com/v5/entry/place/12014049?c=14372964.8194161,4184838.7707081,15,0,0,0,dh&isCorrectAnswer=true",
            };
        default:
            return {
                googleForm: null,
                naverMap: null,
            };
    }
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

export const formatPaymentState = (state: string) => {
    const paymentStateMap: any = {
        payment_scheduled: "결제 예약",
        payment_schedule_cancelled: "결제 예약 취소",
        payment_completed: "결제 완료",
        payment_fail: "결제 실패",
        payment_refund: "결제 환불",
    };

    return paymentStateMap[state];
};

export const formatPaymentMethod = (method: string | null) => {
    const paymentMethodMap: any = {
        naver: "네이버 페이",
        kakao: "카카오 페이",
        remittance: "무통장 입금",
    };

    return method !== null ? paymentMethodMap[method] : "무통장 입금";
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

export const formatCriterionText = (criterion: string) => {
    const criterionMap: any = {
        money: "금액",
        audience: "관객",
    };

    return criterionMap[criterion];
};

export const getInfoName = (
    infoList: Array<{ id: number; name: string; url: string }>,
    targetId: number
) => infoList.find((elem) => elem.id === targetId)?.name;

export const delay = (time: number) =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve("");
        }, time)
    );

export const formatPaymentCid = (merchantUid: string) => `cid-${merchantUid}`;

export const formatPaymentSessionItemKey = (merchantUid: string) =>
    `payment-${merchantUid}`;

export const sortBySequenceNum = (dataList: Array<any>) => {
    const sortedList = [...dataList].sort(
        (a, b) => a.sequence_number - b.sequence_number
    );
    return sortedList;
};

export const formatMusicianText = (
    artistsInPerformance: Array<{
        id: number;
        performance: number;
        musician: number | null;
        team: number | null;
        avatar: string | null;
        name: string;
    }>,
    musician: string
) => {
    return artistsInPerformance.length > 0
        ? artistsInPerformance.length === 1
            ? artistsInPerformance[0].name
            : `${artistsInPerformance[0].name} 외 ${
                  artistsInPerformance.length - 1
              }팀`
        : musician;
};

let lastTriggerElements: Array<any> = [];

export const resetLastTriggerElement = () => {
    lastTriggerElements = [];
};

export const setLastTriggerElement = (elem: any) => {
    lastTriggerElements.push(elem);
};

export const focusOnLastTriggerElement = () => {
    const lastTriggerElement = lastTriggerElements.pop();

    if (lastTriggerElement) {
        lastTriggerElement.tabIndex = -1;
        lastTriggerElement.focus();
    }
};
