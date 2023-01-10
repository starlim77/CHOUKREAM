import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { setRefreshToken } from './storage/Cookie.js';
import * as S from './styleLoginForm.js';

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')

    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)

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

    const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/
        setPassword(e.target.value)
    
        if(!passwordRegex.test(e.target.value)) {
            setPasswordMessage('영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)')
            setIsPassword(false)
        } else {
            setPasswordMessage('')
            setIsPassword(true)
        }
    }, [])

    const navigate = useNavigate()

    const onLogin = () => {
        axios({
            url: 'http://localhost:8080/login',
            method: 'post',
            headers: { "Content-Type": "application/json" },
            data: { email: email, 
                    password: password
                  }
          })
          .then((res) => {
            localStorage.setItem('accessToken',res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            
            alert('로그인 성공')
            navigate('/')
          })
          .catch(error => console.log(error))
    }

    return (
        <S.Container>
            <S.LoginAreaDiv>
                <h2 className='loginTitle'>KREAM</h2>

                <S.InputBox>
                    <S.InputTitle>이메일 주소 *</S.InputTitle>
                    <div className='inputItem'>
                        <S.InputText type='email' name='email' value={ email } onChange={ onChangeEmail } placeholder='예) kream@kream.co.kr' />
                    </div>
                    {email.length > 0 && <S.ErrorMessage className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</S.ErrorMessage>}
                </S.InputBox>

                <S.InputBox>
                    <S.InputTitle>비밀번호 *</S.InputTitle>
                    <div className='inputItem'>
                        <S.InputText type='password' name='password' value={ password } onChange={ onChangePassword } placeholder='영문,숫자,특수문자 조합 8-16자' />
                    </div>
                    {password.length > 0 && <S.ErrorMessage className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</S.ErrorMessage>}
                </S.InputBox>

                <S.LoginBtnBox>
                    <S.LoginBtn type='button' onClick={onLogin} disabled={!(isEmail && isPassword)}>로그인</S.LoginBtn>
                </S.LoginBtnBox>

                <S.LookBox>
                    <S.LookList>
                        <Link to='/join' style={{ textDecoration: 'none', color: '#222' }}> 이메일 가입 </Link>
                    </S.LookList>
                    <S.LookList>
                        <Link to='/login/find_email' style={{ textDecoration: 'none', color: '#222' }}> 이메일 찾기 </Link>
                    </S.LookList>
                    <S.LookList>
                        <Link to='/login/find_password' style={{ textDecoration: 'none', color: '#222' }}> 비밀번호 찾기 </Link>
                    </S.LookList>
                </S.LookBox>

                <S.SocialLogin>
                    <S.Button type='button' className='naverBtn'>
                        <S.ButtonDiv>
                            <S.ButtonImg src='../image/naver.png' alt='네이버 로고' />
                            <S.ButtonSpan>네이버로 로그인</S.ButtonSpan>
                        </S.ButtonDiv>
                    </S.Button>
                    <S.Button type='button' className='kakaoBtn'>
                        <S.ButtonDiv>
                            <S.ButtonImg src='../image/kakao.png' alt='카카오 로고' />
                            <S.ButtonSpan>카카오로 로그인</S.ButtonSpan>
                        </S.ButtonDiv>
                    </S.Button>
                </S.SocialLogin>
            </S.LoginAreaDiv>
        </S.Container>
    );
};

export default LoginForm;