import styled from "styled-components";
import PageTemplate from "../components/common/PageTemplate";
import palette from "../lib/styles/palette";
import Feed from "../components/socialFeeds/Feed";

export type SocialFeedsProps = {};

function SocialFeeds(props: SocialFeedsProps) {
    return (
        <PageTemplate>
            <Block>
                <Header>
                    <Title>모임 피드</Title>
                </Header>
            </Block>
            <Feed />
        </PageTemplate>
    );
}

const Block = styled.div`
    margin-top: 100px;
`;

const Header = styled.header`
    border-bottom: 1px solid ${palette.gray5};
    padding: 40px 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 800;
`;

export default SocialFeeds;
