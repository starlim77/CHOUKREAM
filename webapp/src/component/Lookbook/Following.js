import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Social from '../Lookbook/Social';
import {
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import * as S from './style';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import FollowingItem from './FollowingItem';

const Following = () => {

     const {tokenId} = useParams();
    

     //아이디
    //  const token = localStorage.getItem('accessToken');
    //  const [auth, setAuth] = useState('ROLE_GUEST');
    //  useEffect(() => {
    //      if (token !== null) {
    //          const tokenJson = jwt_decode(token);
    //          setAuth(tokenJson['auth']);
    //          //localStorage.setItem('userInfo', JSON.stringify(tokenJson));
    //          settokenId(tokenJson['sub']);
    //      }
    //  }, []);
    //  const [tokenId, settokenId] = useState('')
    // //  console.log(auth);
    //  console.log(tokenId)

    const [list, setList] = useState([
        {
            seq: '',
            id: '',
            content: '',
            logtime: '',
            styleFile: '',
            originalFileName: [],
            storedFileName: [],
        },
    ]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/lookbook/getFollowing/${tokenId}`)
            .then(
                res => setList(res.data))           
                // res=> console.log(res.data))
            .catch(error => console.log(error));
    }, [tokenId]);

    const [itemLength,setItemLength] = useState(12) // 처음에 가져올 아이템 갯수

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        var heightTop = window.scrollY; // 화면의 Y축의 상단값

        const heightBottom = window.scrollY + window.innerHeight; // 화면의 Y축의 하단값
        const innerHeight = window.innerHeight;

        const scrollHeight = document.body.scrollHeight;
        // console.log('scrollHeight 스크롤 전체길이 ' + scrollHeight); // 불변

        if (heightBottom >= scrollHeight - 80) {
            // console.log( '하단높이 '+ heightBottom + ' , ' + (scrollHeight - 100));

            setItemLength(itemLength => itemLength + 8)
        }
    };

    return (
        <>
            <Social />
            <br/><br/><br/><br/>

            <Container fixed>
                <S.TrGridContainer>
                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 0 ? 
                        <FollowingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength} id={tokenId} email={item.email}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 1 ? 
                        <FollowingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength} id={tokenId} email={item.email}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 2 ? 
                        <FollowingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength} id={tokenId} email={item.email}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 3 ? 
                        <FollowingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength} id={tokenId} email={item.email}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                </S.TrGridContainer>
            </Container>

            
        </>
    );
};

export default Following;
