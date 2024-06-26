import { useState } from "react";
import styled from "styled-components";
import { SectionContainer, SectionLabel } from "./styles";
import palette from "../../../lib/styles/palette";
import RangeSlider from "../../basics/RangeSlider";
import { Cost } from "../types";

type SliderOptionsProps = {
    title: string;
    min: number;
    max: number;
    step: number;
    initialValues: Cost;
    handleChange: (value: Cost) => void;
};

function SliderOptions(props: SliderOptionsProps) {
    const { title, min, max, step, initialValues, handleChange } = props;
    const [values, setValues] = useState([
        initialValues.min,
        initialValues.max,
    ]);

    const onChange = (values: Array<number>) => {
        setValues(values);
    };

    const onFinalChange = (values: Array<number>) => {
        const [min, max] = values;
        handleChange({
            min,
            max,
        });
    };

    return (
        <SectionContainer>
            <SectionLabel>{title}</SectionLabel>
            <Output>
                {values[0].toLocaleString()}원 ~ {values[1].toLocaleString()}원
            </Output>
            <RangeSlider
                values={values}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
                onFinalChange={onFinalChange}
            />
        </SectionContainer>
    );
}

const Output = styled.output`
    font-size: 13px;
    font-weight: 700;
    color: ${palette.red500};
`;

export default SliderOptions;
