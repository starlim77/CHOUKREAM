import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import * as S from './ProfileStyle';

const Profile = () => {
    const memberSeq = jwtDecode(localStorage.getItem("accessToken")).sub
    const [member, setMember] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [openedSection, setOpendSection] = useState();
    const [smsOption, setSmsOption] = useState();
    const [emailOption, setEmailOption] = useState();
    const [smsOptionNum, setSmsOptionNum] = useState(smsOption ? 1 : 0);
    const [emailOptionNum, setEmailOptionNum] = useState(emailOption ? 1 : 0);
    const [email, SetEmail] = useState();
    const emailRef = useRef();
    const [password, setPassword] = useState();
    const passwordRef = useRef();
    const [rePassword, setRePassword] = useState();
    const RePasswordRef = useRef();
    const [phone, setPhone] = useState()

    // 회원정보 불러옴
    useEffect(() => {
        axios
            .get(`http://localhost:8080/getMember?id=${memberSeq}`)
            .then(res => setMember(res.data));
    }, []);

    //회원정보에서 sms, email 마케팅 동의 추출
    useEffect(() => {
        setSmsOption(member.smsOption === 1 ? true : false);
        setEmailOption(member.emailOption === 1 ? true : false);
    }, [member]);

    const onOpen = e => {
        setOpendSection(e.target.name);
        setIsOpen(true);
    };

    //이메일 변경 입력
    const inputEmail = e => {
        SetEmail(e.target.value);
    };

    const onChangeEmail = e => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if (!emailRegex.test(email)) {
            alert('이메일 주소를 정확히 입력해주세요');
            emailRef.current.focus();
            return;
        }
        axios
            .post(`http://localhost:8080/updateEmail?id=${memberSeq}&email=${email}`)
            .then(res => setMember(res.data))
            .catch(error => console.log(error))
        setIsOpen(false);
    };

    //비밀번호 변경 입력
    const inputPassword = e => {
        setPassword(e.target.value);
    };
    const inputRePassword = e => {
        setRePassword(e.target.value);
    };
    const onChangePassword = () => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
        if (!passwordRegex.test(password) || !passwordRegex.test(rePassword)) {
            alert('영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)');
            return;
        }
        if (password !== rePassword) {
            alert('비밀번호가 일치하지 않습니다');
            return;
        }
        axios
            .post(
                `http://localhost:8080/updatePassword?email=${member.email}&password=${password}`,
            )
            .then(res => setMember(res.data))
            .catch(error => console.log(error))
        setIsOpen(false);
    };

    // 전화번호 변경 입력
    const inputPhone = e => {
        setPhone(e.target.value)
    }
    const onPhoneChange = () => {
        const phoneRegex = /01[016789][^0][0-9]{3,4}[0-9]{4}$/
        if(!phoneRegex.test(phone)){
            alert("휴대폰 번호를 숫자만 정확히 입력해주세요")
            return
        }
        axios
        .post(
            `http://localhost:8080/updatePhone?email=${member.email}&phone=${phone}`,
        )
        .then(res => setMember(res.data))
        .catch(error => console.log(error))
        setIsOpen(false)
    }

    // 마케팅 정보 수신
    const onMarketing = e => {
        e.target.name === "sms" && setSmsOption(!smsOption)
        e.target.name === "email" && setEmailOption(!emailOption)
    }

    useMemo(() => {
        smsOption ? setSmsOptionNum(1) : setSmsOptionNum(0)
        emailOption ? setEmailOptionNum(1) : setEmailOptionNum(0)
    }, [smsOption, emailOption])

    useMemo(() => {
        axios.post(
            `http://localhost:8080/updateMarketingOption?email=${member.email}&smsOption=${smsOptionNum}&emailOption=${emailOptionNum}`,
        )
        .then(res => setMember(res.data))
        .catch(error => console.log(error))
    },[smsOptionNum, emailOptionNum])


    return (
        <S.ProfileWrapper>
            <S.ProfileTitle>프로필 정보</S.ProfileTitle>
            <S.Top>
                <S.PicWrapper>
                    <S.Picture src="../image/myProfile.png" />
                </S.PicWrapper>

                <S.MiddleWrapper>
                    <S.IdDIv>id : {member.id}</S.IdDIv>
                    <S.ButtonWrapper>
                        <S.Button>이미지 변경</S.Button>
                        <S.Button>이미지 삭제</S.Button>
                    </S.ButtonWrapper>
                </S.MiddleWrapper>
            </S.Top>
            <S.Bottom>
                <S.GroupTitle>로그인 정보</S.GroupTitle>
                <S.Unit>
                    {/* 이메일 */}
                    <S.Title>이메일 주소</S.Title>

                    {isOpen && openedSection === 'email' ? (
                        <>
                            <S.NewEmail
                                type="text"
                                placeholder="새로운 이메일을 입력하세요"
                                onChange={inputEmail}
                                ref={emailRef}
                            />
                            <S.ChangeButton onClick={onChangeEmail}>
                                변경
                            </S.ChangeButton>
                        </>
                    ) : (
                        <>
                            <S.Email>{member.email}</S.Email>
                            <S.ChangeButton name="email" onClick={onOpen}>
                                변경
                            </S.ChangeButton>
                        </>
                    )}

                    {/* 비밀번호 */}
                    <S.Title>비밀번호</S.Title>
                    {isOpen && openedSection === 'password' ? (
                        <>
                            <S.NewEmail
                                type="password"
                                placeholder="새로운 비밀번호를 입력하세요"
                                onChange={inputPassword}
                                ref={passwordRef}
                            />
                            <S.NewEmail
                                type="password"
                                placeholder="새로운 비밀번호를 재 입력하세요"
                                onChange={inputRePassword}
                                ref={RePasswordRef}
                            />
                            <S.ChangeButton onClick={onChangePassword}>
                                변경
                            </S.ChangeButton>
                        </>
                    ) : (
                        <>
                            <S.Password
                                type="password"
                                value={member.password}
                                readOnly
                            />
                            <S.ChangeButton name="password" onClick={onOpen}>
                                변경
                            </S.ChangeButton>
                        </>
                    )}
                </S.Unit>
                <S.GroupTitle>개인정보</S.GroupTitle>
                <S.Unit>
                    <S.Title>휴대폰 번호</S.Title>
                    {isOpen && openedSection === 'phone' ? (
                        <>
                            <S.NewEmail
                                type="text"
                                placeholder="새로운 전화번호를 입력하세요"
                                onChange={inputPhone}
                                // ref={RePasswordRef}
                            />
                            <S.ChangeButton onClick={onPhoneChange}>
                                변경
                            </S.ChangeButton>
                        </>
                    ) : (
                        <>
                            <S.Email>{member.phone}</S.Email>
                            <S.ChangeButton name="phone" onClick={onOpen}>
                                변경
                            </S.ChangeButton>
                        </>
                    )}
                </S.Unit>
                <S.GroupTitle>광고성 정보 수신</S.GroupTitle>
                <S.Unit>
                    <S.CheckBox>
                        <S.CheckBoxText>문자 메시지</S.CheckBoxText>
                        수신동의
                        <input
                            type="checkbox"
                            name='sms'
                            checked={smsOption === true}
                            style={{ marginRight: '20px' }}
                            onClick={onMarketing}
                            readOnly
                        />
                        수신거부
                        <input type="checkbox" name='sms' checked={smsOption === false}  onClick={onMarketing} readOnly/>
                    </S.CheckBox>
                    <S.CheckBox>
                        <S.CheckBoxText>이메일</S.CheckBoxText>
                        수신동의
                        <input
                            type="checkbox"
                            name='email'
                            checked={emailOption === true}
                            style={{ marginRight: '20px' }}
                            onClick={onMarketing}
                            readOnly
                        />
                        수신거부
                        <input type="checkbox" name="email" checked={emailOption === false} onClick={onMarketing} readOnly/>
                    </S.CheckBox>
                </S.Unit>
            </S.Bottom>
        </S.ProfileWrapper>
    );
};

export default Profile;
