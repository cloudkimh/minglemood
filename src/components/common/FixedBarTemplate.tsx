import { ReactNode } from "react";
import styled, { css } from "styled-components";
import zIndexes from "../../lib/styles/zIndexes";

export type FixedBarTemplateProp = {
    locate: Locate;
    className?: string;
    children: ReactNode;
};

export type Locate = "top" | "bottom";

function FixedBarTemplate(props: FixedBarTemplateProp) {
    const { locate, className, children } = props;

    return (
        <Block className={className} locate={locate}>
            {children}
        </Block>
    );
}

const Block = styled.div<{ locate: Locate }>`
    position: fixed;
    max-width: 768px;
    width: 100%;
    z-index: ${zIndexes.Gnb}; //네이버 지도에 있는 naver corp 문구가 올라와서 Gnb로 수정함

    ${({ locate }) => {
        return locate === "top"
            ? css`
                  top: 0px;
              `
            : css`
                  bottom: 0px;
              `;
    }}
`;

export default FixedBarTemplate;
