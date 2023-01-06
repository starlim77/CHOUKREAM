import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Social from '../Lookbook/Social';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';


const Detail = () => {
    const [commentOpen, setCommentOpen] = useState(false)

    //게시물 뿌리기
    const [list, setList] = useState([]);

    useEffect( ()=> {
        axios.get('http://localhost:8080/lookbook/getStyleList')
             .then(res => setList(res.data))
             .catch(error => console.log(error))
    }, [])     

    return (
        <div>
            <Social />
            <br/>
            <Container fixed>
                <S.DeTopDiv> 
                {
                    list.map((item, index) => {
                        return (
                             <S.DeDiv> 
                                <Card key={item.seq}>
                                    <CardHeader
                                        avatar={ <Avatar> 프로필</Avatar> }
                                        title={item.id}
                                        subheader={item.logtime}
                                    />

                                
                                    
                                    <CardMedia 
                                        component="img"
                                        width="500"
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
                                        <IconButton onClick={()=>{setCommentOpen(true)}}>
                                            <ChatBubbleOutlineIcon />
                                        </IconButton>                        
                                    </CardActions>

                
                                    <Dialog open={commentOpen}> 
                                        <S.DeComment>
                                            <DialogTitle sx={{mt:5}}>댓글</DialogTitle>
                                            <DialogContent>

                                            
                                                <DialogContentText>
                                                    <TextField
                                                        multiline 
                                                        fullWidth
                                                    />


                                                <textarea >{item.seq}</textarea>
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button >등록</Button>
                                                <Button onClick={ ()=>{setCommentOpen(false)}}>취소</Button>
                                            </DialogActions>
                                        </S.DeComment>
                                    </Dialog>


                                </Card>
                             </S.DeDiv>
                        )
                    })
                }
               </S.DeTopDiv>
            </Container>
        </div>
    );
};

export default Detail;