import styled from "styled-components";
import { InputLabel, TextInput } from "./styles";
import palette from "../../lib/styles/palette";
import { ChangeEvent, useRef, useState } from "react";

export type AliasSectionProps = {};

function AliasSection(props: AliasSectionProps) {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    const onClickResetBtn = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
    };

    return (
        <Block>
            <InputLabel>닉네임</InputLabel>
            <InputWrapper>
                <TextInput
                    ref={inputRef}
                    type="text"
                    placeholder="한글, 영문 2~10자"
                    onChange={onChange}
                />
                <ResetBtn
                    visible={!!value}
                    onClick={onClickResetBtn}
                ></ResetBtn>
            </InputWrapper>
        </Block>
    );
}

const Block = styled.section`
    padding: 0 20px;
    margin-top: 40px;
`;

const InputWrapper = styled.div`
    position: relative;
    margin-top: 8px;
`;

const ResetBtn = styled.button<{ visible: boolean }>`
    display: ${(props) => (props.visible ? "block" : "none")};
    position: absolute;
    right: 15px;
    top: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${palette.gray3};
`;

export default AliasSection;
