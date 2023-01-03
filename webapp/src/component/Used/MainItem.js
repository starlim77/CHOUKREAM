import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const MainItem = ({data,onItem}) => {

    // console.log(typeof(JSON.stringify(img)))
    
    const arr = JSON.stringify(data.imgName).split(',')
    const str = arr[0].slice(1)
    return (

        <>      
            <S.MainItem name={data.seq} onClick= {e => onItem(e.currentTarget.getAttribute("name"))}>

                    <S.ItemImg src={`../storage/${str}`}/>
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