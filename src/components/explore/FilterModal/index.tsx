import styled from "styled-components";
import ModalTemplate from "../../common/ModalTemplate";
import { ModalBody } from "../../common/ModalTemplate/styles";
import palette from "../../../lib/styles/palette";
import CheckBoxOptions from "./CheckBoxOptions";
import { SectionGap } from "./styles";
import SliderOptions from "./SliderOptions";
import { Cost, FilterSettings, Option } from "../types";
import { useState } from "react";
import { MAX_COST, MIN_COST } from "../variables";

export type FilterModalProps = {
    visible: boolean;
    values: FilterSettings;
    handleClose: () => void;
    handleSubmit: (value: FilterSettings) => void;
};

const sampleLocations = [
    {
        id: 1,
        name: "수영구",
    },
    {
        id: 2,
        name: "해운대구",
    },
    {
        id: 3,
        name: "진구",
    },
    {
        id: 4,
        name: "금정구",
    },
    {
        id: 5,
        name: "남구",
    },
    {
        id: 6,
        name: "북구",
    },
    {
        id: 7,
        name: "연제구",
    },
    {
        id: 8,
        name: "사하구",
    },
];

const sampleTypes = [
    {
        id: 1,
        name: "요가",
    },
    {
        id: 2,
        name: "달리기",
    },
    {
        id: 3,
        name: "축구",
    },
    {
        id: 4,
        name: "독서",
    },
    {
        id: 5,
        name: "영화",
    },
    {
        id: 6,
        name: "등산",
    },
];

function FilterModal(props: FilterModalProps) {
    const { visible, values, handleClose, handleSubmit } = props;
    const [currentValues, setCurrentValues] = useState<FilterSettings>(values);

    const resetCurrentValues = () => setCurrentValues(values);

    const onClose = () => {
        handleClose();
        resetCurrentValues();
    };

    const handleSelectLocations = (value: Array<Option>) => {
        const nextValue = {
            ...currentValues,
            locations: value,
        };
        setCurrentValues(nextValue);
    };

    const handleSelectTypes = (value: Array<Option>) => {
        const nextValue = {
            ...currentValues,
            types: value,
        };
        setCurrentValues(nextValue);
    };

    const handleChangeCost = (value: Cost) => {
        const nextValue = {
            ...currentValues,
            cost: value,
        };
        setCurrentValues(nextValue);
    };

    const onSubmit = () => {
        handleSubmit(currentValues);
    };

    return (
        <ModalTemplate visible={visible} handleClickLayer={onClose}>
            <StyledModalBody>
                <ModalHeader>
                    <Title>필터</Title>
                    <CloseBtn onClick={onClose}>닫기</CloseBtn>
                </ModalHeader>
                <CheckBoxOptions
                    title="지역"
                    optionName="locations"
                    options={sampleLocations}
                    selectedOptions={currentValues.locations}
                    handleSelectOption={handleSelectLocations}
                />
                <SectionGap />
                <CheckBoxOptions
                    title="모임 종류"
                    optionName="types"
                    options={sampleTypes}
                    selectedOptions={currentValues.types}
                    handleSelectOption={handleSelectTypes}
                />
                <SectionGap />
                <SliderOptions
                    title="비용"
                    min={MIN_COST}
                    max={MAX_COST}
                    step={10000}
                    initialValues={currentValues.cost}
                    handleChange={handleChangeCost}
                />
                <BottomBlock>
                    <SummitBtn onClick={onSubmit}>필터 적용</SummitBtn>
                </BottomBlock>
            </StyledModalBody>
        </ModalTemplate>
    );
}

const StyledModalBody = styled(ModalBody)`
    position: relative;
    height: 90vh;
`;

const ModalHeader = styled.div`
    display: grid;
    grid-template-areas: ". title button";
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 24px 20px;
`;

const Title = styled.p`
    grid-area: title;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
`;

const CloseBtn = styled.button`
    grid-area: button;
    display: block;
    width: 32px;
    height: 32px;
    background-color: ${palette.red2};
    margin-left: auto;
`;

const BottomBlock = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 10px 20px 40px;
`;

const SummitBtn = styled.button`
    width: 100%;
    height: 56px;
    font-size: 15px;
    font-weight: 700;
    color: ${palette.white0};
    border-radius: 10px;
    background-color: ${palette.red500};
    padding: 16px;
`;

export default FilterModal;
