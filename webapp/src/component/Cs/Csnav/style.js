import styled from "styled-components";

export const NavWrapper = styled.nav`
float: left;
height: 100vh; //height 100%  하려면 vh 붙이기
display: flex;
flex-direction: column; // 위에서 아래로 수직 배치
border: 1px solid black;
margin-left: 200px;
margin-right: 40px;
`
export const Title = styled.p`
font-size : 30px;
margin : 15px;
margin-bottom: 50px;
font-size: 35px;
font-weight: 600;
`
export const NavUl = styled.ul`
`
export const NavLi =styled.li`
font-size : 15px;
margin : 13px;
height : 100%;
color: rgba(34,34,34,.5);
text-decoration: none;
`
export const NavDiv = styled.div`
height : 100%;

`
export const NavTable = styled.table`
border : 1px solid black;
`