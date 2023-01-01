import styled from "styled-components";

export const OrderWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1.7% 30%;
    padding: 2%;
    width: 650px;
    box-shadow: 0px 4px 10px rgb(0 0 0  / 10%);
`;
export const OrderBody = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-top: 1px solid #ebebeb;
`;
export const Price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 30PX;
`;
export const DirectPrice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 48%;
    height: 50px;
    margin: 25px 0;
    border-right: 1px solid #ebebeb;
`;
export const DirectPriceText = styled.span`
    display: flex;
    justify-content: center;
    width: 100%;
    color: rgba(34,34,34,.5);
`;
export const DirectText = styled.span`
    display: flex;
    justify-content: center;
    width: 100%;
`;
export const TypeBtn = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    border: 1px solid #ebebeb;
    padding: 3px;
    background-color: #ebebeb;
    border-radius: 50px;
    `;
export const AcctiveBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 45px;
    background-color: #ef6253;
    border: 0;
    padding: 10px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    `;
export const DisabledBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ebebeb;
    width: 49%;
    height: 45px;
    border: 0;
    padding: 10px;
    border-radius: 50px;
    cursor: pointer;
    `;
export const Bid = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: wrap;
    `;
export const Text = styled.span`
    display: inline-block;
    align-items: center;
    padding: 10px;
    font-size: 13px;
    font-weight: 800;
    `;
export const PriceInput = styled.input`
    display: flex;
    text-align: right;
    border: 0;
    border-bottom: 3px solid #ebebeb;
    width: 100%;
    font-size: 30px;
    margin-bottom: 10px;
    `;
export const YearInput = styled.input`
    display: flex;
    text-align: right;
    border: 0;
    border: 3px solid #ebebeb;
    width: 20%;
    height: 10%;
    font-size: 20px;
    margin-bottom: 10px;
    `;
export const dash = styled.div`
    display: flex;
    justify-content: right;
    height: 10%;
    border: 0;
    font-size: 20px;
    `;
export const disabledBuyBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border: 0;
    color: #fff;
    background-color: #ebebeb;
    border-radius: 10px;
    font-size: 18px;
    `;
export const BuyBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border: 0;
    color: #fff;
    background-color: #222;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
`;


    
