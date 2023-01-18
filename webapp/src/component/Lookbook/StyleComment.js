import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import React, { useState,useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as S from './style';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const StyleComment = () => {

    const {styleSeq,id,currentId3 }= useParams()   
    const navigate = useNavigate()


    //선택한 글 가지고오기
    useEffect( ()=> {
        axios.get(`http://localhost:8080/lookbook/findMyListDetail/${styleSeq}`)
            .then(res => console.log(res.data.seq) )
            .catch(error => console.log(error))
        // axios.get(`http://localhost:8080/used/getId?seq=${id}`)
        //     .then(res=>{
        //         setCurrentId(res.data)
                

        //     })
        //     .catch(err=>console.log(err))
       
    }, []) 

    
    //  //아이디 이메일 앞자리로 변환
    //  const [currentId,setCurrentId] = useState();
    //  var currentId2 = (currentId||'').split('@');
    //  var currentId3 = currentId2[0];

     

    const [form, setForm] = useState({
        commentMember: currentId3, //댓글입력아이디
        commentContents: '',
        styleSeq: styleSeq//게시글 번호
    })
    
    const onInput = (e) =>{
        const { name, value } = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

   

    const {commentMember, commentContents} = form


    const onUpload = (e, id) => {    
        //e.preventDefault()      
        // console.log(form)
            axios
                .post(`http://localhost:8080/lookbook/commentSave`,null , {
                    params:form
                    //styleSeq: styleSeq
                })
                .then(                
                        alert("댓글등록 성공"),
                        // navigate('/lookbook/detail' ,{ state: id }),
                        navigate(-1),
                        console.log(form)
                )
                .catch( error => console.log(error) )
        
    }



    return (
         
            <Dialog open={true} > 
                <S.DeComment>
                    <DialogTitle sx={{mt:5}}>댓글</DialogTitle>
                    <DialogContent >
                    
                        <div >
                            <TextField                                                          
                                multiline
                                fullWidth                       
                                name='commentContents'
                                value={commentContents}
                                onChange={onInput}
                            />
                        
                        </div>
                    </DialogContent>
                     <DialogActions>                         
                        <Button onClick={onUpload}>등록</Button>
                        <Button ><Link to ={'/lookbook/detail'}>취소</Link></Button> 
                    </DialogActions>  
                    
                </S.DeComment>
        </Dialog>

    );
};

export default StyleComment;