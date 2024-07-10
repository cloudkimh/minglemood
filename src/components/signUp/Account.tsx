import styled from "styled-components";
import { TextInput } from "../common/styles/Inputs";
import palette from "../../lib/styles/palette";
import { animation, fadeInFromLeft } from "../../lib/styles/animations";
import { BottomBtn } from "./styles";
import { useRef } from "react";
import { toast } from "react-toastify";
import PageHeader from "../common/PageHeader";
import { useNavigate } from "react-router-dom";

export type AccountProps = {
    visible: boolean;
    handleToNextPhase: (id: string, password: string) => void;
};

function Account(props: AccountProps) {
    const { visible, handleToNextPhase } = props;
    const idInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const vertifyPasswordInputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const isValidPassword = () => {
        if (passwordInputRef.current) {
            const password = passwordInputRef.current.value;
            const minLength = 10;
            const hasLowerCase = /[a-z]/.test(password);
            const hasUpperCase = /[A-Z]/.test(password);
            const hasNumbers = /[0-9]/.test(password);
            const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

            const conditionsMet = [
                hasLowerCase,
                hasUpperCase,
                hasNumbers,
                hasSpecialChars,
            ].filter(Boolean).length;

            return password.length >= minLength && conditionsMet >= 2;
        }
    };

    const isPasswordValuesMatch = () => {
        if (passwordInputRef.current && vertifyPasswordInputRef.current) {
            return (
                passwordInputRef.current.value ===
                vertifyPasswordInputRef.current.value
            );
        }
    };

    const isValidEmail = () => {
        if (idInputRef.current) {
            const email = idInputRef.current.value;
            const emailRegex =
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email);
        }
    };

    const onClickNextPhaseBtn = () => {
        if (!isValidEmail()) {
            toast.warning("아이디를 올바른 이메일 형식으로 기입해주세요.");
            return;
        }
        if (!isPasswordValuesMatch()) {
            toast.warning("패스워드가 일치하지 않습니다.");
            return;
        }
        if (!isValidPassword()) {
            toast.warning("패스워드 형식이 올바르지 않습니다.");
            return;
        }

        if (idInputRef.current && passwordInputRef.current) {
            const id = idInputRef.current.value;
            const password = passwordInputRef.current.value;
            handleToNextPhase(id, password);
        }
    };

    if (!visible) return null;

    return (
        <>
            <PageHeader
                title="회원가입"
                handleClickPrevPageBtn={() => {
                    navigate("/login");
                }}
            />
            <Block>
                <InputsContainer>
                    <IdInput
                        ref={idInputRef}
                        name="id"
                        type="text"
                        placeholder="아이디(이메일)"
                    />
                    <PasswordInput
                        ref={passwordInputRef}
                        name="password"
                        type="password"
                        placeholder="비밀번호"
                    />
                    <GuideText>
                        대/소문자,숫자,특수문자 중 2가지 이상의 조합으로 10자
                        이상
                    </GuideText>
                    <VertifyPasswordInput
                        ref={vertifyPasswordInputRef}
                        name="password"
                        type="password"
                        placeholder="비밀번호 확인"
                    />
                </InputsContainer>
                <BottomBtn onClick={onClickNextPhaseBtn}>다음</BottomBtn>
            </Block>
        </>
    );
}

const Block = styled.div`
    ${animation(fadeInFromLeft, 0.3)}
    display: grid;
    grid-template-rows: 1fr 40px;
    height: 100%;
    padding: 65px 20px 20px;
`;

const InputsContainer = styled.div``;

const IdInput = styled(TextInput)`
    width: 100%;
`;

const PasswordInput = styled(TextInput)`
    width: 100%;
    margin-top: 10px;
`;

const GuideText = styled.p`
    font-size: 10px;
    color: ${palette.gray2};
    padding: 0 3px;
    margin-top: 5px;
`;

const VertifyPasswordInput = styled(TextInput)`
    width: 100%;
    margin-top: 15px;
`;

export default Account;
