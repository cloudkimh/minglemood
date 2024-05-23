import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./lib/styles/theme";
import PageHelmet from "./components/common/PageHelmet";
import Core from "./components/core";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";
import Explore from "./pages/Explore";

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
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
            <Core />
        </ThemeProvider>
    );
}

export default App;
