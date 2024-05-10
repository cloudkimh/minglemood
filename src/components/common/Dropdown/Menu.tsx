import OutsideClickHandler from "react-outside-click-handler";
import useDisapearingAnime from "../../../lib/hooks/useDisapearingAnime";

export type MenuProps = {
    children: React.ReactNode;
    isOpened: boolean;
    className?: string;
    animationTime?: number;
    onOutside: Function;
};

function Menu(props: MenuProps) {
    const { children, isOpened, className, animationTime, onOutside } = props;
    const { isDisapeared } = useDisapearingAnime(
        isOpened,
        animationTime ?? 150
    );

    if (isDisapeared) {
        return null;
    }

    return (
        <OutsideClickHandler
            onOutsideClick={(e) => {
                onOutside();
            }}
        >
            <div className={className}>{children}</div>
        </OutsideClickHandler>
    );
}

export default Menu;
