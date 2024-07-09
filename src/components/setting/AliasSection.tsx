import styled from "styled-components";
import { InputLabel } from "./styles";
import { ChangeEvent } from "react";
import { TextInput } from "../common/styles/Inputs";

export type AliasSectionProps = {
    alias: string;
    onChangeAlias: (alias: string) => void;
};

function AliasSection(props: AliasSectionProps) {
    const { alias, onChangeAlias } = props;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.currentTarget;
        onChangeAlias(value);
    };

    return (
        <Block>
            <InputLabel>닉네임</InputLabel>
            <AliasInput
                type="text"
                value={alias}
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
