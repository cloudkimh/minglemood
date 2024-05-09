import React, { useState } from "react";
import styled, { css } from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import OutsideClickHandler from "react-outside-click-handler";
import useToggle from "../../lib/hooks/useToggle";

import { ReactComponent as OpenIco } from "../../static/icons/purchase/ico_open.svg";
import fonts from "../../lib/styles/fonts";

export type OptionSelectProp = {
    options: {
        label: string;
        val: any;
    }[];
    setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
    initialOption?: {
        label: string;
        val: any;
    };
    onSelectOutsideClick?: Function;
    onOptionSelectorClick?: Function;
    onOptionItemClick?: Function;
    className?: string;
};

function OptionSelect(props: OptionSelectProp) {
    const {
        options,
        setSelectedOption,
        initialOption,
        onSelectOutsideClick,
        onOptionSelectorClick,
        onOptionItemClick,
        className,
    } = props;
    const [selectedLabel, setSelectedLabel] = useState<string | null>(
        initialOption ? initialOption.label : null
    );
    const [isOpen, toggleIsOpen, setIsOpen] = useToggle(false);

    return (
        <OptionSelectBlock className={className}>
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsOpen(false);
                    if (onSelectOutsideClick) {
                        onSelectOutsideClick();
                    }
                }}
            >
                <OptionSelector
                    aria-label={`현재 보기 옵션: ${selectedLabel} 클릭하여 보기옵션 선택 열기`}
                    role="button"
                    optionSelected={!!selectedLabel}
                    onClick={() => {
                        toggleIsOpen();
                        if (onOptionSelectorClick) {
                            onOptionSelectorClick();
                        }
                    }}
                >
                    <span>{selectedLabel || "옵션 선택하기"}</span>
                    <StyledOpenIco open={isOpen} />
                </OptionSelector>
            </OutsideClickHandler>
            <OptionList open={isOpen}>
                {options.map((aOption, i) => (
                    <OptionBtnWrapper
                        onClick={() => {
                            if (onOptionItemClick) {
                                onOptionItemClick();
                            }
                            setSelectedLabel(aOption.label);
                            setSelectedOption(aOption.val);
                        }}
                    >
                        <OptionItem
                            key={i}
                            isSelected={options[i].label === selectedLabel}
                        >
                            {aOption.label}
                        </OptionItem>
                    </OptionBtnWrapper>
                ))}
            </OptionList>
        </OptionSelectBlock>
    );
}

const OptionSelectBlock = styled.div`
    position: relative;
    width: 168px;

    ${media.mobile} {
        width: 128px;
    }
`;

const StyledOpenIco = styled(OpenIco)<{ open: boolean }>`
    ${(props) =>
        props.open &&
        css`
            transform: rotate(180deg);
        `}
`;

const OptionSelector = styled.div<{ optionSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: ${(props) =>
        props.optionSelected ? palette.black0 : palette.gray6};
    font-size: 18px;
    border: 1px solid ${palette.gray6};
    border-radius: 4px;
    background-color: ${palette.white0};
    cursor: pointer;
    padding: 15px 12px 13px 16px;

    ${media.mobile} {
        font-size: 14px;
        border-radius: 2px;
        padding: 11px 8px 11px 10px;
    }
`;

const OptionList = styled.ul<{ open: boolean }>`
    position: absolute;
    top: 50px;
    left: 0;
    width: 168px;
    max-height: 168px;
    overflow-y: scroll;
    background-color: ${palette.white0};
    border-radius: 4px;
    border: 1px solid ${palette.black0};
    box-shadow: 0 4px 4px #33333333;
    z-index: 1;
    transition: opacity 0.2s;
    padding: 2px 0;

    ${(props) =>
        props.open
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `}

    ${media.tablet} {
        width: 100%;
    }

    ${media.mobile} {
        top: 44px;
        max-height: 148px;
        border-radius: 2px;
    }
`;

const OptionBtnWrapper = styled.button`
    display: block;
    width: 100%;
`;

const OptionItem = styled.li<{ isSelected: boolean }>`
    ${fonts.size.scale16};
    font-size: 16px;
    font-weight: ${(props) =>
        props.isSelected ? fonts.weight.bold : fonts.weight.regular};
    color: ${(props) => (props.isSelected ? palette.purple0 : palette.black0)};
    cursor: pointer;
    transition: 0.2s background-color;
    padding: 9px 16px;

    &:hover {
        background-color: ${palette.gray4};
    }

    ${media.mobile} {
        padding: 9px;
    }
`;

export default OptionSelect;
