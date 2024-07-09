import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";
import Icon from "../../basics/Icon";

export type SelectedOptionBoxProps = {
    option: {
        id: number;
        name: string;
        price: number;
        count: number;
    };
    handleCountUp: Function;
    handleCountDown: Function;
    handleClose: Function;
};

function SelectedOptionBox(props: SelectedOptionBoxProps) {
    const { option, handleCountUp, handleCountDown, handleClose } = props;
    const totalPrice = option.price * option.count;

    return (
        <Block>
            <OptionNameBlock>
                <OptionName>{option.name}</OptionName>
                <CloseBtn
                    onClick={() => {
                        handleClose(option);
                    }}
                >
                    <CloseIco name="cross" />
                </CloseBtn>
            </OptionNameBlock>
            <PriceBlock>
                <CountBlock>
                    <CountBtn
                        role="minus"
                        disabled={option.count === 1}
                        onClick={() => {
                            handleCountDown(option);
                        }}
                    >
                        <Icon name="minus" />
                    </CountBtn>
                    <Count>{option.count}</Count>
                    <CountBtn
                        role="add"
                        onClick={() => {
                            handleCountUp(option);
                        }}
                    >
                        <Icon name="plus" />
                    </CountBtn>
                </CountBlock>
                <Price>{totalPrice.toLocaleString()}원</Price>
            </PriceBlock>
        </Block>
    );
}

const Block = styled.div`
    background-color: ${palette.white1};
    border: 1px solid ${palette.gray4};
    border-radius: 5px;
    padding: 11px 10px;
    margin-top: 10px;
`;

const OptionNameBlock = styled.div`
    display: grid;
    grid-template-columns: 1fr 20px;
    column-gap: 30px;
`;

const OptionName = styled.p`
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
`;

const CloseBtn = styled.button`
    width: 20px;
    height: 20px;
`;

const CloseIco = styled(Icon)`
    width: 20px;
    height: 20px;

    path {
        stroke: ${palette.black0};
    }
`;

const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;

const CountBlock = styled.div`
    display: flex;
    align-items: center;
`;

const CountBtn = styled.button<{ role: "add" | "minus" }>`
    display: grid;
    place-content: center;
    width: 30px;
    height: 28px;
    border-radius: 3px;

    ${(props) =>
        props.disabled
            ? css`
                  border: 1px solid ${palette.gray5};
                  background-color: ${palette.gray5};
              `
            : css`
                  border: 1px solid ${palette.gray4};
                  background-color: ${palette.white0};
              `}

    ${(props) =>
        props.role === "add"
            ? css`
                  border-left: none;
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
              `
            : css`
                  border-right: none;
                  border-top-right-radius: 0;
                  border-bottom-right-radius: 0;
              `}
`;

const Count = styled.div`
    width: 35px;
    height: 28px;
    text-align: center;
    font-size: 11px;
    color: ${palette.gray2};
    background-color: ${palette.white0};
    border: 1px solid ${palette.gray4};
    padding: 9px 0 8px;
`;

const Price = styled.p`
    font-size: 13px;
    font-weight: 700;
    color: ${palette.black0};
`;

export default SelectedOptionBox;
