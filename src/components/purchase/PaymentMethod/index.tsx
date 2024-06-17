import styled from "styled-components";
import { HorizontalBar } from "../../common/styles/Common";
import SelectItem from "./SelectItem";
import React from "react";
import CreditCardOption from "./CreditCardOption";
import { SectionContainer, SectionHeader } from "../styles";

import kakaopay from "../../../assets/icon/kakaopay.svg";
import naverpay from "../../../assets/icon/naverpay.svg";
import tosspay from "../../../assets/icon/tosspay.svg";
import phone from "../../../assets/icon/phone.svg";
import coin from "../../../assets/icon/coin.svg";
import creditcard from "../../../assets/icon/credit-card.svg";

export type PaymentMethodProps = {
    currentValue: string | null;
    handleChange: (value: string) => void;
};

function PaymentMethod(props: PaymentMethodProps) {
    const { currentValue, handleChange } = props;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e.currentTarget.value);
    };

    return (
        <SectionContainer>
            <SectionHeader>결제수단</SectionHeader>
            <SelectList>
                <SelectItem
                    name="kakaopay"
                    icon={kakaopay}
                    label="카카오 페이"
                    onChange={onChange}
                />
                <HorizontalBar />
                <SelectItem
                    name="tosspay"
                    icon={tosspay}
                    label="토스 페이"
                    onChange={onChange}
                />
                <HorizontalBar />
                <SelectItem
                    name="naverpay"
                    icon={naverpay}
                    label="네이버 페이"
                    onChange={onChange}
                />
                <HorizontalBar />
                <SelectItem
                    name="phone"
                    icon={phone}
                    label="휴대폰 간편결제"
                    onChange={onChange}
                />
                <HorizontalBar />
                <SelectItem
                    name="account"
                    icon={coin}
                    label="계좌이체"
                    onChange={onChange}
                />
                <HorizontalBar />
                <SelectItem
                    name="creditcard"
                    icon={creditcard}
                    label="신용카드"
                    onChange={onChange}
                />
                {currentValue === "creditcard" && (
                    <CreditCardOption
                        currentValue={""}
                        handleSelect={() => {}}
                    />
                )}
            </SelectList>
        </SectionContainer>
    );
}

const SelectList = styled.ul`
    margin-top: 20px;
`;

export default PaymentMethod;
