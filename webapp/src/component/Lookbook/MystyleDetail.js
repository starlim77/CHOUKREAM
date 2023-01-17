import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Avatar, CardActions, CardContent, CardHeader,  IconButton } from '@mui/material';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';
import StyleProduct from './StyleProduct';
import StyleCommentList from './StyleCommentList';

const MystyleDetail = () => {
    const { id } = useParams();  //주소값 파라미터 seq id가져오기
    const navigate = useNavigate();

    //좋아요 포함 dto 전체 리스트
    const [likeAll, setLikeAll] = useState([]);
    
    //게시물 뿌리기
    const [list, setList] = useState([]);
 

    useEffect( ()=> {     
        axios.get(`http://localhost:8080/lookbook/findLikes?id=${id}`)
            .then(
                //  res=> console.log(res.data)
                res => setLikeAll(res.data)  
            )
            .catch(error => console.log(error))

    }, []) 

 
    //좋아요 클릭
    const onLikes = (e, seq, checkLike, index) => {
        e.preventDefault();
        checkLike = checkLike === 'false' ? false : true
        
        axios.post('http://localhost:8080/lookbook/likebutton?styleSeq='+seq+'&memberId='+id+"&isLike="+checkLike)
            .then(res => setLikeAll(res.data) )
            .catch(error => console.log(error))
    }

    //댓글삭제
    const onCommentDelete =(id) => {
        //item.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
        //=item.id 가 id 인 것을 제거한다
        
    }

    const onComment = (seq, id) => {
            navigate(`/lookbook/StyleComment/${seq}/${id}`)
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
            {/* {console.log(likeAll)} */}
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
                                            <Link to={`/lookbook/mystyleUpdate/${item.seq}/${id}/${item.product_seq}`} >
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

                                 </S.MyStdiv>
                                    
                                <StyleProduct productSeq={item.product_seq}></StyleProduct>
                                
                                <S.MyStContent>
                                        {item.content}
                                </S.MyStContent>


                                <CardActions >   
                                        
                                 
                                    <IconButton aria-label="add to favorites" onClick={(e) => onLikes(e, item.seq ,item.islikes ,index)} >
                                            
                                        <img src={  item.islikes === "false"  ? '/image/style/unlikes.png' : '/image/style/likes.png' } style={{ width:'28px'}} />
                                           
                                    </IconButton>
                                        
                                     <span>{item.likes_count}</span>


                                <div>
                                    <IconButton onClick={ () => onComment(item.seq, id)}>    
                                        {/* <Link to ={`/lookbook/StyleComment/${item.seq}`} > */}
                                        <ChatBubbleOutlineIcon  style={{color: '#616161', textDecoration:'none'}}/>    
                                        {/* </Link> */}
                                    </IconButton> 
                                    <span>{item.comment_count}</span>  
                                    
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