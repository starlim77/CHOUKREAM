import styled from 'styled-components';

export const AddressPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 40px;
`;
export const AddressTitle = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 4px solid black;
`;
export const AddressTitleText = styled.div`
    display: flex;
    width:  87%;
    font-size: 25px;
    font-weight: 600;
`;
export const NewAddressBtn = styled.button`
    display: flex;
    justify-content: center;
    width:  13%;
    height: 100%;
    background-color: #fff;
    border: 1px solid #222;
    border-radius: 10px;
    cursor: pointer;
`;
export const AddressContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;
export const NoneAddress = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
`;
export const NoneText = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    justify-content: center;
`;
export const NoneAddressBtn = styled.button`
    display: flex;
    width: 120px;
    height: 30px;
    justify-content: center;
    align-items: center;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    font-size: 12px;
    color: rgba(34, 34, 34, 0.8);
    background-color: white;
    cursor: pointer;
`;
export const AddressList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 6px;
    padding: 10px 0;
`;
export const Address = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    width: 100%;
    padding: 10px 0;
`;
export const Name = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    width: 87%;
    margin-bottom: 8px;
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
    width: 87%;
    margin-bottom: 8px;
    `;
export const AllAddress = styled.div`
    font-size: 14px;
    margin-bottom: 10px;
    width: 87%;
`;
export const Hr = styled.div`
    width: 100%;
    border-bottom: 1px solid black;
`;
export const DeleteBtn = styled.button`
    width: 8%;
    margin-left: 4%;
    border-bottom: 1px solid black;
    background-color: #fff;
    border: 1px solid #222;
    border-radius: 10px;
    cursor: pointer;
`;

