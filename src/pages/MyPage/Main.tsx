import styled from "styled-components";
import PageTemplate from "../../components/basics/PageTemplate";
import UserHeader from "../../components/mypage/main/UserHeader";
import UserMenu from "../../components/mypage/main/UserMenu";

export type MainProps = {};

function Main(props: MainProps) {
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

export default Main;
