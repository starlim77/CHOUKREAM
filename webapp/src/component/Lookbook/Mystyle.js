import axios from 'axios';
import { Avatar, Button, Card, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import * as S from './style';

const Mystyle = () => {
    const imgRef = useRef();

    const [file, setFile] = useState([]);
    const [showImgSrc,setShowImgSrc] = useState('');
    const [styleBoardWriteOpen, setStyleBoardWriteOpen] = useState(false);
    
    //등록한 게시물 확인
    const [myList, setMyList] = useState([]);
    //const [imgData, setImgData] = useState[imgData];
    
    const onUploadFile = (e) =>{
        imgRef.current.click()
    }

    const [form, setForm] = useState({
        id: '테스트아이디',
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
            Array.from(input.files).map(items=>file.push(items))
            console.log(file)
        }
        
    }

    const onUpload = () => {
        var formData = new FormData()   //가지고가야할 데이터를 넣기
        //formData.append('list', file)
        file.map(files=>formData.append('list',files))

        axios
            .post("http://localhost:8080/lookbook/upload", formData, {params:form})
            .then(
                alert("게시물 등록 완료"),
                setStyleBoardWriteOpen(false))
            .catch(error => console.log(error) )
    }


    useEffect( ()=> {
        axios.get('http://localhost:8080/lookbook/getMyStyleBoardList')
             .then(res => setMyList(res.data))
             .catch(error => console.log(error))
    }, []) 


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
                                <Button onClick={ onUploadFile }>+</Button><br/>

                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={showImgSrc}
                                    
                                />

                               
                                <input type='file' name='img' id='img' multiple  ref={imgRef}   style={ {visibility: 'hidden'}}
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
                                    <Button onClick={ onUpload }>등록</Button>
                                    <Button onClick={ ()=>{setStyleBoardWriteOpen(false)}}>취소</Button>
                                </DialogActions>
                                
                            </Card>
                        </form>

                    </DialogContent>
                </Dialog> 
                
                <S.MyDiv>    {/* 등록한 게시물 간단히 보기 */}
                {
                    myList.map(item => {
                        return (
                                <S.MyPhotoMini key={item.seq}>  
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        //image={item.filename}
                                    />

                                    <CardHeader
                                        avatar={ <Avatar>프로필</Avatar> }
                                        title={id}
                                        value={id}
                                        name='id'
                                    />

                                </S.MyPhotoMini> 
                            )
                    })
                }

                </S.MyDiv>
            </Container>

        </div>
    );
};

export default Mystyle;