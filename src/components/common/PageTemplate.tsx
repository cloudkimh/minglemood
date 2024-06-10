import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { ReactNode, useEffect, useState, useRef } from "react";
import { hideScrollBar, withOpacity } from "../../lib/styles/utils";
import Footer from "./Footer";
import throttle from "lodash/throttle";
import Gnb from "./Gnb";

type PageTemplateProps = {
    children: ReactNode;
};

function PageTemplate(props: PageTemplateProps) {
    const { children } = props;
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const pageContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = throttle(() => {
            const offset = pageContainerRef.current?.scrollTop || 0;
            setIsScrolled(offset > 0);
        }, 200);

        if (pageContainerRef.current) {
            pageContainerRef.current.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (pageContainerRef.current) {
                pageContainerRef.current.removeEventListener(
                    "scroll",
                    handleScroll
                );
            }
        };
    }, []);

    return (
        <Block>
            <PageContainer ref={pageContainerRef}>
                <Gnb isScrolled={isScrolled} />
                <PageContents>{children}</PageContents>
                <Footer />
            </PageContainer>
        </Block>
    );
}

const Block = styled.div`
    height: 100%;
`;

const PageContainer = styled.div`
    ${hideScrollBar}
    position: relative;
    background-color: ${palette.white0};
    max-width: 768px;
    height: 100%;
    overflow: auto;
    box-shadow: ${palette.gray2}${withOpacity(0.2)} 0px 0px 20px;
    margin: 0 auto;
`;

const PageContents = styled.div`
    min-height: 100%;
`;

export default PageTemplate;
