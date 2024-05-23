import OutsideClickHandler from "react-outside-click-handler";
import useDisappearingAnimationTime from "../../../lib/hooks/useDisappearingAnimation";

export type MenuProps = {
    visible: boolean;
    animationTime?: number;
    onBlur?: Function;
    className?: string;
    children: React.ReactNode;
};

function Menu(props: MenuProps) {
    const { visible, animationTime = 0, onBlur, children, className } = props;
    const [disappeared] = useDisappearingAnimationTime({
        startDisappearing: !visible,
        animationTime,
    });

    if (disappeared) {
        return null;
    }

    return (
        <OutsideClickHandler
            onOutsideClick={(e) => {
                if (onBlur) {
                    onBlur();
                }
            }}
        >
            <ul className={className}>{children}</ul>
        </OutsideClickHandler>
    );
}

export default Menu;
