import styled from "styled-components";
import { Avatar } from "../../common/styles/Common";
import palette from "../../../lib/styles/palette";

export type CommentItemProps = {
    avatar: string;
    alias: string;
    timestamp: string;
    content: string;
};

function CommentItem(props: CommentItemProps) {
    const { avatar, alias, timestamp, content } = props;

    return (
        <Block>
            <Head>
                <StyledAvatar path={avatar} alt="유저 아바타" />
                <AliasBlock>
                    <Alias>{alias}</Alias>
                    <Timestamp>{timestamp}</Timestamp>
                </AliasBlock>
            </Head>
            <ContentBlock>{content}</ContentBlock>
        </Block>
    );
}

const Block = styled.div`
    height: fit-content;
`;

const Head = styled.div`
    display: flex;
    align-items: start;
    column-gap: 8px;
`;

const StyledAvatar = styled(Avatar)`
    width: 35px;
    height: 35px;
`;

const AliasBlock = styled.div`
    display: grid;
    row-gap: 4px;
`;

const Alias = styled.p`
    font-size: 14px;
    font-weight: 700;
`;

const Timestamp = styled.p`
    font-size: 11px;
    color: ${palette.gray3};
`;

const ContentBlock = styled.div`
    font-size: 14px;
    line-height: 18px;
    padding-left: 44px;
    margin-top: 10px;
`;

export default CommentItem;
