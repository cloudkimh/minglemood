import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { resetLastTriggerElement } from "../../../lib/utils";

const LAST_URL_EXEPTION_LIST = [
    "/login",
    "/login/redirect",
    "/payment/request",
    "/setting/supporter",
    "/setting/musician",
    "/setting/account",
];

function useTasksOnChangingPage() {
    const { pathname } = useLocation();

    const scrollPageToTop = () => window.scrollTo(0, 0);

    const updateTrackingLastUrl = () => {
        const currentPath = pathname;

        if (!LAST_URL_EXEPTION_LIST.includes(currentPath)) {
            sessionStorage.setItem("last_url", currentPath);
        }
    };

    useEffect(() => {
        scrollPageToTop();
        updateTrackingLastUrl();
        resetLastTriggerElement();
    }, [pathname]);
}

export default useTasksOnChangingPage;
