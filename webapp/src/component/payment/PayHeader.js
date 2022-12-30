import React, { useEffect, useState } from 'react';
import * as S from './styles/PayHeaderStyle';
import ProductData from "./ProductData"
import { useLocation, useSearchParams } from 'react-router-dom';

const PayHeader = () => {
    const location = useLocation()
    const url = location.pathname
    const [nameEng, setNameEng] = useState(ProductData.nameEng)
    const [nameKor, setNameKor] = useState(ProductData.nameKor)
    const [model, setModel] = useState(ProductData.model)
    const [searchParams, setSearchParams] = useSearchParams()
    const type = searchParams.get("type")
    const size = searchParams.get("size")

    return (
        <>
            <S.PayHeaderWrapper>
                <S.PayHeader>
                    <S.PayTitleWrapper>
                        <S.PayTitle>{type === "/buy" || url === "/buy" ? <span style={{color: "#f15746", fontWeight: "900"}}>구매</span> : <span style={{color: "#31b46e", fontWeight: "700"}}>판매</span>}하시기 전에 꼭 확인하세요</S.PayTitle>
                    </S.PayTitleWrapper>
                    <S.PayProductImgWrapper>
                        <S.PayProductImg src='../../image/product/tombrownHoody.png' />
                    </S.PayProductImgWrapper>
                    <S.PayProductDescWrapper>
                        <S.PayProductModel>{model}</S.PayProductModel>
                        <S.PayProductKor>{nameKor}</S.PayProductKor>
                        <S.PayProductEng>{nameEng}</S.PayProductEng>
                        <S.PayProductSize>{size}</S.PayProductSize>
                    </S.PayProductDescWrapper>
                </S.PayHeader>
            </S.PayHeaderWrapper>
        </>
    );
};

export default PayHeader;