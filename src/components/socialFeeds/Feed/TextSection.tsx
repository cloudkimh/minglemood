import styled from "styled-components";
import { multiLineEllipsis } from "../../../lib/styles/utils";
import useToggle from "../../../lib/hooks/useToggle";
import palette from "../../../lib/styles/palette";
import { ReactComponent as ExpandIco } from "../../../assets/icon/chevron-right-sm.svg";

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
                <ExpandBtn onClick={toggleTextHidden}>
                    더보기
                    <StyledExpandIco />
                </ExpandBtn>
            )}
        </Block>
    );
}

const Block = styled.div`
    margin-top: 15px;
`;

const TextWrapper = styled.div<{ hidden: boolean }>`
    ${(props) => props.hidden && multiLineEllipsis(3)}
    height: ${(props) => (props.hidden ? "50px" : "auto")};
    font-size: 14px;
    line-height: 18px;
`;

const ExpandBtn = styled.button`
    display: flex;
    align-items: center;
    column-gap: 2px;
    font-size: 11px;
    font-weight: 700;
    color: ${palette.gray3};
    padding: 5px 0;
    margin-top: 10px;
`;

const StyledExpandIco = styled(ExpandIco)`
    width: 10px;
    height: 10px;

    path {
        stroke: ${palette.gray3};
    }
`;

export default TextSection;
