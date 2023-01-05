import React, { useCallback, useEffect, useState } from 'react';
import * as O from './styles/OrderTypeStyle';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom/dist';

const BuyBid = ({ clickedBtn, buyPrice, sellPrice, orderNum  }) => {
    const [priceInput, setPriceInput] = useState(); //출력되는 price (,)있음
    const [priceNum, setPriceNum] = useState(); // 입력되는 price(,) 없음
    const navigate = useNavigate();
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();
    const size = searchParams.get('size');
    const productNum = searchParams.get("productNum")
    const type = searchParams.get("type")

    useEffect(() => {
        clickedBtn === "즉시판매"
            ? setPriceInput(sellPrice)
            : clickedBtn === "판매입찰" 
            ? setPriceInput()
            : clickedBtn === "즉시구매"
            ? setPriceInput(buyPrice)
            : clickedBtn === "구매입찰"
            && setPriceInput()
    }, [clickedBtn])

    //숫자만 입력, 세자리 마다 콤마 추가
    const inputPriceFormat = str => {
        setPriceNum(str.replace(/,/g, ""))
        const comma = str => {
            str = String(str);
            return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        };
        const uncomma = str => {
            str = String(str);
            return str.replace(/[^\d]+/g, '');
        };
        setPriceInput(comma(uncomma(str)));
        return comma(uncomma(str));
    };

    //payForm 페이지로 이동
    const onPayForm = () => {
        navigate(`/pay/payForm?type=resell&productNum=${productNum}&size=${size}$orderNum=${orderNum}`)
    };

    return (
        <O.Bid>
            <O.Text>
                {clickedBtn === '구매입찰' 
                    ? '구매 희망가'
                    : clickedBtn === "즉시구매"
                    ? '즉시구매가'
                    :clickedBtn === "판매입찰"
                    ? "판매희망가"
                    : clickedBtn === "즉시 판매"
                    || "즉시판매가"
                }
            </O.Text>
            {
                clickedBtn === "즉시구매"
                    ?<O.PriceInput
                    type="text"
                    value={buyPrice}
                    readOnly
                    />
                    :clickedBtn === "즉시판매"
                    ?<O.PriceInput
                    type="text"
                    value={priceInput || ''}
                    readOnly
                    />
                    :clickedBtn === "구매입찰"
                    ?<O.PriceInput
                    type="text"
                    value={priceInput || ''}
                    onChange={e => setPriceInput(inputPriceFormat(e.target.value))}
                    placeholder="희망가 입력"/>
                    :clickedBtn === "판매입찰"
                    && <O.PriceInput
                    type="text"
                    value={priceInput || ''}
                    onChange={e => setPriceInput(inputPriceFormat(e.target.value))}
                    placeholder="희망가 입력"/>
                    
            }
            {/* <O.PriceInput
                type="text"
                value={priceInput || ''}
                onChange={e => setPriceInput(inputPriceFormat(e.target.value))}
                placeholder="희망가 입력"/> */}
            <O.Text style={{ marginBottom: '30px' }}>
                총 결제금액은 다음 화면에서 계산됩니다.
            </O.Text>
            {priceInput ? (
                <O.BuyBtn onClick={onPayForm}>구매 계속</O.BuyBtn>
            ) : (
                <O.BuyBtn
                    style={{ backgroundColor: '#ebebeb', cursor: 'default' }}
                    disabled
                >
                    구매 계속
                </O.BuyBtn>
            )}
        </O.Bid>
    );
};

export default BuyBid;
