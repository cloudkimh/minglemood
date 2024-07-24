import styled, { css } from "styled-components";
import Dropdown from "../../basics/Dropdown";
import palette from "../../../lib/styles/palette";
import {
    basicDropdownItemStyle,
    basicDropdownMenuStyle,
} from "../../basics/Dropdown/styles";
import { ReactComponent as ChevonIco } from "../../../assets/icon/chevron-up.svg";

export type CreditCardOptionProps = {
    currentValue: string | null;
    handleSelect: (value: string) => void;
};

const CARD_LIST = [
    "기업 비씨",
    "광주은행",
    "롯데카드",
    "KDB산업은행",
    "비씨카드",
    "삼성카드",
    "새마을금고",
    "신한카드",
    "광주은행",
];

function CreditCardOption(props: CreditCardOptionProps) {
    const { currentValue, handleSelect } = props;

    return (
        <Block>
            <Dropdown
                render={({ toggleMenu, isOpened }) => (
                    <>
                        <OptionTrigger
                            onClick={toggleMenu}
                            active={!!currentValue}
                        >
                            {currentValue
                                ? currentValue
                                : "[필수] 카드사를 선택해주세요."}
                            <DropdownIcon rotated={isOpened} />
                        </OptionTrigger>
                        <OptionMenu visible={isOpened}>
                            {CARD_LIST.map((aCard) => (
                                <MenuItem
                                    onClick={() => {
                                        handleSelect(aCard);
                                        toggleMenu();
                                    }}
                                >
                                    {aCard}
                                </MenuItem>
                            ))}
                        </OptionMenu>
                    </>
                )}
            />
        </Block>
    );
}

const Block = styled.div`
    margin-top: 5px;
`;

const OptionTrigger = styled.div<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    font-size: 12px;
    border-radius: 5px;
    cursor: pointer;
    padding: 13px 10px;

    ${(props) =>
        props.active
            ? css`
                  color: ${palette.black0};
                  background-color: ${palette.white0};
                  border: 1px solid ${palette.gray2};
              `
            : css`
                  color: ${palette.gray1};
                  background-color: ${palette.white1};
                  border: 1px solid ${palette.white2};
              `}
`;

const DropdownIcon = styled(ChevonIco)<{ rotated: boolean }>`
    ${(props) =>
        props.rotated &&
        css`
            transform: rotate(180deg);
        `}
`;

const OptionMenu = styled(Dropdown.Menu)`
    ${basicDropdownMenuStyle}
    margin-top: 10px;
`;

const MenuItem = styled.li`
    ${basicDropdownItemStyle}
`;

export default CreditCardOption;
