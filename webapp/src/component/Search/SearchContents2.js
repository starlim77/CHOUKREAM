import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const SearchContents2 = ({items, onClose}) => {
    const[img,setImg]=useState();
    useEffect(()=>{
        var imgTemp = (items.imgName).split(',');
        // setImg(`/resellList/${imgTemp[0]}`)
        setImg(`/newProductList/${imgTemp[0]}`)
    },[])
    
    const navigate = useNavigate();             
    const onItem=()=>{
        navigate(`/newProducts/${items.seq}`);
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
export default SearchContents2;