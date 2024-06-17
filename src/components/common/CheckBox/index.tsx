import React, { InputHTMLAttributes, forwardRef } from "react";
import styled from "styled-components";

export type CheckBoxProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "id" | "name" | "value" | "type"
> & {
    type: "checkbox" | "radio";
    name: string;
    value: string | number;
    id?: string;
    label?: string;
    className?: string;
};

function CheckBox(props: CheckBoxProps, ref: React.Ref<HTMLInputElement>) {
    const { name, label, id, value, type, className, ...htmlProps } = props;

    return (
        <Block className={className}>
            <input
                ref={ref}
                type={type}
                value={value}
                name={name}
                id={id ?? `${name}-${value}`}
                {...htmlProps}
            />
            <label htmlFor={id ?? `${name}-${value}`}>
                {label ? label : ""}
            </label>
        </Block>
    );
}

const Block = styled.div`
    input {
        position: absolute;
        left: -9999px;
        opacity: 0;
    }
`;

export default forwardRef(CheckBox);
