import styled from "styled-components";

export const NoticeUl = styled.div` 
    display: flex;
    flex-wrap: wrap;
`
export const NoticeLi = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #ebebeb;
`

export const NoticeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    `

export const NoticeTitle = styled.div`
    display: flex;
    width: 100%;
    padding-bottom: 30px;
    font-weight: 550;
    font-size: large;
    border-bottom: 1px solid #ebebeb;
    `
export const NoticeContent = styled.div`
    display: flex;
    width: 100%;
    padding: 30px 30px 28px;
    margin-bottom: 20px;
    background-color: #fafafa;
    line-height: 30px;
    border-bottom: 1px solid #ebebeb;
`
export const Button = styled.button`
    width: 100px;
    height: 40px;
    border: 1px solid #d3d3d3;
    color: rgba(34,34,34,.8);
    background-color: #fff;
    cursor: pointer;
    border-radius: 10px;
`
export const InspectionWrapper = styled.div`
    display: flex;
    width: 1000px;
    height: 100%;
`
export const CategoryTable = styled.table`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 200px;
    margin-bottom: 40px;
`;
export const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
`;

export const ContentText = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    line-height: 25px;
    font-weight: 300;
`;