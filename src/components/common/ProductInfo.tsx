import styled from "styled-components";
import ImageWithFallback from "../basics/ImageWithFallback";
import palette from "../../lib/styles/palette";
import { multiLineEllipsis } from "../../lib/styles/utils";
import Icon from "../basics/Icon";

export type ProductInfoProps = {
    thumbnail: string;
    region: string;
    title: string;
    rating: number;
    reviewCnt: number;
};

function ProductInfo(props: ProductInfoProps) {
    const { thumbnail, region, title, rating, reviewCnt } = props;

    return (
        <Block>
            <Thumbnail path={thumbnail} alt="모임 썸네일" />
            <InfoBlock>
                <Region>{region}</Region>
                <Title>{title}</Title>
                <RatingBlock>
                    <RatingIco name="star" />
                    <Rating>{`${rating} (${reviewCnt})`}</Rating>
                </RatingBlock>
            </InfoBlock>
        </Block>
    );
}

const Block = styled.div`
    display: grid;
    grid-template-columns: 90px 1fr;
    column-gap: 10px;
    padding: 0 20px;
`;

const Thumbnail = styled(ImageWithFallback)`
    width: 90px;
    height: 90px;
    border-radius: 5px;
`;

const InfoBlock = styled.div`
    padding: 3px 0;
`;

const Region = styled.p`
    font-size: 12px;
    color: ${palette.gray6};
`;

const Title = styled.div`
    ${multiLineEllipsis(2)}
    height: 34px;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    margin-top: 6px;
`;

const RatingBlock = styled.div`
    display: flex;
    align-items: center;
    column-gap: 3px;
    margin-top: 16px;
`;

const RatingIco = styled(Icon)`
    margin-top: -2px;
`;

const Rating = styled.p`
    font-size: 12px;
    color: ${palette.gray6};
`;

export default ProductInfo;
