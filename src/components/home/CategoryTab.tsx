import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { ReactNode } from "react";
import { withOpacity } from "../../lib/styles/utils";
import ImageWithFallback from "../basics/ImageWithFallback";

export type CategoryTabProps = {
    image: string;
    children?: ReactNode;
};

function CategoryTab(props: CategoryTabProps) {
    const { image, children } = props;

    return (
        <Block>
            <Inner>
                <Image path={image} alt="카테고리 사진" />
                <Layer>{children}</Layer>
            </Inner>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 100%;
`;

const Inner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    overflow: hidden;
`;

const Image = styled(ImageWithFallback)`
    width: 100%;
    height: 100%;
`;

const Layer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
    background-color: ${palette.black2}${withOpacity(0.6)};
`;

export default CategoryTab;
