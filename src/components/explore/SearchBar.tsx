import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { SEARCH_BAR_HEIGHT } from "./variables";

export type SearchBarProps = {
    currentLocation: string;
    handleSearchBtnClick: () => void;
};

function SearchSBar(props: SearchBarProps) {
    const { currentLocation, handleSearchBtnClick } = props;

    return (
        <Block>
            <CurrentLocation>{currentLocation}</CurrentLocation>
            <SearchBtn
                onClick={() => {
                    handleSearchBtnClick();
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
    padding: 0px 20px;
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

export default SearchSBar;
