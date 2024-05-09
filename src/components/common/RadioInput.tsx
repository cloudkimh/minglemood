import React from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export interface RadioInputProp
    extends Omit<React.HTMLProps<HTMLInputElement>, "ref"> {
    inputRef?:
        | ((instance: HTMLInputElement | null) => void)
        | React.RefObject<HTMLInputElement>
        | null;
    labelRef?:
        | ((instance: HTMLLabelElement | null) => void)
        | React.RefObject<HTMLLabelElement>
        | null;
    onLabelClick?: Function;
    children?: React.ReactNode;
}

function RadioInput(props: RadioInputProp) {
    const {
        className,
        inputRef,
        labelRef,
        name,
        id,
        onLabelClick,
        children,
        disabled,
        ...rest
    } = props;
    const htmlProps = rest as any;

    return (
        <Block className={className} disabled={!!disabled}>
            <Input
                ref={inputRef}
                type="radio"
                name={name}
                id={id}
                disabled={disabled}
                {...htmlProps}
            />
            {children ? (
                children
            ) : (
                <Btn
                    ref={labelRef}
                    htmlFor={id}
                    onClick={(e: React.MouseEvent<HTMLLabelElement>) => {
                        if (onLabelClick) {
                            onLabelClick(e);
                        }
                    }}
                />
            )}
        </Block>
    );
}

const Block = styled.div<{ disabled: boolean }>`
    display: inline-block;
`;

const Input = styled.input`
    position: absolute;
    left: -9999px;
    opacity: 0;
`;

const Btn = styled.label`
    display: grid;
    place-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${palette.gray6};
    cursor: pointer;

    &::before {
        content: "";
        display: none;
        width: 14px;
        height: 14px;
        background-color: ${palette.purple0};
        border-radius: 50%;
    }

    input:checked + &::before {
        display: block;
    }

    ${media.mobile} {
        width: 16px;
        height: 16px;

        &::before {
            width: 10px;
            height: 10px;
        }
    }
`;

RadioInput.Input = Input;
RadioInput.Btn = Btn;

export default RadioInput;
