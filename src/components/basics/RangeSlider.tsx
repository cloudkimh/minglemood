import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";
import palette from "../../lib/styles/palette";

export type RangeSliderProps = {
    values: Array<number>;
    min: number;
    max: number;
    step: number;
    onChange: Function;
    onFinalChange: Function;
};

function RangeSlider(props: RangeSliderProps) {
    const { values, min, max, step, onChange, onFinalChange } = props;

    return (
        <Range
            values={values}
            step={step}
            min={min}
            max={max}
            onFinalChange={(values) => {
                onFinalChange(values);
            }}
            onChange={(values) => {
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
                    <Track ref={props.ref} values={values} min={min} max={max}>
                        {children}
                    </Track>
                </div>
            )}
            renderThumb={({ index, props, isDragged }) => <Thumb {...props} />}
        />
    );
}

const Track = styled.div<{ values: number[]; min: number; max: number }>`
    height: 5px;
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

export default RangeSlider;
