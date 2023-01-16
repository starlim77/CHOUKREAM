import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Social from '../Lookbook/Social';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardContent, CardHeader, CardMedia,  IconButton, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import StyleCommentList from './StyleCommentList';
import jwt_decode from 'jwt-decode';

const Detail = () => {        

   
   
    //게시물 뿌리기
    const [list, setList] = useState([]);
    const [isLike, setIsLike] = useState(0);
    const navigate = useNavigate();


    //아이디
    const token = localStorage.getItem('accessToken');
    const [auth, setAuth] = useState('ROLE_GUEST');
    useEffect(() => {
        if (token !== null) {
            const tokenJson = jwt_decode(token);
            setAuth(tokenJson['auth']);
            //localStorage.setItem('userInfo', JSON.stringify(tokenJson));
            settokenId(tokenJson['sub']);
        }
    }, []);
    const [tokenId, settokenId] = useState('')
    console.log(auth);
    console.log(tokenId)
    
    
    //const [id] = useState(3)   //아이디값 로그인한걸로 가져오는거로 변경해야됨

    

    

    useEffect( ()=> {
        axios.get('http://localhost:8080/lookbook/getStyleList')
             .then(res => setList(res.data))
             //.then( () => {             
                // axios.get(`http://localhost:8080/lookbook/getLikes/${tokenId}`)
                //      .then(res => setLikes(res))
                //      .catch(error => console.log(error))

                // axios.get()
                //      .then()
                //      .catch(error => console.log(error))
              //  }  
               // )
             .catch(error => console.log(error))
             console.log("list",list) 

        //좋아요 여부 보여주기
        // axios.get(`http://localhost:8080/lookbook/findLikes?memberId=${id}&styleSeq=${seq}`)
        //      .then(res => setIsLike(res.data)  )
        //      .catch(error => console.log(error))
    }, [])   
    
    //댓글삭제
    const onCommentDelete =(id) => {
        //item.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
        //=item.id 가 id 인 것을 제거한다
        
    }

    //좋아요 있으면 1리턴, 없으면 0 리턴
    const [likesForm, setLikesForm] = useState({   
        memberId: '',
        likesId: ''
    }) 


    //좋아요 클릭 로그인했을때만 가능하게 변경해야함
    const onLikes = (seq) => {
        axios.post('http://localhost:8080/lookbook/likebutton', null, {
            params: {
                styleSeq: seq,
                memberId: '',
                likesId: ''
            }})
            .then( res =>  setIsLike(res.data), 
                           window.location.replace('/lookbook/detail')//새로고침
                           //navigate('/lookbook/detail')                        
                )
            .catch(error => console.log(error))
    }
    
     //팔로우
     const onFollow = (followeeId) => {
        //console.log(tokenId+"+"+followeeId)
        axios.post(`http://localhost:8080/lookbook/saveFollow/${tokenId}/${followeeId}`) 
             .then(alert("팔로우 성공"))
             .catch(error => console.log(error))
    }

    //언팔로우
    const onUnFollow = (followeeId) => {
        //console.log(tokenId+"+"+followeeId)
        axios.delete(`http://localhost:8080/lookbook/unFollow/${tokenId}/${followeeId}`) 
             .then(alert("언팔로우 성공"))
             .catch(error => console.log(error))
    }

    
    

    return (
        <div>            
            <Social />
            <br/><br/><br/><br/><br/><br/>
            <Container fixed>
                <S.DeTopDiv> 
                {
                    list.map((item,index) => {
                        return (
                            <div>
                            <Card key={item.seq}>
                                <CardHeader
                                    avatar={ <Avatar> 프로필</Avatar> }
                                    title={item.id}
                                    subheader={item.logtime}
                                />

                                <Button variant="contained" style={{backgroundColor: 'black'}} onClick={() => onFollow (item.id)} >팔로우</Button>
                                <Button variant="outlined"  style={{color: 'black', borderColor:'black'}}  onClick={() => onUnFollow (item.id)}>언팔로우</Button>
                               
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
                                    <div>
                                    <IconButton aria-label="add to favorites" onClick={ () => onLikes(item.seq)}>
                                        <img src={ isLike === 1 ?  '/image/style/likes.png'  : '/image/style/unlikes.png'  }
                                            style={{ width:'28px'}} />
                                           
                                    </IconButton>
                                    <span>{item.likesCount}</span>
                                    </div>
                                    <div>
                                    <IconButton >
                                        
                                        <Link to ={`/lookbook/StyleComment/${item.seq}`} >
                                        <ChatBubbleOutlineIcon  style={{color: '#616161', textDecoration:'none'}}/>    
                                        </Link>
                                        
                                    </IconButton> 
                                    <span>{item.commentCount}</span>  
                                    
                                    </div>                   
                                </CardActions>




                                <CardContent>       
                                    <Typography variant="body2" color="text.secondary" >
                                    <S.TrTypoDiv>
                                     <StyleCommentList styleSeq={item.seq}  onCommentDelete={ onCommentDelete }  />                                
                                    
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