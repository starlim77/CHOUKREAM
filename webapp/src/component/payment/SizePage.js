import React, { useEffect, useMemo, useState } from 'react';
import PayHeader from './PayHeader';
import * as S from './styles/SizePageStyle';
import * as B from './styles/TermStyle';
import SizeBtn from './SizeBtn';
import ProductData from './ProductData';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const SizePage = () => {
    const [sizeList, setSizeList] = useState([]);
    // const [size, setSize] = useState([]);
    const [isBtnClick, setIsBtnClick] = useState(false);
    const [selectSize, setSelectSize] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams()
    const sellOrBuy = location.pathname;
    const productNum = searchParams.get("productNum")
    const type = searchParams.get("type")

    //size 객체 DB에서 가져옴
    useEffect(() => {
        axios
            .get(`http://localhost:8080/getProductSize?seq=${productNum}`)
            .then(res => setSizeList(res.data))
            .catch(error => console.log(error));
    }, []);

    const onClick = e => {
        setIsBtnClick(true);
        setSelectSize(e.target.id);
    };

    const onNext = () => {
        navigate(`${sellOrBuy}/payTerms?type=${type}&productNum=${productNum}&size=${selectSize}`)
    }

    return (
        <S.Container>
            <PayHeader />
            <S.Body>
                <S.BtnWrapper>
                    {sizeList.map((item, index) => {
                        return (
                            <SizeBtn
                                key={index}
                                size={item.size}
                                location={location}
                                price={item.price}
                                onClick={onClick}
                            />
                        );
                    })}
                </S.BtnWrapper>
            </S.Body>
            {isBtnClick && (
                <S.BuyBtnWrapper>
                    {sellOrBuy === '/buy' ? (
                        <B.BuyBtn onClick={onNext}>구매계속</B.BuyBtn>
                    ) : (
                        <B.BuyBtn onClick={onNext}>판매계속</B.BuyBtn>
                    )}
                </S.BuyBtnWrapper>
            )}
        </S.Container>
    );
};

export default SizePage;
