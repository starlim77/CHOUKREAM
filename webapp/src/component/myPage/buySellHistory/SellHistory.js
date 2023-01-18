import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './BuySellHistoryStyle';
import SellHistoryProduct from './SellHistoryProduct';

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
                        <SellHistoryProduct
                        item={item}
                            key={item.seq}
                            status={'판매중'}
                            onBuyPage={onBuyPage}
                            done={false}
                            isUsed={false}
                        />
                        
                    ))}
                {pageState === 'sellDone' &&
                    soldList.map((item, index) => (
                        <SellHistoryProduct
                        item={item}
                        key={item.seq}
                        status={'판매완료'}
                        done={true}
                        isUsed={false}
                    />
              
                    ))}
                <S.InnerTitle style={{ marginTop: '20px' }}>
                    중고 판매 내역
                </S.InnerTitle>
                {pageState === 'sell' &&
                    sellingUsed.map((item, index) => (
                        <SellHistoryProduct
                        item={item}
                            key={item.seq}
                            status={'판매중'}
                            onBuyPage={onSellingUsedPage}
                            done={false}
                            isUsed={true}
                        />
                       
                    ))}
                {pageState === 'sellDone' &&
                    soldUsed.map((item, index) => (
                        <SellHistoryProduct
                        item={item}
                        key={item.seq}
                        status={'판매완료'}
                        done={true}
                        isUsed={true}
                    />
                       
                    ))}
            </S.BuyHistoryWrapper>
        </S.BuyHistory>
    );
};

export default SellHistory;
