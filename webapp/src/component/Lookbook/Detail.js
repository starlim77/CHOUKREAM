import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Social from '../Lookbook/Social';
import Card from '@mui/material/Card';
import { Avatar, Button, CardActions, CardContent, CardHeader,  IconButton, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import * as S from './style';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import StyleCommentList from './StyleCommentList';
import StyleProduct from './StyleProduct';


const Detail = () => {    
   
    //게시물 뿌리기
    const [list, setList] = useState([]);
    const [isLike, setIsLike] = useState(0);
    const navigate = useNavigate();
    const id = useLocation().state.id;   //trending에서 로그인 후 넘어오는 id값 
    const [currentId,setCurrentId] = useState();

    const [followeeList, setFolloweeList]= useState([]);
    
    
    // const [id,setId] = useState()   //아이디값 로그인한걸로 가져오는거로 변경해야됨
    // const { id } = useParams();  //주소값 파라미터 id가져오기
    
    useEffect( ()=> {
        // axios.get('http://localhost:8080/lookbook/getStyleList')
        //      .then(res => setList(res.data))
        //      .catch(error => console.log(error))
        //      console.log("list",list) 
       
        if((!id) === true) {
            //로인인 안했을 때. 좋아요 포함 전체 리스트 가져오기 : 테이블 조인 쿼리 사용       
            axios.get('http://localhost:8080/lookbook/list')
                .then( 
                    res => setList(res.data)  )
                    // res => console.log(res.data)  )
                .catch(error => console.log(error))
        }else{
            //로인인 했을 때
             axios.get(`http://localhost:8080/lookbook/listById?id=${id}`)
                 .then( 
                    res => setList(res.data)  )
                    // res => console.log(res.data)  )
                 .catch(error => console.log(error))
            //팔로이 리스트 가져오기
            axios.get(`http://localhost:8080/lookbook/getMyFollowee/${id}`)
                 .then( res => setFolloweeList(res.data))
                 //(res => console.log(res.data))
                 .catch(error => console.log(error))
        }

        //member_id 숫자 보내서 이메일 가져오기
        // axios.get(`http://localhost:8080/used/getId?seq=${id}`)
        //      .then(
        //         res => console.log(res.data))
        //         // res=>{setCurrentId(res.data)})
        //      .catch(err=>console.log(err))
    }, [])   

        // const currentId2 = (currentId) => {        
        //     const currentId2 = currentId.split('@');        
        //     return currentId2
        //     console.log("currentId2" +currentId2)
        //     console.log("currentId"+currentId)

        // }

        // const currentId2 = currentId.split('@')

    
    //댓글삭제
    const onCommentDelete =(id) => {
        //item.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듦
        //=item.id 가 id 인 것을 제거한다        
    }


    //좋아요 클릭 로그인했을때만 가능
    const onLikes = (e,seq,checkLike,index) => {
        e.preventDefault();
       
        checkLike = checkLike === 'false' ? false : true

        if( (!id) === true){
            alert('먼저 로그인 하세요')
        }else{
            e.preventDefault();

            axios.post('http://localhost:8080/lookbook/likebutton2?styleSeq='+seq+'&memberId='+id+"&isLike="+checkLike) 
            .then(res => setList(res.data) )
            .catch(error => console.log(error))
        }
    }

    const onComment = (seq, id) => {
        if( (!id) === true){
            alert('먼저 로그인 하세요')
        }else{
            navigate(`/lookbook/StyleComment/${seq}/${id}`)
       }
    }
        
 
     //팔로우
     const onFollow = (followeeId,num) => {
        //console.log(tokenId+"+"+followeeId)
        axios.post(`http://localhost:8080/lookbook/saveFollow/${id}/${followeeId}`) 
             .then(alert("팔로우 성공"))
             .then()
             .catch(error => console.log(error))

        window.location.reload()     
        // setFolloweeList(followeeList,followeeId)
        
    } 

    //언팔로우
    const onUnFollow = (followeeId,num) => {
        //console.log(tokenId+"+"+followeeId)
        axios.delete(`http://localhost:8080/lookbook/unFollow/${id}/${followeeId}`) 
             .then(alert("언팔로우 성공"))
             .catch(error => console.log(error))

             

             window.location.reload()

        //  const followeeListFilter = followeeList.filter((item,index) => index != num)
        //  setFolloweeList(followeeListFilter)
        //  console.log(followeeListFilter)
             
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

    const IsFollow = (itemId) => {
        if(followeeList.filter(item => item === itemId)?.length){
            return true;
        }else{
            return false;
        }


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
                               
                            <Card key={item.seq} >
                                <S.DeProfile>
                                <S.DEChkprofile>    
                                <CardHeader
                                    avatar={ <Avatar> 프로필</Avatar> }
                                    // title={item.id}
                                    title={item.email}
                                    subheader={item.logtime}
                                   
                                />
                                </S.DEChkprofile>
                                <S.DeFollowChk>
                               {
                                    !id ? <Button variant="contained" style={{backgroundColor: 'black'}} onClick={ alert('먼저 로그인 하세요')}>팔로우</Button> :
                                    /* 팔로우체크?*/
                                 
                                    IsFollow(item.id) ? 
                                    <Button variant="outlined"  style={{color: 'black', borderColor:'#e2e2e2' ,backgroundColor: '#e2e2e2' }} onClick={() => onUnFollow (item.id,index)}>팔로잉</Button>
                                    :
                                    <Button variant="contained" style={{backgroundColor: 'black'}} onClick={() => onFollow (item.id,index)} >팔로우</Button>
                                        

                                }
                                </S.DeFollowChk>
                                </S.DeProfile>                
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
                                                    (!id) ? '/image/style/unlikes.png' :
                                                    item.islikes === "false"  ? '/image/style/unlikes.png' : '/image/style/likes.png' 
                                                    } 
                                                style={{ width:'28px'}} />
                                        </IconButton>
                                        <span>{item.likes_count}</span>
                                    </div>

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
                }
               </S.DeTopDiv>
            </Container>
        </div>
    );
};

export default Detail;