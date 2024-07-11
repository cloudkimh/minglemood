import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type CourseInfoProps = {
    title: string;
    region: string;
    discountRate?: number;
    price: number;
};

function CourseInfo(props: CourseInfoProps) {
    const { title, region, discountRate, price } = props;

    return (
        <Block>
            <Title>{title}</Title>
            <Region>{region}</Region>
            <PriceBlock>
                {discountRate && <Discount>{discountRate}%</Discount>}
                <Price>
                    {price.toLocaleString()}
                    <span>원</span>
                </Price>
            </PriceBlock>
        </Block>
    );
}

const Block = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    word-break: keep-all;
`;

const Region = styled.p`
    font-size: 14px;
    font-weight: 700;
    color: ${palette.gray6};
    margin-top: 10px;
`;

const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Price = styled.p`
    font-size: 20px;
    font-weight: 800;

    span {
        font-size: 14px;
    }
`;

const Discount = styled.p`
    color: ${palette.red500};
    font-size: 20px;
    font-weight: 800;
    margin-right: 10px;
`;

export default CourseInfo;
