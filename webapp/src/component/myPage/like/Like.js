import React from 'react';
import LikeProduct from './LikeProduct';
import * as S from './LikeStyle';

const Like = () => {
    return (
        <S.LikeWrapper>
            <S.LikeTitle>관심상품</S.LikeTitle>
            <LikeProduct/>
            <LikeProduct/> 
        </S.LikeWrapper>
    );
};

export default Like;
