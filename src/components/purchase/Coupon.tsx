import styled from "styled-components";
import { SectionContainer, SectionHeader } from "./styles";
import Dropdown from "../common/Dropdown";
import {
    DropdownIcon,
    basicDropdownItemStyle,
    basicDropdownMenuStyle,
    basicDropdownTriggerStyle,
} from "../common/Dropdown/styles";

export type CouponProps = {};

function Coupon(props: CouponProps) {
    return (
        <SectionContainer>
            <SectionHeader>쿠폰 할인</SectionHeader>
            <Dropdown
                render={({ isOpened, toggleMenu }) => (
                    <>
                        <OptionTrigger onClick={toggleMenu}>
                            사용 사능 쿠폰 0개 / 보유 쿠폰 0 개
                            <DropdownIcon rotated={isOpened} />
                        </OptionTrigger>
                        <OptionMenu visible={isOpened}>
                            <OptionItem
                                onClick={() => {
                                    toggleMenu();
                                }}
                            >
                                가입 기념 10% 할인
                            </OptionItem>
                        </OptionMenu>
                    </>
                )}
            />
        </SectionContainer>
    );
}

const OptionTrigger = styled.div`
    ${basicDropdownTriggerStyle}
    margin-top: 20px;
`;

const OptionMenu = styled(Dropdown.Menu)`
    ${basicDropdownMenuStyle}
    margin-top: 10px;
`;

const OptionItem = styled.li`
    ${basicDropdownItemStyle}
`;

export default Coupon;
