import React from 'react';
import * as S from "../styles/PolicyStyle"

const Abuse = () => {
    return (
        <S.PolicyContainer>
            <S.Update>
                최종 수정일  2021년 12월 10일
            </S.Update>
            <S.Content>
                아래 기준에 해당하는 경우 미입고 처리되며 판매금액의 10%  페널티가 부과됩니다.<br />
                상품/패키지 공통 적용됩니다.
            </S.Content>
            <S.Title>
                신발
            </S.Title>
            <S.Table>
                <S.Tbody>
                    <S.TableTr>
                        <S.TableTd>상품 불일치</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                    <S.TableTr>
                        <S.TableTd>사이즈 불일치</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                    <S.TableTr>
                        <S.TableTd>기본 구성품 누락</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                </S.Tbody>
            </S.Table>
            <S.Title>
                의류
            </S.Title>
            <S.Table>
                <S.Tbody>
                    <S.TableTr>
                        <S.TableTd>상품 불일치</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                    <S.TableTr>
                        <S.TableTd>사이즈 불일치</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                    <S.TableTr>
                        <S.TableTd>기본 구성품 누락</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                </S.Tbody>
            </S.Table>
            <S.Title>
                패션 잡화
            </S.Title>
            <S.Table>
                <S.Tbody>
                    <S.TableTr>
                        <S.TableTd>상품 불일치</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                    <S.TableTr>
                        <S.TableTd>사이즈 불일치</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                </S.Tbody>
            </S.Table>
            <S.Title>
                테크/라이프
            </S.Title>
            <S.Table>
                <S.Tbody>
                    <S.TableTr>
                        <S.TableTd>정보 불일치</S.TableTd>
                        <S.TableTdRed>10.0%</S.TableTdRed>
                    </S.TableTr>
                </S.Tbody>
            </S.Table>
        </S.PolicyContainer>

    );
};

export default Abuse;