import React, { useEffect, useReducer, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './MyPageNavStyle';

const initialState = '';
const fontInitialstate = {
    color: 'black',
    fontWeight: '800',
    textDecoration: 'none',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'BUYHISTORY':
            return 'BUYHISTORY';
        case 'SELLHISTORY':
            return 'SELLHISTORY';
        case 'LIKE':
            return 'LIKE';
        case 'PROFILE':
            return 'PROFILE';
        case 'ADDRESS':
            return 'ADDRESS';
        case 'POINT':
            return 'POINT';
        case 'STYLE':
            return 'STYLE';
        default:
            return initialState;
    }
};

const fontReducer = (state, action) => {
    switch (action.type) {
        case 'BUYHISTORY':
            return {
                color: 'black',
                fontWeight: '800',
                textDecoration: 'none',
            };
        case 'SELLHISTORY':
            return {
                color: 'black',
                fontWeight: '800',
                textDecoration: 'none',
            };
        case 'LIKE':
            return {
                color: 'black',
                fontWeight: '800',
                textDecoration: 'none',
            };
        case 'ADDRESS':
            return {
                color: 'black',
                fontWeight: '800',
                textDecoration: 'none',
            };
        case 'POINT':
            return {
                color: 'black',
                fontWeight: '800',
                textDecoration: 'none',
            };
        case 'STYLE':
            return {
                color: 'black',
                fontWeight: '800',
                textDecoration: 'none',
            };
        default:
            return fontInitialstate;
    }
};
const MyPageNav = () => {
    const location = useLocation();
    const [id, setId] = useState();
    const [clickedContent, dispatch] = useReducer(reducer, initialState);
    const [fontStyle, fontDispatch] = useReducer(fontReducer, fontInitialstate);

    useEffect(() => {
        setId(location.pathname.split('/')[2].toUpperCase());
    }, [location]);

    useEffect(() => {
        dispatch({ type: id });
        fontDispatch({ type: id });
    }, [id]);

    return (
        <>
            <S.NavWrapper>
                <S.NavDiv>
                    <S.Title>마이 페이지</S.Title>
                    <S.NavUl>
                        <S.NavLi onClick={onclick}>
                            <Link
                                to="profile"
                                id="PROFILE"
                                style={
                                    clickedContent === 'PROFILE'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                프로필 정보
                            </Link>
                        </S.NavLi>
                        <S.NavLi onClick={onclick}>
                            <Link
                                id="BUYHISTORY"
                                to="buyHistory"
                                style={
                                    clickedContent === 'BUYHISTORY'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                구매내역
                            </Link>
                        </S.NavLi>
                        <S.NavLi onClick={onclick}>
                            <Link
                                to="sellHistory"
                                id="SELLHISTORY"
                                style={
                                    clickedContent === 'SELLHISTORY'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                판매 내역
                            </Link>
                        </S.NavLi>
                        {/* <S.NavLi onClick={onclick}>
                            <Link
                                to="like"
                                id="LIKE"
                                style={
                                    clickedContent === 'LIKE'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                관심상품
                            </Link>
                        </S.NavLi> */}

                        <S.NavLi onClick={onclick}>
                            <Link
                                to="address"
                                id="ADDRESS"
                                style={
                                    clickedContent === 'ADDRESS'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                주소록
                            </Link>
                        </S.NavLi>
                        <S.NavLi onClick={onclick}>
                            <Link
                                to="style"
                                id="STYLE"
                                style={
                                    clickedContent === 'STYLE'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                스타일
                            </Link>
                        </S.NavLi>
                        {/* <S.NavLi onClick={onclick}>
                            <Link
                                to="point"
                                id="POINT"
                                style={
                                    clickedContent === 'POINT'
                                        ? fontStyle
                                        : {
                                              textDecoration: 'none',
                                              color: 'rgba(34,34,34,.5)',
                                          }
                                }
                            >
                                포인트
                            </Link>
                        </S.NavLi> */}
                    </S.NavUl>
                </S.NavDiv>
            </S.NavWrapper>
        </>
    );
};

export default MyPageNav;
