import React from 'react';
import * as S from './MyPageMainStyle';

const MyPageMain = () => {
    return (
        <S.MainWrapper>
            <S.Top>
                <S.PictureWrapper>
                    <S.Picture src="../image/myProfile.png" />
                </S.PictureWrapper>
                <S.MiddleWrapper>
                    <S.IdDIv>id : asdasd</S.IdDIv>
                    <S.EmailDIv>email : asdasdasd@asdasdasd.com</S.EmailDIv>
                    <S.MemberLevel>일반 회원</S.MemberLevel>
                    <S.ButtonWrapper>
                        <S.Button>프로필 수정</S.Button>
                        <S.Button>내 스타일</S.Button>
                    </S.ButtonWrapper>
                </S.MiddleWrapper>
                <S.RightWrapper>
                    0 포인트
                </S.RightWrapper>
            </S.Top>
        </S.MainWrapper>
    );
};

export default MyPageMain;
