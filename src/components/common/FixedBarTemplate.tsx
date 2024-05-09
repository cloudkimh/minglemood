import { ReactNode } from "react";
import styled, { css } from "styled-components";
import zIndexes from "../../lib/styles/zIndexes";

export type FixedBarTemplateProp = {
    locate: Locate;
    className?: string;
    children: ReactNode;
};

export type Locate = "TOP" | "BOTTOM";

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
    left: 0;
    width: 100%;
    z-index: ${zIndexes.FixedBarTemplate};

    ${({ locate }) => {
        return locate === "TOP"
            ? css`
                  top: 0px;
              `
            : css`
                  bottom: 0px;
              `;
    }}
`;

export default FixedBarTemplate;
