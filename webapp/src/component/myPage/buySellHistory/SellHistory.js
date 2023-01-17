import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './BuySellHistoryStyle';

const SellHistory = () => {
    const memberSeq = jwtDecode(localStorage.getItem('accessToken')).sub;
    const [pageState, setPageState] = useState('sell');
    const [sellingList, setSellingList] = useState([]);
    const [soldList, setSoldList] = useState([]);
    const [sellingUsed, setSellingUsed] = useState([]);
    const [soldUsed, setSoldUsed] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/my/getSellingHistory?memberSeq=${memberSeq}`,
            )
            .then(res => setSellingList(res.data));
        axios
            .get(
                `http://localhost:8080/my/getSoldHistory?memberSeq=${memberSeq}`,
            )
            .then(res => setSoldList(res.data));
        axios
            .get(
                `http://localhost:8080/my/getSellingUsed?memberSeq=${memberSeq}`,
            )
            .then(res => setSellingUsed(res.data));
        axios
            .get(`http://localhost:8080/my/getSoldUsed?memberSeq=${memberSeq}`)
            .then(res => setSoldUsed(res.data));
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
            <S.BuyHistoryTitle>판매내역</S.BuyHistoryTitle>
            <S.BuyHistoryWrapper>
                <S.SortWrapper>
                    <S.Sort onChange={onPageState}>
                        <option value="sell">판매중</option>
                        <option value="sellDone">판매 완료</option>
                    </S.Sort>
                </S.SortWrapper>
                <S.InnerTitle>리셀 판매 내역</S.InnerTitle>
                {pageState === 'sell' &&
                    sellingList.map((item, index) => (
                        <S.SellBox
                            key={index}
                            onClick={() => onBuyPage(item.seq)}
                            done={false}
                        >
                            <S.Img
                                src={`../newProduct/${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'selling'} done={false}>
                                    판매중
                                </S.Status>
                                <S.Size>
                                    {item.size && `size : ${item.size}`}
                                </S.Size>
                                <S.Size>{item.shipAddress}</S.Size>
                            </S.ProductText>
                        </S.SellBox>
                    ))}
                {pageState === 'sellDone' &&
                    soldList.map((item, index) => (
                        <S.SellBox key={index} done={true}>
                            <S.Img
                                src={`..\newProduct\${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'sold'} done={true}>
                                    판매완료
                                </S.Status>
                            </S.ProductText>
                        </S.SellBox>
                    ))}
                <S.InnerTitle style={{ marginTop: '20px' }}>
                    중고 판매 내역
                </S.InnerTitle>
                {pageState === 'sell' &&
                    sellingUsed.map((item, index) => (
                        <S.SellBox
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
                                <S.Status status={'selling'} done={false}>
                                    판매중
                                </S.Status>
                                <S.Size>
                                    {item.size && `size : ${item.size}`}
                                </S.Size>
                            </S.ProductText>
                        </S.SellBox>
                    ))}
                {pageState === 'sellDone' &&
                    soldUsed.map((item, index) => (
                        <S.SellBox key={index} done={true}>
                            <S.Img
                                src={`..\newProduct\${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'sold'} done={true}>
                                    입금완료
                                </S.Status>
                                {item.shipAddress}
                                {item.shipName}
                                {item.shipPhone}
                            </S.ProductText>
                        </S.SellBox>
                    ))}
            </S.BuyHistoryWrapper>
        </S.BuyHistory>
    );
};

export default SellHistory;
