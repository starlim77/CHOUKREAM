import React from 'react';
import * as S from './LikeStyle';

const LikeProduct = () => {
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
            <S.ButtonWrapper>
                <S.Button>
                    <S.ButtonText>구매</S.ButtonText>
                    <S.Price>32,000,000</S.Price>
                </S.Button>
                <S.Delete>삭제</S.Delete>
            </S.ButtonWrapper>
        </S.Product>
    );
};

export default LikeProduct;
