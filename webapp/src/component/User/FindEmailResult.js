import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './styleFindInfo.js';

const FindEmailResult = () => {
    const location = useLocation()
    const replacedEmail = location.state.replacedEmail

    const navigate = useNavigate()

    const onFindPassword = () => {
        navigate('/login/find_password')
    }

    const onLoginPage = () => {
        navigate('/login')
    }

    return (
        <S.Container>
            <S.HelpAreaDiv>
                <S.HelpTitle> 
                    <S.HelpSpan>이메일 주소 찾기에 </S.HelpSpan>
                    <S.HelpSpan>성공하였습니다.</S.HelpSpan>
                </S.HelpTitle>

                <S.SuccessNotice>
                    <S.SuccessNoticeDl>
                        <S.SuccessNoticeDt>이메일 주소</S.SuccessNoticeDt>
                        <S.SuccessNoticeDd>{replacedEmail}</S.SuccessNoticeDd>
                    </S.SuccessNoticeDl>
                </S.SuccessNotice>

                <S.SuccessBtnBox>
                    <S.SuccessBtn onClick={onFindPassword}>비밀번호 찾기</S.SuccessBtn>
                    <S.SuccessBtn onClick={onLoginPage} margin='8px'>로그인</S.SuccessBtn>
                </S.SuccessBtnBox>
            </S.HelpAreaDiv>
        </S.Container>
    );
};

export default FindEmailResult;