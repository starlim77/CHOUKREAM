import React, { useCallback, useEffect, useState } from 'react';
import * as O from './styles/OrderTypeStyle';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const BuyBid = ({clickedBtn}) => {
    const [num, setNum] = useState();
    const [priceInput, setPriceInput] = useState()

    const inputPriceFormat = str => {
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

    return (
        <O.Bid>
            <O.Text>{clickedBtn === "구매입찰" ? "구매 희망가" : "즉시 구매가"}</O.Text>
            <O.PriceInput
                type="text"
                value={num || ''}
                onChange={e => setNum(inputPriceFormat(e.target.value))}
                placeholder="희망가 입력"
            />
            <O.Text style={{ marginBottom: '30px' }}>
                총 결제금액은 다음 화면에서 계산됩니다.
            </O.Text>
            {/* <O.Text style={{ width: '100%', paddingBottom: "20px"}}>입찰 마감기한</O.Text> */}
            {priceInput ? <O.BuyBtn >구매 계속</O.BuyBtn> : <O.BuyBtn style={{backgroundColor: "#ebebeb", cursor: 'default'}} disabled>구매 계속</O.BuyBtn>}
        </O.Bid>
    );
};

export default BuyBid;
