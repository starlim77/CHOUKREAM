import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';

const SearchContents = ({items, onClose}) => {
    const[img,setImg]=useState();
    useEffect(()=>{
        var imgTemp = (items.imgName).split(',');
        setImg(`/resellList/${imgTemp[0]}`)
    },[])
    const navigate = useNavigate();             
    const onItem=()=>{
        navigate(`/products/${items.seq}`);
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

export default SearchContents;