import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type InfoItemProps = {
    label: string;
    value: string;
};

function InfoItem(props: InfoItemProps) {
    const { label, value } = props;

    return (
        <Block>
            <Label>{label}</Label>
            <Value>{value}</Value>
        </Block>
    );
}

const Block = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Label = styled.p`
    font-size: 13px;
    color: ${palette.gray2};
`;

const Value = styled.p`
    font-size: 13px;
    color: ${palette.black2};
`;

export default InfoItem;
