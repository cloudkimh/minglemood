import styled from "styled-components";
import palette from "../../lib/styles/palette";

export type CategoryItemProps = {
    image: string;
    text: string;
};

function CategoryItem(props: CategoryItemProps) {
    const { image, text } = props;

    return (
        <Block>
            <Image src={image} alt="카테고리 사진" />
            <Text>{text}</Text>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

const Text = styled.p`
    font-size: 11px;
    color: ${palette.gray0};
    margin-top: 12px;
`;

export default CategoryItem;
