import React, { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { withOpacity } from "../../lib/styles/utils";
import { setPreventScroll } from "../../lib/utils";

export type ModalTemplateProp = {
    open: boolean;
    children: ReactNode;
    onClick?: Function;
    className?: string;
};

function ModalTemplate(props: ModalTemplateProp) {
    const { open, children, onClick, className } = props;
    const mounted = useRef<boolean>(false);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        }

        return () => {
            setPreventScroll(false);
        };
    }, []);

    if (mounted.current && open) {
        setPreventScroll(true);
    } else if (mounted.current && !open) {
        setPreventScroll(false);
    }

    const onLayerClick = (e: any) => {
        if (onClick && e.target.classList.contains("modal-layer")) {
            onClick();
        }
    };

    return open ? (
        <BackgroundLayer
            className={["modal-layer", className].join(" ")}
            onClick={onClick ? onLayerClick : undefined}
        >
            {children}
        </BackgroundLayer>
    ) : null;
}

const BackgroundLayer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
    z-index: 1000;
    transition: opacity 0.2s;
    background-color: ${palette.black0}${withOpacity(0.85)};

    ${media.mobile} {
        grid-template-columns: 100%;
        grid-template-rows: 100%;
        padding-top: 60px;
    }
`;

export default ModalTemplate;
