import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styleFindInfo.js';

const FindPassword = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [emailMessage, setEmailMessage] = useState('')
    const [phoneMessage, setPhoneMessage] = useState('')

    const [isEmail, setIsEmail] = useState(false)
    const [isPhone, setIsPhone] = useState(false)

    const onChangeEmail = useCallback((e) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        setEmail(e.target.value)
    
        if(!emailRegex.test(e.target.value)) {
            setEmailMessage('이메일 주소를 정확히 입력해주세요.')
            setIsEmail(false)
        } else {
            setEmailMessage('')
            setIsEmail(true)
        }
    }, [])

    const onChangePhone = useCallback((e) => {
        const phoneRegex = /01[016789][^0][0-9]{3,4}[0-9]{4}$/
        setPhone(e.target.value)

        if(!phoneRegex.test(e.target.value)) {
            setPhoneMessage('휴대폰 번호를 숫자만 정확히 입력해주세요.')
            setIsPhone(false)
        } else {
            setPhoneMessage('')
            setIsPhone(true)
        }
    }, [])

    const navigate = useNavigate()

    const onSendSms = () => {
        axios
            .get(`http://localhost:8080/tempPassword?phone=${phone}&email=${email}`)
            .then((res) => {
                if(res.data !== 'non_exist'){
                    console.log(res)
                    //문자 보내기 추가
                    //navigate('/login/find_password/result')
                } else {
                    alert('일치하는 사용자 정보를 찾을 수 없습니다.')
                }

            })
            .catch(error => console.log(error))
    }
    
    return (
        <S.Container>
            <S.HelpAreaDiv>
                <S.HelpTitle>비밀번호 찾기</S.HelpTitle>

                <S.HelpNotice>
                    <S.NoticeTxt>
                        가입 시 등록한 휴대폰 번호와 이메일을 입력하시면, <br/>
                        휴대폰으로 임시 비밀번호를 전송해 드립니다.
                    </S.NoticeTxt>
                </S.HelpNotice>

                <S.InputBox>
                    <S.InputTitle>휴대폰 번호 *</S.InputTitle>
                    <div className='inputItem'>
                        <S.InputText type='tel' name='phone' value={ phone } onChange={ onChangePhone } placeholder='숫자만 정확하게 입력해주세요.' />
                    </div>
                    {phone.length > 0 && <S.ErrorMessage className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</S.ErrorMessage>}
                </S.InputBox>

                <S.InputBox>
                    <S.InputTitle>이메일 주소 *</S.InputTitle>
                    <div className='inputItem'>
                        <S.InputText type='email' name='email' value={ email } onChange={ onChangeEmail } placeholder='예) kream@kream.co.kr' />
                    </div>
                    {email.length > 0 && <S.ErrorMessage className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</S.ErrorMessage>}
                </S.InputBox>

                <S.HelpBtnBox>
                    <S.HelpBtn type='button' onClick={onSendSms} disabled={!(isEmail && isPhone)}>문자 발송하기</S.HelpBtn>
                </S.HelpBtnBox>
            </S.HelpAreaDiv>
        </S.Container>
    );
};

export default FindPassword;