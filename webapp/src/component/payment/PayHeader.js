import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles/PayHeaderStyle';
// import ProductData from "./ProductData"
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const PayHeader = () => {
    const location = useLocation()
    const url = location.pathname.split("/")[1]
    const [title, setTitle] = useState()
    const [subTitle, setSubTitle] = useState()
    const [modelNum, setModelNum] = useState()
    const [img, setImg] = useState()
    const [searchParams, setSearchParams] = useSearchParams()
    const [productNum, setProductNum]= useState(searchParams.get("seq") === null ? searchParams.get("productNum") : searchParams.get("seq"))
    const size = searchParams.get("size")

    useEffect(() => {
        console.log(productNum)
        axios
            .post(`http://localhost:8080/shop/getProductBySeq?seq=${productNum}`)
            .then(res => res.data !== null && (setModelNum(res.data.modelNum),
                                               setTitle(res.data.title),
                                               setSubTitle(res.data.subTitle),
                                               setImg(res.data.img)))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <S.PayHeaderWrapper>
                <S.PayHeader>
                    <S.PayTitleWrapper>
                        <S.PayTitle>{ url === "buy" ? <span style={{color: "#f15746", fontWeight: "900"}}>구매</span> : <span style={{color: "#31b46e", fontWeight: "700"}}>판매</span>}하시기 전에 꼭 확인하세요</S.PayTitle>
                    </S.PayTitleWrapper>
                    <S.PayProductImgWrapper>
                        <S.PayProductImg src={img} />
                    </S.PayProductImgWrapper>
                    <S.PayProductDescWrapper>
                        <S.PayProductModel>{modelNum}</S.PayProductModel>
                        <S.PayProductKor>{subTitle}</S.PayProductKor>
                        <S.PayProductEng>{title}</S.PayProductEng>
                        <S.PayProductSize>{size}</S.PayProductSize>
                    </S.PayProductDescWrapper>
                </S.PayHeader>
            </S.PayHeaderWrapper>
        </>
    );
};

export default PayHeader;