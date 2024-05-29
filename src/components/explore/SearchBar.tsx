import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { SEARCH_BAR_HEIGHT } from "./variables";

export type SearchBarProps = {
    currentLocation: string;
    handleClickSearchBtn: () => void;
};

function SearchBar(props: SearchBarProps) {
    const { currentLocation, handleClickSearchBtn } = props;

    return (
        <Block>
            <CurrentLocation>{currentLocation}</CurrentLocation>
            <SearchBtn
                onClick={() => {
                    handleClickSearchBtn();
                }}
            >
                검색
            </SearchBtn>
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    height: ${SEARCH_BAR_HEIGHT};
    border-bottom: 1px solid ${palette.gray5};
    background-color: ${palette.white0};
    padding: 60px 20px 0;
`;

const CurrentLocation = styled.p`
    font-size: 14px;
    font-weight: 800;
`;

const SearchBtn = styled.button`
    display: block;
    width: 32px;
    height: 32px;
    background-color: ${palette.red2};
    margin-left: auto;
`;

export default SearchBar;
