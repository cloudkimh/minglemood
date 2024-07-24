import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../../../lib/styles/palette";
import { ReactElement } from "react";

export type MenuItemProps = {
    to: string;
    text: string;
    icon: ReactElement;
};

function MenuItem(props: MenuItemProps) {
    const { to, text, icon } = props;

    return (
        <Block as={Link} to={to}>
            {icon}
            {text}
        </Block>
    );
}

const Block = styled.li`
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 12px;
    color: ${palette.black0};
    padding: 4px 0;

    & + & {
        margin-top: 10px;
    }
`;

export default MenuItem;
