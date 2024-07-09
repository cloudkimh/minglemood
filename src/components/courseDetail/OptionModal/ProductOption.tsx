import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";
import Dropdown from "../../basics/Dropdown";
import Icon from "../../basics/Icon";

export type ProductOptionProps = {
    optionName: string;
    optionList: Array<{
        id: number;
        name: string;
        price: number;
        count: number;
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
                            <ChevronIco name="chevron-up" active={isOpened} />
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
                                    <PriceBlock>
                                        <OptionPrice>
                                            {aOption.price.toLocaleString()}원
                                        </OptionPrice>
                                        <OptionStock>
                                            • {aOption.count}개 남음
                                        </OptionStock>
                                    </PriceBlock>
                                </OptionItem>
                            ))}
                        </OptionMenu>
                    </>
                )}
            />
        </Block>
    );
}

const Block = styled.div`
    margin-top: 10px;
`;

const OptionDropdown = styled(Dropdown)`
    width: 100%;
    border: 1px solid ${palette.gray4};
    border-radius: 5px;
`;

const OptionSelect = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    padding: 11px;

    ${(props) =>
        props.active
            ? css`
                  color: ${palette.black0};
                  background-color: ${palette.white1};
                  border-bottom: 1px solid ${palette.gray4};
              `
            : css`
                  color: ${palette.gray4};
              `}
`;

const ChevronIco = styled(Icon)<{ active: boolean }>`
    width: 16px;
    height: 16px;

    ${(props) =>
        props.active
            ? css`
                  path {
                      stroke: ${palette.black2};
                  }
              `
            : css`
                  transform: rotate(180deg);

                  path {
                      stroke: ${palette.gray4};
                  }
              `}
`;

const OptionMenu = styled(Dropdown.Menu)`
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: ${palette.white0};
    padding: 0 10px;
`;

const OptionItem = styled.li`
    cursor: pointer;
    padding: 11px 0 10px;

    & + & {
        border-top: 1px solid ${palette.gray5};
    }
`;

const OptionName = styled.p`
    font-size: 12px;
    color: ${palette.gray0};
`;

const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const OptionPrice = styled.p`
    font-size: 13px;
    font-weight: 700;
`;

const OptionStock = styled.span`
    font-size: 10px;
    color: ${palette.gray3};
    margin-left: 3px;
`;

export default ProductOption;
