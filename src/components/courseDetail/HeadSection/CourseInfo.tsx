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
            <Price>
                {discountRate && <Discount>{discountRate}%</Discount>}
                {price.toLocaleString()}
                <span>원</span>
            </Price>
        </Block>
    );
}

const Block = styled.div`
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 18px;
    font-weight: 800;
    line-height: 28px;
    word-break: keep-all;
`;

const Region = styled.p`
    font-size: 14px;
    color: ${palette.gray6};
    margin-top: 10px;
`;

const Price = styled.p`
    font-size: 24px;
    font-weight: 800;
    margin-top: 10px;

    span:not(:first-child) {
        font-size: 14px;
        font-weight: 800;
    }
`;

const Discount = styled.span`
    color: ${palette.purple0};
    margin-right: 10px;
    transform: translateX(-1px);
`;

export default CourseInfo;
