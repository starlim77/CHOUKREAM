import { faCircleXmark, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import * as S from './style';


const SearchForm = ({onClose}) => {

    return (
       <>
         <S.bg > 
            <S.closex style={{cursor: 'pointer'}} onClick={onClose}>
            <FontAwesomeIcon icon={faX} size='1x' />
            </S.closex>
         </S.bg>
         <S.popup> 
            <S.searchContainer>
                <S.searchWrap>
                    <S.searchArea>
                        <S.search>
                            <S.searchinput placeholder="브랜드명, 모델명, 모델번호 등"></S.searchinput>
                            <S.searchbutton>
                              <FontAwesomeIcon icon={faX} size='1x' />
                            </S.searchbutton>
                        </S.search>
                    </S.searchArea>
                </S.searchWrap>
            </S.searchContainer>


            <S.searchContent>
                <S.searchCardItems>
                    <S.searchItemTag>
                        <S.searchItemTagTitle>
                            <S.searchTitle>추천 검색어</S.searchTitle>
                            <S.searchTitleSub></S.searchTitleSub>
                        </S.searchItemTagTitle>
                        <S.searchItemTagName>
                            <S.searchItemTagWrap>
                                <S.searchItemTagCard>
                                    스캇
                                </S.searchItemTagCard>
                                <S.searchItemTagCard>
                                    나이키
                                </S.searchItemTagCard>
                                <S.searchItemTagCard>
                                    주얼리
                                </S.searchItemTagCard>
                                <S.searchItemTagCard>
                                    뉴발란스
                                </S.searchItemTagCard>
                                <S.searchItemTagCard>
                                    지갑
                                </S.searchItemTagCard>
                                <S.searchItemTagCard>
                                    슈프림
                                </S.searchItemTagCard>
                                <S.searchItemTagCard>
                                    아이앱
                                </S.searchItemTagCard>
                                <S.searchItemTagCard>
                                    덩크
                                </S.searchItemTagCard>
                                <S.searchItemTagCard>
                                    패딩
                                </S.searchItemTagCard>
                            </S.searchItemTagWrap>
                        </S.searchItemTagName>
                    </S.searchItemTag>
                </S.searchCardItems>

                <S.searchCardItems>
                    <S.searchItemRanking>
                        <S.searchItemTagTitle>
                                <S.searchTitle>인기 검색어</S.searchTitle>
                                <S.searchTitleSub>
                                    {/* 시간넣기 */}
                                </S.searchTitleSub>
                        </S.searchItemTagTitle>
                        <S.searchItemRankingCard>
                            <S.searchItemRankingContent>
                                <S.RankingItem>
                                    <S.RankingIdx>1</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>나이키</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>
                                <S.RankingItem>
                                    <S.RankingIdx>2</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>조던</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>
                                <S.RankingItem>
                                    <S.RankingIdx>3</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>에어포스</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>
                                <S.RankingItem>
                                    <S.RankingIdx>4</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>덩크</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>
                                <S.RankingItem>
                                    <S.RankingIdx>5</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>어그</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>
                                <S.RankingItem>
                                    <S.RankingIdx>6</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>뉴발란스</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>
                                <S.RankingItem>
                                    <S.RankingIdx>7</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>눕시</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>
                                <S.RankingItem>
                                    <S.RankingIdx>8</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>지갑</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>
                                <S.RankingItem>
                                    <S.RankingIdx>9</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>슈프림</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>
                                <S.RankingItem>
                                    <S.RankingIdx>10</S.RankingIdx>
                                    <S.RankingFont>
                                        <S.RankingTitle>스투시</S.RankingTitle>
                                    </S.RankingFont>
                                </S.RankingItem>

                            </S.searchItemRankingContent>
                        </S.searchItemRankingCard>
                    </S.searchItemRanking>
                </S.searchCardItems>




                <S.searchCardItems>
                    <S.category>
                    <S.searchItemTagTitle>
                            <S.searchTitle>카테고리</S.searchTitle>
                    </S.searchItemTagTitle>
                    </S.category>
                </S.searchCardItems>

                <S.searchCardItems>
                    <S.brand>
                        <S.searchItemTagTitle>
                                <S.searchTitle>인기 브랜드</S.searchTitle>
                        </S.searchItemTagTitle>
                    </S.brand>
                </S.searchCardItems>


            </S.searchContent>

         </S.popup>
       </>
    );
};


export default SearchForm;