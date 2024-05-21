import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { FILTERS_HEIGHT } from "./variables";

export type FiltersProps = {};

function Filters(props: FiltersProps) {
    return (
        <Block>
            <></>
        </Block>
    );
}

const Block = styled.div`
    height: ${FILTERS_HEIGHT};
    background-color: ${palette.red2};
`;

export default Filters;
