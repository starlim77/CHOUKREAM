import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import * as S from './style';

const Footer = () => {
    return (
        <S.FooterWrapper>
            <S.FooterTopSection>
                <S.TopLeft>
                    <S.GuideInfo>
                        <li>
                            <strong>이용안내</strong>
                        </li>
                        <li>검수기준</li>
                        <li>이용정책</li>
                        <li>페널티 정책</li>
                        <li>커뮤니티 가이드라인</li>
                    </S.GuideInfo>
                    <S.GuideInfo>
                        <li>
                            <strong>고객지원</strong>
                        </li>
                        <li>공지사항</li>
                        <li>서비스 소개</li>
                        <li>쇼룸 안내</li>
                        <li>판매자 방문접수</li>
                    </S.GuideInfo>
                </S.TopLeft>
                <S.TopRight>
                    <strong>고객센터 1588-7813</strong>
                    <S.TimeInfo>
                        운영시간 평일 11:00 - 18:00 (토∙일, 공휴일 휴무) <br />
                        점심시간 평일 13:00 - 14:00
                    </S.TimeInfo>
                    <S.CustomerInfo>
                        1:1 문의하기는 앱에서만 가능합니다.
                    </S.CustomerInfo>
                    <S.FaqButton>자주 묻는 질문</S.FaqButton>
                </S.TopRight>
            </S.FooterTopSection>
            <S.FooterBottomSection>
                <S.CorpInfo>
                    <S.TermInfo>
                        <S.TermInfoList>
                            <li>회사소개</li>
                            <li>인재채용</li>
                            <li>제휴제안</li>
                            <li>이용약관</li>
                            <li>
                                <strong>개인정보처리방침</strong>
                            </li>
                        </S.TermInfoList>
                        <S.BusinnessInfo>
                            <li>크림 주식회사 · 대표 김창욱</li>
                            <li>
                                사업자등록번호 : 570-88-01618
                                <S.BusinnessLink>
                                    사업자정보확인
                                </S.BusinnessLink>
                            </li>
                            <li>통신판매업 : 제 2021-성남분당C-0093호</li>
                            <li>
                                사업장소재지 : 경기도 성남시 분당구 분당내곡로
                                131 판교테크원 타워1, 8층
                            </li>
                            <li>호스팅 서비스 : 네이버 클라우드 ㈜</li>
                        </S.BusinnessInfo>
                    </S.TermInfo>
                    <S.SnsInfo>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFacebook} />
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faComment} />
                        </li>
                    </S.SnsInfo>
                </S.CorpInfo>
                <S.NoticeInfo>
                    <strong>신한은행 채무지급보증 안내</strong>
                    <S.NoticeText>
                        당사는 고객님의 현금 결제 금액에 대해 신한은행과
                        채무지급보증 계약을 체결하여 안전거래를 보장하고
                        있습니다.
                        <S.NoticeLink>서비스가입 사실 확인</S.NoticeLink>
                    </S.NoticeText>
                </S.NoticeInfo>
                <S.NoticeArea>
                    <S.NoticeText>
                        크림(주)는 통신판매 중개자로서 통신판매의 당사자가
                        아니므로 개별 판매자가 등록한 상품정보에 대해서 책임을
                        지지 않습니다. <br />
                        단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은
                        당사에 있습니다.
                    </S.NoticeText>
                    <S.Copyright>© KREAM Corp.</S.Copyright>
                </S.NoticeArea>
            </S.FooterBottomSection>
        </S.FooterWrapper>
    );
};

export default Footer;
