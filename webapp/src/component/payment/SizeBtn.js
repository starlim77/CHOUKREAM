import React, { useEffect, useState } from 'react';
import * as S from './styles/SizePageStyle';
import * as B from './styles/TermStyle';
import ProductData from './ProductData';

const SizeBtn = props => {
    const { size, location, price, onClick, selectedSize } = props;
    const url = location.pathname;

    // useEffect(() => {
    //     console.log(selectedSize)
    // }, [selectedSize])
    return (
        <>
            <S.SizeBtn id={size} onClick={onClick} selectedSize={selectedSize}>
                <S.SizeText id={size}>{size}</S.SizeText>
                <S.PriceText
                    id={size}
                    style={
                        url === '/buy' || url === '/newBuy'
                            ? { color: '#f15746' }
                            : { color: '#31b46e' }
                    }
                >
                    {price}
                </S.PriceText>
            </S.SizeBtn>
        </>
    );
};

export default SizeBtn;
