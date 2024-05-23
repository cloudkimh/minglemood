import styled from "styled-components";
import ModalTemplate from "../common/ModalTemplate";
import { ModalBody } from "../common/ModalTemplate/styles";
import palette from "../../lib/styles/palette";
import { useRef, useState } from "react";
import { Location } from "./types";

export type SearchModalProps = {
    visible: boolean;
    handleClose: () => void;
    handleSelectSearchResult: (result: {
        name: string;
        lat: number;
        lng: number;
    }) => void;
};

const sampleSearchResult = [
    {
        name: "부산 해운대",
        lat: 35.160283,
        lng: 129.160211,
    },
    {
        name: "부산 서면",
        lat: 35.157103,
        lng: 129.058739,
    },
    {
        name: "부산 광안리",
        lat: 35.152998,
        lng: 129.115429,
    },
    {
        name: "부산 영도",
        lat: 35.089393,
        lng: 129.045819,
    },
];

function SearchModal(props: SearchModalProps) {
    const { visible, handleClose, handleSelectSearchResult } = props;
    const searchInputRef = useRef<HTMLInputElement>(null);
    const [searchResults, setSearchResults] = useState<Array<Location>>([]);
    const hasSearchResults = searchResults.length > 0;

    const resetStates = () => {
        if (searchInputRef.current) {
            searchInputRef.current.value = "";
        }
        setSearchResults([]);
    };

    const getSearchResults = () => {
        // do async
        return sampleSearchResult;
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        if (value) {
            const nextSearchReaults = getSearchResults();
            setSearchResults(nextSearchReaults);
        } else {
            setSearchResults([]);
        }
    };

    const onClose = () => {
        resetStates();
        handleClose();
    };

    const onSearchResultItemClick = (result: Location) => {
        handleSelectSearchResult(result);
        resetStates();
        handleClose();
    };

    return (
        <ModalTemplate visible={visible} handleLayerClick={onClose}>
            <StyledModalBody>
                <SearchInputBlock>
                    <CloseBtn onClick={onClose}>닫기</CloseBtn>
                    <SearchInput
                        ref={searchInputRef}
                        type="text"
                        placeholder="지역, 제목, 태그, 호스트 이름 검색"
                        onChange={onChange}
                    />
                    <SearchIco />
                </SearchInputBlock>
                <SearchResultsBlock>
                    {hasSearchResults ? (
                        <SearchResults>
                            {searchResults.map((aResult) => (
                                <SearchResultItem
                                    onClick={() => {
                                        onSearchResultItemClick(aResult);
                                    }}
                                >
                                    {aResult.name}
                                </SearchResultItem>
                            ))}
                        </SearchResults>
                    ) : (
                        <EmptyResult>
                            지역, 제목, 태그, 호스트 이름을 검색해
                            <br />
                            원하는 코스를 찾아 보세요!
                        </EmptyResult>
                    )}
                </SearchResultsBlock>
            </StyledModalBody>
        </ModalTemplate>
    );
}

const StyledModalBody = styled(ModalBody)`
    display: grid;
    grid-template-rows: 32px 1fr;
    row-gap: 20px;
    height: 90vh;
    padding: 24px 20px 24px;
`;

const SearchInputBlock = styled.div`
    display: flex;
    align-items: center;
`;

const CloseBtn = styled.button`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    background-color: ${palette.red2};
    margin-right: 10px;
`;

const SearchInput = styled.input`
    width: 100%;
    font-size: 14px;
    border: none;
    outline: none;
    padding: 8px 10px;
    margin-right: 10px;

    &::placeholder {
        color: ${palette.gray3};
    }
`;

const SearchIco = styled.span`
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    background-color: ${palette.red2};
`;

const SearchResultsBlock = styled.div`
    height: 100%;
`;

const SearchResults = styled.ul``;

const SearchResultItem = styled.li`
    font-size: 14px;
    cursor: pointer;
    padding: 15px 0;
`;

const EmptyResult = styled.div`
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    margin-top: 200px;
`;

export default SearchModal;
