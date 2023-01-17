import React, { useEffect } from 'react';
import * as S from './like/LikeStyle';
import { itemImg } from './MyPageMainStyle';

const HistoryProduct = (props) => {
    const {item} = props
    const addComma = num => {
        let str = String(num)
        return (str.replace(/\B(?=(\d{3})+(?!\d))/g, ','))
    };
    return (
        <S.Product>
            <S.ImgWrapper>
                <S.ProductImg src={item.imgName}></S.ProductImg>
            </S.ImgWrapper>
            <S.TextWrapper>
                <S.ProductBrand>Brand: {item.brand}</S.ProductBrand>
                <S.ProductName>
                    Name: {item.subTitle}
                </S.ProductName>
                <S.ProductSize>Size: {item.size}</S.ProductSize>
            </S.TextWrapper>
            <S.PriceText>
            {addComma(item.price)}
            </S.PriceText>
            <S.StatusText>
            </S.StatusText>
        </S.Product>
    );
};

export default HistoryProduct;
