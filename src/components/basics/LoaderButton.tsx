import { ReactNode } from "react";
import { ButtonLoader } from "../common/styles/Common";
import Loader from "./Loader";

export interface LoaderButtonProps
    extends Omit<React.HTMLProps<HTMLButtonElement>, "as"> {
    isLoading: boolean;
    children: ReactNode;
    className?: string;
}

function LoaderButton(props: LoaderButtonProps) {
    const { isLoading, children, className, ...rest } = props;
    const htmlProps = rest as any;

    return (
        <button className={className} disabled={isLoading} {...htmlProps}>
            {isLoading ? <ButtonLoader as={Loader} /> : children}
        </button>
    );
}

LoaderButton.Loader = ButtonLoader;

export default LoaderButton;
