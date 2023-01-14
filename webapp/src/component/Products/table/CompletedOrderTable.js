import React, { useEffect } from 'react';
import * as S from '../style';

const CompletedOrderTable = ({completedOrderForm}) => {
    const time = (a) => {
        var date = new Date(a)
        var b = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()
        return b
    }


    return (
        <S.Table>
            <S.TableCaption>
                <S.TableBlind>데이터 테이블</S.TableBlind>
            </S.TableCaption>
            <S.ColGroup>
                <col style={{width: "29.76%"}}/>
                <col style={{width: "36.52%"}}/>
                <col style={{width: "33.72%"}}/>
            </S.ColGroup>
            <thead>
                <tr>
                    <S.TableTh>사이즈</S.TableTh>
                    <S.TableThAlignRight>거래가</S.TableThAlignRight>
                    <S.TableThAlignRight>거래일</S.TableThAlignRight>
                </tr>
            </thead>
            <tbody>
            {[...Array(parseInt(5))].map((n, index) => {
                    return <tr key={index}>
                    <S.TableTd>
                        {completedOrderForm.length > index ? completedOrderForm[index].size : '-'}
                    </S.TableTd>
                    <S.TableTdAlignRight>
                        {completedOrderForm.length > index ? completedOrderForm[index].price.toLocaleString('ko-KR')+'원' : '-'}
                    </S.TableTdAlignRight>
                    <S.TableTdAlignRight>
                        {completedOrderForm.length > index ? time(completedOrderForm[index].tradeDate) : '-'}
                    </S.TableTdAlignRight>
                </tr>
            })}
            </tbody>
        </S.Table>
    );
};

export default CompletedOrderTable;