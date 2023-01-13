import styled from 'styled-components';

export const NewAddress = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
    box-sizing: border-box;
    width: 520px;
    padding: 20px 30px;
    z-index: 9999;
    transform: translate(-50%, -50%);
`;

export const NewAddressTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const HeaderCloseBtn = styled.a``;
export const HeaderTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
`;
export const InputInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
export const InputTitle = styled.h4`
    font-size: 13px;
    font-weight: 600;
    margin: 15px 0 7px 0;
`;
export const ZipCode = styled.div`
    display: flex;
    position: relative;
`;
export const Input = styled.input`
    border: none;
    border-bottom: 1px solid black;
    font-size: 15px;
    padding: 8px 0;
    width: 100%;
`;
export const DefaltAddress = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;
export const DefaultCheckBox = styled.input``;
export const DefaultSpan = styled.span``;
export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 30px;
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
export const SaveBtn = styled.input`
    border: none;
    border-radius: 12px;
    width: 120px;
    height: 42px;
    font-size: 14px;
    cursor: pointer;
`;
