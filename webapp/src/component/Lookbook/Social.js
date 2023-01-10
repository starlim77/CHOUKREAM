import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';


const social = () => {
    
    return (
        <div>
            <S.SoHeader>
                <a href='#!' >인기</a> &nbsp;
                <a href='#!' >최신</a> &nbsp;
                <a href='#!' >팔로잉</a>
            </S.SoHeader>

            <div>            
                <button><Link to='/lookbook/detail'>상세보기</Link></button>&nbsp;
                <button><Link to='/lookbook/mystyle'>MY스타일</Link></button>
            </div>
        </div>
    );
};

export default social;
