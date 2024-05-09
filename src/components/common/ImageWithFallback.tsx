import styled from "styled-components";

import fallbackImg from "../../static/imgs/global/fall_back_img.svg";
import emptyImg from "../../static/imgs/global/empty_img.png";

export interface ImageWithFallbackProps
    extends Omit<React.HTMLProps<HTMLImageElement>, "src"> {
    path: string;
    className?: string;
}

function ImageWithFallback(props: ImageWithFallbackProps) {
    const { path, className, ...rest } = props;
    const htmlProps = rest as any;

    return (
        <Block
            className={className}
            style={{
                backgroundImage: `url(${path}), url(${fallbackImg})`,
            }}
            src={emptyImg}
            {...htmlProps}
        />
    );
}

const Block = styled.img`
    background-position: center;
    background-size: cover;
`;

export default ImageWithFallback;
