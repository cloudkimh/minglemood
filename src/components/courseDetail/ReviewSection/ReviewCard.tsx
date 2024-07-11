import styled from "styled-components";
import ImageWithFallback from "../../basics/ImageWithFallback";

export type ReviewCardProps = {
    photo: string;
};

function ReviewCard(props: ReviewCardProps) {
    const { photo } = props;

    return (
        <Block>
            <Inner>
                <Photo path={photo} alt="리뷰 사진" />
            </Inner>
        </Block>
    );
}

const Block = styled.div`
    width: 135px;
    flex-shrink: 0;

    & + & {
        margin-left: 5px;
    }
`;

const Inner = styled.div`
    position: relative;
    padding-bottom: 100%;
`;

const Photo = styled(ImageWithFallback)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
`;

export default ReviewCard;
