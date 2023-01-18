import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';
import { Link } from 'react-router-dom';
import SearchForm from '../Search/SearchForm';
import ShopModal from './ShopModal';
import SearchForm2 from '../Search/SearchForm2';

const Header = ({ auth }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };

    const [shopModalOpen, setShopModalOpen] = useState(false);
    const onShopModal = () => {
        setShopModalOpen(!shopModalOpen);
    };
    return (
        <>
            <S.HeaderWrapper>
                <S.Top>
                    <S.TopWrapper>
                        <Link to="/admin">
                            {auth === 'ROLE_ADMIN' ? (
                                <S.TopLi>관리자페이지</S.TopLi>
                            ) : null}
                            {/*나중에 뒷 부분 NULL처리 할 것! */}
                        </Link>
                        <Link to="/cs/CsNotice">
                            <S.TopLi>고객센터</S.TopLi>
                        </Link>
                        <S.TopLi>관심상품</S.TopLi>
                        <S.TopLi>
                            <Link to="/my/"> 마이페이지</Link>
                        </S.TopLi>
                        <S.TopLi>
                            {auth === 'ROLE_GUEST' && (
                                <Link to="/login">로그인</Link>
                            )}
                            {auth === 'ROLE_USER' || auth === 'ROLE_ADMIN' ? (
                                <Link to="/logout">로그아웃</Link>
                            ) : null}
                        </S.TopLi>
                    </S.TopWrapper>
                </S.Top>
                <S.Bottom>
                    <Link to="/">
                        <S.BottomImg src="/image/CHOUKREAM.png" />
                    </Link>

                    <S.BottomWrapper>
                        <S.BottomLi onClick={onShopModal}>
                            SHOP
                            {shopModalOpen && <ShopModal></ShopModal>}
                        </S.BottomLi>
                        <S.BottomLi active={true}>
                            <Link to="/lookbook/trending">STYLE</Link>
                        </S.BottomLi>
                        {/* <S.BottomLi active={true}><Link to="/lookbook/detail">STYLE</Link></S.BottomLi> */}
                        <S.BottomLi>ABOUT</S.BottomLi>
                        <S.BottomLi>
                            <SearchForm2 />
                        </S.BottomLi>
                    </S.BottomWrapper>
                </S.Bottom>
            </S.HeaderWrapper>
        </>
    );
};

export default Header;
