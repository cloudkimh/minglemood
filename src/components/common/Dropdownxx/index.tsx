import { ReactNode, useState } from "react";
import Trigger from "./Trigger";
import Menu from "./Menu";
import styled from "styled-components";
import media from "../../../lib/styles/media";
import ModalTypeMenu from "./ModalTypeMenu";

export type DropdownxxProps = {
    className?: string;
    render: (params: {
        openMenu: () => void;
        closeMenu: () => void;
        isOpened: boolean;
    }) => ReactNode;
};

function Dropdownxx(props: DropdownxxProps) {
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

Dropdownxx.Trigger = Trigger;
Dropdownxx.Menu = Menu;
Dropdownxx.ModalTypeMenu = ModalTypeMenu;

export default Dropdownxx;
