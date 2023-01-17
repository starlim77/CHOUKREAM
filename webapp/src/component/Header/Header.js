import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';
import { Link } from 'react-router-dom';
import SearchForm from '../Search/SearchForm';

const Header = ({auth}) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            <S.HeaderWrapper>
                <S.Top>
                    <S.TopWrapper>
                        <Link to="/admin">
                        {auth==='ROLE_ADMIN'?<S.TopLi>관리자페이지</S.TopLi>:<S.TopLi>관리자페이지</S.TopLi>}
                        {/*나중에 뒷 부분 NULL처리 할 것! */}
                        </Link>
                        <Link to="/cs/CsNotice">
                            x<S.TopLi>고객센터</S.TopLi>
                        </Link>
                        <S.TopLi>관심상품</S.TopLi>
                        <S.TopLi><Link to="/my/profile"> 마이페이지</Link></S.TopLi>
                        <S.TopLi>
                            <Link to="/login">로그인</Link>
                            <Link to="/logout">로그아웃</Link>
                        </S.TopLi>
                    </S.TopWrapper>
                </S.Top>
                <S.Bottom>
                    <Link to="/">
                        <S.BottomImg src="/image/logo.png" />
                    </Link>

                    <S.BottomWrapper>
                        <S.BottomLi active={true}>STYLE</S.BottomLi>
                        <S.BottomLi>
                            <Link to="/shop">shop</Link>
                        </S.BottomLi>
                        <S.BottomLi active={true}>
                            <Link to="/lookbook/trending">STYLE</Link>
                        </S.BottomLi>
                        {/* <S.BottomLi active={true}><Link to="/lookbook/detail">STYLE</Link></S.BottomLi> */}
                        <S.BottomLi>SHOP</S.BottomLi>
                        <S.BottomLi>ABOUT</S.BottomLi>
                        <S.BottomLi>
                            <div>
                                <div onClick={onOpen}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                {isOpen && <SearchForm onClose={onClose} />}
                            </div>
                        </S.BottomLi>
                    </S.BottomWrapper>
                </S.Bottom>
            </S.HeaderWrapper>
        </>
    );
};

export default Header;
