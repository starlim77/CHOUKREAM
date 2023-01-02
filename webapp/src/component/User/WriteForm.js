import axios from 'axios';
import React, { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import { useNavigate } from 'react-router-dom';
import AgreementModal from './Modal/AgreementModal.js';
import PrivacyModal from './Modal/PrivacyModal.js';
import * as S from './styleWriteForm.js';

const WriteForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [phoneMessage, setPhoneMessage] = useState('')

    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
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

    //Modal
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)

    const onClickButton1 = (e) => {
        e.preventDefault();
        setIsOpen1(true);
    };
    
    const onClickButton2 = (e) => {
        e.preventDefault();
        setIsOpen2(true);
    };

    //체크박스
    const [isAllChecked, setIsAllChecked] = useState(false)
    const [checkedItems, setCheckedItems] = useState([])
    const [isEventChecked, setIsEventChecked] = useState(false)
    const [eventItems, setEventItems] = useState([])
    const [marketing, setMarketing] = useState('none')

    const allAgreeHandler = (checked) => {
        setIsAllChecked(!isAllChecked)
        if(checked) {
            setCheckedItems([...checkedItems, 'provision', 'privacy'])
        } else if((!checked && checkedItems.includes('provision')) || (!checked && checkedItems.includes('privacy'))) {
            setCheckedItems([])
        }
    }

    const agreeHandler = (checked, value) => {
        if(checked) {
            setCheckedItems([...checkedItems, value])
        } else if(!checked && checkedItems.includes(value)) {
            setCheckedItems(checkedItems.filter((el) => el !== value))
        }
    }
    
    const allEventHandler = (checked) => {
        setIsEventChecked(!isEventChecked)
        if(checked) {
            setEventItems([...eventItems, 'sms', 'email'])
        } else if((!checked && eventItems.includes('sms')) || (!checked && checkedItems.includes('email'))) {
            setEventItems([])
        }
    }

    const eventHandler = (checked, value) => {
        if(checked) {
            setEventItems([...eventItems, value])
        } else if(!checked && eventItems.includes(value)) {
            setEventItems(eventItems.filter((el) => el !== value))
        }
    }

    useEffect(() => {
        if(checkedItems.length >= 2) {
            setIsAllChecked(true)
        } else {
            setIsAllChecked(false)
        }
    }, [checkedItems])

    useEffect(() => {
        if (eventItems.includes('sms') && eventItems.includes('email')) {
            setIsEventChecked(true)    
            setMarketing('all')
        } else if (eventItems.includes('sms')) {
            setIsEventChecked(false)
            setMarketing('sms')
        } else if (eventItems.includes('email')) {
            setIsEventChecked(false)
            setMarketing('email')
        } else {
            setIsEventChecked(false)
            setMarketing('none')
        }
      }, [eventItems, marketing])

    //Iamport 핸드폰 본인 인증
    const onClickCertification = () => {
        const { IMP } = window;
        IMP.init('imp10391932');

        const data = {
            merchant_uid: `mid_${new Date().getTime()}`,
            phone: phone
        }

        IMP.certification(data, callback);
    }

    const callback = (response) => {
        const {
            success,
            error_code,
            error_msg,
            imp_uid,
            merchant_uid
        } = response;

        if(success) {
            axios({
                url: 'http://localhost:8080/certifications',
                method: 'post',
                headers: { "Content-Type": "application/json" },
                data: { imp_uid: imp_uid }
            })
            .then(() => {
                alert('본인인증 성공')
                axios({
                    url: 'http://localhost:8080/join',
                    method: 'post',
                    headers: { "Content-Type": "application/json" },
                    data: { email: email, 
                            password: password,
                            phone: phone,
                            eventItems: eventItems
                          }
                  })
                  .then(() => {
                    alert('회원가입 성공')
                    navigate('/login')
                  })
                  .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
        } else {
            alert(`본인인증 실패: ${error_msg}`)
        }
    }
   
    return (
        <S.Container>
            <S.JoinAreaDiv>
                <S.JoinTitle>회원가입</S.JoinTitle>

                <S.InputBox>
                    <S.InputTitle>이메일 주소 *</S.InputTitle>
                    <div className='inputItem'>
                        <S.InputText type='email' name='email' value={email} onChange={onChangeEmail} placeholder='예) kream@kream.co.kr' />
                    </div>
                    {email.length > 0 && <S.ErrorMessage className={`message ${isEmail ? 'success' : 'error'}`}>{emailMessage}</S.ErrorMessage>}
                </S.InputBox>

                <S.InputBox>
                    <S.InputTitle>비밀번호 *</S.InputTitle>
                    <div className='inputItem'>
                        <S.InputText type='password' name='password' value={password} onChange={onChangePassword} placeholder='영문,숫자,특수문자 조합 8-16자' />
                    </div>
                    {password.length > 0 && <S.ErrorMessage className={`message ${isPassword ? 'success' : 'error'}`}>{passwordMessage}</S.ErrorMessage>}
                </S.InputBox>

                <S.InputBox>
                    <S.InputTitle>휴대폰 번호 *</S.InputTitle>
                    <div className='inputItem'>
                        <S.InputText type='tel' name='phone' value={phone} onChange={onChangePhone} placeholder='숫자만 정확하게 입력해주세요.' />
                    </div>
                    {phone.length > 0 && <S.ErrorMessage className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</S.ErrorMessage>}
                </S.InputBox>

                <S.JoinTerms>
                    <S.TermsBox>
                        <S.CheckMain className='checkMain'>
                            <S.CheckboxItem className='checkboxItem'>
                                <input
                                    type='checkbox'
                                    id='agree'
                                    value='agree'
                                    onChange={(e) => allAgreeHandler(e.currentTarget.checked)}
                                    checked={isAllChecked}
                                />
                                <label htmlFor='agree'>
                                    <S.Span>[필수] 만 14세 이상이며 모두 동의합니다.</S.Span>
                                </label>
                            </S.CheckboxItem>
                        </S.CheckMain>
                        <S.CheckSub className='checkSub'>
                            <S.CheckboxItem className='checkboxItem'>
                                <input
                                    type='checkbox'
                                    id='provision'
                                    value='provision'
                                    onChange={(e) => agreeHandler(e.currentTarget.checked, e.target.value)}
                                    checked={checkedItems.includes('provision') ? true : false} />
                                <label htmlFor='provision'>
                                    <S.Span>이용약관 동의&emsp;&emsp;</S.Span>
                                </label>
                                <S.ModalBtn onClick={onClickButton1}>[내용 보기]</S.ModalBtn>
                            </S.CheckboxItem>
                            <S.CheckboxItem className='checkboxItem' margin='12px'>
                                <input
                                    type='checkbox'
                                    id='privacy'
                                    value='privacy'
                                    onChange={(e) => agreeHandler(e.currentTarget.checked, e.target.value)}
                                    checked={checkedItems.includes('privacy') ? true : false} />
                                <label htmlFor='privacy'>
                                    <S.Span>개인정보 수집 및 이용 동의&emsp;&emsp;</S.Span>
                                </label>
                                <S.ModalBtn onClick={onClickButton2}>[내용 보기]</S.ModalBtn>
                            </S.CheckboxItem>
                            {isOpen1 && (<AgreementModal onClose={() => { setIsOpen1(false); } } />)}
                            {isOpen2 && (<PrivacyModal onClose={() => { setIsOpen2(false); } } />)}
                        </S.CheckSub>
                    </S.TermsBox>
                    <S.TermsBox>
                        <S.CheckMain className='checkMain'>
                            <S.CheckboxItem className='checkboxItem'>
                                <input
                                    type='checkbox'
                                    id='all'
                                    value='all'
                                    onChange={(e) => allEventHandler(e.currentTarget.checked)}
                                    checked={isEventChecked} />
                                <label htmlFor='all'>
                                    <S.Span>[선택] 광고성 정보 수신에 모두 동의합니다.</S.Span>
                                </label>
                            </S.CheckboxItem>
                        </S.CheckMain>
                        <S.CheckSub className='checkSub'>
                            <S.CheckboxItem className='checkboxItem'>
                                <input
                                    type='checkbox'
                                    id='sms'
                                    value='sms'
                                    onChange={(e) => eventHandler(e.currentTarget.checked, e.target.value)}
                                    checked={eventItems.includes('sms') ? true : false} />
                                <label htmlFor='sms'>
                                    <S.Span>문자 메시지</S.Span>
                                </label>
                            </S.CheckboxItem>
                            <S.CheckboxItem className='checkboxItem' margin='12px'>
                                <input
                                    type='checkbox'
                                    id='email'
                                    value='email'
                                    onChange={(e) => eventHandler(e.currentTarget.checked, e.target.value)}
                                    checked={eventItems.includes('email') ? true : false} />
                                <label htmlFor='email'>
                                    <S.Span>이메일</S.Span>
                                </label>
                            </S.CheckboxItem>
                        </S.CheckSub>
                    </S.TermsBox>
                </S.JoinTerms>
                
                <S.JoinBtnBox>
                    <S.JoinBtn type='button' onClick={onClickCertification} disabled={!(isEmail && isPassword && isPhone && isAllChecked)}>가입하기</S.JoinBtn>
                </S.JoinBtnBox>
            </S.JoinAreaDiv>
        </S.Container>
    );
};

export default WriteForm;