import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import CheckBox from "../../basics/CheckBox";

export type SelectItemProps = {
    name: string;
    icon: string;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function SelectItem(props: SelectItemProps) {
    const { name, icon, label, onChange } = props;

    return (
        <Block>
            <MethodCheckBox
                type="radio"
                name="payment-method"
                value={name}
                id={name}
                onChange={onChange}
            />
            <IconBlock>
                <img src={icon} alt={label} />
            </IconBlock>
            <Label htmlFor={name}>{label}</Label>
        </Block>
    );
}

const Block = styled.li`
    display: flex;
    align-items: center;
    padding: 12px 0;
`;

const MethodCheckBox = styled(CheckBox)`
    label {
        display: inline-grid;
        place-content: center;
        width: 20px;
        height: 20px;
        border: 1px solid ${palette.black2};
        border-radius: 50%;

        &:before {
            display: inline-block;
            content: "";
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: ${palette.red500};
            visibility: hidden;
        }
    }

    input:checked + label {
        border: 1px solid ${palette.red500};

        &:before {
            visibility: visible;
        }
    }
`;

const IconBlock = styled.div`
    display: flex;
    justify-content: center;
    width: 30px;
    margin-left: 6px;
`;

const Label = styled.label`
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    margin-left: 6px;
`;

export default SelectItem;
