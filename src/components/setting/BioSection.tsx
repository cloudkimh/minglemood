import styled from "styled-components";
import { InputLabel, TextArea } from "./styles";
import { ChangeEvent, useState } from "react";
import palette from "../../lib/styles/palette";

export type BioSectionProps = {};

const MAX_LETTER = 300;

function BioSection(props: BioSectionProps) {
    const [letterCount, setLetterCount] = useState(0);

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setLetterCount(e.currentTarget.value.length);
    };

    return (
        <Block>
            <InputLabel>자기소개</InputLabel>
            <InputWrapper>
                <TextArea onChange={onChange} placeholder="최대 300자" />
                <LetterCountBlock>
                    <LetterCount>
                        {letterCount} / {MAX_LETTER}
                    </LetterCount>
                </LetterCountBlock>
            </InputWrapper>
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
    margin-top: 40px;
`;

const InputWrapper = styled.div`
    margin-top: 8px;
`;

const LetterCountBlock = styled.div`
    margin-top: 6px;
`;

const LetterCount = styled.p`
    font-size: 12px;
    color: ${palette.gray1};
    text-align: end;
`;

export default BioSection;
