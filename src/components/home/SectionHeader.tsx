import { ReactNode } from "react";
import styled, { css } from "styled-components";

export type SectionHeaderProps = {
    title: string;
    button?: ReactNode;
};

function SectionHeader(props: SectionHeaderProps) {
    const { title, button } = props;

    return (
        <Block hasBtn={!!button}>
            <Title>{title}</Title>
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

const Title = styled.h2`
    font-size: 18px;
    font-weight: 800;
`;

export default SectionHeader;
