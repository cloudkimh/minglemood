import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import { Link, useLocation } from "react-router-dom";

function TapNav() {
    const location = useLocation();
    const currentTap = location.pathname;

    return (
        <Block>
            <Header>찜</Header>
            <TabContainer>
                <TapBlock to="/likes/course">
                    <TapButton active={currentTap === "/likes/course"}>
                        프로그램
                    </TapButton>
                </TapBlock>
                <TapBlock to="/likes/host">
                    <TapButton active={currentTap === "/likes/host"}>
                        호스트
                    </TapButton>
                </TapBlock>
            </TabContainer>
        </Block>
    );
}

const Block = styled.nav``;

const Header = styled.header`
    width: 100%;
    height: 50px;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    padding: 16px 0;
`;

const TabContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    margin-top: 5px;
`;

const TapBlock = styled(Link)`
    width: 100%;
`;

const TapButton = styled.button<{ active: boolean }>`
    width: 100%;
    font-size: 14px;
    font-weight: 700;
    padding: 16px 0 15px;

    ${(props) =>
        props.active
            ? css`
                  color: ${palette.black0};
                  border-bottom: 1px solid ${palette.black0};
              `
            : css`
                  color: ${palette.gray3};
                  border-bottom: 1px solid ${palette.gray3};
              `}
`;

export default TapNav;
