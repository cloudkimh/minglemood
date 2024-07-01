import { Route, Routes } from "react-router-dom";
import Main from "./Main";

export type SocialFeedsRoutesProps = {};

function SocialFeedsRoutes(props: SocialFeedsRoutesProps) {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    );
}

export default SocialFeedsRoutes;
