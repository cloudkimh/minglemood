import styled from "styled-components";
import { InputLabel } from "./styles";
import { ChangeEvent, useState } from "react";
import palette from "../../lib/styles/palette";
import { TextArea } from "../common/styles/Inputs";

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
            <BioInput
                onChange={onChange}
                maxLength={300}
                placeholder="자기 소개를 입력해주세요."
            />
            <LetterCountBlock>
                <LetterCount>
                    {letterCount} / {MAX_LETTER}
                </LetterCount>
            </LetterCountBlock>
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
    margin-top: 40px;
`;

const BioInput = styled(TextArea)`
    margin-top: 8px;
`;

const LetterCountBlock = styled.div`
    margin-top: 4px;
`;

const LetterCount = styled.p`
    font-size: 11px;
    font-weight: 700;
    color: ${palette.gray3};
    text-align: end;
`;

export default BioSection;
