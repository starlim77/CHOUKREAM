import React, { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CsFaq from '../CsFaq';
import CsInspection from '../CsInspection';
import CsNotice from '../CsNotice/CsNotice';
import * as S from './CsNavStyle';

const initialState = 'NOTICE';
const fontInitialstate = {
    color: 'black',
    fontWeight: '800',
    textDecoration: 'none',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'NOTICE':
            return 'NOTICE';
        case 'FAQ':
            return 'FAQ';
        case 'INSPECTION':
            return 'INSPECTION';
        default:
            return initialState;
    }
};

const fontReducer = (state, action) => {
    switch (action.type) {
        case 'NOTICE':
            return {
                color: 'black',
                fontWeight: '800',
                textDecoration: 'none',
            };
        case 'FAQ':
            return {
                color: 'black',
                fontWeight: '800',
                textDecoration: 'none',
            };
        case 'INSPECTION':
            return {
                color: 'black',
                fontWeight: '800',
                textDecoration: 'none',
            };
        default:
            return fontInitialstate;
    }
};

const CsNav = () => {
    const [clickedContent, dispatch] = useReducer(reducer, initialState);
    const [fontStyle, fontDispatch] = useReducer(fontReducer, fontInitialstate);

    const onclick = e => {
        const { id } = e.target;
        dispatch({ type: id });
        fontDispatch({ type: id });
    };

    return (
        <>
            <S.NavWrapper>
                <S.NavDiv>
                    <S.Title>고객센터</S.Title>
                    <S.NavUl>
                        <S.NavLi onClick={onclick}>
                            <Link
                                id="NOTICE"
                                to="csNotice"
                                style={
                                    clickedContent === 'NOTICE'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                공지사항
                            </Link>
                        </S.NavLi>
                        <S.NavLi onClick={onclick}>
                            <Link
                                to="csFaq"
                                id="FAQ"
                                style={
                                    clickedContent === 'FAQ'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                자주 묻는 질문
                            </Link>
                        </S.NavLi>
                        <S.NavLi onClick={onclick}>
                            <Link
                                to="csInspection"
                                id="INSPECTION"
                                style={
                                    clickedContent === 'INSPECTION'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                검수 기준
                            </Link>
                        </S.NavLi>
                    </S.NavUl>
                </S.NavDiv>
            </S.NavWrapper>
        </>
    );
};

export default CsNav;
