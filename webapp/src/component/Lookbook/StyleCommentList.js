import { Avatar, Chip } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import * as S from './style';

const StyleCommentList = (props) => {

    //댓글 뿌리기
    const [comment, setComment] = useState([]);
    const [count, setCount]= useState([]);
    
    
    useEffect(() => {
        axios.get(`http://localhost:8080/lookbook/getComment?styleSeq=${props.styleSeq}`)
             .then(res => setComment(res.data))
             .catch(error => console.log(error))
             axios.get(`http://localhost:8080/used/getId?seq=${props.id}`)
             .then(res=>{setCurrentId(res.data)})
             .catch(err=>console.log(err))
    },[])
    
    const onCommentDelete = (id,styleSeq) => {
        console.log(id, styleSeq)
        axios.delete(`http://localhost:8080/lookbook/deleteComment?id=${id}&styleSeq=${styleSeq}`)
             .then(
                alert("삭제완료"),
                window.location.replace("/lookbook/detail")//새로고침
             )
             .catch(error => console.log(error))
    } 

     //아이디 이메일 앞자리로 변환
     const [currentId,setCurrentId] = useState();
     var currentId2 = (currentId||'').split('@');
     var currentId3 = currentId2[0];


   // props.setData(comment.length)
    

    return (
        <>                                                                               
            {             
            comment.map((item, index)=> {
                return(
                    
                    <S.SCLcomment key={index}>
                            <Chip
                            avatar={<Avatar alt="" src="" />}

                            label=  {currentId3}                             
                        /> 
                        {console.log(item.commentMember) }                              
                        {item.commentContents}
                        
                        <S.SCLdeletebutton>
                        <ClearIcon onClick = { () => { onCommentDelete(item.id,item.styleSeq) }} >삭제</ClearIcon>
                        </S.SCLdeletebutton>
                    </S.SCLcomment>
                )
            })
            }
                                    

        </>
    );
};

export default StyleCommentList;
