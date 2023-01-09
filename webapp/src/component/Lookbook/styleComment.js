import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './style';

const styleComment = () => {

const [commentOpen, setCommentOpen] = useState(false)


//상세 글 하나 가져오기


const {styleSeq}= useParams()
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
    styleSeq: ''//게시글 번호
})

const {commentMember, commentContents} = form


    const onUpload = () => {    
        //e.preventDefault()      
        console.log(form)
        axios
            .post(`http://localhost:8080/lookbook/commentSave?styleSeq=${styleSeq}`,null , {params:form})
            .then(                
                    alert("댓글등록 성공"),
                    setCommentOpen(false),
                    console.log(form)
            )
            .catch( error => console.log(error) )
    }



    return (
        <div>
            
            <Dialog open={true}> 
                                        <S.DeComment>
                                            <DialogTitle sx={{mt:5}}>댓글</DialogTitle>
                                            <DialogContent>

                                            
                                                <DialogContentText>
                                                    <TextField
                                                        multiline 
                                                        fullWidth
                                                        name='commentContents'
                                                        value={commentContents}
                                                        onChange={onInput}
                                                    />
                                                <textarea onChange={onInput} name='styleSeq' value={item.seq}></textarea>
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick = {onUpload}></Button>
                                                <Button onClick={ ()=>{setCommentOpen(false)}}>취소</Button>
                                            </DialogActions>
                                        </S.DeComment>
                                </Dialog>
        </div>
    );
};

export default styleComment;