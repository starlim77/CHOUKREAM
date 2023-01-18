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
import Tech from '../payment/inspectionItem/Tech';
import Life from '../payment/inspectionItem/Life';
import Bag from '../payment/inspectionItem/Bag';
import Watch from '../payment/inspectionItem/Watch';


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
                                    <S.CategoryTd onClick={onClick} style={content==="테크"? {fontWeight: "bold"}:{}}>테크</S.CategoryTd>
                                    <S.CategoryTd onClick={onClick} style={content==="라이프"? {fontWeight: "bold"}:{}}>라이프</S.CategoryTd>
                                    <S.CategoryTd  onClick={onClick} style={content==="프리미엄 시계"? {fontWeight: "bold"}:{}}>프리미엄 시계</S.CategoryTd>
                                </S.CategoryTr>
                                <S.CategoryTr>
                                    <S.CategoryTd onClick={onClick} style={content==="프리미엄 가방"? {fontWeight: "bold"}:{}}>프리미엄 가방</S.CategoryTd>
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
                                {content === '테크' && <Tech />}
                                {content === '라이프' && <Life />}
                                {content === '프리미엄 시계' && <Watch/>}
                                {content === '프리미엄 가방' && <Bag/>}
                            </I.ContentText>
                        </I.ContentWrapper>
                    </M.BodyDiv>
                </M.Scroll>
            </I.InspectionWrapper>
        </>
    );
};

export default CsInspection;
