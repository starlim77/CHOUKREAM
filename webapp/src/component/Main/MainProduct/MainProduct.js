import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

import * as S from '../style';
import { PRODUCT_INFO } from './Product';
import axios from 'axios';

const MainProduct = ({ title, subTitle }) => {
    const [products, setProducts] = useState([]);

    const [page, setPage] = useState(0);

    const handleMoreClick = () => {
        setPage(page + 1); // rn
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8080/getRecentReleaseList?rn=${page}`)
            .then(
                res =>
                    res.data.length !== 0 && setProducts(...products, res.data),
            )
            .catch(error => console.log(error));
    }, [page]);
    return (
        <S.MainProductWrap>
            <S.SectionTitle>{title}</S.SectionTitle>
            <S.SubTitle>{subTitle}</S.SubTitle>
            <S.ItemtWrap>
                {products.map((product, idx) => {
                    return <ProductItem key={idx} item={product} />;
                })}
            </S.ItemtWrap>
            <S.MoreButton onClick={() => handleMoreClick()}>
                더보기
            </S.MoreButton>
        </S.MainProductWrap>
    );
};

export default MainProduct;
