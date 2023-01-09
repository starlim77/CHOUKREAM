import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import axios from 'axios';
const StyleComment = () => {

    const {styleSeq}= useParams()   
    const navigate = useNavigate()


    //선택한 글 가지고오기
    useEffect( ()=> {
        axios.get(`http://localhost:8080/lookbook/findMyListDetail/${styleSeq}`)
            .then(res => console.log(res.data.seq) )
            .catch(error => console.log(error))
    }, []) 

    
    const onInput = (e) =>{
        const { name, value } = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const [form, setForm] = useState({
        commentMember: '댓글입력자', //댓글입력아이디
        commentContents: '',
        styleSeq: styleSeq//게시글 번호
    })

    const {commentMember, commentContents} = form


    const onUpload = (e) => {    
        //e.preventDefault()      
        console.log(form)
        axios
            .post(`http://localhost:8080/lookbook/commentSave`,null , {
                params:form
                //styleSeq: styleSeq
            })
            .then(                
                    alert("댓글등록 성공"),
                    navigate('/lookbook/detail'),
                    console.log(form)
            )
            .catch( error => console.log(error) )
    }



    return (
        <div>            
            <Dialog open={true} > 
                <S.DeComment>
                    <DialogTitle sx={{mt:5}}>댓글</DialogTitle>
                    <DialogContent >
                    
                        <DialogContentText >
                            <TextField                                                          
                                multiline
                                fullWidth                       
                                name='commentContents'
                                value={commentContents}
                                onChange={onInput}
                            />
                        
                        </DialogContentText>
                    </DialogContent>
                     <DialogActions>                         
                        <Button onClick={onUpload}>등록</Button>
                        <Button ><Link to ={'/lookbook/detail'}>취소</Link></Button> 
                    </DialogActions>  
                    
                </S.DeComment>
        </Dialog>
        </div>
    );
};

export default StyleComment;