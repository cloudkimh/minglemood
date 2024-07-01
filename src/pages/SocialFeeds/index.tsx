import { Route, Routes } from "react-router-dom";
import Main from "./Main";
import Write from "./Write";

export type SocialFeedsRoutesProps = {};

function SocialFeedsRoutes(props: SocialFeedsRoutesProps) {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/write" element={<Write />} />
        </Routes>
    );
}

export default SocialFeedsRoutes;
