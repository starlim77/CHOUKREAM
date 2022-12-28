import React, { useState } from 'react';
import * as S from './styles/SizePageStyle';
import * as B from './styles/TermStyle'
import ProductData from './ProductData';

const SizeBtn = ( props ) => {
    const {onClick, size} = props

    return (
        <>
            <S.SizeBtn id={size.number} onClick={onClick}>
                <S.SizeText id={size.number} >{size.number} </S.SizeText>
                <S.PriceText id={size.number} >{size.price}</S.PriceText>
            </S.SizeBtn>
        </>
    );
};

export default SizeBtn;