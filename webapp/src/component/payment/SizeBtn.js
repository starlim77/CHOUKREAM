import React, { useState } from 'react';
import * as S from './styles/SizePageStyle';
import * as B from './styles/TermStyle';
import ProductData from './ProductData';

const SizeBtn = props => {
    const { onClick, size, location, price } = props;
    const url = location.pathname

    return (
        <>
            <S.SizeBtn id={size} onClick={onClick}>
                <S.SizeText id={size}>{size}</S.SizeText>
                <S.PriceText id={size} style={url==="/buy" ? {color: "#f15746"} : {color: "#31b46e"}}>{price !== null ? price : '구매 입찰'}</S.PriceText>
            </S.SizeBtn>
        </>
    );
};

export default SizeBtn;
