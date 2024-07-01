import styled from "styled-components";
import ModalTemplate from "../../../../basics/ModalTemplate";
import { ModalBody } from "../../../../basics/ModalTemplate/styles";
import CommentItem from "./CommentItem";
import { getSampleImage, hideScrollBar } from "../../../../../lib/styles/utils";
import CommentForm from "./CommentForm";

export type CommentModalProps = {
    visible: boolean;
    handleClose: () => void;
};

const photo = getSampleImage();
const comment = {
    avatar: photo,
    alias: "테스트용으로",
    timestamp: "4시간 전",
    content:
        "네자매의 수다가 부러웠던 쥔장입니다 ^^ 오랜만에 모여 행복한 여행하시는데 보탬이 되었다면 다행이구요!",
};
const comments = Array(12).fill(comment);

function CommentModal(props: CommentModalProps) {
    const { visible, handleClose } = props;

    return (
        <ModalTemplate visible={visible} handleClickLayer={handleClose}>
            <StyledModalBody>
                <CommentsContainer>
                    {comments.map((aComment) => (
                        <CommentItem
                            avatar={aComment.avatar}
                            alias={aComment.alias}
                            timestamp={aComment.timestamp}
                            content={aComment.content}
                        />
                    ))}
                </CommentsContainer>
                <CommentForm />
            </StyledModalBody>
        </ModalTemplate>
    );
}

const StyledModalBody = styled(ModalBody)`
    position: relative;
    height: calc(100% - 100px);
    padding: 20px 20px 0;
`;

const CommentsContainer = styled.div`
    ${hideScrollBar}
    display: flex;
    flex-direction: column;
    row-gap: 35px;
    height: 100%;
    overflow: auto;
    padding: 40px 0 100px;
`;

export default CommentModal;
