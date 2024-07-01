import styled from "styled-components";
import palette from "../../../../../lib/styles/palette";
import { hideScrollBar, withOpacity } from "../../../../../lib/styles/utils";
import AutoResizeTextarea from "../../../../basics/AutoResizeTextarea";
import { ReactComponent as SubmitIco } from "../../../../../assets/icon/arrow-up.svg";

export type CommentFormProps = {};

function CommentForm(props: CommentFormProps) {
    return (
        <Block>
            <Textarea
                minHeight={35}
                maxHeight={100}
                maxLength={300}
                placeholder="댓글 작성하기"
            />
            <SubmitBtn>
                <SubmitIco />
            </SubmitBtn>
        </Block>
    );
}

const Block = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: end;
    column-gap: 8px;
    width: 100%;
    height: fit-content;
    background-color: ${palette.white0};
    box-shadow: 0px 0px 12px 0px ${palette.gray2}${withOpacity(0.3)};
    padding: 10px 20px;
`;

const Textarea = styled(AutoResizeTextarea)`
    ${hideScrollBar}
    width: 100%;
    height: 35px;
    font-size: 12px;
    line-height: 18px;
    border-radius: 5px;
    background-color: ${palette.white3};
    border: none;
    padding: 10px;

    &::placeholder {
        color: ${palette.gray3};
    }
`;

const SubmitBtn = styled.button`
    display: grid;
    place-content: center;
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${palette.red500};
    margin-bottom: 4px;
`;

export default CommentForm;
