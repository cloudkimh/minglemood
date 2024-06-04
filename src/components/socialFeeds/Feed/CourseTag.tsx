import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { ellipsis } from "../../../lib/styles/utils";
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
                <Ico />
                <CourseName>{name}</CourseName>
                <Ico />
            </Block>
        </Link>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 45px;
    border: 1px solid ${palette.gray4};
    border-radius: 20px;
    padding: 0 20px;
    margin-top: 10px;
`;

const CourseName = styled.p`
    ${ellipsis}
    font-size: 13px;
    font-weight: 700;
    color: ${palette.blue1};
    margin-left: 5px;
`;

const Ico = styled.div`
    width: 14px;
    height: 14px;
    background-color: ${palette.red2};
`;

export default CourseTag;
