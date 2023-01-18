import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as S from './SocialStyle';
import jwt_decode from 'jwt-decode';

const Social = () => {

     //아이디
     const token = localStorage.getItem('accessToken');
     const [auth, setAuth] = useState('ROLE_GUEST');
     useEffect(() => {
         if (token !== null) {
             const tokenJson = jwt_decode(token);
             setAuth(tokenJson['auth']);
             //localStorage.setItem('userInfo', JSON.stringify(tokenJson));
             settokenId(tokenJson['sub']);
         }
     }, []);
     const [tokenId, settokenId] = useState('')
     console.log(auth);
     console.log(tokenId)


    // const {sub} = useParams();  
    const navigate = useNavigate()
    const onFoll =() => {

        if(!tokenId){           
            {alert("먼저 로그인하세요")}
        }else{
            
            navigate(`/lookbook/following/${tokenId}`)
        }
       
    }
    return (
        <div>
        <S.SoTopDiv>
            <S.SoHeader>             
               <S.SoLi><S.Sobutton><S.a href='/lookbook/trending'>최신</S.a> </S.Sobutton></S.SoLi>  
                       
               <S.SoLi><S.Sobutton onClick={onFoll}><S.a >팔로잉</S.a></S.Sobutton></S.SoLi> 
                
            </S.SoHeader>    
            <br></br>
            
            <button><Link to='/lookbook/mystyle'>MY스타일</Link></button> 
        
        </S.SoTopDiv>


        </div>
    );
};

export default Social;
