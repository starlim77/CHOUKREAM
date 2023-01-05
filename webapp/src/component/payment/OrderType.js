import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import BuyBid from './BuyBid';
import PayHeader from './PayHeader';
import * as O from './styles/OrderTypeStyle';

const OrderType = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation();
    const sellOrBuy = location.pathname.split("/")[1]
    const [typeKor, setTypeKor] = useState(sellOrBuy === "sell" ? "판매" : "구매")
    const [clickedBtn, setClickedBtn] = useState(`${typeKor}입찰`)
    const productNum = searchParams.get("productNum")
    const size = searchParams.get("size")
    const [sellBidsListForm, setSellBidsListForm] = useState([{price: "-"}])
    const [buyBidsListForm, setBuyBidsListForm] = useState([{price: "-"}])

    //order type 선택
    const onClick =(e) => {
          setClickedBtn(e.target.innerText) 
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8080/pay/getSellBidsPriceMin?size=${size}&seq=${productNum}`)
        .then(res => res.data.length !== 0 && setSellBidsListForm(res.data))
        .catch(error => console.log(error))

        // axios.get(`http://localhost:8080/getSellBidsList?seq=${productNum}`)
        // .then(res => res.data.length !== 0 && setSellBidsListForm(res.data))
        // .catch(error => console.log(error))

        axios.get(`http://localhost:8080/pay/getBuyBidsPriceMax?size=${size}&seq=${productNum}`)
        .then(res => res.data.length !== 0 && setBuyBidsListForm(res.data))
        .catch(error => console.log(error))

        console.log(sellBidsListForm)
    }, [])

    return (
        <O.OrderWrapper>
            <PayHeader />
            <O.OrderBody>
                <O.Price>
                    <O.DirectPrice>
                        <O.DirectText>즉시 구매가</O.DirectText>
                        <O.DirectPriceText>{ sellBidsListForm.price === null ? "-" : sellBidsListForm.price }</O.DirectPriceText>
                    </O.DirectPrice>
                    <O.DirectPrice style={{borderRight: "0"}}>
                        <O.DirectText>즉시 판매가</O.DirectText>
                        <O.DirectPriceText>{ buyBidsListForm.price === null ? "-" : buyBidsListForm.price }</O.DirectPriceText>
                    </O.DirectPrice>
                    <O.TypeBtn>
                        {
                            sellOrBuy === "sell"
                                ? clickedBtn === "판매입찰"
                                    ? <O.AcctiveBtn onClick={onClick} style={{backgroundColor: "#41b979"}}>판매입찰</O.AcctiveBtn>
                                    : <O.DisabledBtn onClick={onClick} >판매입찰</O.DisabledBtn>
                                : clickedBtn === "구매입찰"
                                    ? <O.AcctiveBtn onClick={onClick} style={{backgroundColor: "#ef6253"}}>구매입찰</O.AcctiveBtn>
                                    : <O.DisabledBtn onClick={onClick} >구매입찰</O.DisabledBtn>
                        }
                        {
                            sellOrBuy === "sell"
                                ? clickedBtn === "즉시판매"
                                    ? <O.AcctiveBtn onClick={onClick} style={{backgroundColor: "#41b979"}}>즉시판매</O.AcctiveBtn>
                                    : <O.DisabledBtn onClick={onClick} >즉시판매</O.DisabledBtn>
                                : clickedBtn === "즉시구매"
                                    ? <O.AcctiveBtn onClick={onClick} style={{backgroundColor: "#ef6253)"}}>즉시구매</O.AcctiveBtn>
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
