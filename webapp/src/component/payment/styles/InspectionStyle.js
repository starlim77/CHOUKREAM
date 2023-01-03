import styled from "styled-components";

export const CategoryTable = styled.table`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 38%;
    /* border: 1px solid black; */
    
`;
export const CategoryTbody = styled.tbody`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
`;
export const CategoryTr = styled.tr`
display: flex;
height: 33.3333333%;
width: 100%;
cursor: pointer;
`;
export const CategoryTd = styled.td`
display: flex;
justify-content: center;
align-items: center;
width: 33.3333333%;
    border: 1px solid #ebebeb;
`;
export const ContentWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
align-items: center;
margin: 15px 0;
    font-size: 12px;
`;
export const update = styled.p`
width: 100%;
font-weight: 700;
margin-bottom: 5px;
`;
export const content = styled.p`
display: flex;
width: 100%;
font-size: 10.8px;
font-weight: 100;
margin-top: 13px;
letter-spacing: 0.5px;
line-height: 15px;
`;
export const contentRed = styled.p`
display: flex;
width: 100%;
font-size: 10.8px;
font-weight: 100;
margin-top: 13px;
letter-spacing: 0.5px;
line-height: 15px;
color: #f15746;
`;
export const contentUl = styled.ul`
width: 100%;
font-size: 10.8px;
font-weight: 100;
margin-top: 13px;
letter-spacing: 0.5px;
line-height: 20px;
color: rgba(34,34,34,.6);
`;