import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Social from '../Lookbook/Social';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';
import { Link } from 'react-router-dom';
import StyleCommentList from './StyleCommentList';

const Detail = () => {    
   
    //게시물 뿌리기
    const [list, setList] = useState([]);

    useEffect( ()=> {
        axios.get('http://localhost:8080/lookbook/getStyleList')
             .then(res => setList(res.data))
             .catch(error => console.log(error))
             console.log("list",list) 
    }, [])   
    
    //댓글삭제
    const onCommentDelete =(id) => {
        //item.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
        //=item.id 가 id 인 것을 제거한다
        
    }

    return (
        <div>            
            <Social />
            <br/>
            <Container fixed>
                <S.DeTopDiv> 
                {
                    list.map((item, index) => {
                        return (
                            <div>
                            <Card key={item.seq}>
                                <CardHeader
                                    avatar={ <Avatar> 프로필</Avatar> }
                                    title={item.id}
                                    subheader={item.logtime}
                                />
                                {item.seq}
                                <CardMedia 
                                    component="img"
                                    height="500"
                                    image={'../storage/'+item.storedFileName[0]}  //여러장보이게해야함
                                    alt=""
                                />
                                <CardContent>
                                    {item.content}
                                </CardContent>
                                <CardActions >
                                    <IconButton aria-label="add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton >
                                        
                                        <Link to ={`/lookbook/StyleComment/${item.seq}`} >
                                        <ChatBubbleOutlineIcon  style={{color: 'grey', textDecoration:'none'}}/>    
                                        </Link>
                                    </IconButton> 
                                                          
                                </CardActions>

            
                               

                                <CardContent>       
                                    <Typography variant="body2" color="text.secondary" >
                                    <S.TrTypoDiv>
                                     <StyleCommentList styleSeq={item.seq}  onCommentDelete={onCommentDelete} />                                
                                    
                                    </S.TrTypoDiv>                      
                                    </Typography>     
                                                
                                </CardContent> 
                           

                            </Card>
                        </div>
                        )
                    })
                }
               </S.DeTopDiv>
            </Container>
        </div>
    );
};

export default Detail;