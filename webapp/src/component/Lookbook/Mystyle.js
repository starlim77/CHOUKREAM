import axios from 'axios';
import { Avatar, Button, Card, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Container } from '@mui/system';
import React, { useRef, useState } from 'react';
import Header from '../Header/Header';
import * as S from './style';

const Mystyle = () => {
    const imgRef = useRef();

    const [file, setFile] = useState([])
    const [showImgSrc,setShowImgSrc] = useState('');
    const [styleBoardWriteOpen, setStyleBoardWriteOpen] = useState(false);
    const onUploadFile = (e) =>{
        imgRef.current.click()
    }

    const [form, setForm] = useState({
        id: '',
        content: '',
    //    file: ''
    })
    const {id, content} = form  


    const onInput = (e) => {
        const { name, value} = e.target
        setForm({
            ...form,
            [name] : value

        })
    }
 
    const readURL = (input) => {
        var reader = new FileReader(); //생성
    
        reader.readAsDataURL(input.files[0]) 

        reader.onload = () => {
            console.log(input.files[0])   //파일확인
            setShowImgSrc(reader.result)
            //setFile(input.files[0])
            Array.from(input.files).map(items => file.push(items));
            console.log(file)
            
        }

        
        
    }

    const onStyleBoardWrite = () => {
        var formData = new FormData()   //가지고가야할 데이터를 넣기
        formData.append('img', file)

        axios
            .post("http://localhost:8080/lookbook/upload", formData, {params:form})
           
             .then(
                            alert("게시물 등록 완료"),
                            setStyleBoardWriteOpen(false)
            )
            .catch( error => console.log(error) )


    //     var formData = new FormData()   //가지고가야할 데이터를 넣기
    //     formData.append('file', file)
    //    // formData.append('content', content)
     
    //     axios.post("http://localhost:8080/lookbook/styleBoardWrite", formData, 
    //                 {
    //                     headers: {
    //                         'content-Type': `multipart/form-data`
    //                     }
    //                 }
    //         )
    //          .then( 
    //             alert("게시물 등록 완료"),
    //             setStyleBoardWriteOpen(false)
    //          )
    //          .catch( error => console.log(error) )
        


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
                    <div name='id' value='id'>{id}</div>  
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
                        <form>
                            <Card>
                                <CardHeader
                                    avatar={ <Avatar>프로필</Avatar> }
                                    title={id}
                                    value={id}
                                    name='id'
                                    onChange={onInput}
                                />
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={showImgSrc}
                                    alt="업로드이미지"
                                />

                                <Button onClick={ onUploadFile }>+</Button><br/>
                                <input type='file' name='img' id='img' accept="image/*" multiple  ref={imgRef}   style={ {visibility: 'hidden'}}
                                        onChange={ e=> readURL( e.target) }  
                                        //onChange={onInput}
                                />
                                <textarea 
                                    type='text-area'
                                    name='content'
                                    value={content}
                                    placeholder='내용 입력'
                                    onChange={onInput}
                                    style={{width:545, height:80, resize:'none'}}  />
                                
                                <DialogActions>
                                    <Button onClick={ onStyleBoardWrite }>등록</Button>
                                    <Button onClick={ ()=>{setStyleBoardWriteOpen(false)}}>취소</Button>
                                </DialogActions>
                                
                            </Card>
                        </form>

                    </DialogContent>
                </Dialog> 
                
            </Container>

        </div>
    );
};

export default Mystyle;