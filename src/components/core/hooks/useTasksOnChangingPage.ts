import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function useTasksOnChangingPage() {
    const { pathname } = useLocation();

    const scrollPageToTop = () => window.scrollTo(0, 0);

    useEffect(() => {
        scrollPageToTop();
    }, [pathname]);
}

export default useTasksOnChangingPage;
