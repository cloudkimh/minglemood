import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import History from "./History";

export type MyPageProps = {};

function MyPage(props: MyPageProps) {
    return (
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/history/*" element={<History />} />
        </Routes>
    );
}

export default MyPage;
