import styled from "styled-components";
import { animation, fadeInFromLeft } from "../../lib/styles/animations";
import { TextInput } from "../common/styles/Inputs";
import palette from "../../lib/styles/palette";
import { DefaultButton } from "../common/styles/Buttons";
import { useEffect, useState } from "react";
import { BottomBtn } from "./styles";
import { useNavigate } from "react-router-dom";
import PageHeader from "../common/PageHeader";

export type PhoneVertifyProps = {
    visible: boolean;
    handleClickPrevPageBtn: () => void;
    handleConfirm: () => void;
};

function PhoneVertify(props: PhoneVertifyProps) {
    const { visible, handleConfirm, handleClickPrevPageBtn } = props;
    const [expirationTime, setExpirationTime] = useState(180);
    const [timerStarted, setTimerstarted] = useState(false);
    const [vertified, setVertified] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (timerStarted && expirationTime > 0) {
            timer = setTimeout(() => {
                setExpirationTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [timerStarted, expirationTime]);

    const onClickSendBtn = () => {
        if (!timerStarted) {
            setExpirationTime(180);
            setTimerstarted(true);
        }
    };

    const formatTime = (time: number) => {
        const min = String(Math.floor(time / 60));
        const sec = String(time % 60).padStart(2, "0");
        return `${min}:${sec}`;
    };

    const onClickVertifyBtn = () => {
        setVertified(true);
    };

    const onClickConfirmBtn = () => {
        // do async
        handleConfirm();
    };

    if (!visible) return null;

    return (
        <>
            <PageHeader
                title="회원가입"
                handleClickPrevPageBtn={handleClickPrevPageBtn}
            />
            <Block>
                <div>
                    <NameInput name="name" type="text" placeholder="이름" />
                    <PhoneNumBlock>
                        <PhoneNumInput
                            name="phone-num"
                            type="number"
                            placeholder="휴대폰 번호 (-제외 입력)"
                        />
                        <SendBtn
                            pressed={timerStarted}
                            onClick={onClickSendBtn}
                        >
                            인증번호 전송
                        </SendBtn>
                    </PhoneNumBlock>
                    {timerStarted && (
                        <VertifyNumBlock>
                            <VertifyNumInputWrapper>
                                <VertifyNumInput
                                    name="vertify-num"
                                    type="number"
                                    placeholder="인증 번호"
                                />
                                <ExpirationTime>
                                    남은 시간 {formatTime(expirationTime)}
                                </ExpirationTime>
                            </VertifyNumInputWrapper>
                            <VertifyBtn
                                onClick={onClickVertifyBtn}
                                styleType="outlined"
                                color={palette.red500}
                            >
                                인증하기
                            </VertifyBtn>
                        </VertifyNumBlock>
                    )}
                </div>
                <ConfirmBtn onClick={onClickConfirmBtn} disabled={!vertified}>
                    가입하기
                </ConfirmBtn>
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

const ConfirmBtn = styled(BottomBtn)``;

const NameInput = styled(TextInput)`
    width: 100%;
`;

const PhoneNumBlock = styled.div`
    display: flex;
    column-gap: 5px;
    margin-top: 10px;
`;

const PhoneNumInput = styled(TextInput)`
    width: 100%;
`;

const SendBtn = styled.button<{ pressed: boolean }>`
    width: 90px;
    font-size: 12px;
    font-weight: 700;
    color: ${palette.gray2};
    background-color: ${(props) =>
        props.pressed ? palette.gray5 : palette.white0};
    border: 1px solid ${palette.gray3};
    border-radius: 5px;
    flex-shrink: 0;
    padding: 13px 0;
`;

const VertifyNumBlock = styled.div`
    display: flex;
    column-gap: 5px;
    margin-top: 10px;
`;

const VertifyNumInputWrapper = styled.div`
    width: 100%;
`;

const VertifyNumInput = styled(TextInput)`
    width: 100%;
`;

const VertifyBtn = styled(DefaultButton)`
    width: 75px;
    height: fit-content;
    font-size: 12px;
    flex-shrink: 0;
    padding: 13px 0;
`;

const ExpirationTime = styled.p`
    font-size: 10px;
    color: ${palette.red500};
    margin-top: 5px;
`;

export default PhoneVertify;
