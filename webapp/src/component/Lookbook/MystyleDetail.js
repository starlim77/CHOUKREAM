import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';

const MystyleDetail = () => {
    const { seq , id } = useParams();  //주소값 파라미터 seq id가져오기
    const [commentOpen, setCommentOpen] = useState(false)
    const [isLike, setIsLike] = useState(0);
   
    //게시물 뿌리기
    const [list, setList] = useState([]);

    //좋아요 있으면 1리턴, 없으면 0 리턴
    const [likesForm, setLikesForm] = useState({   
        styleSeq: seq,
        memberId: id,
        likesId: ''
    })  

    useEffect( ()=> {
        axios.get(`http://localhost:8080/lookbook/findAllMyList/${id}`)
             .then(res => setList(res.data))
             .catch(error => console.log(error))

         //좋아요 여부 보여주기
         axios.get(`http://localhost:8080/lookbook/findLikes?memberId=${id}&styleSeq=${seq}`)
              .then(res => setIsLike(res.data)  )
              .catch(error => console.log(error))
    }, []) 

 
    //좋아요 클릭
    const onLikes = () => {
        setLikesForm({...likesForm });  

        axios.post('http://localhost:8080/lookbook/likebutton', null, {params:likesForm})
            .then( res =>  
                        setIsLike(res.data), 
                        window.location.replace(`/lookbook/mystyledetail/${seq}/${id}`)//새로고침 넘느료..
                        //navigate(`/lookbook/mystyledetail/${seq}/${id}`)                        
                )
            .catch(error => console.log(error))
    }


    return (
        <div>
            <Container fixed>
                <S.DeTopDiv> {/* outer */}
                {
                    list.map((item, index) => {
                        return (
                             <S.DeDiv key={index}>  
                                <Card >
                                    <S.MyDeheadercontainer>
                                        
                                        <S.MyDeprofile>
                                            <CardHeader
                                                avatar={ <Avatar> 프로필</Avatar> }
                                                title={item.id}
                                                subheader={item.logtime}
                                            /> 
                                        </S.MyDeprofile>
                                        
                                        {/* <input type="text" name="seq" value={item.seq} readOnly /> */}

                                        <S.MyDeIcon>                                
                                            <Link to={`/lookbook/mystyleUpdate/${item.seq}/${id}`} >
                                            <img src='/image/style/menu.png' alt='메뉴.png' width={24}></img>
                                            </Link>
                                           
                                        </S.MyDeIcon>
                                        
                                   </S.MyDeheadercontainer>

                                   <S.MyStdiv>
                                        {
                                            item.storedFileName.map( (item, index) => (
                                                <p key={index} >
                                                    <img src={'/storage/'+item} alt='list사진' style={{width:'100%'}} />
                                                </p>
                                            ))
                                        }
                                    </S.MyStdiv>
                                    
                                
                                    <S.MyStContent>
                                        {item.content}
                                    </S.MyStContent>


                                    <CardActions >                                    
                                        <IconButton aria-label="add to favorites" onClick={onLikes} >
                                            <img src={ isLike === 1 ?  '/image/style/likes.png'  : '/image/style/unlikes.png'  }
                                                 style={{ width:'28px'}}
                                                 />
                                        </IconButton>
                                        <span>{item.likesCount}</span>


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
                                 
                                 
                             </S.DeDiv> 
                        )
                    })
                }
               </S.DeTopDiv>
            </Container>

        </div>
    );
};

export default MystyleDetail;