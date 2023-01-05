import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from './UpdateBtnModalStyle';

const UpdateBtnModal = ({writer}) => {
    const[buttonVisibility,setButtonVisibility]=useState(false);
    const modalVisibility=()=>{
        setButtonVisibility(!buttonVisibility);
    }
    const navigate = useNavigate();
    const moveToPage=()=>{
        navigate('/Used/usedUpdate');
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
                        <M.BtnDiv style={{color:"red"}}>삭제하기</M.BtnDiv>
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