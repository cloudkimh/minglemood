import styled from "styled-components";
import ModalTemplate from "../../basics/ModalTemplate";
import { ModalBody } from "../../basics/ModalTemplate/styles";
import DateOption from "./DateOption";
import { useState } from "react";
import useToggle from "../../../lib/hooks/useToggle";
import ProductOption from "./ProductOption";
import SelectedOptionBox from "./SelectedOptionBox";
import SummaryBar from "./SummaryBar";
import Calendar from "./Calendar";
import { useNavigate } from "react-router-dom";

export type OptionModalProps = {
    submitData: {
        id: number;
        thumbnail: string;
        region: string;
        title: string;
        rating: number;
        reviewCnt: number;
    };
    optionName: string;
    optionData: Array<Option>;
    visible: boolean;
    handleClose: () => void;
};

type Option = {
    id: number;
    name: string;
    price: number;
    count: number;
};

function OptionModal(props: OptionModalProps) {
    const { submitData, optionName, optionData, visible, handleClose } = props;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedOptions, setSelectedOptions] = useState<Array<Option>>([]);
    const [calendarOpened, toggleCalendarOpened, setCalendarOpened] =
        useToggle(false);
    const navigate = useNavigate();
    const isOptionSelected = selectedOptions.length > 0;

    const onClickChangeDate = () => {
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

    const handleSelectOption = (option: Option) => {
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
        setCalendarOpened(false);
        handleClose();
    };

    const onSelectDate = (date: Date) => {
        setSelectedDate(date);
        toggleCalendarOpened();
    };

    const onSubmit = () => {
        const data = {
            productType: "course",
            productInfo: {
                ...submitData,
                options: selectedOptions,
                date: selectedDate,
                count: getTotalCount(),
                price: getTotalPrice(),
            },
        };
        navigate(`/purchase/${submitData.id}`, { state: data });
    };

    return (
        <ModalTemplate visible={visible} handleClickLayer={onClose}>
            <StyledModalBody>
                <Wrapper>
                    <DateOption
                        selectedDate={selectedDate}
                        onClickChangeDate={onClickChangeDate}
                    />
                    <ProductOption
                        name={optionName}
                        data={optionData}
                        handleSelectOption={handleSelectOption}
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
                    onSubmit={onSubmit}
                />
                <Calendar
                    visible={calendarOpened}
                    selectedDate={selectedDate}
                    onSelectDate={onSelectDate}
                />
            </StyledModalBody>
        </ModalTemplate>
    );
}

const StyledModalBody = styled(ModalBody)`
    position: relative;
    height: 50vh;
    padding: 33px 20px 0;
`;

const Wrapper = styled.div`
    height: 100%;
    overflow-y: scroll;
    overscroll-behavior: contain;
    scrollbar-width: none;
    padding-bottom: 140px;
`;

export default OptionModal;
