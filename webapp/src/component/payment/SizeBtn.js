import React, { useState } from 'react';
import * as S from './styles/SizePageStyle';
import * as B from './styles/TermStyle';
import ProductData from './ProductData';

const SizeBtn = props => {
    const { onClick, size, location } = props;
    const url = location.pathname

    return (
        <>
            <S.SizeBtn id={size.number} onClick={onClick}>
                <S.SizeText id={size.number}>{size.number} </S.SizeText>
                <S.PriceText id={size.number} style={url==="/buy" ? {color: "#f15746"} : {color: "#31b46e"}}>{size.price}</S.PriceText>
            </S.SizeBtn>
        </>
    );
};

export default SizeBtn;
