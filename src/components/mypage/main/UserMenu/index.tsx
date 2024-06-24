import styled from "styled-components";
import MenuSection from "./MenuSection";
import MenuItem from "./MenuItem";
import { HorizontalBar } from "../../../common/styles/Common";

export type UserMenuProps = {};

function UserMenu(props: UserMenuProps) {
    return (
        <Block>
            <MenuSection title="내 활동">
                <MenuItem to="/mypage" text="결제내역" />
            </MenuSection>
            <SectionDivder />
            <MenuSection title="호스트">
                <MenuItem to="/mypage" text="호스트 관리자 페이지" />
            </MenuSection>
            <SectionDivder />
            <MenuSection title="고객센터">
                <MenuItem to="/mypage" text="공지사항" />
                <MenuItem to="/mypage" text="FAQ" />
                <MenuItem to="/mypage" text="고객센터 문의" />
            </MenuSection>
            <SectionDivder />
        </Block>
    );
}

const Block = styled.div`
    padding: 0 20px;
`;

const SectionDivder = styled(HorizontalBar)`
    margin-top: 20px;
`;

export default UserMenu;
