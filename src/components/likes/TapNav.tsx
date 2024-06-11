import styled, { css } from "styled-components";
import palette from "../../lib/styles/palette";
import { Link, useLocation } from "react-router-dom";

function TapNav() {
    const location = useLocation();
    const currentTap = location.pathname;

    return (
        <Block>
            <TapBlock to="/likes/course">
                <TapButton active={currentTap === "/likes/course"}>
                    모임
                </TapButton>
                <IndicatorWrapper>
                    {currentTap === "/likes/course" && <Indicator />}
                </IndicatorWrapper>
            </TapBlock>
            <TapBlock to="/likes/host">
                <TapButton active={currentTap === "/likes/host"}>
                    호스트
                </TapButton>
                <IndicatorWrapper>
                    {currentTap === "/likes/host" && <Indicator />}
                </IndicatorWrapper>
            </TapBlock>
        </Block>
    );
}

const Block = styled.nav`
    display: flex;
    align-items: center;
    padding: 20px;
    margin-top: 80px;
`;

const TapBlock = styled(Link)`
    width: 100%;
`;

const TapButton = styled.button<{ active: boolean }>`
    width: 100%;
    font-size: 14px;
    color: ${palette.black0};
    padding: 16px 0 15px;

    ${(props) =>
        props.active
            ? css`
                  font-weight: 800;
              `
            : css`
                  font-weight: 500;
              `}
`;

const IndicatorWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 10px;
`;

const Indicator = styled.span`
    width: 5px;
    height: 5px;
    border-radius: 3px;
    background-color: ${palette.blue1};
`;

export default TapNav;
