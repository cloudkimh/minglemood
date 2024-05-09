type UseCookieReturns = {
    getCookie: (cookieName: string) => string;
    setCookie: ({
        name,
        value,
        expirationMinutes,
        expirationHours,
        expirationDays,
    }: SetCookieParams) => void;
    deleteCookie: (cookieName: string) => void;
};

type SetCookieParams = {
    name: string;
    value: string;
    expirationMinutes?: number;
    expirationHours?: number;
    expirationDays?: number;
};

const useCookie = (): UseCookieReturns => {
    const getCookie = (cookieName: string) => {
        const name = cookieName + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const cookieArray = decodedCookie.split(";");

        for (let i = 0; i < cookieArray.length; i++) {
            let cookie = cookieArray[i];
            while (cookie.charAt(0) === " ") {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) === 0) {
                return cookie.substring(name.length, cookie.length);
            }
        }

        return "";
    };

    const setCookie = ({
        name,
        value,
        expirationMinutes = 0,
        expirationHours = 0,
        expirationDays = 0,
    }: SetCookieParams) => {
        const expirationDate = new Date();
        expirationDate.setMinutes(
            expirationDate.getMinutes() + expirationMinutes
        );
        expirationDate.setHours(expirationDate.getHours() + expirationHours);
        expirationDate.setDate(expirationDate.getDate() + expirationDays);

        const cookieValue =
            encodeURIComponent(value) +
            "; expires=" +
            expirationDate.toUTCString() +
            "; path=/";
        document.cookie = name + "=" + cookieValue;
    };

    const deleteCookie = (cookieName: string) => {
        const expirationDate = new Date(0);
        const cookieValue =
            encodeURIComponent("") +
            "; expires=" +
            expirationDate.toUTCString() +
            "; path=/";
        document.cookie = cookieName + "=" + cookieValue;
    };

    return { getCookie, setCookie, deleteCookie };
};

export default useCookie;
