import React from 'react';
import * as S from '../style';

const BuyBidsTable = ({buyBidsListForm}) => {
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
                    <S.TableThAlignRight>구매 희망가</S.TableThAlignRight>
                    <S.TableThAlignRight>수량</S.TableThAlignRight>
                </tr>
            </thead>
            <tbody>
            {[...Array(parseInt(5))].map((n, index) => {
                    return <tr key={index}>
                    <S.TableTd>
                        {buyBidsListForm.length > index ? buyBidsListForm[index].size : '-'}
                    </S.TableTd>
                    <S.TableTdAlignRight>
                        {buyBidsListForm.length > index ? buyBidsListForm[index].price.toLocaleString('ko-KR')+'원' : '-'}
                    </S.TableTdAlignRight>
                    <S.TableTdAlignRight>
                        {buyBidsListForm.length > index ? buyBidsListForm[index].count : '-'}
                    </S.TableTdAlignRight>
                </tr>
            })}
            </tbody>
        </S.Table>
    );
};

export default BuyBidsTable;