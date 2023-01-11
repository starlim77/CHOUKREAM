import styled from 'styled-components';

export const AddressList = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    flex-direction: column;
    box-sizing: border-box;
    width: 520px;
    height: 620px;
    background-color: white;
    border-radius: 15px;
    padding: 30px 20px;
    z-index: 9999;
    transform: translate(-50%, -50%);
    overflow: scroll;
`;
export const AddressListTitle = styled.h2`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
`;
export const Address = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer;
    gap: 6px;
    padding: 10px 0;
`;
export const Name = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
`;
export const Mark = styled.span`
    margin-left: 10px;
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: #f4f4f4;
`;
export const Tel = styled.div`
    font-size: 16px;
`;
export const AllAddress = styled.div`
    font-size: 14px;
    margin-bottom: 10px;
`;
export const Hr = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
`;
