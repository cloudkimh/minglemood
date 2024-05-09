import { ReactNode } from "react";

export type TriggerProps = {
    className?: string;
    onTrigger: React.MouseEventHandler<HTMLDivElement>;
    children: ReactNode;
};

function Trigger(props: TriggerProps) {
    const { className, onTrigger, children } = props;

    return (
        <div className={className} onClick={onTrigger}>
            {children}
        </div>
    );
}

export default Trigger;
