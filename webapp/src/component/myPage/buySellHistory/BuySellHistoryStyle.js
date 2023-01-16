import styled from 'styled-components';

export const BuyHistory = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 910px;
    margin: 40px 0;
`;
export const SellHistory = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 910px;
    margin: 40px 0;
`;
export const BuyHistoryTitle = styled.div`
    display: flex;
    width: 100%;
    font-size: 25px;
    font-weight: 600;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 4px solid black;
`;
export const BuyHistoryWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;
export const SortWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0;
    margin-bottom: 40px;
    border-bottom: 1px solid #ebebeb;
`;
export const Sort = styled.select`
    display: flex;
    width: 15%;
    height: 30px;
`;
export const BuyBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 15px;
    border: 1px solid rgb(49, 180, 110);
    margin-bottom: 20px;
    cursor: ${props => (props.done || "pointer")};
`;
export const SellBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ef6253;
    margin-bottom: 20px;
    cursor: ${props => (props.done || "pointer")};
`;
export const Img = styled.img`
    display: flex;
    width: 13%;
    margin-right: 10px;
`;
export const ProductText = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 70%;
`;
export const ProductBrand = styled.div`
    display: flex;
    width: 100%;
    height: 30px;
`;
export const ProductName = styled.div`
    display: flex;
    width: 50%;
    height: 30px;
    margin-bottom: 14px;
    font-size: 14px;
    font-weight: 600;
    line-height: 30px;
    margin-right: 60px;
    word-break: keep-all;
    overflow-y: hidden;
`;
export const Status = styled.div`
    display: flex;
    width: 20%;
    height: 30px;
    margin-bottom: 14px;
    color: ${props => (props.status === "buying" ? " rgb(49, 180, 110)"
                                       :"selling" && "#ef6253")}; 
    color: ${props => (props.done && "black")};
    text-decoration: ${props => (props.done && "line-through")};
    font-size: 18px;
`;
export const Size = styled.div`
    display: flex;
    width: 60%;
`;
export const DealDate = styled.div`
    display: flex;
    width: 40%;
`;

