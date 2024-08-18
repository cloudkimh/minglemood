import PolicyModal from "../components/signUp/PolicyModal";
import useToggle from "../lib/hooks/useToggle";
import Account from "../components/signUp/Account";
import { useState } from "react";
import PhoneVertify from "../components/signUp/PhoneVertify";
import Succeed from "../components/signUp/Succeed";
import styled from "styled-components";
import { hideScrollBar, withOpacity } from "../lib/styles/utils";
import palette from "../lib/styles/palette";
import {toast} from "react-toastify";

type PostUser = {
    username: string | null;
    password: string | null;
    nickname: string | null;
    phone: string | null;
};

function SignUp() {
    const [policyModalOpened, togglePolicyModalOpened] = useToggle(true);
    const [phaseNum, setPhaseNum] = useState(0);
    const [postUser, setPostUser] = useState<PostUser>({
        username: null,
        password: null,
        nickname: null,
        phone: null,
    });

    const handleSignup = async (updatedUser : PostUser) => {
        await new Promise((r) => setTimeout(r, 1000));

        const response = await fetch(
            process.env.REACT_APP_HOST + "/members/sign-up",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(
                    updatedUser
                ),
            }
        );
        const result = await response.json();

        if (response.status === 200) {
            toast.info("축하드립니다. 밍글무드에 가입 되었습니다.");
        }
    };

    const handleClickStartBtn = () => togglePolicyModalOpened();

    const handleConfirmAccountPhase = (username: string, password: string) => {
        setPostUser((prev) => ({ ...prev, username, password }));
        setPhaseNum(1);
    };

    const handleConfirmPhoneVertifyPhase = async (nickname: string, phone: string) => {
        const validPhone = phone || "기본 전화번호";
        // 상태를 동기적으로 처리하려는 대신에...
        setPostUser((prev) => {
            const updatedUser = {...prev, nickname, phone: validPhone};

            // 상태 업데이트가 끝난 후 작업 수행
            handleSignup(updatedUser);
            setPhaseNum(2);
            return updatedUser;
        });

    };

    return (
        <Block>
            <Account
                visible={phaseNum === 0}
                handleToNextPhase={handleConfirmAccountPhase}
            />
            <PhoneVertify
                visible={phaseNum === 1}
                handleToPrevPhase={() => setPhaseNum(0)}
                handleConfirm={handleConfirmPhoneVertifyPhase}
            />
            <Succeed visible={phaseNum === 2} name={postUser.nickname as string} />
            <PolicyModal
                visible={policyModalOpened}
                onClickStartBtn={handleClickStartBtn}
            />
        </Block>
    );
}

const Block = styled.div`
    ${hideScrollBar};
    position: relative;
    background-color: ${palette.white0};
    max-width: 768px;
    height: 100%;
    overflow: auto;
    box-shadow: ${palette.gray2}${withOpacity(0.2)} 0px 0px 20px;
    margin: 0 auto;
`;

export default SignUp;
