import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";

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
                    <CloseIco />
                </CloseBtn>
            </OptionNameBlock>
            <PriceBlock>
                <CountBlock>
                    <CountBtn
                        role="minus"
                        onClick={() => {
                            handleCountDown(option);
                        }}
                    >
                        <MinusIco />
                    </CountBtn>
                    <Count>{option.count}</Count>
                    <CountBtn
                        role="add"
                        onClick={() => {
                            handleCountUp(option);
                        }}
                    >
                        <AddIco />
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
    border-radius: 10px;
    padding: 17px 17px 19px;
    margin-top: 16px;
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

const CloseIco = styled.div`
    width: 20px;
    height: 20px;
    background-color: ${palette.red2};
`;

const PriceBlock = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin-top: 26px;
`;

const CountBlock = styled.div`
    display: flex;
    align-items: center;
`;

const CountBtn = styled.button<{ role: "add" | "minus" }>`
    display: grid;
    place-content: center;
    width: 32px;
    height: 32px;
    border-radius: 5px;

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

const AddIco = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${palette.red2};
`;

const MinusIco = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${palette.red2};
`;

const Count = styled.div`
    width: 36px;
    height: 32px;
    text-align: center;
    font-size: 12px;
    background-color: ${palette.white0};
    border: 1px solid ${palette.gray4};
    padding: 10px 0 9px;
`;

const Price = styled.p`
    font-size: 16px;
    font-weight: 800;
`;

export default SelectedOptionBox;
