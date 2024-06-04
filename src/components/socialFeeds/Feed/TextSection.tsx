import styled from "styled-components";
import { multiLineEllipsis } from "../../../lib/styles/utils";
import useToggle from "../../../lib/hooks/useToggle";
import palette from "../../../lib/styles/palette";

export type TextSectionProps = {
    text: string;
};

function TextSection(props: TextSectionProps) {
    const { text } = props;
    const [textHidden, toggleTextHidden] = useToggle(true);

    return (
        <Block>
            <TextWrapper hidden={textHidden}>{text}</TextWrapper>
            {textHidden && (
                <ExpandBtn onClick={toggleTextHidden}>더보기</ExpandBtn>
            )}
        </Block>
    );
}

const Block = styled.div`
    margin-top: 20px;
`;

const TextWrapper = styled.div<{ hidden: boolean }>`
    ${(props) => props.hidden && multiLineEllipsis(2)}
    height: ${(props) => (props.hidden ? "40px" : "auto")};
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
`;

const ExpandBtn = styled.button`
    font-size: 16px;
    font-weight: 700;
    color: ${palette.gray2};
    margin-top: 10px;
`;

export default TextSection;
