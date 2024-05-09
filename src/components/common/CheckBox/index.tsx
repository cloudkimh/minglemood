import React from "react";

export type CheckBoxProps = {
    onChange: React.ChangeEventHandler;
    value: number;
    name: string;
    checked: boolean;
    id?: string;
    label?: string;
    className?: string;
};

function CheckBox(props: CheckBoxProps) {
    const { onChange, value, label, id, name, checked, className } = props;

    return (
        <div
            className={className}
            tabIndex={-1}
            aria-label={`${checked ? "선택 됨" : ""} ${label} 체크박스`}
        >
            <input
                type="checkbox"
                value={value}
                id={id ?? `${name}-${value}`}
                name={name}
                checked={checked}
                onChange={onChange}
                aria-hidden="true"
            />
            <label htmlFor={id ?? `${name}-${value}`}>
                {label ? label : ""}
            </label>
        </div>
    );
}

export default CheckBox;
