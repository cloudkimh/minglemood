import UserHeader from "../../components/mypage/main/UserHeader";
import UserMenu from "../../components/mypage/main/UserMenu";
import PageTemplate from "../../components/basics/PageTemplate";
import { getSampleUser } from "../../lib/data/sampleUserData";
import MenuItem from "../../components/mypage/main/UserMenu/MenuItem";
import { SectionDivider } from "../../components/common/styles/Common";
import Icon from "../../components/basics/Icon";

function Main() {
    const user = getSampleUser();

    return (
        <PageTemplate gnbVisible>
            <UserHeader alias={user.alias} avatar={user.avatar} />
            <UserMenu title="내 활동">
                <MenuItem
                    to="/mypage/history/scheduled"
                    icon={<Icon name="card" />}
                    text="결제내역"
                />
                <MenuItem
                    to="/likes/course"
                    icon={<Icon name="heart" />}
                    text="찜"
                />
            </UserMenu>
            <SectionDivider />
            <UserMenu title="호스트">
                <MenuItem
                    to="/mypage"
                    icon={<Icon name="host" />}
                    text="호스트 관리자 페이지"
                />
            </UserMenu>
            <SectionDivider />
            <UserMenu title="고객센터">
                <MenuItem
                    to="/mypage"
                    icon={<Icon name="speaker" />}
                    text="공지사항"
                />
                <MenuItem
                    to="/mypage"
                    icon={<Icon name="headphone" />}
                    text="고객센터"
                />
                <MenuItem
                    to="/mypage"
                    icon={<Icon name="exit" />}
                    text="로그아웃"
                />
            </UserMenu>
        </PageTemplate>
    );
}

export default Main;
