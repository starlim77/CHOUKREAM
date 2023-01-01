import styled from "styled-components";

export const DropDown = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-size: 12px;
    /* color: #222; */
`;
export const DropDownHead = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 0;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
`;
export const arrowImg = styled.img`
    width: 20px;
    opacity: 0.6;
`;
export const PolicyContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-size: 12px;
    padding: 20px 15px;
    background-color: #fafafa;
    border-bottom: 1px solid #ebebeb;
`;
export const Update = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
`;
export const Content = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    line-height: 20px;
`;
export const Title = styled.div`
    display: flex;
    width: 100%;
    font-size: 20px;
    font-weight: 700;
    margin-top: 30px;
    margin-bottom: 10px;
`;
export const Table = styled.table`
    display: flex;
    width: 100%;
    font-size: 12px;
    margin-bottom: 25px;
`;
export const Tbody = styled.tbody`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;
export const TableTr = styled.tr`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    width: 100%;
    border-top: 1px solid #ebebeb;
`;
export const TableTd = styled.td`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    line-height: 17px;
    padding: 5px 0;
    width: 50%;
    padding-right: 40px;
`;
export const TableTdRed = styled.td`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 0;
    width: 50%;
    color: #f15746;
`;
