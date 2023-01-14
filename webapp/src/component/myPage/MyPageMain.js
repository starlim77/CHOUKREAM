import React, { useEffect, useState } from 'react';
import * as S from './MyPageMainStyle';
import HistoryProduct from './HistoryProduct';
import axios from 'axios';

const MyPageMain = () => {
    const [member, setMember] = useState({})

    //회원정보 불러옴 / 회원 등급 불러옴
    useEffect(() => {
        axios.get(`http://localhost:8080/getMember?id=1`)
             .then(res => setMember(res.data))

        // axios.get(`http://localhost:8080/getMember?id=1`)
    }, [])


    return (
        <S.MainWrapper>
            {/* 로그인 정보 */}
            <S.Top>
                <S.PictureWrapper>
                    <S.Picture src="../image/myProfile.png" />
                </S.PictureWrapper>
                <S.MiddleWrapper>
                    <S.IdDIv>id : {member.id}</S.IdDIv>
                    <S.EmailDIv>email : {member.email}</S.EmailDIv>
                    <S.MemberLevel>일반 회원</S.MemberLevel>
                    <S.ButtonWrapper>
                        <S.Button>프로필 수정</S.Button>
                        <S.Button>내 스타일</S.Button>
                    </S.ButtonWrapper>
                </S.MiddleWrapper>
                <S.RightWrapper>0 포인트</S.RightWrapper>
            </S.Top>

            {/* 구매 내역 */}
            <S.SectionTitle>구매내역</S.SectionTitle>
            <S.SellSection>
                <S.SectionBox>
                    <S.Title>전체</S.Title>
                    <S.SellCount>0</S.SellCount>
                </S.SectionBox>
                <S.Border></S.Border>
                <S.SectionBox>
                    <S.Title>입찰중</S.Title>
                    <S.Count>0</S.Count>
                </S.SectionBox>
                <S.SectionBox>
                    <S.Title>진행중</S.Title>
                    <S.Count>0</S.Count>
                </S.SectionBox>
                <S.SectionBox>
                    <S.Title>종료</S.Title>
                    <S.Count>0</S.Count>
                </S.SectionBox>
            </S.SellSection>
            {/* sell history */}
            <S.History>
                <HistoryProduct />
                <HistoryProduct />
            </S.History>

            {/* 판매 내역 */}
            <S.SectionTitle>판매내역</S.SectionTitle>
            <S.BuySection>
                <S.SectionBox>
                    <S.Title>전체</S.Title>
                    <S.BuyCount>0</S.BuyCount>
                </S.SectionBox>
                <S.Border></S.Border>
                <S.SectionBox>
                    <S.Title>입찰중</S.Title>
                    <S.Count>0</S.Count>
                </S.SectionBox>
                <S.SectionBox>
                    <S.Title>진행중</S.Title>
                    <S.Count>0</S.Count>
                </S.SectionBox>
                <S.SectionBox>
                    <S.Title>종료</S.Title>
                    <S.Count>0</S.Count>
                </S.SectionBox>
            </S.BuySection>
            {/* buy history */}
            <S.History>
                <S.NoneHistory>거래 내역이 없습니다</S.NoneHistory>
            </S.History>

            {/* 관심상품 */}
            <S.SectionTitle>관심상품</S.SectionTitle>
            <S.LikeSection>
                <S.ItemWrapper>
                    <S.itemImg src="\image\product\tombrownHoody.png"></S.itemImg>
                    <S.Brand>Hermes</S.Brand>
                    <S.Name>(W) Hermes Bouncing Sneakers Goatskin & Blanc Noir</S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <S.itemImg src="\image\product\tombrownHoody.png"></S.itemImg>
                    <S.Brand>Hermes</S.Brand>
                    <S.Name>(W) Hermes Bouncing Sneakers Goatskin & Blanc Noir</S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <S.itemImg src="\image\product\tombrownHoody.png"></S.itemImg>
                    <S.Brand>Hermes</S.Brand>
                    <S.Name>(W) Hermes Bouncing Sneakers Goatskin & Blanc Noir</S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <S.itemImg src="\image\product\tombrownHoody.png"></S.itemImg>
                    <S.Brand>Hermes</S.Brand>
                    <S.Name>(W) Hermes Bouncing Sneakers Goatskin & Blanc Noir</S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <S.itemImg src="\image\product\tombrownHoody.png"></S.itemImg>
                    <S.Brand>Hermes</S.Brand>
                    <S.Name>(W) Hermes Bouncing Sneakers Goatskin & Blanc Noir</S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
            </S.LikeSection>
        </S.MainWrapper>
    );
};

export default MyPageMain;
