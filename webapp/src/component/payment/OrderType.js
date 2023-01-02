import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import BuyBid from './BuyBid';
import PayHeader from './PayHeader';
import * as O from './styles/OrderTypeStyle';

const OrderType = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const type = searchParams.get("type")
    const [typeKor, setTypeKor] = useState(type === "/sell" ? "판매" : "구매")
    const [clickedBtn, setClickedBtn] = useState(`${typeKor}입찰`)
    
    //order type 선택
    const onClick =(e) => {
          setClickedBtn(e.target.innerText)
    }
    
    return (
        <O.OrderWrapper>
            <PayHeader />
            <O.OrderBody>
                <O.Price>
                    <O.DirectPrice>
                        <O.DirectText>즉시 구매가</O.DirectText>
                        <O.DirectPriceText>100,000</O.DirectPriceText>
                    </O.DirectPrice>
                    <O.DirectPrice style={{borderRight: "0"}}>
                        <O.DirectText>즉시 판매가</O.DirectText>
                        <O.DirectPriceText>100,000</O.DirectPriceText>
                    </O.DirectPrice>
                    <O.TypeBtn>
                        {
                            type === "/sell"
                                ? clickedBtn === "판매입찰"
                                    ? <O.AcctiveBtn onClick={onClick} style={{backgroundColor: "rgb(49, 180, 110)"}}>판매입찰</O.AcctiveBtn>
                                    : <O.DisabledBtn onClick={onClick} >판매입찰</O.DisabledBtn>
                                : clickedBtn === "구매입찰"
                                    ? <O.AcctiveBtn onClick={onClick} >구매입찰</O.AcctiveBtn>
                                    : <O.DisabledBtn onClick={onClick} >구매입찰</O.DisabledBtn>
                        }
                        {
                            type === "/sell"
                                ? clickedBtn === "즉시판매"
                                    ? <O.AcctiveBtn onClick={onClick} style={{backgroundColor: "rgb(49, 180, 110)"}}>즉시판매</O.AcctiveBtn>
                                    : <O.DisabledBtn onClick={onClick} >즉시판매</O.DisabledBtn>
                                : clickedBtn === "즉시구매"
                                    ? <O.AcctiveBtn onClick={onClick} >즉시구매</O.AcctiveBtn>
                                    : <O.DisabledBtn onClick={onClick} >즉시구매</O.DisabledBtn> 
                        }
                    </O.TypeBtn>
                </O.Price>
                <BuyBid clickedBtn={clickedBtn}/>
            </O.OrderBody>
        </O.OrderWrapper>
    );
};

export default OrderType;
