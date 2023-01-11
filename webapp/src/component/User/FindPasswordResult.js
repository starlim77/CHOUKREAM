import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styleFindInfo.js';

const FindPasswordResult = () => {
    const navigate = useNavigate()
    
    const onLoginPage = () => {
        navigate('/login')
    }

    return (
        <S.Container>
            <S.HelpAreaDiv>
                <S.HelpTitle hidden>이메일 아이디 찾기</S.HelpTitle>

                <S.HelpNotice>
                    <S.NoticeTxt>
                        임시 비밀번호를 전송하였습니다. <br/>
                        전송 받은 임시 비밀번호로 로그인해주세요.
                    </S.NoticeTxt>
                </S.HelpNotice>

                <S.HelpBtnBox>
                    <button onClick={onLoginPage}>로그인</button>
                </S.HelpBtnBox>
            </S.HelpAreaDiv>
        </S.Container>
    );
};

export default FindPasswordResult;