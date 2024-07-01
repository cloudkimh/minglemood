import styled from "styled-components";
import { DefaultButton } from "../../common/styles/Buttons";
import palette from "../../../lib/styles/palette";

export type ButtonSectionProps = {
    onNormalDownload: () => void;
    onHighQualityDownload: () => void;
};

function ButtonSection(props: ButtonSectionProps) {
    const { onNormalDownload, onHighQualityDownload } = props;

    return (
        <Block>
            <DownloadBtn
                onClick={onNormalDownload}
                color={palette.red500}
                styleType="outlined"
            >
                일반 다운로드
            </DownloadBtn>
            <DownloadBtn
                onClick={onHighQualityDownload}
                color={palette.red500}
                styleType="filled"
            >
                고화질 다운로드
            </DownloadBtn>
        </Block>
    );
}

const Block = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    column-gap: 4px;
    width: 100%;
    padding: 10px 20px 20px;
    background-color: ${palette.white0};
`;

const DownloadBtn = styled(DefaultButton)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
`;

export default ButtonSection;
