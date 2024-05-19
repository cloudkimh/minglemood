import { ReactNode } from "react";
import Menu from "./Menu";
import useToggle from "../../../lib/hooks/useToggle";

export type DropdownProps = {
    render: (params: {
        toggleMenu: () => void;
        openMenu: () => void;
        closeMenu: () => void;
        isOpened: boolean;
    }) => ReactNode;
    className?: string;
};

function Dropdown(props: DropdownProps) {
    const { className, render } = props;
    const [isOpened, toggleIsOpened, setIsOpened] = useToggle(false);

    const openMenu = () => setIsOpened(true);
    const closeMenu = () => setIsOpened(false);

    return (
        <div className={className}>
            {render({
                toggleMenu: toggleIsOpened,
                openMenu,
                closeMenu,
                isOpened,
            })}
        </div>
    );
}

Dropdown.Menu = Menu;

export default Dropdown;
