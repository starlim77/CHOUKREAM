import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardHeader, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';
import MyPhoto from './MyPhoto';

const MystyleDetail = () => {
    const { id } = useParams();  //주소값 파라미터 seq id가져오기
    const [commentOpen, setCommentOpen] = useState(false)

    //좋아요 전체 리스트
    const [likeAll, setLikeAll] = useState([]);
    
   
    //게시물 뿌리기
    const [list, setList] = useState([]);

    //좋아요 있으면 1리턴, 없으면 0 리턴
    // const [likesForm, setLikesForm] = useState({   
    //     styleSeq: seq,
    //     memberId: id,
    //     likesId: ''
    // })  

    useEffect( ()=> {
        // axios.get(`http://localhost:8080/lookbook/findAllMyList/${id}`)
        //      .then(res => setList(res.data))

        //      .then(
                
                axios.get(`http://localhost:8080/lookbook/findLikes?id=${id}`)
                    .then(
                        //  res=> console.log(res.data)
                        res => setLikeAll(res.data)  
                    )
                    .catch(error => console.log(error))

            //  )
            //  .catch(error => console.log(error))

        //좋아요 여부 보여주기
        //  axios.get(`http://localhost:8080/lookbook/findLikes?memberId=${id}&styleSeq=${seq}`)
        //       .then(res => setIsLike(res.data)  )
        //       .catch(error => console.log(error))
    }, []) 

    useEffect(()=>{

    },[])
   
 
    //좋아요 클릭
    const onLikes = (e,seq,checkLike,index) => {
        e.preventDefault();
        checkLike = checkLike === 'false' ? false : true
        
        //console.log(seq, id , checkLike , index )
        
        // setIsLike()

        axios.post('http://localhost:8080/lookbook/likebutton?styleSeq='+seq+'&memberId='+id+"&isLike="+checkLike) //1, 0  같이 보내준다
            .then(res => setLikeAll(res.data) )
            .catch(error => console.log(error))
    }

    // const onfilter = (seq) => {
    //     likeAll.filter(item => item.seq === seq)
    // }

    const photoShop1 = (storedImg) => {
        const img = ((storedImg).split(','))
        return img[0]
    }

    const photoShop2 = (storedImg) => {
        const img = ((storedImg).split(','))
        return img[1]
    }

    const photoShop3 = (storedImg) => {
        const img = ((storedImg).split(','))
        return img[2]
    }

    const photoShop4 = (storedImg) => {
        const img = ((storedImg).split(','))
        return img[3]
    }

    const photoShop5 = (storedImg) => {
        const img = ((storedImg).split(','))
        return img[4]
    }

        



    return (
        <div>
            {console.log(likeAll )}
            <Container fixed>
                <S.DeTopDiv> {/* outer */}
                {
                    likeAll.map((item, index) => {
                        return (
                             <S.DeDiv key={index}>  
                                <Card >
                                    <S.MyDeheadercontainer>
                                        
                                        <S.MyDeprofile>
                                            <CardHeader
                                                avatar={ <Avatar> 프로필</Avatar> }
                                                title={item.id}
                                                subheader={item.logTime}
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
                               
                                    <img src={`/storage/${photoShop1(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />
                                    {photoShop2(item.stored_file_name) && <img src={`/storage/${photoShop2(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />}
                                    {photoShop3(item.stored_file_name) && <img src={`/storage/${photoShop3(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />}
                                    {photoShop4(item.stored_file_name) && <img src={`/storage/${photoShop4(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />}
                                    {photoShop5(item.stored_file_name) && <img src={`/storage/${photoShop5(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />}
                                   {/* <MyPhoto seq={item.seq} />        */}

                                        {/* {
                                            item.storedFileName.map( (item, index) => (
                                                <p key={index} >
                                                    <img src={'/storage/'+item} alt='list사진' style={{width:'100%'}} />
                                                </p>
                                            ))
                                        } */}
                                    </S.MyStdiv>
                                    글번호: {item.seq}

                                    
                                
                                    <S.MyStContent>
                                        {item.content}
                                    </S.MyStContent>


                                    <CardActions >   
                                        
                                 
                                        <IconButton aria-label="add to favorites" onClick={(e) => onLikes(e, item.seq ,item.islikes,index)} >
                                            
                                            <img src={  item.islikes === "false"  ? '/image/style/unlikes.png' : '/image/style/likes.png' } style={{ width:'28px'}} />
                                           
                                        </IconButton>
                                        
                                        <span>{item.likes_count}</span>


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