import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles/PayHeaderStyle';
// import ProductData from "./ProductData"
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const PayHeader = () => {
    const location = useLocation()
    const url = location.pathname
    const [product, setProduct] = useState([])
    const [productData, setProductData] = useState();
    // const [nameEng, setNameEng] = useState()
    // const [nameKor, setNameKor] = useState()
    // const [model, setModel] = useState()
    const [searchParams, setSearchParams] = useSearchParams()
    const type = searchParams.get("type")
    const size = searchParams.get("size")

    useMemo(() => {
        axios
            .post('http://localhost:8080/shop/getProductBySeq?seq=1')
            .then(res => res.data !== null && console.log(res.data))
            .catch(error => console.log(error));
    }, []);

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
                        {/* <S.PayProductModel>{product.model_num}</S.PayProductModel> */}
                        {/* <S.PayProductKor>{productData.sub_title}</S.PayProductKor> */}
                        {/* <S.PayProductEng>{productData.title}</S.PayProductEng> */}
                        <S.PayProductSize>{size}</S.PayProductSize>
                    </S.PayProductDescWrapper>
                </S.PayHeader>
            </S.PayHeaderWrapper>
        </>
    );
};

export default PayHeader;