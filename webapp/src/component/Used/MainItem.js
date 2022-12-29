import React from 'react';
import * as S from './style';

const MainItem = ({data}) => {
    return (
        <>      
            <S.MainItem>
                <S.ItemImg src={data.src}/>
                <S.ItemTitle>{data.title}</S.ItemTitle>
                <S.ItemSubTitle>{data.productName}</S.ItemSubTitle>
                <S.ItemContent>{data.contents}</S.ItemContent>
                <S.ItemPrice>{data.price}</S.ItemPrice>
                <S.ItemLike>
                    <S.ItemLikeImg src='../image/used/bookmark.svg'/><S.ItemLikeSpan>{data.like}</S.ItemLikeSpan>
                </S.ItemLike>
            </S.MainItem>
            
        </>

    );
};

export default MainItem;