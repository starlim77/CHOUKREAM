import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from './UpdateBtnModalStyle';

const UpdateBtnModal = ({writer, seq, imgNameSend, form,onSale,soldOut}) => {
    const[buttonVisibility,setButtonVisibility]=useState(false);
    const modalVisibility=()=>{
        setButtonVisibility(!buttonVisibility);
    }
    const navigate = useNavigate();
    //업데이트
    const moveToPage=()=>{
        //참고자료 https://curryyou.tistory.com/477
        navigate('/Used/usedUpdate',{state:{writer:writer,seq:seq,imgNameSend:imgNameSend}});
    }
    //글삭제
    const deleteItem=()=>{
        axios.delete(`http://localhost:8080/used/deleteItem?seq=${seq}`)
       // axios.delete('http://localhost:8080/used/deleteItem',{params:{seq:seq}})
            .then(() => {
                navigate("/used/usedMain");
             })
            .catch(err=>console.log(err))
    }

    

    return (
        <>
        
        {   //판매중이면  뜨는 버튼
            writer&&(form.sellingState)&&
            <M.ModalWrapper>
                <M.MainBtnDiv>
                    <M.UpdateBtn src="/image/used/pinBtn.png" onClick={modalVisibility}></M.UpdateBtn>
                </M.MainBtnDiv>         
                <br></br>
                {
                buttonVisibility&&
                    <M.SubBtnDiv>
                        <M.BtnDiv onClick={soldOut}>판매완료</M.BtnDiv>
                        <M.BtnDiv onClick={moveToPage}>수정하기</M.BtnDiv>
                        <M.BtnDiv style={{color:"red"}} onClick={deleteItem}>삭제하기</M.BtnDiv>
                    </M.SubBtnDiv>
                }
            </M.ModalWrapper>
         }   

        {   //판매완료처리 되어있으면 뜨는 버튼    
            writer&&(!form.sellingState)&&
            <M.ModalWrapper>
                <M.MainBtnDiv>
                    <M.UpdateBtn src="/image/used/pinBtn.png" onClick={modalVisibility}></M.UpdateBtn>
                </M.MainBtnDiv>         
                <br></br>
                {
                buttonVisibility&&
                    <M.SubBtnDiv>
                        <M.BtnDiv onClick={onSale}>판매중</M.BtnDiv>
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