import React from 'react';
import * as S from './ProfileStyle';


const Profile = () => {
    return (
        <S.ProfileWrapper>
            <S.ProfileTitle>프로필 정보</S.ProfileTitle>
            <S.Top>
                <S.PicWrapper>
                    <S.Picture src="../image/myProfile.png" />
                </S.PicWrapper>

                <S.MiddleWrapper>
                    <S.IdDIv>id : asdasd</S.IdDIv>
                    <S.ButtonWrapper>
                        <S.Button>프로필 수정</S.Button>
                        <S.Button>내 스타일</S.Button>
                    </S.ButtonWrapper>
                </S.MiddleWrapper>
            </S.Top>
            <S.Bottom>
                <S.GroupTitle>로그인 정보</S.GroupTitle>
                <S.Unit>
                    <S.Title>이메일 주소</S.Title>
                    <S.Email>a*******@gmail.com</S.Email>
                    <S.ChangeButton>변경</S.ChangeButton>
                    <S.Title>비밀번호</S.Title>
                    <S.Password type="password" value="password" readonly />
                    <S.ChangeButton>변경</S.ChangeButton>
                </S.Unit>
                <S.GroupTitle>개인정보</S.GroupTitle>
                <S.Unit>
                    <S.Title>이름</S.Title>
                    <S.Email>fhaksh0369</S.Email>
                    <S.Title>휴대폰 번호</S.Title>
                    <S.Email>010-5***-*547</S.Email>
                    <S.ChangeButton>변경</S.ChangeButton>
                </S.Unit>
                <S.GroupTitle>광고성 정보 수신</S.GroupTitle>
                <S.Unit>
                    <S.CheckBox>
                        <S.CheckBoxText>문자 메시지</S.CheckBoxText>
                        수신동의<input type="checkbox" value="수신동의" style={{marginRight: "20px"}}/>
                        수신거부<input type="checkbox" value="수신거부"/>
                    </S.CheckBox>
                    <S.CheckBox>
                        <S.CheckBoxText>이메일</S.CheckBoxText>
                        수신동의<input type="checkbox" value="수신동의" style={{marginRight: "20px"}}/>
                        수신거부<input type="checkbox" value="수신거부"/>
                    </S.CheckBox>
                </S.Unit>
            </S.Bottom>
        </S.ProfileWrapper>
    );
};

export default Profile;