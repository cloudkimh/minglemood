import styled from "styled-components";
import { animation, fadeInFromLeft } from "../../lib/styles/animations";
import { TextInput } from "../common/styles/Inputs";
import palette from "../../lib/styles/palette";
import { DefaultButton } from "../common/styles/Buttons";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { BottomBtn } from "./styles";
import PageHeader from "../common/PageHeader";
import { hideSpinBtn } from "../../lib/styles/utils";

export type PhoneVertifyProps = {
    visible: boolean;
    handleToPrevPhase: () => void;
    handleConfirm: (nickname: string, phone: string) => void;
};

function PhoneVertify(props: PhoneVertifyProps) {
    const { visible, handleConfirm, handleToPrevPhase } = props;
    const [expirationTime, setExpirationTime] = useState(180);
    const [timerStarted, setTimerstarted] = useState(false);
    const [vertified, setVertified] = useState(false);
    const [phone, setPhone] = useState("");
    const nameInputRef = useRef<HTMLInputElement>(null);

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

    const formatPhoneNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        const match = cleaned.match(/^(\d{0,3})(\d{0,4})(\d{0,4})$/);

        if (match) {
            return `${match[1]}${match[2] ? "-" : ""}${match[2]}${
                match[3] ? "-" : ""
            }${match[3]}`;
        }

        return value;
    };

    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        const formattedPhone = formatPhoneNumber(value);
        setPhone(formattedPhone);
    };

    const onChangeNickName = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value != undefined && value != '') {
            setVertified(true);
        }
    };

    const onClickVertifyBtn = () => {
        setVertified(true);
    };

    const onClickConfirmBtn = () => {
        if (nameInputRef.current) {
            const nickname = nameInputRef.current.value;
            handleConfirm(nickname, phone);
        }
    };

    if (!visible) return null;

    return (
        <>
            <PageHeader
                title="회원가입"
                handleClickPrevPageBtn={handleToPrevPhase}
            />
            <Block>
                <div>
                    <NameInput
                        name="nickname"
                        type="text"
                        placeholder="닉네임"
                        onChange={onChangeNickName}
                        ref={nameInputRef}
                    />
                    {/*
                    <PhoneNumBlock>
                        <PhoneNumInput
                            name="phone"
                            type="text"
                            maxLength={13}
                            placeholder="휴대폰 번호 (-제외 입력)"
                            value={phone}
                            onChange={onChangePhone}
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
                    */}
                </div>
                <BottomBtn onClick={onClickConfirmBtn} disabled={!vertified}>
                    가입하기
                </BottomBtn>
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
