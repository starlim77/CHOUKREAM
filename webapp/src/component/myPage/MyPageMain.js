import React, { useEffect, useMemo, useState } from 'react';
import * as S from './MyPageMainStyle';
import HistoryProduct from './HistoryProduct';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const MyPageMain = () => {
    const memberSeq = jwtDecode(localStorage.getItem('accessToken')).sub;
    const [member, setMember] = useState({});
    const [point, setPoint] = useState();
    const navigate = useNavigate();

    const [sellingList, setSellingList] = useState([]);
    const [soldList, setSoldList] = useState([]);
    const [sellHis, setSellHis] = useState([]);
    const [buyingList, setBuyingList] = useState([]);
    const [boughtList, setBoughtList] = useState([]);
    const [buyHis, setBuyHis] = useState([]);

    //회원정보 불러옴 / 회원 등급 불러옴
    useEffect(() => {}, []);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/getMember?id=${memberSeq}`)
            .then(res => setMember(res.data));

        axios
            .get(`http://localhost:8080/my/getBuy?id=${memberSeq}`)
            .then(res => setBuyingList(res.data));

        axios
            .get(`http://localhost:8080/my/getDoneBuy?id=${memberSeq}`)
            .then(res => setBoughtList(res.data));

        axios
            .get(`http://localhost:8080/my/getSell?id=${memberSeq}`)
            .then(res => setSellingList(res.data));

        axios
            .get(`http://localhost:8080/my/getSold?id=${memberSeq}`)
            .then(res => setSoldList(res.data));
    }, []);
    useEffect(() => {
        sellHis.push(sellingList);
        sellHis.push(soldList);
        buyHis.push(buyingList);
        buyHis.push(boughtList);
        // console.log(sellingList)
    }, [sellingList, soldList, buyingList, boughtList]);

    //회원 포인트 가져옴
    useEffect(() => {
        axios
            .get(`http://localhost:8080/my/getHavePoint?id=${member.email}`)
            .then(res => setPoint(res.data));
    }, [member]);

    const onProfile = () => {
        navigate('profile');
    };
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
                        <S.Button onClick={onProfile}>프로필 수정</S.Button>
                        <S.Button>내 스타일</S.Button>
                    </S.ButtonWrapper>
                </S.MiddleWrapper>
                <S.RightWrapper>{point} 포인트</S.RightWrapper>
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
                {buyingList.map(item => (
                    <HistoryProduct key={item.seq} item={item} />
                ))}
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
                    <S.Name>
                        (W) Hermes Bouncing Sneakers Goatskin & Blanc Noir
                    </S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <S.itemImg src="\image\product\tombrownHoody.png"></S.itemImg>
                    <S.Brand>Hermes</S.Brand>
                    <S.Name>
                        (W) Hermes Bouncing Sneakers Goatskin & Blanc Noir
                    </S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <S.itemImg src="\image\product\tombrownHoody.png"></S.itemImg>
                    <S.Brand>Hermes</S.Brand>
                    <S.Name>
                        (W) Hermes Bouncing Sneakers Goatskin & Blanc Noir
                    </S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <S.itemImg src="\image\product\tombrownHoody.png"></S.itemImg>
                    <S.Brand>Hermes</S.Brand>
                    <S.Name>
                        (W) Hermes Bouncing Sneakers Goatskin & Blanc Noir
                    </S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
                <S.ItemWrapper>
                    <S.itemImg src="\image\product\tombrownHoody.png"></S.itemImg>
                    <S.Brand>Hermes</S.Brand>
                    <S.Name>
                        (W) Hermes Bouncing Sneakers Goatskin & Blanc Noir
                    </S.Name>
                    <S.Price>1,590,000</S.Price>
                </S.ItemWrapper>
            </S.LikeSection>
        </S.MainWrapper>
    );
};

export default MyPageMain;
