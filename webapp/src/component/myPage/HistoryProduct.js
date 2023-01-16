import React, { useEffect } from 'react';
import * as S from './like/LikeStyle';
import { itemImg } from './MyPageMainStyle';

const HistoryProduct = (props) => {
    const {item} = props

    useEffect(() => {
        console.log("item", item)
    }, [])
    return (
        <S.Product>
            <S.ImgWrapper>
                <S.ProductImg src="..\image\product\tombrownHoody.png"></S.ProductImg>
            </S.ImgWrapper>
            <S.TextWrapper>
                <S.ProductBrand>Brand: {}</S.ProductBrand>
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
