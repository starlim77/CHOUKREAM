import React from 'react';
import * as S from './styles/PayHeaderStyle';

const PayHeader = () => {
    return (
        <>
            <S.PayHeaderWrapper>
                <S.PayHeader>
                    <S.PayTitleWrapper>
                        <S.PayTitle>구매하시기 전에 꼭 확인하세요</S.PayTitle>
                    </S.PayTitleWrapper>
                    <S.PayProductImgWrapper>
                        <S.PayProductImg src='../../image/product/tombrownHoody.png' />
                    </S.PayProductImgWrapper>
                    <S.PayProductDescWrapper>
                        <S.PayProductModel>모델 명</S.PayProductModel>
                        <S.PayProductKor>상품 이름 한글</S.PayProductKor>
                        <S.PayProductEng>Product Name English</S.PayProductEng>
                        <S.PayProductSize>상품 사이즈</S.PayProductSize>
                    </S.PayProductDescWrapper>
                </S.PayHeader>
            </S.PayHeaderWrapper>
        </>
    );
};

export default PayHeader;