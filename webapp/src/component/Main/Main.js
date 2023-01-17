import React from 'react';
import MainProduct from './MainProduct/MainProduct';

import * as S from './style';

const Main = () => {
    return (
        <S.MainWrap>
            <S.MainTopWrap>
                <S.MainTop>
                    <S.TopItem>
                        <img src="/image/main/top1.webp" alt="top1" />
                        <p>크림런 오픈예정</p>
                    </S.TopItem>
                    <S.TopItem>
                        <img src="/image/main/top2.webp" alt="top1" />
                        <p>남성 추천</p>
                    </S.TopItem>
                    <S.TopItem>
                        <img src="/image/main/top3.webp" alt="top1" />
                        <p>여성 추천</p>
                    </S.TopItem>
                    <S.TopItem>
                        <img src="/image/main/top4.webp" alt="top1" />
                        <p>웰컴드로우</p>
                    </S.TopItem>
                    <S.TopItem>
                        <img src="/image/main/top5.webp" alt="top1" />
                        <p>5%적립 브랜드</p>
                    </S.TopItem>
                </S.MainTop>
                <S.MainTop>
                    <S.TopItem>
                        <img src="/image/main/top6.webp" alt="top1" />
                        <p>정가 아래</p>
                    </S.TopItem>
                    <S.TopItem>
                        <img src="/image/main/top7.webp" alt="top1" />
                        <p>인기 럭셔리</p>
                    </S.TopItem>
                    <S.TopItem>
                        <img src="/image/main/top8.webp" alt="top1" />
                        <p>비바 마젠타</p>
                    </S.TopItem>
                    <S.TopItem>
                        <img src="/image/main/top9.webp" alt="top1" />
                        <p>셀럽픽 </p>
                    </S.TopItem>
                    <S.TopItem>
                        <img src="/image/main/top10.webp" alt="top1" />
                        <p>OOTD</p>
                    </S.TopItem>
                </S.MainTop>
            </S.MainTopWrap>
            <S.MidBanner>
                <img src="/image/main/mid_content2.webp" alt="banner" />
            </S.MidBanner>
            <MainProduct title="Just Dropped" subTitle="발매 상품" />
            {/* <S.Divider /> */}
            <S.MidBanner>
                <img src="/image/main/mid_content.webp" alt="banner" />
            </S.MidBanner>
            <MainProduct title="Most Popular" subTitle="인기 상품" />
        </S.MainWrap>
    );
};

export default Main;
