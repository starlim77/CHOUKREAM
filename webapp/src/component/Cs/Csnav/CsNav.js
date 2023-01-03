import React from 'react';
import { Link } from 'react-router-dom';
import { NavDiv, NavLi, NavUl, NavWrapper, Title } from './style';

const CsNav = () => {
    return (
        <>
        <NavWrapper>
            <NavDiv>
            <Title>고객센터</Title>
            <NavUl>
                <NavLi>공지사항</NavLi>
                <Link to='/cs/CsFaq'><NavLi>자주 묻는 질문</NavLi></Link>
                <NavLi>검수 기준</NavLi>
            </NavUl>
            </NavDiv>
        

            
        </NavWrapper>
        </>
    );
};

export default CsNav;