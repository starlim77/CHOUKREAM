import React, { useState } from 'react';
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

    return (
        <div>
            <Header />
            <Social />
            <br/>
            <Container fixed>
                <Card>
                    <CardHeader
                        avatar={ <Avatar> 사진</Avatar> }
                        title="본인id"
                        subheader="날짜예정 September 14, 2016"
                    />
                    <CardMedia 
                        component="img"
                        height="500"
                        image=""
                        alt=""
                    />
                    <CardContent>
                        내용작성
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
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button >등록</Button>
                                <Button onClick={ ()=>{setCommentOpen(false)}}>취소</Button>
                            </DialogActions>
                        </S.DeComment>
                    </Dialog>


                </Card>
            </Container>
        </div>
    );
};

export default Detail;