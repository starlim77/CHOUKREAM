import axios from 'axios';
import React, {  useEffect,  useRef,  useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardContent, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';
import { FiMoreHorizontal } from "react-icons/fi";

const MystyleDetail = () => {
    const { seq , id } = useParams();  //주소값 파라미터 seq id가져오기
    const updateRef = useRef();
    const [commentOpen, setCommentOpen] = useState(false)

    //게시물 뿌리기
    const [list, setList] = useState([]);

    useEffect( ()=> {
        axios.get(`http://localhost:8080/lookbook/findAllMyList/${id}`)
             .then(res => setList(res.data)
                // res => console.log("디테일 확인 "+res.data)  
             )
             .catch(error => console.log(error))
    }, []) 

    const updateBtn = () =>{
        updateRef.current.click();        
    }

    const [likes, setLikes] = useState(0)  //기본0, 좋아요 누르면 1

    //좋아요 클릭
    const onLikes = () => {
        axios.post('http://localhost8080/lookbook/likes', null, {
            params : {
                likes:1,   //누르면 1로 셋팅
                id:id,     //로그인한 id
                seq:seq    //좋아요 할 글번호
            }}
           )
     .then( setLikes(1), alert("좋아요 클릭"+likes+id+seq))
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
                                            <Link to={`/lookbook/mystyleUpdate/${item.seq}/${id}`} ref={updateRef} >
                                            <img src='/image/style/menu.png' width={24}></img>
                                            </Link>
                                           
                                        </S.MyDeIcon>
                                   </S.MyDeheadercontainer>

                                    {
                                        item.storedFileName.map( (item, index) => (
                                            <p key={index}>
                                                <img src={'/storage/'+item} />
                                            </p>
                                        ))
                                    }

                                    
                                
                                    <S.MyStContent>
                                        {item.content}
                                    </S.MyStContent>


                                    <CardActions >                                    
                                        <IconButton aria-label="add to favorites" onClick={onLikes}>
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