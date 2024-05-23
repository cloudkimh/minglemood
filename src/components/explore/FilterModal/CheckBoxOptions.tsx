import styled from "styled-components";
import { SectionContainer, SectionLabel } from "./styles";
import CheckBox from "../../common/CheckBox";
import { ChipCheckBox } from "../../common/CheckBox/style";

export type CheckBoxOptionsProps = {
    title: string;
    optionName: string;
    options: Array<{
        id: number;
        name: string;
        [key: string]: any;
    }>;
    handleOptionSelect: () => void;
};

function CheckBoxOptions(props: CheckBoxOptionsProps) {
    const { title, optionName, options, handleOptionSelect } = props;

    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        handleOptionSelect();
    };

    return (
        <SectionContainer>
            <SectionLabel>{title}</SectionLabel>
            <OptionBlock>
                {options.map((aOption) => (
                    <OptionCheckBox
                        as={CheckBox}
                        name={optionName}
                        value={aOption.id}
                        label={aOption.name}
                        onClick={onClick}
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
