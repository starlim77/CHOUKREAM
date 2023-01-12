import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import * as S from './ProfileStyle';

const Profile = () => {
    const [member, setMember] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [openedSection, setOpendSection] = useState();
    const [smsOption, setSmsOption] = useState();
    const [emailOption, setEmailOption] = useState();
    const [email, SetEmail] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost:8080/getMember?id=1`)
            .then(res => setMember(res.data));
    }, []);

    useEffect(() => {
        setSmsOption(member.smsOption === 1 ? true : false);
        setEmailOption(member.emailOption === 1 ? true : false);
    }, [member]);

    const onOpen = e => {
        setOpendSection(e.target.name);
        setIsOpen(true);
    };

    function inputEmail(e) {
        SetEmail(e.target.value)
    };
   
    const onChangeEmail = (e) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/

        if(!emailRegex.test(email)){
            alert("이메일 주소를 정확히 입력해주세요")
            return
        }
        axios.post(`http://localhost:8080/updateEmail?id=1&email=${email}`)
             .then(res => setMember(res.data))
        setIsOpen(false)
    }

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
                    <S.Title>이메일 주소</S.Title>

                    {isOpen && openedSection === 'email' ? (
                        <>
                            <S.NewEmail
                                type="text"
                                placeholder="새로운 이메일을 입력하세요"
                                onChange={inputEmail}
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

                    <S.Title>비밀번호</S.Title>
                    <S.Password
                        type="password"
                        value={member.password}
                        readOnly
                    />
                    <S.ChangeButton>변경</S.ChangeButton>
                </S.Unit>
                <S.GroupTitle>개인정보</S.GroupTitle>
                <S.Unit>
                    <S.Title>이름</S.Title>
                    <S.Email>{member.name}</S.Email>
                    <S.Title>휴대폰 번호</S.Title>
                    <S.Email>{member.phone}</S.Email>
                    <S.ChangeButton>변경</S.ChangeButton>
                </S.Unit>
                <S.GroupTitle>광고성 정보 수신</S.GroupTitle>
                <S.Unit>
                    <S.CheckBox>
                        <S.CheckBoxText>문자 메시지</S.CheckBoxText>
                        수신동의
                        <input
                            type="checkbox"
                            checked={smsOption}
                            style={{ marginRight: '20px' }}
                        />
                        수신거부
                        <input type="checkbox" checked={!smsOption} />
                    </S.CheckBox>
                    <S.CheckBox>
                        <S.CheckBoxText>이메일</S.CheckBoxText>
                        수신동의
                        <input
                            type="checkbox"
                            checked={emailOption}
                            style={{ marginRight: '20px' }}
                        />
                        수신거부
                        <input type="checkbox" checked={!emailOption} />
                    </S.CheckBox>
                </S.Unit>
            </S.Bottom>
        </S.ProfileWrapper>
    );
};

export default Profile;
