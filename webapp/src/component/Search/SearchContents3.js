import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const SearchContents3 = ({items, onClose}) => {
    const[img,setImg]=useState();
    useEffect(()=>{
        var imgTemp = (items.imgName).split(',');
        setImg(`/storage/${imgTemp[0]}`)
    },[])
    const navigate = useNavigate();             
    const onItem=()=>{
        navigate(`/Used/usedItem?seq=${items.seq}`);
        onClose();
    }
    return (
        <li>
            <S.ContentsWrapper onClick={onItem}>            
                <S.ContentsImg src={img}></S.ContentsImg>
                <S.ContentsTitle>{items.title}</S.ContentsTitle>
            </S.ContentsWrapper>

        </li>
    );
};
export default SearchContents3;