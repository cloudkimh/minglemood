import PageTemplate from "../components/common/PageTemplate";
import TapNav from "../components/likes/TapNav";
import { Route, Routes } from "react-router-dom";
import LikedCourses from "../components/likes/LikedCourses";
import LikedHosts from "../components/likes/LikedHosts";

export type LikesProps = {};

function Likes(props: LikesProps) {
    return (
        <PageTemplate>
            <TapNav />
            <Routes>
                <Route path="/course" element={<LikedCourses />} />
                <Route path="/host" element={<LikedHosts />} />
            </Routes>
        </PageTemplate>
    );
}

export default Likes;
