import styled from "styled-components";
import ImageWithFallback from "../common/ImageWithFallback";
import palette from "../../lib/styles/palette";
import { ReactComponent as StarIco } from "../../assets/icon/star.svg";
import { multiLineEllipsis } from "../../lib/styles/utils";

export type ProductInfoProps = {
    thumbnail: string;
    region: string;
    title: string;
    rate: number;
    reviewCnt: number;
};

function ProductInfo(props: ProductInfoProps) {
    const { thumbnail, region, title, rate, reviewCnt } = props;

    return (
        <Block>
            <Thumbnail path={thumbnail} alt="모임 썸네일" />
            <InfoBlock>
                <Region>{region}</Region>
                <Title>{title}</Title>
                <RateBlock>
                    <StarIco />
                    <Rate>{`${rate} (${reviewCnt})`}</Rate>
                </RateBlock>
            </InfoBlock>
        </Block>
    );
}

const Block = styled.div`
    display: grid;
    grid-template-columns: 90px 1fr;
    column-gap: 10px;
    margin-top: 130px;
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

const RateBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;
`;

const Rate = styled.p`
    font-size: 12px;
    color: ${palette.gray6};
    margin-left: 3px;
`;

export default ProductInfo;
