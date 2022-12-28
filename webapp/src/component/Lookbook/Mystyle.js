import { Avatar, Button, Card, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Container } from '@mui/system';
import React, { useRef, useState } from 'react';
import Header from '../Header/Header';
import * as S from './style';
import axios from 'axios';

const Mystyle = () => {
    //const onStyleBoardWrite = () => {}
    const imgRef = useRef();
   
    const [styleBoardWriteOpen, setStyleBoardWriteOpen] = useState(false);
    const [showImgSrc,setShowImgSrc] = useState('');
    
    const onUploadFile = (e) =>{
        imgRef.current.click()
    }

    const readURL = (input) => {
        var reader = new FileReader(); //생성
        reader.readAsDataURL(input.files[0]) 

        reader.onload = () => {
            setShowImgSrc(reader.result)
            
        }
        
    }

    const onStyleBoardWrite = (e) => {
        
        axios.post("http://localhost:8080/style/styleBoardWrite", null)
             .then()
             .catch( error => console.log(error) )
        
    }


    return (
        <div>
            <Header />
            <br />

            <Container fixed>
                <S.MyDiv>
                    <div>
                        <img name='myProfile' width='130px' src='../image/myProfile.png' alt='마이프로필' 
                        style={{ borderRadius:"70%" }} />               
                    </div>
                    <div name='id' value='id'>id</div>  
                    <S.MyDivText>프로필 정보는 마이페이지에서 수정해주세요.</S.MyDivText>            
                </S.MyDiv>

                <S.MyDiv>
                    <ul>
                        <S.MyLi>게시물<span>0</span></S.MyLi>
                        <S.MyLi>팔로워<span>0</span></S.MyLi>
                        <S.MyLi>팔로잉<span>0</span></S.MyLi>
                    </ul>
                </S.MyDiv>

                <hr />
                <S.MyDiv>
                    <button onClick={()=>{setStyleBoardWriteOpen(true)} }>게시물등록</button>
                </S.MyDiv> 

                <Dialog open={ styleBoardWriteOpen }>
                    <DialogTitle>게시물 등록</DialogTitle>  

                    <DialogContent>  
                        <Card>
                            <CardHeader
                                avatar={ <Avatar> 사진</Avatar> }
                                title="본인id"
                                subheader="날짜예정 September 14, 2016"
                            />
                            <CardMedia
                                component="img"
                                height="400"
                                width="400"
                                image={showImgSrc}
                                alt="업로드이미지"
                                
                            />
                            <Button onClick={ onUploadFile }>+</Button><br/>
                            <input type='file' name='img[]' id='img' multiple ref={imgRef} style={{visibility:'hidden'}} onChange={ e=> readURL(e.target)}/>
                            <textarea 
                                placeholder="내용 입력"
                                style={{width:400, height:80, resize:'none'}}>
                            </textarea>
                            <DialogActions>
                                <Button onClick={ onStyleBoardWrite }>등록</Button>
                                <Button onClick={ ()=>{setStyleBoardWriteOpen(false)}}>취소</Button>
                            </DialogActions>
                            
                        </Card>


                    </DialogContent>
                </Dialog> 
            </Container>

        </div>
    );
};

export default Mystyle;