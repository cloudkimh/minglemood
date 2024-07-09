import styled from "styled-components";
import AvatarSection from "../components/setting/AvatarSection";
import palette from "../lib/styles/palette";
import AliasSection from "../components/setting/AliasSection";
import BioSection from "../components/setting/BioSection";
import PageTemplatexxx from "../components/basics/PageTemplatexxx";
import PageHeader from "../components/common/PageHeader";
import { getSampleUser } from "../lib/data/sampleUserData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Setting() {
    const user = getSampleUser();
    const [avatar, setAvatar] = useState<string>(user.avatar);
    const [alias, setAlias] = useState<string>(user.alias);
    const [bio, setBio] = useState<string>(user.bio);
    const navigate = useNavigate();

    const handleChangeAvatar = (value: string) => setAvatar(value);

    const handleChangeAlias = (value: string) => setAlias(value);

    const handleChangeBio = (value: string) => setBio(value);

    const onClickSaveBtn = () => {
        const postUser = {
            avatar,
            alias,
            bio,
        };
        // do saync
        toast.success("프로필 수정을 완료했습니다.");
        navigate("/mypage");
    };

    return (
        <PageTemplatexxx>
            <PageHeader
                title="프로필 수정"
                rightSlot={
                    <SaveButton onClick={onClickSaveBtn}>저장</SaveButton>
                }
            />
            <AvatarSection
                avatar={avatar}
                onChangeAvatar={handleChangeAvatar}
            />
            <AliasSection alias={alias} onChangeAlias={handleChangeAlias} />
            <BioSection bio={bio} onChangeBio={handleChangeBio} />
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
