import { ReactElement } from "react";
import styled, { css } from "styled-components";

export type SectionHeaderProps = {
    title: ReactElement;
    button?: ReactElement;
};

function SectionHeader(props: SectionHeaderProps) {
    const { title, button } = props;

    return (
        <Block hasBtn={!!button}>
            {title}
            {button}
        </Block>
    );
}

const Block = styled.header<{ hasBtn: boolean }>`
    display: flex;
    align-items: center;

    ${(props) =>
        props.hasBtn
            ? css`
                  justify-content: space-between;
              `
            : css`
                  justify-content: start;
              `}
`;

export default SectionHeader;
