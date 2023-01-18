import React, { useEffect } from 'react';
import * as S from './like/LikeStyle';

const HistoryProduct = (props) => {
    const {item} = props
    const addComma = num => {
        let str = String(num)
        return (str.replace(/\B(?=(\d{3})+(?!\d))/g, ','))
    };
useEffect(() => {
    console.log(item.type)
}, [])
    
    const arr = JSON.stringify(item.imgName).split(',')
    
    const str = arr[0].slice(1)

    if(!arr[1]){
        var str2 = str.slice(0,str.length-1)
    }

    return (
        <S.Product>
            <S.ImgWrapper>
                {item.type === "used" && <S.ProductImg src={`../storage/${str2 ? str2 : str}`} style={{height: "100px"}}/>}
                {item.type === "resell" && <S.ProductImg src={`../resellList/${str2 ? str2 : str}`} style={{height: "100px"}}/>}
                {item.type === "new" && <S.ProductImg src={`../newProductList/${str2 ? str2 : str}`} style={{height: "100px"}}/>}
               
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
