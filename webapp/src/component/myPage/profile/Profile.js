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
                </S.Unit>
            </S.Bottom>
        </S.ProfileWrapper>
    );
};

export default Profile;