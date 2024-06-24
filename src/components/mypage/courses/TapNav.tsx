import styled, { css } from "styled-components";
import palette from "../../../lib/styles/palette";
import { Link, useLocation } from "react-router-dom";

enum States {
    scheduled = "scheduled",
    finished = "finished",
    canceled = "canceled",
}

function TapNav() {
    const location = useLocation();

    return (
        <Block>
            <Link to={States.scheduled}>
                <TapItem
                    active={
                        location.pathname ===
                        `/mypage/history/${States.scheduled}`
                    }
                >
                    모임예정
                </TapItem>
            </Link>
            <Link to={States.finished}>
                <TapItem
                    active={
                        location.pathname ===
                        `/mypage/history/${States.finished}`
                    }
                >
                    모임완료
                </TapItem>
            </Link>
            <Link to={States.canceled}>
                <TapItem
                    active={
                        location.pathname ===
                        `/mypage/history/${States.canceled}`
                    }
                >
                    취소
                </TapItem>
            </Link>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    margin-top: 20px;
`;

const TapItem = styled.div<{ active: boolean }>`
    font-size: 12px;
    font-weight: 700;
    border-radius: 15px;
    padding: 6px 12px;

    ${(props) =>
        props.active
            ? css`
                  color: ${palette.white0};
                  background-color: ${palette.red500};
                  border: 1px solid ${palette.red500};
              `
            : css`
                  color: ${palette.gray2};
                  background-color: ${palette.white0};
                  border: 1px solid ${palette.gray5};
              `}
`;

export default TapNav;
