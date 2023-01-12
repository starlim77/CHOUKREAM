import React from 'react';
import * as S from './like/LikeStyle';

const HistoryProduct = () => {
    return (
        <S.Product>
            <S.ImgWrapper>
                <S.ProductImg src="..\image\product\tombrownHoody.png"></S.ProductImg>
            </S.ImgWrapper>
            <S.TextWrapper>
                <S.ProductBrand>Brand: SONY</S.ProductBrand>
                <S.ProductName>
                    Name: Sony Playstation 5 Blu-ray Edition (SIEK 220V)
                </S.ProductName>
                <S.ProductSize>Size: one size</S.ProductSize>
            </S.TextWrapper>
            <S.PriceText>
                150,000원
            </S.PriceText>
            <S.StatusText>
                기한 만료
            </S.StatusText>
        </S.Product>
    );
};

export default HistoryProduct;
