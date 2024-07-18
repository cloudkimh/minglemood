import styled, { css } from "styled-components";
import { FixedBarContainer } from "../common/styles/Containers";
import palette from "../../lib/styles/palette";

export type BottomActionBarProps = {
    buttonAvailable: boolean;
    totalPaymentAmount: number;
};

function BottomActionBar(props: BottomActionBarProps) {
    const { buttonAvailable, totalPaymentAmount } = props;

    return (
        <FixedBarContainer locate="bottom">
            <Block>
                <SubmitBtn disabled={!buttonAvailable}>
                    {totalPaymentAmount.toLocaleString()}원 결제하기
                </SubmitBtn>
            </Block>
        </FixedBarContainer>
    );
}

const Block = styled.div`
    width: 100%;
    background-color: ${palette.white0};
    padding: 10px 20px;
`;

const SubmitBtn = styled.button`
    width: 100%;
    font-size: 13px;
    font-weight: 700;
    color: ${palette.white0};
    background-color: ${palette.red500};
    border-radius: 5px;
    padding: 12px 0;

    ${(props) =>
        props.disabled &&
        css`
            background-color: ${palette.gray4};
        `}
`;

export default BottomActionBar;
