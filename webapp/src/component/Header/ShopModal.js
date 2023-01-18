import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'

const ShopModal = () => {
    
    return (
        <>                
            <S.ShopModalWrapper>
                <Link to="/shop" style={{ textDecoration: 'none' }}>Resell</Link>&emsp;
                <Link to="/shop/newProduct" style={{ textDecoration: 'none' }}>Brand Shop</Link>&emsp;
                <Link to="/used/usedMain" style={{ textDecoration: 'none' }}>Used</Link>
            </S.ShopModalWrapper>
        </>
    );
};

export default ShopModal;