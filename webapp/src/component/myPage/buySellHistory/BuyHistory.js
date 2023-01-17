import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './BuySellHistoryStyle';

const BuyHistory = () => {
    const memberSeq = jwtDecode(localStorage.getItem('accessToken')).sub;
    const [pageState, setPageState] = useState('buy');
    const [buyingList, setBuyingList] = useState([]);
    const [boughtList, setBoughtList] = useState([]);
    const [buyingUsed, setBuyingUsed] = useState([])
    const [boughtUsed, setBoughtUsed] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/my/getBoughtHistory?memberSeq=${memberSeq}`,
            )
            .then(res => setBoughtList(res.data));

        axios
            .get(
                `http://localhost:8080/my/getBuyingHistory?memberSeq=${memberSeq}`,
            )
            .then(res => setBuyingList(res.data));

        axios
            .get(
                `http://localhost:8080/my/getBuyingUsed?memberSeq=${memberSeq}`,
            )
            .then(res => setBuyingUsed(res.data));
        axios
            .get(`http://localhost:8080/my/getBoughtUsed?memberSeq=${memberSeq}`)
            .then(res => setBoughtUsed(res.data));
    }, []);

    const onPageState = e => {
        setPageState(e.target.value);
    };

    const onBuyPage = seq => {
        navigate(`/products/${seq}`);
    };
    const onSellingUsedPage = seq => {
        navigate(`/Used/usedItem?seq=${seq}`);
    };

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
                <S.InnerTitle>리셀 구매 내역</S.InnerTitle>
                {pageState === 'buy' &&
                    buyingList.map(item => (
                        <S.BuyBox
                            key={item.seq}
                            onClick={() => onBuyPage(item.seq)}
                            done={false}
                        >
                            <S.Img
                                src={`../newProduct/${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'buying'} done={false}>
                                    구매중
                                </S.Status>
                                <S.Size>
                                    {item.size && `size : ${item.size}`}
                                </S.Size>
                                <S.Size>{item.shipAddress}</S.Size>
                            </S.ProductText>
                        </S.BuyBox>
                    ))}
                {pageState === 'buyDone' &&
                    boughtList.map((item, index) => (
                        <S.BuyBox key={index} done={true}>
                            <S.Img
                                src={`../newProduct/${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'buying'} done={true}>
                                    구매완료
                                </S.Status>
                                <S.Size>
                                    {item.size && `size : ${item.size}`}
                                </S.Size>
                                <S.Size>{item.shipAddress}</S.Size>
                            </S.ProductText>
                        </S.BuyBox>
                    ))}
                <S.InnerTitle style={{ marginTop: '20px' }}>
                    중고 구매 내역
                </S.InnerTitle>
                {pageState === 'buy' &&
                    buyingUsed.map((item, index) => (
                        <S.BuyBox
                            key={item.seq}
                            onClick={() => onSellingUsedPage(item.seq)}
                            done={false}
                        >
                            <S.Img
                                src={`../newProduct/${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'buying'} done={false}>
                                    구매중
                                </S.Status>
                                <S.Size>
                                    {item.size && `size : ${item.size}`}
                                </S.Size>
                            </S.ProductText>
                        </S.BuyBox>
                    ))}
                {pageState === 'buyDone' &&
                    boughtUsed.map((item, index) => (
                        <S.BuyBox key={index} done={true}>
                            <S.Img
                                src={`..\newProduct\${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'sold'} done={true}>
                                    구매완료
                                </S.Status>
                            </S.ProductText>
                        </S.BuyBox>
                    ))}
            </S.BuyHistoryWrapper>
        </S.BuyHistory>
    );
};

export default BuyHistory;
