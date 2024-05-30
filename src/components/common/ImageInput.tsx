import React, { ReactNode, useRef, useState } from "react";
import styled from "styled-components";

export type ImageInputProp = {
    defaultImage: string;
    render: (props: {
        currentImage: string;
        openFinder: () => void;
    }) => ReactNode;
    onChange?: (image: string) => void;
    className?: string;
};

function ImageInput(props: ImageInputProp) {
    const { render, defaultImage, onChange, className } = props;
    const [currentImage, setCurrentImage] = useState(defaultImage);
    const inputRef = useRef<HTMLInputElement>(null);

    const openFinder = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files || e.target.files?.length === 0) return;
        const file = e.target.files[0];
        const filePath = URL.createObjectURL(file);
        setCurrentImage(filePath);
        if (onChange) {
            onChange(filePath);
        }
    };

    return (
        <Block className={className}>
            {render({
                currentImage,
                openFinder,
            })}
            <HiddenInput
                ref={inputRef}
                onChange={onInputChange}
                type="file"
                accept="image/*"
            />
        </Block>
    );
}

const Block = styled.div`
    position: relative;
`;

const HiddenInput = styled.input`
    position: absolute;
    left: -9999px;
    opacity: 0;
`;

export default ImageInput;
