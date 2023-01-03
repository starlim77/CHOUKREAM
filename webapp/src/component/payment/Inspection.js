import React, { useState } from 'react';
import * as M from './styles/ModalStyle';
import * as S from './styles/InspectionStyle';
import Shoes from './inspectionItem/Shoes';
import Clothes from './inspectionItem/Clothes';
import Accessory from './inspectionItem/Accessory';

const Inspection = ({ onInspenctionClose }) => {
    const [content, setContent] = useState()

    const onClick = (e) => {
        const product = e.target.innerHTML
        setContent(product)
    }
    return (
        <div>
            <M.Bg onClick={onInspenctionClose}></M.Bg>
            <M.Popup>
                <M.Header>
                    <M.HeaderDiv>
                        검수 기준
                    </M.HeaderDiv>
                    <M.CloseX className='closex' style={{ cursor: "pointer" }} onClick={onInspenctionClose}>X</M.CloseX>
                </M.Header>
                <M.Scroll>
                    <M.BodyDiv>
                        <S.CategoryTable>
                            <S.CategoryTbody>
                                <S.CategoryTr>
                                    <S.CategoryTd onClick={onClick}>
                                        신발
                                    </S.CategoryTd>
                                    <S.CategoryTd onClick={onClick}>
                                        의류
                                    </S.CategoryTd>
                                    <S.CategoryTd onClick={onClick}>
                                        패션 잡화
                                    </S.CategoryTd>
                                </S.CategoryTr>
                                <S.CategoryTr>
                                    <S.CategoryTd>
                                        테크
                                    </S.CategoryTd>
                                    <S.CategoryTd>
                                        라이프
                                    </S.CategoryTd>
                                    <S.CategoryTd>
                                        프리미엄 시계
                                    </S.CategoryTd>
                                </S.CategoryTr>
                                <S.CategoryTr>
                                    <S.CategoryTd>
                                        프리미엄 가방
                                    </S.CategoryTd>
                                    <S.CategoryTd>
                                    </S.CategoryTd>
                                    <S.CategoryTd>
                                    </S.CategoryTd>
                                </S.CategoryTr>
                            </S.CategoryTbody>
                        </S.CategoryTable>
                        <S.ContentWrapper>
                            {content === "신발" && <Shoes />}
                            {content === "의류" && <Clothes />}
                            {content === "패션 잡화" && <Accessory />}
                        </S.ContentWrapper>
                    </M.BodyDiv>
                </M.Scroll>
            </M.Popup>
        </div>
    );
};

export default Inspection;