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
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/my/getSelling?memberSeq=${memberSeq}`)
            .then(res => setSellingList(res.data));

        axios
            .get(`http://localhost:8080/my/getSold?memberSeq=${memberSeq}`)
            .then(res => setSoldList(res.data));
    }, []);
    const onPageState = e => {
        setPageState(e.target.value);
    };

    const onBuyPage = seq => {
        navigate(`/products/${seq}`)
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
                {pageState === 'sell' &&
                    sellingList.map(item => (
                        <S.SellBox
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
                                <S.Status status={'selling'} done={false}>
                                    판매중
                                </S.Status>
                                <S.Size>{item.size}</S.Size>
                            </S.ProductText>
                        </S.SellBox>
                    ))}
                {pageState === 'sellDone' &&
                    soldList.map(item => (
                        <S.SellBox key={item.seq} done={true}>
                            <S.Img
                                src={`..\newProduct\${item.imgName}`}
                            ></S.Img>
                            <S.ProductText>
                                <S.ProductBrand>{item.brand}</S.ProductBrand>
                                <S.ProductName>{item.subTitle}</S.ProductName>
                                <S.Status status={'sold'} done={true}>
                                    판매완료
                                </S.Status>
                                <S.Size>{item.size}</S.Size>
                            </S.ProductText>
                        </S.SellBox>
                    ))}
            </S.BuyHistoryWrapper>
        </S.BuyHistory>
    );
};

export default SellHistory;
