import styled, { css } from "styled-components";
import starFull from "../../../assets/icon/star-full.svg";
import starHalf from "../../../assets/icon/star-half.svg";
import starEmpty from "../../../assets/icon/star-empty.svg";
import { SectionHeader } from "./styles";

export type RatingProps = {
    rating: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Rating(props: RatingProps) {
    const { rating, onChange } = props;

    const getStarState = (condition: number) => {
        if (rating < condition) {
            return "empty";
        } else if (rating === condition) {
            return "half";
        } else {
            return "full";
        }
    };

    return (
        <Block>
            <SectionHeader>모임은 만족하셨나요?</SectionHeader>
            <Wrapper>
                <StarContainer>
                    <Star state={getStarState(1)} />
                    <Star state={getStarState(3)} />
                    <Star state={getStarState(5)} />
                    <Star state={getStarState(7)} />
                    <Star state={getStarState(9)} />
                </StarContainer>
                <HiddenSlider
                    type="range"
                    min="1"
                    max="10"
                    onChange={onChange}
                    value={rating}
                />
            </Wrapper>
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
    margin-top: 30px;
`;

const Wrapper = styled.div`
    position: relative;
    margin-top: 10px;
`;

const StarContainer = styled.div<{}>`
    display: flex;
    align-items: center;
    column-gap: 8px;
`;

const Star = styled.div<{ state: "empty" | "half" | "full" }>`
    width: 45px;
    height: 45px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    ${(props) =>
        props.state === "empty" &&
        css`
            background-image: url(${starEmpty});
        `}
    ${(props) =>
        props.state === "half" &&
        css`
            background-image: url(${starHalf});
        `}
    ${(props) =>
        props.state === "full" &&
        css`
            background-image: url(${starFull});
        `}
`;

const HiddenSlider = styled.input`
    position: absolute;
    left: 0;
    top: 0;
    -webkit-appearance: none;
    width: 260px;
    height: 45px;
    outline: none;
    opacity: 0;
    transition: opacity 0.2s;

    &:hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`;

export default Rating;
