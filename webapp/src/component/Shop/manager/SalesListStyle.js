import styled from 'styled-components';

export const SalesListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: yellow; */
`;
export const Title = styled.h2`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
`;
export const SalesList = styled.ul`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;
export const Sales = styled.li`
    display: flex;
    align-items: center;
    width: 1200px;
    border: 1px solid black;
`;
export const Type = styled.h4`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    font-size: 15px;
`;
export const SalesImg = styled.img`
    width: 80px;
    height: 80px;
`;
export const SalesInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-left: 25px;
    font-size: 15px;
    font-weight: 400;
    width: 600px;
`;
export const SalesOrderNum = styled.h3`
    font-weight: 600;
`;
export const SalesTitle = styled.h3``;
export const SalesSize = styled.h3``;
export const Price = styled.h3`
    display: flex;
    justify-content: flex-end;
    width: 150px;
    font-size: 20px;
    font-weight: 500;
`;
export const Status = styled.h3`
    display: flex;
    justify-content: center;
    width: 80px;
    margin-left: 80px;
`;
export const CancelBtn = styled.input``;
