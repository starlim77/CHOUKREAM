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
export const DateSpan = styled.span`
    margin-bottom: 1px;
   
    display: inline-flex;
    font-size: 12px;
    
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px 5px 0px;
`



export const TitleInput =styled.input`
background-color: #f4f4f4;
border : none;
border-radius: 5px;

height: 5px;
margin: 16px 0 20px;

font-size: 12px;
outline: none;
width : 950px;
height : 20pt;
`
export const ButtonWrapper =styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin : 20px;

`

export const CategorySelect = styled.select`
text-align:center;
width : 100px;
border-radius: 5px;
margin-right : 5px;
background-color: #f4f4f4;
border : none;
outline: none;
height :20pt;

`
export const Validation =styled.div`
font-size : 6pt;
color : #CD7676;
`
export const Form = styled.form`
`
export const ButtonWriteWrapper =styled.div`
display: flex;
justify-content: right;
align-items: right;
flex-wrap: wrap;
margin : 20px;
`