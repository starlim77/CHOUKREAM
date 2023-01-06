import { Avatar, Button, Card, CardHeader, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const MystyleUpdate = () => {
    const { seq } = useParams();  //주소값 파라미터 seq 가져오기
    const imgRef = useRef();
    
    const [file, setFile] = useState([])
    const [showImgSrc,setShowImgSrc] = useState([]);
    const [ list, setList] = useState();


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
    
    const readURL = () => {};
    const onUpdate = () => {}; //수정하기
    const onDelete = () => {}; //삭제하기


    
    useEffect( ()=> {
        axios.get(`http://localhost:8080/lookbook/findMyListDetail/${seq}`)
             .then(res => setList(res.data))
             .catch(error => console.log(error))
    }, []) 

    return (
        <div>
             <Dialog open={true}>
               <DialogTitle>게시물 수정</DialogTitle>  

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

                            <S.Container>
                                <S.showImgSrcDiv>  {/*  가로로정렬   */}
                                    {/* {showImgSrc.map((item, index) => (
                                        <div key={index}>
                                            <S.showImgSrcImg src={item}  />
                                            <ClearIcon onClick={() => onImgRemove(index)}>삭제</ClearIcon>
                                                                                    
                                        </div>
                                    ))} */}

                                </S.showImgSrcDiv>

                                <S.Button>이전</S.Button>
                                <S.Button>다음</S.Button>
                            </S.Container>


                            <textarea 
                                    type='text-area'
                                    name='content'
                                    value={content}
                                    placeholder='내용 입력'
                                    // onChange={onInput}
                                    style={{width:494, height:80, resize:'none'}}  />
                       

                            <DialogActions>
                                    <Button onClick={ onUpdate }>수정</Button>
                                    <Button onClick={ onDelete }>삭제</Button>
                                    <Button><Link to={`/lookbook/mystyleDetail/${seq}/${id}`}>취소</Link></Button>
                            </DialogActions> 

                        </Card>

                    </form> 


               </DialogContent>
 
 
            </Dialog> 
        </div>
    );
};

export default MystyleUpdate;

