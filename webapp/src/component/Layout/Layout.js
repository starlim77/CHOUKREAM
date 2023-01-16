import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import * as S from './style';

const Layout = ({auth}) => {
    return (
        <>
            <Header auth={auth}/>
            <S.LayoutWraaper>
                <Outlet />
            </S.LayoutWraaper>
            <footer></footer>   
        </>
    );
};

export default Layout;
