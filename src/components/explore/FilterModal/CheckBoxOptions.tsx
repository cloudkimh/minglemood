import styled from "styled-components";
import { SectionContainer, SectionLabel } from "./styles";
import CheckBox from "../../common/CheckBox";
import { ChipCheckBox } from "../../common/CheckBox/style";
import { useRef } from "react";
import { Option } from "../types";

export type CheckBoxOptionsProps = {
    title: string;
    optionName: string;
    options: Array<Option>;
    selectedOptions: Array<Option>;
    handleSelectOption: (value: Array<Option>) => void;
};

function CheckBoxOptions(props: CheckBoxOptionsProps) {
    const { title, optionName, options, selectedOptions, handleSelectOption } =
        props;
    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const onClick = () => {
        const nextValues: Array<Option> = [];
        inputRefs.current.forEach((aInput, i) => {
            if (aInput?.checked) {
                nextValues.push(options[i]);
            }
        });
        handleSelectOption(nextValues);
    };

    return (
        <SectionContainer>
            <SectionLabel>{title}</SectionLabel>
            <OptionBlock>
                {options.map((aOption, i) => (
                    <OptionCheckBox
                        key={`checkbox-${i}`}
                        ref={(elem) => (inputRefs.current[i] = elem)}
                        as={CheckBox}
                        type="checkbox"
                        name={optionName}
                        value={aOption.id}
                        label={aOption.name}
                        onClick={onClick}
                        checked={
                            !!selectedOptions.find(
                                (aSelectedOption) =>
                                    aSelectedOption.id === aOption.id
                            )
                        }
                    />
                ))}
            </OptionBlock>
        </SectionContainer>
    );
}

const OptionBlock = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;

const OptionCheckBox = styled(ChipCheckBox)`
    margin-right: 6px;
    margin-bottom: 10px;
`;

export default CheckBoxOptions;
