import React, { useState } from 'react';
import Header from '../Header/Header';
import Inspection from '../payment/Inspection';
import CsNav from './Csnav/CsNav';
import * as M from '../payment/styles/ModalStyle';
import * as S from '../payment/styles/InspectionStyle';
import * as I from './CsInspectionStyle';
import Shoes from '../payment/inspectionItem/Shoes';
import Clothes from '../payment/inspectionItem/Clothes';
import Accessory from '../payment/inspectionItem/Accessory';

const CsInspection = () => {
    const [content, setContent] = useState("신발");

    const onClick = e => {
        const product = e.target.innerText;
        setContent(product);
    };

    return (
        <>
            <I.InspectionWrapper>
                <M.Scroll>
                    <M.BodyDiv>
                        <I.CategoryTable>
                            <S.CategoryTbody>
                                <S.CategoryTr>
                                    <S.CategoryTd onClick={onClick} style={content==="신발"? {fontWeight: "bold"}:{}}>
                                        신발
                                    </S.CategoryTd>
                                    <S.CategoryTd onClick={onClick} style={content==="의류"? {fontWeight: "bold"}:{}}>
                                        의류
                                    </S.CategoryTd>
                                    <S.CategoryTd onClick={onClick} style={content==="패션 잡화"? {fontWeight: "bold"}:{}}>
                                        패션 잡화
                                    </S.CategoryTd>
                                </S.CategoryTr>
                                <S.CategoryTr>
                                    <S.CategoryTd>테크</S.CategoryTd>
                                    <S.CategoryTd>라이프</S.CategoryTd>
                                    <S.CategoryTd>프리미엄 시계</S.CategoryTd>
                                </S.CategoryTr>
                                <S.CategoryTr>
                                    <S.CategoryTd>프리미엄 가방</S.CategoryTd>
                                    <S.CategoryTd></S.CategoryTd>
                                    <S.CategoryTd></S.CategoryTd>
                                </S.CategoryTr>
                            </S.CategoryTbody>
                        </I.CategoryTable>
                        <I.ContentWrapper>
                            <I.ContentText>
                                {content === '신발' && <Shoes />}
                                {content === '의류' && <Clothes />}
                                {content === '패션 잡화' && <Accessory />}
                            </I.ContentText>
                        </I.ContentWrapper>
                    </M.BodyDiv>
                </M.Scroll>
            </I.InspectionWrapper>
        </>
    );
};

export default CsInspection;
