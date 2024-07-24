import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { ReactNode, useEffect, useRef, useState } from "react";
import { hideScrollBar, withOpacity } from "../../lib/styles/utils";
import Footer from "../common/Footer";
import Gnb from "../common/Gnb";
import { throttle } from "lodash";

type PageTemplateProps = {
    gnbVisible?: boolean;
    scrollGnbTransition?: boolean;
    children: ReactNode;
};

function PageTemplate(props: PageTemplateProps) {
    const { gnbVisible, scrollGnbTransition, children } = props;
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
        <Block ref={pageContainerRef}>
            {gnbVisible && (
                <Gnb
                    isTransparent={scrollGnbTransition ? !isScrolled : false}
                />
            )}
            <PageContents>{children}</PageContents>
            <Footer />
        </Block>
    );
}

const Block = styled.div`
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
