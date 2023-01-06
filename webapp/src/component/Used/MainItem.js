import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

const MainItem = ({data,onItem}) => {

    // console.log(typeof(JSON.stringify(img)))
    
    const arr = JSON.stringify(data.imgName).split(',')
    
    //수정사항
    // console.log(data.seq + ' :'  + typeof(arr) +  " arr : " + arr)

    const str = arr[0].slice(1)


    if(!arr[1]){
        // console.log(str.length`)
        // console.log(str)
        var str2 = str.slice(0,str.length-1)
        // console.log(str2)
    }

    return (

        <>      
            <S.MainItem name={data.seq} onClick= {e => onItem(e.currentTarget.getAttribute("name"))}>

                    <S.ItemImg src={`../storage/${str2 ? str2:str}`}/>
                    <S.ItemTitle>{data.title}</S.ItemTitle>
                    <S.ItemSubTitle>{data.productName}</S.ItemSubTitle>
                    <S.ItemContent>{data.contents}</S.ItemContent>
                    <S.ItemPrice>{data.price}</S.ItemPrice>
                    <S.ItemLike>
                        <S.ItemLikeImg src='../image/used/bookmark.svg'/><S.ItemLikeSpan>{data.likes}</S.ItemLikeSpan>
                    </S.ItemLike>
            </S.MainItem>
            
        </>

    );
};

export default MainItem;