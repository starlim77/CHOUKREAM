import style from "style";
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

export const ModifiedButton = styled.button`
    width: 50px;
    height: 20px;
    border: 1px solid #d3d3d3;
    color: rgba(34,34,34,.8);
    background-color: #fff;
    cursor: pointer;
    border-radius: 10px;
`
export const SearchInput = styled.input`
background-color: #f4f4f4;
border : none;
border-radius: 8px;
width: 90%;
height: 5px;
margin: 16px 0 20px;
padding: 15px 43px 15px 12px;
font-size: 12px;
outline: none;

`
export const NoResult = styled.div`
    position: relative;
    padding: 120px 0 100px;
    background-color: #fff; 
    text-align: center;
    font-size: 16px;
    letter-spacing: -.16px;
    color: rgba(34,34,34,.8);`
    
export const ChatButton = styled.button`
font-size: 12px;
font-weight: 600;
padding: 9px 10px;
border: 1px solid #222;
border-radius: 10px;
margin-top: 12px;
cursor: pointer;


`
export const CsCategoryTable = styled.table`

box-sizing: border-box;
-webkit-tap-highlight-color: transparent;
display: table;
text-indent: initial;
table-layout: fixed;
width: 100%;
border-spacing: 0;
border: 0;
border-collapse: collapse;
`
export const CsCategoryTbody =styled.tbody`
display: table-row-group;
vertical-align: middle;
border-color: inherit;
`

export const CsCategoryTr =styled.tr`
    border-top: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    width : 90%;

    
`

export const CsCategoryTd =styled.td`
    width: 30%;
    color: rgba(34,34,34,.5);
    text-align: center;
    
   
    
    justify-content: space-around;
    background-color: #fff;
   
    cursor: pointer;
  
   
  
    
    padding: 0 12px;
    font-size: 18px;
    letter-spacing: -.09px;
    height: 75px;
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
      


`
export const CategoryButton =styled.button`
border: none;
background-color : transparent;
margin-top : 25px;
align-items: center;
align-content: center;

font-size :20px;
justify-content: space-around;

`
export const CategoryButtonClick =styled.button`
border: none;
background-color : transparent;
margin-top : 25px;
align-items: center;
align-content: center;
font-color : black;
font-size :20px;
justify-content: space-around;

`

export const SearchReset = styled.span`

`
export const  UpdownIcon = styled.div`
margin-left: auto;
    flex-shrink: 0;
    width: 32px;
    height: 32px;

`
export const StrongCategory = styled.strong`
font-weight :bold;
`
export const TitleDiv =styled.div`

`