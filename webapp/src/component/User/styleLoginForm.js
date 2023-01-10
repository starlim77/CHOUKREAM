import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const LoginAreaDiv = styled.form`
    padding-top: 60px;
    padding-bottom: 160px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

export const LoginBtnBox = styled.div`
    padding-top: 20px;
`;

export const LoginBtn = styled.button`
    width: 400px;
    height: 52px;
    background-color: ${props => props.disabled ? '#ebebeb' : '#222'};
    border-style: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;

export const LookBox = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 20px;
    width: 400px;
`;

export const LookList = styled.li`
    display: flex;
    justify-content: center;
    width:calc(100% / 3);
`;

export const SocialLogin = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    width: 400px;
    height: 120px;
`;

export const Button = styled.button`
    width: 398px;
    height: 50px;
    padding: 0;
    margin-bottom: 8px;
    border-width: 1px;
    border-radius: 8px;
    border-color: #ebebeb;
    background-color:transparent;
    color: #222;
    font-size: 16px;
    font-weight: 700;
    outline: none;
    border-style: solid;
`;

export const ButtonDiv = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonImg = styled.img`
    width: 35px;
    height: 35px;
    padding-left: 15px;
`;

export const ButtonSpan = styled.span`
    padding-left: 90px;
`;