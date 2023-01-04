import axios from 'axios';
import { Avatar, Button, Card, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Container } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import Header from '../Header/Header';
import * as S from './style';
const Mystyle = () => {
    const imgRef = useRef();
    const [file, setFile] = useState([])
    const [showImgSrc,setShowImgSrc] = useState([]);
    const [styleBoardWriteOpen, setStyleBoardWriteOpen] = useState(false);
    

    //등록한 게시물 확인
    const [myList, setMyList] = useState([]);
    
    const onUploadFile = (e) =>{
        imgRef.current.click()
    }
    const [form, setForm] = useState({
        id: 'testid',
        content: '',
    })
    const {id, content} = form  

    const onInput = (e) => {
        const { name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
 
    //이미지 상대경로 저장
    const readURL = (input) => {
        const imageLists = input.target.files;   //한번에 선택한 파일리스트
        let imageUrlLists = [...showImgSrc];

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
        }

        if (imageUrlLists.length > 5) {
            imageUrlLists = imageUrlLists.slice(0, 5);
            alert("사진은 최대 5장만 등록 가능합니다");
            
        } else if (imageUrlLists.length < 6 ){
            setShowImgSrc(imageUrlLists);
            Array.from(input.target.files).map(items => file.push(items));
        }


        console.log(file)

    };

    const onImgRemove = (index) => {
        const img1 = file.filter((item, idx) => idx !== index)
        const imgShow1 = showImgSrc.filter((item, idx)=> idx !== index)

        setFile([...img1])
        setShowImgSrc([...imgShow1])
    }

    const onUpload = () => {
        var formData = new FormData()   //가지고가야할 데이터를 넣기
        file.map(files => formData.append('list',files))
        axios
            .post("http://localhost:8080/lookbook/upload", formData, {params:form})
           
             .then(
                            alert("게시물 등록 완료"),
                            setStyleBoardWriteOpen(false),
                            console.log(formData)
            )
            .catch( error => console.log(error) )
    }

    useEffect( ()=> {
        axios.get(`http://localhost:8080/lookbook/findAllMyList/${id}`)
             .then( //res => console.log(res.data)
                   res => setMyList(res.data)
                   )
             .catch(error => console.log(error))
    }, []) 


    return (
        <S.SoTopDiv>
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
                                <Button onClick={ onUploadFile }> 사진등록 +</Button><br/>
                               
                                {/* <CardMedia
                                    component="img"
                                    height="400"
                                    image={showImgSrc}
                                /> */}


                                <input type='file' name='file' id='file' accept="image/*" multiple  ref={imgRef}   style={ {visibility: 'hidden'}}
                                        //onChange={ e=> readURL( e.target) }  
                                        onChange={readURL}
                                />

                                <S.showImgSrcDiv >                                   
                                    {showImgSrc.map((item, index) => (
                                        <div key={index}>
                                            <S.showImgSrcImg src={item}  />
                                            <ClearIcon onClick={() => onImgRemove(index)}>삭제</ClearIcon>
                                                                                  
                                        </div>
                                    ))}
                                </S.showImgSrcDiv>


                                <textarea 
                                    type='text-area'
                                    name='content'
                                    value={content}
                                    placeholder='내용 입력'
                                    onChange={onInput}
                                    style={{width:494, height:80, resize:'none'}}  />
                                
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
                    myList.map((item, index) => {
                        return (
                                <S.MyPhotoMini key={item.seq}>  
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={'../storage/'+item.storedFileName[0]}  //입력된 대표사진1개만 보임
                                    />

                                    
                                    <CardHeader
                                        avatar={ <Avatar>프로필</Avatar> }
                                        title={item.id}
                                        value={id}
                                        name='id'
                                    />
                                </S.MyPhotoMini> 
                            )
                    })
                }
                </S.MyDiv>
            </Container>
        </S.SoTopDiv>
    );
};
export default Mystyle;