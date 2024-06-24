import { ReactNode } from "react";
import styled from "styled-components";
import palette from "../../../../lib/styles/palette";

export type MenuSectionProps = {
    title: string;
    children: ReactNode;
};

function MenuSection(props: MenuSectionProps) {
    const { title, children } = props;

    return (
        <Block>
            <Title>{title}</Title>
            <MenuContainer>{children}</MenuContainer>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 30px;
`;

const Title = styled.header`
    font-size: 14px;
    color ${palette.gray2};
    padding: 10px 0;
`;

const MenuContainer = styled.ul``;

export default MenuSection;
