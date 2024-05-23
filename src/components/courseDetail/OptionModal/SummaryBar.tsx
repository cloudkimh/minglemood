import styled from "styled-components";
import palette from "../../../lib/styles/palette";

export type SummaryBarProps = {
    visible: boolean;
    totalPrice: number;
    totalCount: number;
    isLiked: boolean;
    likes: number;
    handleToggleLike: Function;
    handleSubmit: Function;
};

function SummaryBar(props: SummaryBarProps) {
    const {
        visible,
        totalPrice,
        totalCount,
        isLiked,
        likes,
        handleToggleLike,
        handleSubmit,
    } = props;

    return (
        <Block visible={visible}>
            <PriceBlock>
                <TotalCount>총 {totalCount}개</TotalCount>
                <TotalPrice>{totalPrice.toLocaleString()}원</TotalPrice>
            </PriceBlock>
            <SubmitBlock>
                <LikeBtn
                    onClick={() => {
                        handleToggleLike();
                    }}
                >
                    <LikeIco />
                    <Likes>{likes}</Likes>
                </LikeBtn>
                <SubmitBtn
                    onClick={() => {
                        handleSubmit();
                    }}
                >
                    참여하기
                </SubmitBtn>
            </SubmitBlock>
        </Block>
    );
}

const Block = styled.div<{ visible: boolean }>`
    position: fixed;
    left: 50%;
    bottom: 0px;
    width: 100%;
    max-width: 100%;
    min-height: 120px;
    visibility: ${(props) => (props.visible ? "visible" : "hidden")};
    border-top: 1px solid ${palette.gray5};
    background-color: ${palette.white0};
    transform: translateX(-50%);
    padding: 16px 20px 24px;
`;

const PriceBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TotalCount = styled.p`
    font-size: 12px;
    font-weight: 800;
`;

const TotalPrice = styled.p`
    font-size: 20px;
    font-weight: 800;
    color: ${palette.purple0};
`;

const SubmitBlock = styled.div`
    display: grid;
    grid-template-columns: 32px 1fr;
    column-gap: 20px;
    align-items: center;
    margin-top: 12px;
`;

const LikeBtn = styled.button`
    display: grid;
    place-items: center;
`;

const LikeIco = styled.span`
    width: 32px;
    height: 32px;
    background-color: ${palette.red2};
`;

const Likes = styled.p`
    font-size: 12px;
    text-align: center;
`;

const SubmitBtn = styled.button`
    width: 100%;
    height: 56px;
    font-size: 15px;
    font-weight: 700;
    color: ${palette.white0};
    background-color: ${palette.purple0};
    border-radius: 10px;
    padding: 18px 0 17px;
`;

export default SummaryBar;
