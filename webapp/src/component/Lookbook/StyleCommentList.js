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
            
    },[])
    
    const onCommentDelete = (id,styleSeq) => {
        // console.log(id, styleSeq)
        axios.delete(`http://localhost:8080/lookbook/deleteComment?id=${id}&styleSeq=${styleSeq}`)
             .then(
                alert("삭제완료"),
                window.location.replace("/lookbook/detail")//새로고침
             )
             .catch(error => console.log(error))
    } 


   // props.setData(comment.length)
    

    return (
        <>                                                                               
            {             
            comment.map((item, index)=> {
                return(
                    
                    <S.SCLcomment key={index}>
                            <Chip
                            avatar={<Avatar alt="" src="" />}
                            label=  {item.commentMember}                             
                        />                              
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
