import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";
import Dropdown from "../../basics/Dropdown";

export type ProductOptionProps = {
    optionName: string;
    optionList: Array<{
        id: number;
        name: string;
        price: number;
    }>;
    handleOptionClick: (option: any) => void;
};

function ProductOption(props: ProductOptionProps) {
    const { optionName, optionList, handleOptionClick } = props;

    return (
        <Block>
            <OptionDropdown
                render={({ openMenu, closeMenu, isOpened }) => (
                    <>
                        <OptionSelect
                            active={isOpened}
                            onClick={() => {
                                if (isOpened) {
                                    closeMenu();
                                } else {
                                    openMenu();
                                }
                            }}
                        >
                            {optionName}
                            <OptionIco />
                        </OptionSelect>
                        <OptionMenu visible={isOpened}>
                            {optionList.map((aOption) => (
                                <OptionItem
                                    onClick={() => {
                                        handleOptionClick(aOption);
                                        closeMenu();
                                    }}
                                >
                                    <OptionName>{aOption.name}</OptionName>
                                    <OptionPrice>
                                        {aOption.price.toLocaleString()}원
                                    </OptionPrice>
                                </OptionItem>
                            ))}
                        </OptionMenu>
                    </>
                )}
            />
        </Block>
    );
}

const Block = styled.div``;

const OptionDropdown = styled(Dropdown)`
    width: 100%;
    border: 1px solid ${palette.black0};
    border-radius: 5px;
`;

const OptionSelect = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 46px;
    font-size: 14px;
    font-weight: 800;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 14px 16px;

    ${(props) =>
        props.active
            ? css`
                  color: ${palette.black0};
                  background-color: ${palette.white1};
                  border-bottom: 1px solid ${palette.gray4};
              `
            : css`
                  color: ${palette.gray6};
              `}
`;

const OptionIco = styled.div`
    width: 17px;
    height: 17px;
    background-color: ${palette.red2};
`;

const OptionMenu = styled(Dropdown.Menu)`
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${palette.white0};
    padding: 0 16px;
`;

const OptionItem = styled.li`
    cursor: pointer;
    padding: 15px 0 14px;

    & + & {
        border-top: 1px solid ${palette.gray5};
    }
`;

const OptionName = styled.p`
    font-size: 13px;
`;

const OptionPrice = styled.p`
    font-size: 15px;
    font-weight: 800;
    margin-top: 10px;
`;

export default ProductOption;
