import styled from "styled-components";
import ModalTemplate from "../../basics/ModalTemplate";
import { ModalBody } from "../../basics/ModalTemplate/styles";
import palette from "../../../lib/styles/palette";
import CheckBoxOptions from "./CheckBoxOptions";
import SliderOptions from "./SliderOptions";
import { Cost, FilterSettings, Option } from "../types";
import { useEffect, useState } from "react";
import { MAX_COST, MIN_COST } from "../variables";
import { ReactComponent as CloseIco } from "../../../assets/icon/cross.svg";

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

    useEffect(() => {
        setCurrentValues(values);
    }, [values]);

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
                <Header>
                    <Title>필터</Title>
                    <CloseBtn onClick={onClose}>
                        <CloseIco />
                    </CloseBtn>
                </Header>
                <Wrapper>
                    <CheckBoxOptions
                        title="지역"
                        optionName="locations"
                        options={sampleLocations}
                        selectedOptions={currentValues.locations}
                        handleSelectOption={handleSelectLocations}
                    />
                    <CheckBoxOptions
                        title="모임 종류"
                        optionName="types"
                        options={sampleTypes}
                        selectedOptions={currentValues.types}
                        handleSelectOption={handleSelectTypes}
                    />
                    <SliderOptions
                        title="비용"
                        min={MIN_COST}
                        max={MAX_COST}
                        step={10000}
                        initialValues={currentValues.cost}
                        handleChange={handleChangeCost}
                    />
                </Wrapper>
                <BottomBlock>
                    <SummitBtn onClick={onSubmit}>필터 적용</SummitBtn>
                </BottomBlock>
            </StyledModalBody>
        </ModalTemplate>
    );
}

const StyledModalBody = styled(ModalBody)`
    position: relative;
    height: calc(100% - 100px);
    padding-top: 33px;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 20px;
`;

const Title = styled.p`
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

const CloseBtn = styled.button`
    display: grid;
    place-content: center;
    width: 32px;
    height: 32px;
`;

const Wrapper = styled.div`
    height: 100%;
    overflow-y: scroll;
    overscroll-behavior: contain;
    scrollbar-width: none;
    padding-bottom: 200px;
`;

const BottomBlock = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${palette.white0};
    padding: 20px 20px 40px;
`;

const SummitBtn = styled.button`
    width: 100%;
    height: 40px;
    font-size: 13px;
    font-weight: 700;
    color: ${palette.white0};
    border-radius: 5px;
    background-color: ${palette.red500};
    padding: 12px 0;
`;

export default FilterModal;
