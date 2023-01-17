import React from 'react';
import { Link } from 'react-router-dom';

import * as S from '../style';

const MainProduct = ({ item }) => {
    const photoshop = itemImg => {
        // console.log(itemImg)
        // console.log(typeof(itemImg))
        if (itemImg !== null && itemImg !== undefined) {
            //console.log(itemImg);
            const img = itemImg.split(',');
            // console.log(img[0])
            // console.log(typeof(img[0]))
            return img[0];
        }
    };
    const addComma = num => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    return (
        item && (
            <S.ProductItemWrap>
                <Link
                    to={`/products/${item.seq}`}
                    style={{ textDecoration: 'none' }}
                >
                    <S.ImgWrap>
                        <S.ProductImg
                            src={`/resellList/${photoshop(item.img_name)}`}
                            alt={item.title}
                        />
                    </S.ImgWrap>
                    <S.InfoBox>
                        <S.BrandName>{item.brand}</S.BrandName>
                        <S.ProductName>{item.title}</S.ProductName>
                        <S.ShippingExpress>빠른배송</S.ShippingExpress>
                        <S.PriceInfo>
                            {addComma(item.min_price)}
                            {item.min_price !== '-' && '원'}
                        </S.PriceInfo>
                        <S.Desc>즉시구매가</S.Desc>
                    </S.InfoBox>
                </Link>
            </S.ProductItemWrap>
        )
    );
};

export default MainProduct;
