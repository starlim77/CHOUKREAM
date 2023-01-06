import React, { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';

const initialState = 'NOTICE';
const fontInitialstate = {color: "black", fontWeight: "800"}

const reducer = (state, action) => {
    switch (action.type) {
        case 'NOTICE':
            return'NOTICE';
        case "FAQ":
            return "FAQ"
        case "INSPECTION":
            return "INSPECTION"
        default:
            return initialState;
    } 
};

const fontReducer = (state, action) => {
    switch (action.type) {
        case 'NOTICE':
            return {color: "black", fontWeight: "800"};
        case "FAQ":
            return {color: "black", fontWeight: "800"};
        case "INSPECTION":
            return {color: "black", fontWeight: "800"};
        default:
            return fontInitialstate; 
    }
}

const CsNav = () => {
    const [clickedContent, dispatch] = useReducer(reducer, initialState);
    const [fontStyle, fontDispatch] = useReducer(fontReducer, fontInitialstate)

    const onclick = (e) => {
        const {id} = e.target
        dispatch({type: id})
        fontDispatch({type: id})
    }

    return (
        <>
            <S.NavWrapper>
                <S.NavDiv>
                    <S.Title>고객센터</S.Title>
                    <S.NavUl>
                        <S.NavLi id="NOTICE" onClick={onclick} style={ clickedContent === "NOTICE" ?  fontStyle : {}}>공지사항</S.NavLi>
                        <S.NavLi id="FAQ" onClick={onclick} style={clickedContent === "FAQ" ?  fontStyle : {}}>자주 묻는 질문</S.NavLi>
                        <S.NavLi id="INSPECTION" onClick={onclick} style={clickedContent === "INSPECTION" ?  fontStyle : {}}>검수 기준</S.NavLi>
                    </S.NavUl>
                </S.NavDiv>
            </S.NavWrapper>
        </>
    );
};

export default CsNav;
