import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type CategoryItemProps = {
    image: string;
    text: string;
    inner?: boolean;
};

function CategoryItem(props: CategoryItemProps) {
    const { image, text, inner = false } = props;

    return (
        <Block>
            <Image src={image} alt="카테고리 사진" />
            <Text inner={inner}>{text}</Text>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    & + & {
        margin-left: 10px;
    }
`;

const Image = styled.img`
    display: flex;
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
`;

const Text = styled.p<{ inner: boolean }>`
    font-size: 11px;
    font-weight: 700;
    color: ${palette.black2};
    line-height: normal;
    word-break: keep-all;
    text-align: center;
    margin-top: 7px;
    max-width: 48px;
    padding: 0 5px;
    ${(props) =>
        props.inner &&
        `
            position: absolute;
            margin: 0;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: ${palette.white0};
    `}
`;

export default CategoryItem;
