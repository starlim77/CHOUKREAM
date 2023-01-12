import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import * as S from './style';

const Layout = () => {
    return (
        <>
            <Header />
            <S.LayoutWraaper>
                <Outlet />
            </S.LayoutWraaper>
            <footer></footer>   
        </>
    );
};

export default Layout;
