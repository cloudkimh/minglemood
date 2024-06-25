import styled from "styled-components";
import palette from "../../../../lib/styles/palette";

const Container = styled.div`
    display: grid;
    row-gap: 15px;
    border-radius: 5px;
    background: ${palette.white0};
    box-shadow: 0px 0px 12px 0px rgba(153, 153, 153, 0.3);
    padding: 20px 15px;
`;

export default Container;
