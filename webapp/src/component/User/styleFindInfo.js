import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const HelpAreaDiv = styled.form`
    margin: 0 auto;
    padding-top: 60px;
    padding-bottom: 160px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const HelpTitle = styled.h2`
    width: 400px;
    height: 43px;
    padding-bottom: 41px;
    border-bottom: 2px solid;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
`;

export const HelpNotice = styled.div`
    width: 400px;
    height: 38px;
    padding-top: 40px;
    padding-bottom: 30px;
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

export const HelpBtnBox = styled.div`
    padding-top: 44px;
`;

export const HelpBtn = styled.button`
    width: 400px;
    height: 52px;
    background-color: ${props => props.disabled ? '#ebebeb' : '#222'};
    border-style: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;