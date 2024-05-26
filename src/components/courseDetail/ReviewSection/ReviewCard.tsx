import styled from "styled-components";

export type ReviewCardProps = {
    reviewInfo: {
        photo: string;
        alias: string;
        avatar: string;
        review: string;
    };
};

function ReviewCard(props: ReviewCardProps) {
    const { reviewInfo } = props;

    return (
        <>
            <Block>
                <Photo src={reviewInfo.photo} alt="리뷰 사진" />
            </Block>
        </>
    );
}

const Block = styled.div`
    width: 135px;
    flex-shrink: 0;

    & + & {
        margin-left: 5px;
    }
`;

const Photo = styled.img`
    width: 100%;
    aspect-ratio: 1 / 1;
`;

export default ReviewCard;
