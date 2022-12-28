import React from 'react';
import * as S from "../styles/PolicyStyle"

const Panalty = () => {
    return (
        <S.PolicyContainer>
            <S.Update>
                최종 수정일  2022년 7월 1일
            </S.Update>
            <S.Content>
                판매자와 구매자의 건전한 거래를 위하여 아래 사유에 따라 페널티가 부과됩니다.<br />
                결제정보 오류로 페널티 결제 실패 시, 이용약관 제24조("서비스수수료")에 따라 별도의 고지없이 재결제를 시도합니다.
            </S.Content>
            <S.Title>
                판매거부
            </S.Title>
            <S.Table>
                <S.Tbody>
                    <S.TableTr>
                        <S.TableTd>판매 거래 체결 후, 1시간 이내 판매 거부</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                    <S.TableTr>
                        <S.TableTd>판매 거래 체결 후, 1시간 이후 판매 거부</S.TableTd>
                        <S.TableTdRed>15.0%</S.TableTdRed>
                    </S.TableTr>
                </S.Tbody>
            </S.Table>
            <S.Title>
                발송지연
            </S.Title>
            <S.Table>
                <S.Tbody>
                    <S.TableTr>
                        <S.TableTd>
                            판매 거래 체결 후, <br />
                            48시간(일요일, 공휴일 제외) 이내<br />
                            발송 정보 미입력
                        </S.TableTd>
                        <S.TableTdRed>15.0%</S.TableTdRed>
                    </S.TableTr>
                </S.Tbody>
            </S.Table>
            <S.Content>
                * 발송 정보 입력 시 지원하지 않는 배송 수단의 경우, 운송장 추적 불가, 도착 상품의 식별 곤란 등의 사유로 인해 입고가 불가하며 이에 해당하는 상품은 반송 처리됩니다.<br/>
                * 반송 처리 등 정상적이지 않은 배송 방법을 통해 상품을 검수센터로 전달할 경우 상품 입고가 불가능합니다.
            </S.Content>
        </S.PolicyContainer>
    );
};

export default Panalty;