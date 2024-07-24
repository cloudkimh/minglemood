import PolicyModal from "../components/signUp/PolicyModal";
import useToggle from "../lib/hooks/useToggle";
import Account from "../components/signUp/Account";
import { useState } from "react";
import PhoneVertify from "../components/signUp/PhoneVertify";
import Succeed from "../components/signUp/Succeed";
import styled from "styled-components";
import { hideScrollBar, withOpacity } from "../lib/styles/utils";
import palette from "../lib/styles/palette";

type PostUser = {
    id: string | null;
    password: string | null;
    name: string | null;
    phone: string | null;
};

function SignUp() {
    const [policyModalOpened, togglePolicyModalOpened] = useToggle(true);
    const [phaseNum, setPhaseNum] = useState(0);
    const [postUser, setPostUser] = useState<PostUser>({
        id: null,
        password: null,
        name: null,
        phone: null,
    });

    const handleClickStartBtn = () => togglePolicyModalOpened();

    const handleConfirmAccountPhase = (id: string, password: string) => {
        setPostUser((prev) => ({ ...prev, id, password }));
        setPhaseNum(1);
    };

    const handleConfirmPhoneVertifyPhase = (name: string, phone: string) => {
        setPostUser((prev) => ({ ...prev, name, phone }));
        // do async
        setPhaseNum(2);
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
            <Succeed visible={phaseNum === 2} name={postUser.name as string} />
            <PolicyModal
                visible={policyModalOpened}
                onClickStartBtn={handleClickStartBtn}
            />
        </Block>
    );
}

const Block = styled.div`
    ${hideScrollBar}
    position: relative;
    background-color: ${palette.white0};
    max-width: 768px;
    height: 100%;
    overflow: auto;
    box-shadow: ${palette.gray2}${withOpacity(0.2)} 0px 0px 20px;
    margin: 0 auto;
`;

export default SignUp;
