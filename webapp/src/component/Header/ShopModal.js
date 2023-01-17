import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'

const ShopModal = () => {
    
    return (
        <>                
            <S.ShopModalWrapper>
                <Link to="/shop">Resell</Link>&emsp;
                <Link to="/shop/newProduct">Brand Shop</Link>&emsp;
                <Link to="/used/usedMain">Used</Link>
            </S.ShopModalWrapper>
        </>
    );
};

export default ShopModal;