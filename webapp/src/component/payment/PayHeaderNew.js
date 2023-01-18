import React, { useEffect, useMemo, useState } from 'react';
import * as S from './styles/PayHeaderStyle';
// import ProductData from "./ProductData"
import { useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const PayHeaderNew = () => {
    const location = useLocation();
    const url = location.pathname.split('/')[1];
    const [title, setTitle] = useState();
    const [subTitle, setSubTitle] = useState();
    const [modelNum, setModelNum] = useState(0);
    const [img, setImg] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    const [productNum, setProductNum] = useState(
        searchParams.get('seq') === null
            ? searchParams.get('productNum')
            : searchParams.get('seq'),
    );
    //const size = searchParams.get('size');

    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/shop/getProductBySeqNew?seq=${productNum}`,
            )
            .then(
                res =>
                    res.data !== null &&
                    (setModelNum(res.data.price),
                    setTitle(res.data.title),
                    setSubTitle(res.data.subTitle),
                    setImg(res.data.imgName)),
            )
            .catch(error => console.log(error));
    }, []);

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
        <S.PayHeaderWrapper>
            <S.PayHeader>
                <S.PayTitleWrapper>
                    <S.PayTitle>
                        {url === 'newBuy' ? (
                            <span
                                style={{
                                    color: '#f15746',
                                    fontWeight: '900',
                                }}
                            >
                                구매
                            </span>
                        ) : (
                            <span
                                style={{
                                    color: '#31b46e',
                                    fontWeight: '700',
                                }}
                            >
                                판매
                            </span>
                        )}
                        하시기 전에 꼭 확인하세요
                    </S.PayTitle>
                </S.PayTitleWrapper>
                <S.PayProductImgWrapper>
                    <S.PayProductImg
                        src={'/newProductList/' + photoshop(img)}
                    />
                </S.PayProductImgWrapper>
                <S.PayProductDescWrapper>
                    <S.PayProductModel>{}</S.PayProductModel>
                    <S.PayProductKor>{subTitle}</S.PayProductKor>
                    <S.PayProductEng>{title}</S.PayProductEng>
                    <S.PayProductSize>{addComma(modelNum)}</S.PayProductSize>
                </S.PayProductDescWrapper>
            </S.PayHeader>
        </S.PayHeaderWrapper>
    );
};

export default PayHeaderNew;
