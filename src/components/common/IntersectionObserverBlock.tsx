import styled from "styled-components";
import useIntersectionObserver from "../../lib/hooks/useIntersectionObserver";
import { ElementType, ReactNode } from "react";

export type IntersectionObserverBlockProps = {
    onHidden?: (observer: IntersectionObserver) => any;
    onVisible?: (observer: IntersectionObserver) => any;
    children: ReactNode;
    options?: IntersectionObserverInit;
    as?: ElementType;
    className?: string;
};

function IntersectionObserverBlock(props: IntersectionObserverBlockProps) {
    const { onHidden, onVisible, children, options, as, className } = props;
    const defaultOptions: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const handleIntersection: IntersectionObserverCallback = (
        entries,
        observer
    ) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (onVisible) {
                    onVisible(observer);
                }
            } else {
                if (onHidden) {
                    onHidden(observer);
                }
            }
        });
    };

    const targetRef = useIntersectionObserver(
        handleIntersection,
        options ?? defaultOptions
    );

    return (
        <Block as={as} ref={targetRef} className={className}>
            {children}
        </Block>
    );
}

const Block = styled.div``;

export default IntersectionObserverBlock;
