import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <S.HeaderWrapper>
                <S.Top>
                    <S.TopWrapper>
                        <S.TopLi>고객센터</S.TopLi>
                        <S.TopLi>관심상품</S.TopLi>
                        <S.TopLi>마이페이지</S.TopLi>
                        <S.TopLi>로그인</S.TopLi>
                    </S.TopWrapper>
                </S.Top>
                <S.Bottom>
                    <S.BottomImg src="../image/logo.png" />
                    <S.BottomWrapper>
                        <S.BottomLi active={true}><Link to='/lookbook/trending'>STYLE</Link></S.BottomLi>
                        <S.BottomLi>SHOP</S.BottomLi>
                        <S.BottomLi>ABOUT</S.BottomLi>
                        <S.BottomLi>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </S.BottomLi>
                    </S.BottomWrapper>
                </S.Bottom>
            </S.HeaderWrapper>
        </>
    );
};

export default Header;
