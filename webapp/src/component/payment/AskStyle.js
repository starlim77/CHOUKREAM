import { style } from '@mui/system';
import styled from 'styled-components';

export const AskModal = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 460px;
    background-color: white;
    border-radius: 15px;
    padding: 30px 20px;
    z-index: 9999;
    transform: translate(-50%, -50%);
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
`;

export const Asks = styled.div`
    font-weight: ${props => (props.checkAsk ? '900' : null)};
    font-size: 15px;
    padding: 17px;
    cursor: pointer;
`;
export const Input = styled.input``;

export const Hr = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(34, 34, 34, 0.05);
`;
export const Btns = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;
`;
export const CancelBtn = styled.input`
    border: 1px solid #d3d3d3;
    border-radius: 12px;
    width: 120px;
    height: 42px;
    font-size: 14px;
    color: rgba(34, 34, 34, 0.8);
    background-color: white;
    cursor: pointer;
`;
export const ApplyBtn = styled.input`
    border: none;
    border-radius: 12px;
    width: 120px;
    height: 42px;
    font-size: 14px;
    cursor: pointer;
    color: white;
    background-color: black;
`;
