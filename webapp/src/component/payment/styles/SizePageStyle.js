import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1.7% 30%;
    padding: 2%;
    width: 650px;
    box-shadow: 0px 4px 10px rgb(0 0 0  / 10%);
`;
export const Body = styled.div`
    width: 100%;
    height: 300px;
    border-top: 1px solid #ebebeb;
`;
export const BtnWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 10px;
    margin: 20px 0;
`;
export const SizeBtn = styled.button`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 30%;
    height: 55px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    font-size: 13px;
    cursor: pointer;
    background-color: white;
`;
export const SizeText = styled.span`
    display: inline-block;
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 13px;
    margin-bottom: 5px;
    background-color: white;
    border: 0;
    `;
export const PriceText = styled.span`
    display: inline-block;
    text-align: center;
    width: 100%;
    justify-content: center;
    font-size: 10px;
    background-color: white;
    border: 0;
`;
export const BuyBtnWrapper = styled.div`
    width: 100%;
    padding-top: 10px;
    border-top: 1px solid #ebebeb;
`;



