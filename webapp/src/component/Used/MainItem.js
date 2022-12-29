import React from 'react';
import * as S from './style';

const MainItem = () => {
    return (
        <>      
            <S.MainItem>
                <S.ItemImg src='../image/used/black.png'/>
                <S.ItemTitle>제목</S.ItemTitle>
                <S.ItemSubTitle>아이템 이름</S.ItemSubTitle>
                <S.ItemContent>한줄 내용asdasd
                    asdasd  asdaasdasdasd
                    sdasd</S.ItemContent>
                <S.ItemPrice>50,000,000원</S.ItemPrice>
                <S.ItemLike>
                    <S.ItemLikeImg src='../image/used/bookmark.svg'/><S.ItemLikeSpan>201</S.ItemLikeSpan>
                </S.ItemLike>
            </S.MainItem>
            
        </>

    );
};

export default MainItem;