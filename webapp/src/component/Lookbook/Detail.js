import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Social from '../Lookbook/Social';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardContent, CardHeader,  IconButton, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import StyleCommentList from './StyleCommentList';
import jwt_decode from 'jwt-decode';
import StyleProduct from './StyleProduct';

const Detail = () => {    
   
    //게시물 뿌리기
    const [list, setList] = useState([]);
    const [isLike, setIsLike] = useState(0);
    const navigate = useNavigate();
    
    const [id] = useState()   //아이디값 로그인한걸로 가져오는거로 변경해야됨
    
    //로그인
    const token = localStorage.getItem('accessToken');
    const [auth, setAuth] = useState('ROLE_GUEST');
    const [tokenId, settokenId] = useState('')
    useEffect(() => {
        if (token !== null) {
            const tokenJson = jwt_decode(token);
            setAuth(tokenJson['auth']);
            settokenId(tokenJson['sub']);
        }
    }, [token]);


    useEffect( ()=> {
        // axios.get('http://localhost:8080/lookbook/getStyleList')
        //      .then(res => setList(res.data))
        //      .catch(error => console.log(error))
        //      console.log("list",list) 

        //좋아요 포함 전체 리스트 가져오기
        // axios.get(`http://localhost:8080/lookbook/list?memberId=${id}&styleSeq=${seq}`)
        //      .then(res => setIsLike(res.data)  )
        //      .catch(error => console.log(error))

        // 좋아요 포함 전체 리스트 가져오기 : 테이블 조인 쿼리 사용
        axios.get('http://localhost:8080/lookbook/list')
             .then( res => setList(res.data)  )
             .catch(error => console.log(error))


    }, [])   
    
    //댓글삭제
    const onCommentDelete =(id) => {
        //item.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
        //=item.id 가 id 인 것을 제거한다        
    }


    //좋아요 클릭 로그인했을때만 가능
    const onLikes = (e,seq,checkLike,index) => {
        e.preventDefault();
        // alert(tokenId+"////")
       
        checkLike = checkLike === 'false' ? false : true

        if( (!tokenId) === true){
            alert('먼저 로그인 하세요')
        }else{
            e.preventDefault();

            axios.post('http://localhost:8080/lookbook/likebutton?styleSeq='+seq+'&memberId='+tokenId+"&isLike="+checkLike) 
            .then(res => setList(res.data) )
            .catch(error => console.log(error))
        }
    }

    const onComment = (seq) => {
        if( (!tokenId) === true){
            alert('먼저 로그인 하세요')
        }else{
            navigate(`/lookbook/StyleComment/${seq}`)
       }
    }
        
    //팔로우
    const onFollow = (id) => {
        //id //followee id
        axios.get('http://localhost:8080/lookbook/saveFollow')
    }
    
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
                                <Button variant="outlined"  style={{color: 'black'}}>언팔로우</Button>
                               
                                <S.MyStdiv>
                                    <img src={`/storage/${photoShop1(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />
                                    {photoShop2(item.stored_file_name) && <img src={`/storage/${photoShop2(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />}
                                    {photoShop3(item.stored_file_name) && <img src={`/storage/${photoShop3(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />}
                                    {photoShop4(item.stored_file_name) && <img src={`/storage/${photoShop4(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />}
                                    {photoShop5(item.stored_file_name) && <img src={`/storage/${photoShop5(item.stored_file_name)}`} alt='list사진' style={{width:'100%'}} />}
                                 </S.MyStdiv>

                                 <StyleProduct productSeq={item.product_seq}></StyleProduct>

                                <CardContent>
                                    {item.content}
                                </CardContent>

                               
                                <CardActions >
                                    <div>
                                        <IconButton aria-label="add to favorites" onClick={(e) => onLikes(e, item.seq ,item.islikes,index)} >
                                            <img src={
                                                    (!tokenId) ? '/image/style/unlikes.png' :
                                                    item.islikes === "false"  ? '/image/style/unlikes.png' : '/image/style/likes.png' 
                                                    } 
                                                style={{ width:'28px'}} />
                                        </IconButton>
                                        <span>{item.likes_count}</span>
                                    </div>

                                    <div>
                                    <IconButton onClick={ () => onComment(item.seq)}>
                                        {/* <Link to ={`/lookbook/StyleComment/${item.seq}`} > */}
                                        <ChatBubbleOutlineIcon  style={{color: '#616161', textDecoration:'none'}}/>    
                                        {/* </Link> */}
                                    </IconButton> 
                                    <span>{item.commentCount}</span>  
                                    
                                    </div>                   
                                </CardActions>




                                <CardContent>       
                                    <div variant="body2" color="text.secondary" >
                                    <S.TrTypoDiv>
                                     <StyleCommentList styleSeq={item.seq}  onCommentDelete={ onCommentDelete }  />                                
                                    
                                    </S.TrTypoDiv>                      
                                    </div>     
                                                
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