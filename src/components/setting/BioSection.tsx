import styled from "styled-components";
import { InputLabel } from "./styles";
import { ChangeEvent, useState } from "react";
import palette from "../../lib/styles/palette";
import { TextArea } from "../common/styles/Inputs";

export type BioSectionProps = {
    bio: string;
    onChangeBio: (value: string) => void;
};

const MAX_LETTER = 300;

function BioSection(props: BioSectionProps) {
    const { bio, onChangeBio } = props;
    const [letterCount, setLetterCount] = useState(0);

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.currentTarget;
        setLetterCount(value.length);
        onChangeBio(value);
    };

    return (
        <Block>
            <InputLabel>자기소개</InputLabel>
            <BioInput
                onChange={onChange}
                value={bio}
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
