import React from 'react';
import * as S from './BuySellHistoryStyle';
import { useEffect, useState } from 'react';

const BuyHistoryProduct = props => {
    const { item, onBuyPage, status, done, isUsed } = props;

    const arr = JSON.stringify(item.imgName).split(',');

    const str = arr[0].slice(1);

    if (!arr[1]) {
        var str2 = str.slice(0, str.length - 1);
    }

    useEffect(() => {
        //console.log(item)
    }, [])
    return (
        <S.BuyBox onClick={() => onBuyPage(item.seq)} done={false}>
            {/* {item.type === "resell" && <S.Img src={`../resellList/${str2 ? str2 : str}`}/>} */}
            {item.type === "new" ? <S.Img src={`../newProductList/${str2 ? str2 : str}`}/> : item.type === "used" ? <S.Img src={`../storage/${str2 ? str2 : str}`}/> :<S.Img src={`../resellList/${str2 ? str2 : str}`}/>}
            {/* {item.type === "used" && <S.Img src={`../storage/${str2 ? str2 : str}`}/>} */}
            {/* <S.Img
                src={
                    isUsed
                        ? `../storage/${str2 ? str2 : str}`
                        : `../resellList/${str2 ? str2 : str}`
                }
            ></S.Img> */}
            <S.ProductText>
                <S.ProductBrand>{item.brand}</S.ProductBrand>
                <S.ProductName>{item.subTitle}</S.ProductName>
                <S.Status status={'buying'} done={done}>
                    {status}
                </S.Status>
                <S.Size>{item.size && `size : ${item.size}`}</S.Size>
                {/* <S.Address>{item.shipAddress}</S.Address>
                <S.BuyName>{item.shipName}</S.BuyName>
                <S.BuyPhone>{item.shipPhone}</S.BuyPhone> */}
            </S.ProductText>
        </S.BuyBox>
    );
};

export default BuyHistoryProduct;
