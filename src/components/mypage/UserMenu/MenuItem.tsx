import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type MenuItemProps = {
    to: string;
    text: string;
};

function MenuItem(props: MenuItemProps) {
    const { to, text } = props;

    return (
        <Link to={to}>
            <Block>{text}</Block>
        </Link>
    );
}

const Block = styled.li`
    font-size: 16px;
    font-weight: 700;
    color: ${palette.black0};
    padding: 18px 0;
`;

export default MenuItem;
