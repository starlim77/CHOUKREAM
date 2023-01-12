import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Social from '../Lookbook/Social';
import Card from '@mui/material/Card';
import {
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import * as S from './style';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MasonryInfiniteGrid } from '@egjs/react-infinitegrid';

const Trending = () => {
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
            .get('http://localhost:8080/lookbook/getStyleList')
            .then(res => setList(res.data))
            .catch(error => console.log(error));
    }, []);

  

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
            console.log( '하단높이 '+ heightBottom + ' , ' + (scrollHeight - 100));

            setItemLength(itemLength => itemLength + 8)
        }
    };

    return (
        <>
            <Social />
            <div>태그</div>
            
            <Container fixed>
                <S.TrGridContainer>
                    {list.map((item,index) => {
                        return (
                            <S.TrGridBox key={item.seq} style={{display : index < itemLength ? '':'none'}}>
                                <Card sx={{ width: 250 }}>
                                    <Link to={'/lookbook/detail' + item.seq}>
                                        <S.TrGridBoxImg
                                            src={
                                                '../storage/' +
                                                item.storedFileName[0]
                                            }
                                        ></S.TrGridBoxImg>
                                    {/* 
                                        {item.storedFileName.map(
                                            (index, item) => {
                                                return (
                                                    <img
                                                        src={
                                                            '../storage/' + item
                                                        }
                                                    />
                                                );
                                            },
                                        )} 
                                        */}

                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    sx={{ bgcolor: grey }}
                                                ></Avatar>
                                            }
                                            title={item.id}
                                        />
                                    </Link>
                                    <CardContent>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            <S.TrTypoDiv>
                                                {item.content}
                                                <br />
                                                seq={item.seq}
                                            </S.TrTypoDiv>
                                        </Typography>
                                    </CardContent>

                                    <CardActions disableSpacing>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteBorderOutlinedIcon />
                                                <FavoriteIcon />
                                            </IconButton>
                                            <span>35 </span>
                                            <IconButton aria-label="add to favorites">
                                                <MessageOutlinedIcon />
                                            </IconButton>
                                            <span>{item.commentCount}</span>
                                        </Typography>
                                    </CardActions>
                                </Card>
                            </S.TrGridBox>
                        );
                    })}
                </S.TrGridContainer>
            </Container>
            {/* </MasonryInfiniteGrid> */}
        </>
    );
};

export default Trending;
