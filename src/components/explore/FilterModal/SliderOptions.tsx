import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import styled from "styled-components";
import { SectionContainer, SectionLabel } from "./styles";
import palette from "../../../lib/styles/palette";

type SliderOptionsProps = {
    title: string;
    min: number;
    max: number;
    step: number;
    onChange: (values: number[]) => void;
};

function SliderOptions(props: SliderOptionsProps) {
    const { title, min, max, step, onChange } = props;
    const [values, setValues] = useState([min, max]);

    return (
        <SectionContainer>
            <SectionLabel>{title}</SectionLabel>
            <Output id="output">
                {values[0].toLocaleString()}원 ~ {values[1].toLocaleString()}원
            </Output>
            <Range
                values={values}
                step={step}
                min={min}
                max={max}
                onChange={(values) => {
                    setValues(values);
                    onChange(values);
                }}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: "36px",
                            display: "flex",
                            width: "calc(100% - 24px)",
                            margin: "10px auto 0",
                        }}
                    >
                        <Track
                            ref={props.ref}
                            values={values}
                            min={min}
                            max={max}
                        >
                            {children}
                        </Track>
                    </div>
                )}
                renderThumb={({ index, props, isDragged }) => (
                    <Thumb {...props} />
                )}
            />
        </SectionContainer>
    );
}

const Output = styled.output`
    font-size: 16px;
    font-weight: 800;
    color: ${palette.red500};
`;

const Track = styled.div<{ values: number[]; min: number; max: number }>`
    height: 4px;
    width: 100%;
    border-radius: 2px;
    background: ${({ values, min, max }) =>
        getTrackBackground({
            values: values,
            colors: [palette.gray5, palette.red500, palette.gray5],
            min: min,
            max: max,
        })};
    align-self: center;
`;

const Thumb = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 12px;
    background-color: ${palette.white0};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 6px #aaa;
`;

export default SliderOptions;
