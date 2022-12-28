import styled from "styled-components";

export const TermWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 1.7% 30%;
    padding: 2%;
    box-shadow: 0px 4px 10px rgb(0 0 0  / 10%);
`;
export const TermBottom = styled.div`
    display: flex;
    justify-content: center;
    border-top: 1px solid #ebebeb;
    margin: 3% 0;
    padding: 1% 0;
    width: 100%;
`;
export const TermBottomUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;
export const TermsDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 2%;
    margin: 2% 0;
    width: 100%;
`;
export const TermsLabel = styled.label`
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    cursor: pointer;
`;
export const TermsText = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 8px;
    font-size: 13px;
`;
export const TermsSubText = styled.div`
    display: flex;
    width: 100%;
    font-size: 11px;
    margin-bottom: 8px;
    color: rgba(34,34,34,.5);
`;
export const TermsLinkTextWrapper = styled.p`
    display: flex;
    font-size: 13px;
    color: #1d85e6;
    cursor: pointer;
    border: 0;
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