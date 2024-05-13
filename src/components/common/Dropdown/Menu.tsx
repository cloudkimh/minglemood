import OutsideClickHandler from "react-outside-click-handler";
import useDisappearingAnimationTime from "../../../lib/hooks/useDisappearingAnimation";

export type MenuProps = {
    children: React.ReactNode;
    isOpened: boolean;
    className?: string;
    animationTime?: number;
    onOutside: Function;
};

function Menu(props: MenuProps) {
    const { children, isOpened, className, animationTime, onOutside } = props;
    const [disappearingAnimeFinished] = useDisappearingAnimationTime({
        startDisapperingAnime: !isOpened,
        animationTime: animationTime ?? 150,
    });

    if (disappearingAnimeFinished) {
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
