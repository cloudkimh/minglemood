import { Route, Routes } from "react-router-dom";
import PageTemplatexxx from "../../components/common/PageTemplatexxx";
import Header from "../../components/mypage/courses/Header";
import TapNav from "../../components/mypage/courses/TapNav";
import Scheduled from "../../components/mypage/courses/Scheduled";
import Finished from "../../components/mypage/courses/Finished";
import Canceled from "../../components/mypage/courses/Canceled";

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
