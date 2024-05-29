import styled from "styled-components";
import PageTemplate from "../components/common/PageTemplate";
import UserHeader from "../components/mypage/UserHeader";
import UserMenu from "../components/mypage/UserMenu";

export type MyPageProps = {};

function MyPage(props: MyPageProps) {
    return (
        <PageTemplate>
            <Block>
                <UserHeader />
                <UserMenu />
            </Block>
        </PageTemplate>
    );
}

const Block = styled.div`
    margin-top: 80px;
`;

export default MyPage;
