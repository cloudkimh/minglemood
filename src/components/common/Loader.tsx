import styled from "styled-components";
import { loading } from "../../lib/styles/animations";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export type LoaderProp = {
    className?: string;
};

function Loader(props: LoaderProp) {
    const { className } = props;

    return (
        <Block className={className}>
            <SpinnerBg />
            <Spinner />
            <Spinner />
            <Spinner />
            <Spinner />
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    display: block;
    width: 80px;
    height: 80px;

    ${media.mobile} {
        width: 60px;
        height: 60px;
    }
`;

const SpinnerBg = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${palette.gray4};
    border-radius: 50%;

    ${media.mobile} {
        width: 48px;
        height: 48px;
        margin: 6px;
        border: 6px solid ${palette.gray4};
    }
`;

const Spinner = styled.div`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid ${palette.purple0};
    border-radius: 50%;
    border-color: ${palette.purple0} transparent transparent transparent;
    animation: ${loading} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;

    &:nth-child(1) {
        animation-delay: -0.45s;
    }
    &:nth-child(2) {
        animation-delay: -0.3s;
    }
    &:nth-child(3) {
        animation-delay: -0.15s;
    }

    ${media.mobile} {
        width: 48px;
        height: 48px;
        margin: 6px;
        border: 6px solid ${palette.purple0};
        border-color: ${palette.purple0} transparent transparent transparent;
    }
`;

const LoaderContainer = styled.div`
    display: grid;
    place-content: center;
    width: 80px;
    padding-top: 300px;
    margin: 0 auto;

    ${media.mobile} {
        width: 60px;
        padding-top: 200px;
    }
`;

Loader.SpinnerBg = SpinnerBg;
Loader.Spinner = Spinner;
Loader.Container = LoaderContainer;

export default Loader;
