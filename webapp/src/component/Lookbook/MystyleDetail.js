import axios from 'axios';
import React, {  useEffect,  useRef,  useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';
import { FiMoreHorizontal } from "react-icons/fi";

const MystyleDetail = () => {
    const { seq , id } = useParams();  //주소값 파라미터 seq 가져오기
    const updateRef = useRef();
    const [commentOpen, setCommentOpen] = useState(false)

    //게시물 뿌리기
    const [list, setList] = useState([]);

    useEffect( ()=> {
        axios.get(`http://localhost:8080/lookbook/findAllMyList/${id}`)
             .then(res => setList(res.data))
             .catch(error => console.log(error))
    }, []) 

    const updateBtn = (e) =>{
        updateRef.current.click();        
    }



    return (
        <div>
            <Container fixed>
                <S.DeTopDiv> {/* outer */}
                {
                    list.map((item, index) => {
                        return (
                             <S.DeDiv key={seq}>  
                                <Card >
                                    <S.MyDeheadercontainer>
                                        
                                        <S.MyDeprofile>
                                            <CardHeader
                                                avatar={ <Avatar> 프로필</Avatar> }
                                                title={item.id}
                                                subheader={item.logtime}
                                            /> 
                                        </S.MyDeprofile>
                                     

                                        <S.MyDeIcon>   {/* ...아이콘 */}
                                            <FiMoreHorizontal       
                                                size="42"
                                                text-align="right"
                                                onClick={updateBtn}
                                            />  

                                            <img src='/image/style/menu.png' width={24}></img>
                                            <button >
                                            <Link to={`/lookbook/mystyleUpdate/${seq}/${id}`}>수정</Link>
                                            </button>


                                            
                                        </S.MyDeIcon>
                                   </S.MyDeheadercontainer>


                                    {/* <CardMedia 
                                        component="img"
                                        width="500"
                                        height="500"
                                        image={'/storage/'+item.storedFileName[index]}  //여러장보이게해야함
                                        alt=""
                                    /> */}

                                    {
                                        item.storedFileName.map( (item) => (
                                            <img src={'/storage/'+item} />
                                        ))
                                    }

                                    
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