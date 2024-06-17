import styled from "styled-components";
import { SectionContainer, SectionHeader } from "./styles";
import palette from "../../lib/styles/palette";

export type PointProps = {};

const exceptionLetters = [".", "e", "E", "+", "-"];

function Point(props: PointProps) {
    return (
        <SectionContainer>
            <SectionHeader>포인트 사용</SectionHeader>
            <UserPoint>
                내 포인트 <span>0 P</span>
            </UserPoint>
            <PointInputBlock>
                <PointInputBox>
                    <PointInput
                        type="number"
                        name="point"
                        min={0}
                        placeholder="0"
                        pattern="[0-9]*"
                        inputMode="numeric"
                    />
                    <span>P</span>
                </PointInputBox>
                <UseAllBtn>모두 사용</UseAllBtn>
            </PointInputBlock>
        </SectionContainer>
    );
}

const UserPoint = styled.p`
    font-size: 14px;
    color: ${palette.gray1};
    margin-top: 20px;

    span {
        color: ${palette.gray3};
    }
`;

const PointInputBlock = styled.div`
    width: 100%;
    display: flex;
    margin-top: 10px;
`;

const PointInputBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 35px;
    border-radius: 5px;
    border: 1px solid ${palette.gray5};
    padding: 9px 10px;

    span {
        font-size: 14px;
        font-weight: 700;
        color: ${palette.gray3};
        margin-left: 5px;
    }
`;

const PointInput = styled.input`
    width: 100%;
    color: ${palette.gray2};
    text-align: end;
    outline: none;
    border: none;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

const UseAllBtn = styled.button`
    width: 85px;
    height: 35px;
    color: ${palette.white0};
    font-size: 13px;
    font-weight: 700;
    background-color: ${palette.gray4};
    border-radius: 5px;
    flex-shrink: 0;
    padding: 10px 0;
    margin-left: 5px;
`;

export default Point;
