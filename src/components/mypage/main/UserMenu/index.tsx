import { ReactNode } from "react";
import styled from "styled-components";

export type UserMenuProps = {
    title: string;
    children: ReactNode;
};

function UserMenu(props: UserMenuProps) {
    const { title, children } = props;

    return (
        <Block>
            <Title>{title}</Title>
            <MenuContainer>{children}</MenuContainer>
        </Block>
    );
}

const Block = styled.div`
    padding: 20px;
`;

const Title = styled.header`
    font-size: 15px;
    font-weight: 700;
`;

const MenuContainer = styled.ul`
    margin-top: 20px;
`;

export default UserMenu;
