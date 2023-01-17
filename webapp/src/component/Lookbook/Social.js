import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './SocialStyle';


const social = () => {
    
    return (
        <div>
        <S.SoTopDiv>
            <S.SoHeader>
               <S.SoLi><S.Sobutton><S.a href='#!' >인기</S.a> </S.Sobutton></S.SoLi>                 
               <S.SoLi><S.Sobutton><S.a href='/lookbook/trending'>최신</S.a> </S.Sobutton></S.SoLi>                
               <S.SoLi><S.Sobutton><S.a href='/lookbook/following'>팔로잉</S.a></S.Sobutton></S.SoLi> 
            </S.SoHeader>    
            <br></br>
            
            <button><Link to='/lookbook/detail'>상세보기</Link></button>&nbsp;
            <button><Link to='/lookbook/mystyle'>MY스타일</Link></button> 
        
        </S.SoTopDiv>


        </div>
    );
};

export default social;
