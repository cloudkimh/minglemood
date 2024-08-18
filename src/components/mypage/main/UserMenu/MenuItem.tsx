import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../../../lib/styles/palette";
import { ReactElement } from "react";

export type MenuItemProps = {
    to?: string; // to를 선택적으로 변경
    text: string;
    icon: ReactElement;
    onClick?: () => void;
};

function MenuItem(props: MenuItemProps) {
    const { to, text, icon, onClick } = props;
    if (onClick) {
        return (
            <Block as="button" onClick={onClick}>
                {icon}
                {text}
            </Block>
        );
    }

    return (
        <Block as={Link} to={to!}> {/* to가 undefined일 수 있으므로 '!'로 확신 표시 */}
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
