import styled from "styled-components";
import PolicyModal from "../components/signUp/PolicyModal";
import useToggle from "../lib/hooks/useToggle";
import Account from "../components/signUp/Account";
import { useState } from "react";
import PhoneVertify from "../components/signUp/PhoneVertify";
import Succeed from "../components/signUp/Succeed";

function SignUp() {
    const [policyModalOpened, togglePolicyModalOpened] = useToggle(true);
    const [phaseNum, setPhaseNum] = useState(0);

    const handleClickStartBtn = () => togglePolicyModalOpened();

    return (
        <Block>
            <Account
                visible={phaseNum === 0}
                handleNextPhase={() => setPhaseNum(1)}
            />
            <PhoneVertify
                visible={phaseNum === 1}
                handleConfirm={() => setPhaseNum(2)}
                handleClickPrevPageBtn={() => setPhaseNum(1)}
            />
            <Succeed visible={phaseNum === 2} name="승민" />
            <PolicyModal
                visible={policyModalOpened}
                onClickStartBtn={handleClickStartBtn}
            />
        </Block>
    );
}

const Block = styled.div`
    height: 100%;
`;

export default SignUp;
