import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './BuySellHistoryStyle';

const BuyHistory = () => {
    const memberSeq = jwtDecode(localStorage.getItem('accessToken')).sub;
    const [pageState, setPageState] = useState("buy");
    const [buyingList, setBuyingList] = useState([])
    const [boughtList, setBoughtList] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/my/getBought?memberSeq=${memberSeq}`)
             .then(res => setBoughtList(res.data))

        axios
            .get(`http://localhost:8080/my/getBuying?memberSeq=${memberSeq}`)
            .then(res => setBuyingList(res.data));
    }, []);

    const onPageState = e => {
        setPageState(e.target.value);
    };

    const onBuyPage = seq => {
        navigate(`/products/${seq}`)
    }

    return (
        <S.BuyHistory>
            <S.BuyHistoryTitle>구매내역</S.BuyHistoryTitle>
            <S.BuyHistoryWrapper>
                <S.SortWrapper>
                    <S.Sort onChange={onPageState}>
                        <option value="buy">구매중</option>
                        <option value="buyDone">구매 완료</option>
                    </S.Sort>
                </S.SortWrapper>
                {pageState === 'buy' &&
                    buyingList.map(item => (
                        <S.BuyBox key={item.seq} onClick={() => onBuyPage(item.seq)} done={false}>
                            <S.Img
                                src={`..\newProduct\${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'buying'} done={false}>구매중</S.Status>
                                <S.Size>{item.size}</S.Size>
                            </S.ProductText>
                        </S.BuyBox>
                    ))}
                {pageState === 'buyDone' &&
                    boughtList.map(item => (
                        <S.BuyBox key={item.seq} done={true}>
                            <S.Img
                                src={`..\newProduct\${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'buying'} done={true}>구매완료</S.Status>
                                <S.Size>{item.size}</S.Size>
                            </S.ProductText>
                        </S.BuyBox>
                    ))}
            </S.BuyHistoryWrapper>
        </S.BuyHistory>
    );
};

export default BuyHistory;
