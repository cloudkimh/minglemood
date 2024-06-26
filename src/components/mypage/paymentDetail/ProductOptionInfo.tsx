import OptionInfo from "../../common/OptionInfo";

export type ProductOptionInfoProps = {
    date: string;
    count: number;
    price: number;
};

function ProductOptionInfo(props: ProductOptionInfoProps) {
    const { date, count, price } = props;

    return (
        <OptionInfo.Container title="옵션정보">
            <OptionInfo.InfoRow label="일정" value={date} />
            <OptionInfo.InfoRow label="인원" value={`${count} 인`} />
            <OptionInfo.InfoRow
                label="가격"
                value={`${price.toLocaleString()} 원`}
            />
        </OptionInfo.Container>
    );
}

export default ProductOptionInfo;
