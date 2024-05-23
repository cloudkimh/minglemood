import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { ReactNode } from "react";
import { hideScrollBar, withOpacity } from "../../lib/styles/utils";
import Gnb from "./Gnb";
import Footer from "./Footer";

type PageTemplateProps = {
    children: ReactNode;
};

function PageTemplate(props: PageTemplateProps) {
    const { children } = props;

    return (
        <Block>
            <PageContainer>
                <Gnb />
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
    padding-top: 80px;
    margin: 0 auto;
`;

const PageContents = styled.div`
    min-height: 100%;
`;

export default PageTemplate;
