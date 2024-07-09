import { Route, Routes, useNavigate } from "react-router-dom";
import PageTemplatexxx from "../../components/basics/PageTemplatexxx";
import TapNav from "../../components/mypage/history/TapNav";
import Scheduled from "../../components/mypage/history/Scheduled";
import Finished from "../../components/mypage/history/Finished";
import Canceled from "../../components/mypage/history/Canceled";
import PageHeader from "../../components/common/PageHeader";

function History() {
    const navigate = useNavigate();

    return (
        <PageTemplatexxx>
            <PageHeader
                title="모임내역"
                handleClickPrevPageBtn={() => navigate("/mypage")}
            />
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
