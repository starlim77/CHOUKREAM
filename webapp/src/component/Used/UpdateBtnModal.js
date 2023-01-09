import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from './UpdateBtnModalStyle';

const UpdateBtnModal = ({writer, seq, imgNameSend}) => {
    const[buttonVisibility,setButtonVisibility]=useState(false);
    const modalVisibility=()=>{
        setButtonVisibility(!buttonVisibility);
    }
    const navigate = useNavigate();
    const moveToPage=()=>{
        //참고자료 https://curryyou.tistory.com/477
        navigate('/Used/usedUpdate',{state:{writer:writer,seq:seq,imgNameSend:imgNameSend}});
    }
    const deleteItem=()=>{
        axios.delete(`http://localhost:8080/used/deleteItem?seq=${seq}`)
       // axios.delete('http://localhost:8080/used/deleteItem',{params:{seq:seq}})
            .then(console.log("성공"))
            .catch(console.log("실패"))
    }
    return (
        <>
        {
            writer&&
            <M.ModalWrapper>
                <M.MainBtnDiv>
                    <M.UpdateBtn src="/image/used/pinBtn.png" onClick={modalVisibility}></M.UpdateBtn>
                </M.MainBtnDiv>         
                <br></br>
                {
                buttonVisibility&&
                    <M.SubBtnDiv>
                        <M.BtnDiv onClick={moveToPage}>수정하기</M.BtnDiv>
                        <M.BtnDiv style={{color:"red"}} onClick={deleteItem}>삭제하기</M.BtnDiv>
                    </M.SubBtnDiv>
                }
            </M.ModalWrapper>
         }   

           {
            !writer&&
            <M.ModalWrapper>
                <M.MainBtnDiv>
                    <M.UpdateBtn src="/image/used/pinBtn.png" onClick={modalVisibility}></M.UpdateBtn>
                </M.MainBtnDiv>         
                <br></br>
                {
                buttonVisibility&&
                    <M.SubBtnDiv>
                        <M.BtnDiv style={{color:"red"}} onClick={''}>신고하기</M.BtnDiv>
                    </M.SubBtnDiv>
                }
            </M.ModalWrapper>
         }     
        </>
    );
};

export default UpdateBtnModal;