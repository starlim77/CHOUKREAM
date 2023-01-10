import styled from "styled-components";

export const NavWrapper = styled.nav`
float: left;
height: 100vh; //height 100%  하려면 vh 붙이기
width: 220px;
display: flex;
flex-direction: column; // 위에서 아래로 수직 배치
padding-top: 30px;
margin-right: 50px;
`
export const Title = styled.p`
font-size : 30px;
margin : 15px;
margin-bottom: 50px;
font-size: 25px;
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