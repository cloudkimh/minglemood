import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import Popup from "./Popup";

export type LoadingProgressPopupProps = {
    open: boolean;
    progressRate: number;
    message?: string;
};

function LoadingProgressPopup(props: LoadingProgressPopupProps) {
    const { open, progressRate, message } = props;

    return (
        <Popup
            responsive
            open={open}
            content={
                <>
                    <MainText>업로드를 진행중 입니다.</MainText>
                    <SubText>용량에 따라 최대 3분의 시간이 소요됩니다.</SubText>
                    <SubText>{message}</SubText>
                    <FullProgressBar>
                        <InnerProgressBar rate={progressRate} />
                    </FullProgressBar>
                    <ProgressRate>{progressRate}%</ProgressRate>
                </>
            }
        />
    );
}

const MainText = styled.p`
    ${fonts.size.scale26}
    font-weight: ${fonts.weight.bold};
    text-align: center;
`;

const SubText = styled.p`
    ${fonts.size.scale18}
    color: ${palette.gray1};
    text-align: center;
    margin-top: 10px;

    & + & {
        margin-top: 4px;
    }

    ${media.mobile} {
        margin-top: 8px;

        & + & {
            margin-top: 2px;
        }
    }
`;

const FullProgressBar = styled.div`
    position: relative;
    width: 100%;
    height: 8px;
    background-color: ${palette.gray3};
    border-radius: 4px;
    margin-top: 40px;

    ${media.mobile} {
        height: 5px;
        border-radius: 2.5px;
        margin-top: 30px;
    }
`;

const InnerProgressBar = styled.div<{ rate: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${({ rate }) => `${rate}%`};
    height: 8px;
    background-color: ${palette.purple3};
    border-radius: 4px;
    transition: width 0.2s;

    ${media.mobile} {
        height: 5px;
        border-radius: 2.5px;
    }
`;

const ProgressRate = styled.div`
    ${fonts.size.scale22}
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple3};
    text-align: center;
    margin-top: 40px;

    ${media.mobile} {
        margin-top: 28px;
    }
`;

export default LoadingProgressPopup;
