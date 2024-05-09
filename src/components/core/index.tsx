import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { mediaQuery } from "../../lib/styles/media";
import useTasksOnChangingPage from "./hooks/useTasksOnChangingPage";
import GlobalStyles from "../global/GlobalStyles";

export type CoreProp = {};

const TOAST_POSITION = "bottom-left";
const TOAST_AUTO_CLOSE_TIME = 3000;

function Core(props: CoreProp) {
    useTasksOnChangingPage();

    return (
        <>
            <StyledToastContainer
                position={TOAST_POSITION}
                autoClose={TOAST_AUTO_CLOSE_TIME}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <GlobalStyles />
        </>
    );
}

const StyledToastContainer = styled(ToastContainer)`
    bottom: 0;
    width: auto;
    min-width: 320px;

    .Toastify__toast {
        font-family: "NanumSquareRound", -apple-system, BlinkMacSystemFont,
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;
        line-height: 1.25em;
        word-break: keep-all;
    }

    ${mediaQuery(480)} {
        width: 100%;
        font-size: 14px;

        .Toastify__toast-icon {
            width: 1.25em;
        }
    }
`;

export default Core;
