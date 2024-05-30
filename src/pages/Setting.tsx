import styled from "styled-components";
import PageTemplate from "../components/common/PageTemplate";
import AvatarSection from "../components/setting/AvatarSection";
import palette from "../lib/styles/palette";
import AliasSection from "../components/setting/AliasSection";
import BioSection from "../components/setting/BioSection";

export type SettingProps = {};

function Setting(props: SettingProps) {
    return (
        <PageTemplate>
            <Block>
                <Header>
                    <Title>내 정보</Title>
                    <SaveButton>저장</SaveButton>
                </Header>
                <AvatarSection />
                <AliasSection />
                <BioSection />
            </Block>
        </PageTemplate>
    );
}

const Block = styled.div`
    margin-top: 100px;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${palette.gray5};
    padding: 40px 20px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 800;
`;

const SaveButton = styled.button`
    font-size: 14px;
    font-weight: 700;
    color: ${palette.red500};
`;

export default Setting;
