import axios from 'axios';
import React, {  useEffect,  useRef,  useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';

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

         //좋아요 여부 보여주기
         axios.get(`http://localhost:8080/lookbook/findLikes?memberId=${id}&styleSeq=${seq}`)
              .then(res => setIsLike(res.data)  )
              .catch(error => console.log(error))

        //좋아요 갯수 확인
         axios.get(`http://localhost:8080/lookbook/likescount?styleSeq=${seq}`)
              .then(res => setLikesCount(res.data))
              .catch(error => console.log(error))
    }, []) 

    const updateBtn = () =>{
        updateRef.current.click();        
    }

    const [likesForm, setLikesForm] = useState({   //좋아요 있으면 1리턴, 없으면 0 리턴
        styleSeq: seq,
        memberId: id,
        likesId: ''
    })  

    const [isLike, setIsLike] = useState(0);
    const [likesCount, setLikesCount] = useState('');   // 좋아요 갯수 카운트
    //const navigate = useNavigate()

    //좋아요 클릭
    const onLikes = () => {
        // setLikesForm({...likesForm, });

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
                                            <Link to={`/lookbook/mystyleUpdate/${item.seq}/${id}`} ref={updateRef} >
                                            <img src='/image/style/menu.png' alt='메뉴.png' width={24}></img>
                                            </Link>
                                           
                                        </S.MyDeIcon>
                                   </S.MyDeheadercontainer>

                                    {
                                        item.storedFileName.map( (item, index) => (
                                            <p key={index}>
                                                <img src={'/storage/'+item} alt='list사진' />
                                            </p>
                                        ))
                                    }

                                    
                                
                                    <S.MyStContent>
                                        {item.content}
                                    </S.MyStContent>


                                    <CardActions >                                    
                                        <IconButton aria-label="add to favorites" onClick={onLikes}>
                                            {/* <FavoriteIcon />  //react Icon */}
                                            <img src={ isLike === 1 ?  '/image/style/likes.png'  : '/image/style/unlikes.png'  }
                                            style={{ width:'28px'}}/>
                                           <p>{likesCount}</p>

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