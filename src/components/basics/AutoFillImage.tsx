import { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import styled from "styled-components";

type AutoFillImageProps = ImgHTMLAttributes<HTMLImageElement> & {
    className?: string;
};

function AutoFillImage(props: AutoFillImageProps) {
    const { className, ...htmlProps } = props;
    const [isPortrait, setIsPortrait] = useState<boolean | null>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const img = imgRef.current;

        const handleLoad = () => {
            if (img) {
                const width = img.naturalWidth;
                const height = img.naturalHeight;

                if (width > height) {
                    setIsPortrait(false);
                } else {
                    setIsPortrait(true);
                }
            }
        };

        if (img?.complete) {
            handleLoad();
        } else {
            img?.addEventListener("load", handleLoad);
            return () => img?.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <Image
            className={className}
            ref={imgRef}
            isPortrait={isPortrait}
            {...htmlProps}
        />
    );
}

const Image = styled.img<{ isPortrait: boolean | null }>`
    ${(props) => props.isPortrait === null && ""}
    ${(props) => props.isPortrait === true && "height: 100%; width: auto;"}
    ${(props) => props.isPortrait === false && "width: 100%; height: auto;"}
`;

export default AutoFillImage;
