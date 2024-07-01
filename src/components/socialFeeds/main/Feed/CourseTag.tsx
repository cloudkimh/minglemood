import styled from "styled-components";
import palette from "../../../../lib/styles/palette";
import { ellipsis } from "../../../../lib/styles/utils";
import { Link } from "react-router-dom";

export type CourseTagProps = {
    url: string;
    name: string;
};

function CourseTag(props: CourseTagProps) {
    const { url, name } = props;

    return (
        <Link to={url}>
            <Block>
                <Tag>참여모임</Tag>
                <CourseName>{name}</CourseName>
            </Block>
        </Link>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${palette.gray5};
    border-radius: 5px;
    padding: 7px 10px;
    margin-top: 10px;
`;

const Tag = styled.span`
    font-size: 10px;
    color: ${palette.white0};
    background-color: #998e8a;
    border-radius: 3px;
    flex-shrink: 0;
    padding: 4px 5px;
    margin-right: 8px;
`;

const CourseName = styled.p`
    ${ellipsis}
    font-size: 11px;
    font-weight: 700;
    color: ${palette.black2};
`;

export default CourseTag;
