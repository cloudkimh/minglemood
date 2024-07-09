import styled from "styled-components";
import { InputLabel } from "./styles";
import { ChangeEvent, useRef, useState } from "react";
import { TextInput } from "../common/styles/Inputs";

export type AliasSectionProps = {};

function AliasSection(props: AliasSectionProps) {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    return (
        <Block>
            <InputLabel>닉네임</InputLabel>
            <AliasInput
                ref={inputRef}
                type="text"
                placeholder="2~10자 이내여야 합니다."
                maxLength={10}
                minLength={2}
                onChange={onChange}
            />
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
    margin-top: 40px;
`;

const AliasInput = styled(TextInput)`
    width: 100%;
    margin-top: 4px;
`;

export default AliasSection;
