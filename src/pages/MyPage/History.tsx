import { Route, Routes } from "react-router-dom";
import PageTemplatexxx from "../../components/common/PageTemplatexxx";
import Header from "../../components/mypage/history/Header";
import TapNav from "../../components/mypage/history/TapNav";
import Scheduled from "../../components/mypage/history/Scheduled";
import Finished from "../../components/mypage/history/Finished";
import Canceled from "../../components/mypage/history/Canceled";

function History() {
    return (
        <PageTemplatexxx>
            <Header />
            <TapNav />
            <Routes>
                <Route path="scheduled" element={<Scheduled />} />
                <Route path="finished" element={<Finished />} />
                <Route path="canceled" element={<Canceled />} />
            </Routes>
        </PageTemplatexxx>
    );
}

export default History;
