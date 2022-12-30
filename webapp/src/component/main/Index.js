import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {

    
    const dummyPut = () => {
        
    }
    
    return (
        <div>
            <Link to={'/shop'}>
                더미데이터 보내기 누르면 DB에 데이터 넣고 Shop.js 보여주기
            </Link>
        </div>
    );
};

export default Index;