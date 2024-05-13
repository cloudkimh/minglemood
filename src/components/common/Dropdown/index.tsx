import { ReactNode, useState } from "react";
import Trigger from "./Trigger";
import Menu from "./Menu";
import styled from "styled-components";
import media from "../../../lib/styles/media";

export type DropdownProps = {
    className?: string;
    render: (params: {
        openMenu: () => void;
        closeMenu: () => void;
        isOpened: boolean;
    }) => ReactNode;
};

function Dropdown(props: DropdownProps) {
    const { className, render } = props;
    const [isOpened, setIsOpened] = useState(false);

    const openMenu = () => setIsOpened(true);
    const closeMenu = () => setIsOpened(false);

    return (
        <Block className={className}>
            {render({
                openMenu,
                closeMenu,
                isOpened,
            })}
        </Block>
    );
}

const Block = styled.div`
    position: relative;

    ${media.mobile} {
        position: static;
    }
`;

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;

export default Dropdown;
