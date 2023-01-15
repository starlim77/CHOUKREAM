import React from 'react';

import * as S from '../style';

const MainProduct = ({ item }) => {
    return (
        <S.ProductItemWrap>
            <S.ImgWrap>
                <S.ProductImg src={item.imgName} alt={item.title} />
            </S.ImgWrap>
            <S.InfoBox>
                <S.BrandName>{item.brand}</S.BrandName>
                <S.ProductName>{item.title}</S.ProductName>
                <S.ShippingExpress>빠른배송</S.ShippingExpress>
                <S.PriceInfo>{item.releasePrice}</S.PriceInfo>
                <S.Desc>즉시구매가</S.Desc>
            </S.InfoBox>
        </S.ProductItemWrap>
    );
};

export default MainProduct;
