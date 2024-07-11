import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { ReactNode } from "react";
import { hideScrollBar, withOpacity } from "../../lib/styles/utils";
import Footer from "../common/Footer";
import Gnb from "../common/Gnb";

type PageTemplatexxxProps = {
    gnbVisible?: boolean;
    children: ReactNode;
};

function PageTemplatexxx(props: PageTemplatexxxProps) {
    const { children, gnbVisible } = props;

    return (
        <Block>
            {gnbVisible && <Gnb isTransparent={false} />}
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

export default PageTemplatexxx;
