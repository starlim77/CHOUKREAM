import React, { useEffect, useRef } from 'react';
import useOutSideClick from "./useOutSideClick";
import ModalContainer from './ModalContainer';
import * as S from './styleModal.js';

const Modal = ({ onClose, children }) => {
    const modalRef = useRef(null);
    const handleClose = () => {
        onClose?.();
    }

    useOutSideClick(modalRef, handleClose)
    useEffect(() => {
        const $body = document.querySelector('body')
        $body.style.overflow = 'hidden'
        return () => ($body.style.overflow = 'auto')
    }, [])

    return (
        <ModalContainer>
            <S.Overlay>
                <S.ModalWrap ref={ modalRef }>
                    <S.CloseButton onClick={ handleClose }>
                        <i className='fa-solid fa-xmark'></i>
                    </S.CloseButton>
                    <S.Contents>{ children }</S.Contents>
                </S.ModalWrap>
            </S.Overlay>
        </ModalContainer>
    );
};

export default Modal;