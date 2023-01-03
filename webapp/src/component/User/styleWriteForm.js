import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0 40px;
`;

export const JoinAreaDiv = styled.form`
    padding-top: 58px;
    padding-bottom: 160px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const JoinTitle = styled.h2`
    width: 400px;
    height: 43px;
    padding-bottom: 42px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
`;

export const InputBox = styled.div`
    padding-top: 10px;
    padding-bottom: 14px;
`;

export const InputTitle = styled.h3`
    width: 400px;
    height: 18px;
    font-weight: bold;
`;

export const InputText = styled.input`
    width: 370px;
    height: 21px;
    border: none;
    padding: 8px 30px 8px 0;
    border-bottom: 1px solid #ebebeb;
    font-size: 15px;
    letter-spacing: -.15px;
    line-height: 22px;
`;

export const ErrorMessage = styled.p`
    padding-top: 5px;
    color: #f44336;
`;

export const JoinTerms = styled.div`
    padding-top: 24px;
    padding-bottom: 40px;
    width: 400px;
`;

export const TermsBox = styled.div`
    width: 400px;
    padding-top: 16px;
`;

export const CheckMain = styled.div`
    width: 400px;
    height: 24px;
    display: flex;
`;

export const CheckSub = styled.div`
    padding-left: 36px;
    padding-top: 16px;
`;

export const CheckboxItem = styled.div`
    width: 360px;
    height: 24px;
    margin-top: ${props => props.margin || 0};
`;

export const Span = styled.span`
    padding-left: 8px;
    font-size: 16px;
`;

export const ModalBtn = styled.button`
    border: 0;
    outline: none;
    background-color: #fff;
    color: #938e8e;
`;

export const JoinBtnBox = styled.div`
    padding-top: 0;
`;

export const JoinBtn = styled.button`
    width: 400px;
    height: 52px;
    background-color: ${props => props.disabled ? '#ebebeb' : '#222'};
    border-style: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;