import styled from "styled-components";
import { SectionHeader } from "./styles";
import palette from "../../../lib/styles/palette";
import { ChangeEvent } from "react";

export type TextInputProps = {
    text: string;
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

function TextInput(props: TextInputProps) {
    const { text, onChange } = props;

    return (
        <Block>
            <SectionHeader>글 쓰기</SectionHeader>
            <Wrapper>
                <Textarea value={text} onChange={onChange} maxLength={200} />
                <GuideText>{text.length}/200 (최소 20자 이상)</GuideText>
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
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 170px;
    font-size: 12px;
    border-radius: 5px;
    border: 1px solid ${palette.gray5};
    outline: none;
    padding: 10px 10px 25px;
    margin-top: 10px;

    &:focus {
        border: 1px solid ${palette.red500};
    }
`;

const GuideText = styled.p`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 11px;
    color: ${palette.gray4};
`;

export default TextInput;
