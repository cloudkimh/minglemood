import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./lib/styles/theme";
import PageHelmet from "./components/basics/PageHelmet";
import Core from "./components/core";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Explore from "./pages/Explore";
import MyPage from "./pages/MyPage";
import Setting from "./pages/Setting";
import SocialFeeds from "./pages/SocialFeeds";
import Likes from "./pages/Likes";
import Purchase from "./pages/Purchase";
import PhotoGallery from "./pages/PhotoGallery";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <PageHelmet
                title="밍글무드"
                description="밍글무드"
                // imgSrc={opengraphImg}
                // url="https://app.wemuz.me/"
            />
            <Routes>
                <Route index element={<Home />} />
                <Route path="course/:id" element={<CourseDetail />} />
                <Route path="explore" element={<Explore />} />
                <Route path="mypage/*" element={<MyPage />} />
                <Route path="setting" element={<Setting />} />
                <Route path="social-feeds/*" element={<SocialFeeds />} />
                <Route path="likes/*" element={<Likes />} />
                <Route path="purchase/:id" element={<Purchase />} />
                <Route path="photo-gallery/:id" element={<PhotoGallery />} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
            <Core />
        </ThemeProvider>
    );
}

export default App;
