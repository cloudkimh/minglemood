import styled from "styled-components";
import AvatarSection from "../components/setting/AvatarSection";
import palette from "../lib/styles/palette";
import AliasSection from "../components/setting/AliasSection";
import BioSection from "../components/setting/BioSection";
import PageTemplatexxx from "../components/basics/PageTemplatexxx";
import PageHeader from "../components/common/PageHeader";

function Setting() {
    return (
        <PageTemplatexxx>
            <PageHeader
                title="프로필 수정"
                rightSlot={<SaveButton>저장</SaveButton>}
            />
            <AvatarSection />
            <AliasSection />
            <BioSection />
        </PageTemplatexxx>
    );
}

const SaveButton = styled.button`
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: ${palette.red500};
    margin-left: auto;
`;

export default Setting;
