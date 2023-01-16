import React, { useEffect, useState } from 'react';
import * as S from './style';

const SearchContents = ({items}) => {
    const[img,setImg]=useState();
    useEffect(()=>{
        // var imgTemp = (items.img).split(',');
        // setImg(imgTemp[0])
    },[])
    
                        
    return (
        <li>
            <S.ContentsWrapper>            
                <S.ContentsImg ></S.ContentsImg>
                <S.ContentsTitle>{items.title}</S.ContentsTitle>
            </S.ContentsWrapper>

        </li>
    );
};

export default SearchContents;