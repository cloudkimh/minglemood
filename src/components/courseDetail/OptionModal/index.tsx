import styled from "styled-components";
import ModalTemplate from "../../common/ModalTemplate";
import { ModalBody } from "../../common/ModalTemplate/styles";
import palette from "../../../lib/styles/palette";
import DateOption from "./DateOption";
import { useState } from "react";
import useToggle from "../../../lib/hooks/useToggle";
import { HorizontalBar } from "../../common/styles/Common";
import ProductOption from "./ProductOption";
import SelectedOptionBox from "./SelectedOptionBox";
import SummaryBar from "./SummaryBar";

export type OptionModalProps = {
    visible: boolean;
    isLiked: boolean;
    likes: number;
    handleToggleLike: () => void;
    handleClose: () => void;
};

type Option = {
    id: number;
    name: string;
    price: number;
    count: number;
};

const sampleName = "성별";
const sampleOptions = [
    {
        id: 1,
        name: "[부산] 남 (정가)",
        price: 49000,
    },
    {
        id: 2,
        name: "[부산] 여 (정가)",
        price: 49000,
    },
    {
        id: 3,
        name: "[부산] 남 (리뷰 이벤트)",
        price: 49000,
    },
    {
        id: 4,
        name: "[부산] 여 (리뷰 이벤트)",
        price: 49000,
    },
];

function OptionModal(props: OptionModalProps) {
    const { visible, isLiked, likes, handleToggleLike, handleClose } = props;
    const [selectedDate, setSelectedDate] = useState(
        "5월 17일 (금) 08:00 ~ 10:00"
    );
    const [calendarOpened, toggleCalendarOpened] = useToggle(false);
    const [selectedOptions, setSelectedOptions] = useState<Array<Option>>([]);
    const isOptionSelected = selectedOptions.length > 0;

    const onChangeBtnClick = () => {
        toggleCalendarOpened();
    };

    const appendOption = (option: Option) => {
        const next = [...selectedOptions, { ...option, count: 1 }];
        setSelectedOptions(next);
    };

    const removeOption = (option: Option) => {
        const next = selectedOptions.filter(
            (selectedOption) => selectedOption.id !== option.id
        );
        setSelectedOptions(next);
    };

    const countUpOption = (option: Option) => {
        const next: Array<Option> = [];
        selectedOptions.forEach((selectedOption) => {
            if (selectedOption.id === option.id) {
                next.push({
                    ...selectedOption,
                    count: selectedOption.count + 1,
                });
            } else {
                next.push(selectedOption);
            }
        });
        setSelectedOptions(next);
    };

    const countDownOption = (option: Option) => {
        const next: Array<Option> = [];
        selectedOptions.forEach((selectedOption) => {
            if (selectedOption.id === option.id) {
                if (selectedOption.count > 1) {
                    next.push({
                        ...selectedOption,
                        count: selectedOption.count - 1,
                    });
                }
            } else {
                next.push(selectedOption);
            }
        });
        setSelectedOptions(next);
    };

    const handleOptionClick = (option: Option) => {
        const optionAlreadySelected = selectedOptions.find(
            (selectedOption) => selectedOption.id === option.id
        );

        if (optionAlreadySelected) {
            countUpOption(option);
        } else {
            appendOption(option);
        }
    };

    const getTotalPrice = () => {
        const initPrice = 0;
        return selectedOptions.reduce(
            (accumulator, aOption) =>
                accumulator + aOption.price * aOption.count,
            initPrice
        );
    };

    const getTotalCount = () => {
        const initCount = 0;
        return selectedOptions.reduce(
            (accumulator, aOption) => accumulator + aOption.count,
            initCount
        );
    };

    const onClose = () => {
        setSelectedOptions([]);
        handleClose();
    };

    const handleSubmit = () => {};

    return (
        <ModalTemplate visible={visible} handleClickLayer={onClose}>
            <StyledModalBody>
                <ToggleBtn onClick={onClose}>
                    <ChevronDownIco />
                </ToggleBtn>
                <Wrapper>
                    <DateOption
                        selectedDate={selectedDate}
                        onChangeBtnClick={onChangeBtnClick}
                    />
                    <StyledHorizontalBar />
                    <ProductOption
                        optionName={sampleName}
                        optionList={sampleOptions}
                        handleOptionClick={handleOptionClick}
                    />
                    {selectedOptions.map((aOption) => (
                        <SelectedOptionBox
                            option={aOption}
                            handleCountUp={countUpOption}
                            handleCountDown={countDownOption}
                            handleClose={removeOption}
                        />
                    ))}
                </Wrapper>
                <SummaryBar
                    visible={isOptionSelected}
                    totalPrice={getTotalPrice()}
                    totalCount={getTotalCount()}
                    isLiked={isLiked}
                    likes={likes}
                    handleToggleLike={handleToggleLike}
                    handleSubmit={handleSubmit}
                />
            </StyledModalBody>
        </ModalTemplate>
    );
}

const StyledModalBody = styled(ModalBody)`
    position: relative;
    height: 50vh;
    padding: 24px 20px 0;
`;

const ToggleBtn = styled.button`
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    max-width: 66px;
    width: 66px;
    height: 21px;
    background-color: ${palette.white0};
    border: 1px solid ${palette.gray5};
    border-bottom: none;
    border-top-left-radius: 35px 40px;
    border-top-right-radius: 35px 40px;
    cursor: pointer;
`;

const Wrapper = styled.div`
    height: 100%;
    overflow-y: scroll;
    overscroll-behavior: contain;
    scrollbar-width: none;
    padding-bottom: 140px;
`;

const ChevronDownIco = styled.span`
    width: 16px;
    height: 10px;
    background-color: ${palette.red2};
`;

const StyledHorizontalBar = styled(HorizontalBar)`
    margin: 18px 0 18px;
`;

export default OptionModal;
