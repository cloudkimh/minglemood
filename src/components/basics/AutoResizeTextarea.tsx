import {
    useState,
    useRef,
    useEffect,
    ChangeEvent,
    TextareaHTMLAttributes,
} from "react";
import styled from "styled-components";
import { hideScrollBar } from "../../lib/styles/utils";

type AutoResizeTextareaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "onChange" | "rows"
> & {
    className?: string;
    handleChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    minHeight: number;
    maxHeight: number;
};

function AutoResizeTextarea(props: AutoResizeTextareaProps) {
    const { className, handleChange, minHeight, maxHeight, ...htmlProps } =
        props;
    const [content, setContent] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
        if (handleChange) {
            handleChange(e);
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = `${minHeight}px`;
            if (maxHeight < textareaRef.current.scrollHeight) {
                textareaRef.current.style.height = `${maxHeight}px`;
            } else {
                textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
            }
        }
    }, [content]);

    return (
        <Textarea
            ref={textareaRef}
            className={className}
            value={content}
            onChange={onChange}
            rows={1}
            {...htmlProps}
        />
    );
}

const Textarea = styled.textarea`
    ${hideScrollBar}
    overflow: auto;
    resize: none;
    outline: none;
`;

export default AutoResizeTextarea;
