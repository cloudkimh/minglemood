import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type InfoRowProps = {
    label: string;
    value: string;
};

function InfoRow(props: InfoRowProps) {
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
    justify-content: space-between;
`;

const Label = styled.p`
    color: ${palette.gray1};
    font-size: 12px;
`;

const Value = styled.p`
    font-size: 12px;
`;

export default InfoRow;
