import React, { useCallback, useState } from 'react';
import * as S from './styleFindInfo.js';

const FindEmail = () => {
    const [phone, setPhone] = useState('')
    const [phoneMessage, setPhoneMessage] = useState('')
    const [isPhone, setIsPhone] = useState(false)

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

    return (
        <S.Container>
            <S.HelpAreaDiv>
                <S.HelpTitle>이메일 아이디 찾기</S.HelpTitle>

                <S.HelpNotice>
                    <p>
                        가입 시 등록한 휴대폰 번호를 입력하면 <br/>
                        이메일 주소를 알려드립니다.
                    </p>
                </S.HelpNotice>

                <S.InputBox>
                    <S.InputTitle>휴대폰 번호 *</S.InputTitle>
                    <div className='inputItem'>
                        <S.InputText type='tel' name='phone' value={ phone } onChange={ onChangePhone } placeholder='숫자만 정확하게 입력해주세요.' />
                    </div>
                    {phone.length > 0 && <S.ErrorMessage className={`message ${isPhone ? 'success' : 'error'}`}>{phoneMessage}</S.ErrorMessage>}
                </S.InputBox>

                <S.HelpBtnBox>
                    <S.HelpBtn type='button' disabled={!isPhone}>이메일 아이디 찾기</S.HelpBtn>
                </S.HelpBtnBox>
            </S.HelpAreaDiv>
        </S.Container>
    );
};

export default FindEmail;