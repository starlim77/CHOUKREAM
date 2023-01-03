import styled from "styled-components";

export const Bg = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: #000;
    opacity: 0.6;
`;
export const Popup = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 470px;
    height: 580px;
    background: white; 
    position: absolute;
    padding-right: 5px;
    padding-left: 10px;
    padding-top: 10px;
    left: 50%;
    top: 50%; 
    box-sizing: border-box;
    transform: translate(-50%, -50%); 
    border-radius: 20px;
    `;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 98%;
    height: 8%;
    `;
export const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    font-size: 20px;
`;
export const CloseX = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8%;
    font-size: 20px;
`;
export const Scroll = styled.div`
display: flex;
width: 100%;
height: 80%;
flex-wrap: wrap;
padding: 20px;
overflow-y: auto;

`;
export const BodyDiv = styled.div`
    width: 100%;
    height: 100%;
    
`;
