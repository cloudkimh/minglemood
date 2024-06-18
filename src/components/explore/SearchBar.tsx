import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { ReactComponent as PrevPageIco } from "../../assets/icon/arrow-left.svg";
import filterIco from "../../assets/icon/filter.png";
import { SEARCH_BAR_HEIGHT } from "./variables";

export type SearchBarProps = {
    currentLocation: string;
    onClickSearchBtn: () => void;
    onClickFilterBtn: () => void;
};

function SearchBar(props: SearchBarProps) {
    const { currentLocation, onClickSearchBtn, onClickFilterBtn } = props;

    return (
        <Block>
            {/* <PrevPageBtn>
                <PrevPageIco />
            </PrevPageBtn> */}
            <CurrentLocation onClick={onClickSearchBtn}>
                {currentLocation}
            </CurrentLocation>
            <FilterBtn onClick={onClickFilterBtn} />
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    height: ${SEARCH_BAR_HEIGHT};
    border-bottom: 1px solid ${palette.gray5};
    background-color: ${palette.white0};
    padding: 10px 20px;
`;

const PrevPageBtn = styled.button``;

const CurrentLocation = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 12px;
    height: 35px;
    background-color: ${palette.white3};
    border-radius: 20px;
    padding: 0 15px;
    margin-right: 15px;
`;

const FilterBtn = styled.button`
    width: 20px;
    height: 20px;
    felx-shrink: 0;
    background-image: url(${filterIco});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

export default SearchBar;
