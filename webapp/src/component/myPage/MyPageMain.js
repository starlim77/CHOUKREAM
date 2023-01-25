import React, { useEffect, useMemo, useState } from 'react';
import * as S from './MyPageMainStyle';
import HistoryProduct from './HistoryProduct';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const MyPageMain = () => {
    const memberSeq = jwtDecode(localStorage.getItem('accessToken')).sub;
    const [member, setMember] = useState({});
    const [id, setId] = useState();
    const [point, setPoint] = useState();
    const [grade, setGrage] = useState()
    const navigate = useNavigate();
    const [soldList, setSoldList] = useState([]);
    const [boughtList, setBoughtList] = useState([]);
    const [sellRecent, setSellRecent] = useState([])
    const [buyRecent, setBuyRecent] = useState([])

    //회원정보 불러옴 / 회원 등급 불러옴
    useEffect(() => {
        axios
            .get(`http://localhost:8080/getMember?id=${memberSeq}`)
            .then(res => setMember(res.data));
        axios
            .get(`http://localhost:8080/my/getGrade?memberSeq=${memberSeq}`)
            .then(res => setGrage(res.data.grade));
        //회원 아이디 가져옴
        axios
            .get(`http://localhost:8080/getMemberId?memberSeq=${memberSeq}`)
            .then(res => setId(res.data));
        //거래 내역 가져옴
        axios
            .get(
                `http://localhost:8080/my/getSoldHistory?memberSeq=${memberSeq}`,
            )
            .then(res => setSoldList(res.data));
        axios
            .get(
                `http://localhost:8080/my/getBoughtHistory?memberSeq=${memberSeq}`,
            )
            .then(res => setBoughtList(res.data));
        
        axios
            .get(
                `http://localhost:8080/my/getBuyRecent?memberSeq=${memberSeq}`,
            )
            .then(res => setBuyRecent(res.data));
        axios
            .get(
                `http://localhost:8080/my/getSellRecent?memberSeq=${memberSeq}`,
            )
            .then(res => setSellRecent(res.data));
    }, []);

    useEffect(() => {
        //회원 포인트 가져옴
        axios
            .get(`http://localhost:8080/my/getHavePoint?id=${member.email}`)
            .then(res => setPoint(res.data));
    }, [member]);

    const onProfile = () => {
        navigate('profile');
    };
    const onBuyingHistory = () => {
        navigate('buyHistory');
    };
    const onSellingHistory = () => {
        navigate('sellHistory');
    };
    const onStyle = () => {
        navigate('/lookbook/mystyle');
    };

    return (
        <S.MainWrapper>
            {/* 로그인 정보 */}
            <S.Top>
                <S.PictureWrapper>
                    <S.Picture src="../image/myProfile.png" />
                </S.PictureWrapper>
                <S.MiddleWrapper>
                    <S.IdDIv>ID : {id}</S.IdDIv>
                    <S.EmailDIv>email : {member.email}</S.EmailDIv>
                    <S.MemberLevel>{grade}</S.MemberLevel>
                    <S.ButtonWrapper>
                        <S.Button onClick={onProfile}>프로필 수정</S.Button>
                        <S.Button onClick={onStyle}>내 스타일</S.Button>
                    </S.ButtonWrapper>
                </S.MiddleWrapper>
                <S.RightWrapper>{point} 포인트</S.RightWrapper>
            </S.Top>

            {/* 구매 내역 */}
            <S.SectionTitle>리셀 구매내역</S.SectionTitle>
            <S.SellSection>
                <S.History onClick={onBuyingHistory}>
                    {buyRecent.length === 0 ? (
                        <S.History>
                            <S.NoneHistory>거래 내역이 없습니다</S.NoneHistory>
                        </S.History>
                    ) : (
                        buyRecent.map(item => (
                            <HistoryProduct key={item.seq} item={item}/>
                        ))
                    )}
                </S.History>
            </S.SellSection>
            {/* 판매 내역 */}
            <S.SectionTitle>리셀 판매내역</S.SectionTitle>
            <S.BuySection>
                {sellRecent.length === 0 ? (
                    <S.History>
                        <S.NoneHistory>거래 내역이 없습니다</S.NoneHistory>
                    </S.History>
                ) : (
                    <S.History onClick={onSellingHistory}>
                        {sellRecent.map(item => (
                            <HistoryProduct key={item.seq} item={item} />
                        ))}
                    </S.History>
                )}
            </S.BuySection>
        </S.MainWrapper>
    );
};

export default MyPageMain;
