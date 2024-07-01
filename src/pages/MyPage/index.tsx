import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import History from "./History";
import PaymentDetail from "./PaymentDetail";

function MyPageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/history/*" element={<History />} />
            <Route path="/payment/:id" element={<PaymentDetail />} />
        </Routes>
    );
}

export default MyPageRoutes;
