import TapNav from "../components/likes/TapNav";
import { Route, Routes } from "react-router-dom";
import LikedCourses from "../components/likes/LikedCourses";
import LikedHosts from "../components/likes/LikedHosts";
import PageTemplatexxx from "../components/basics/PageTemplatexxx";

function Likes() {
    return (
        <PageTemplatexxx>
            <TapNav />
            <Routes>
                <Route path="/course" element={<LikedCourses />} />
                <Route path="/host" element={<LikedHosts />} />
            </Routes>
        </PageTemplatexxx>
    );
}

export default Likes;
