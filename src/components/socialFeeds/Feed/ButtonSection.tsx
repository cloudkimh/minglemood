import styled from "styled-components";
import { SampleIco } from "../../common/styles/Common";
import palette from "../../../lib/styles/palette";
import { useNavigate } from "react-router-dom";

export type ButtonSectionProps = {
    onLike: () => void;
    id: number;
};

function ButtonSection(props: ButtonSectionProps) {
    const { onLike, id } = props;
    const navigate = useNavigate();

    const onClickCommentBtn = () => {
        navigate(`/social-feeds/${id}/comments`);
    };

    return (
        <Block>
            <ButtonBlock onClick={onLike}>
                <SampleIco />
                <span>0</span>
            </ButtonBlock>
            <ButtonBlock onClick={onClickCommentBtn}>
                <SampleIco />
                <span>0</span>
            </ButtonBlock>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
`;

const ButtonBlock = styled.button`
    display: flex;
    align-items: center;
    font-size: 14px;

    & + & {
        margin-left: 20px;
    }

    span {
        color: ${palette.gray0};
        margin-left: 7px;
    }
`;

export default ButtonSection;
