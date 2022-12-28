import React, { useState } from 'react';
import PayHeader from './PayHeader';
import * as S from './styles/SizePageStyle';
import * as B from './styles/TermStyle'
import SizeBtn from './SizeBtn';
import ProductData from "./ProductData"
import { useNavigate } from 'react-router-dom';

const SizePage = () => {
    const [size, setSize] = useState(ProductData.size)
    const [isBtnClick, setIsBtnClick] = useState(false)
    const [selectSize, setSelectSize] = useState("")
    const navigate = useNavigate();

    let onClick = (e) => {
        setIsBtnClick(true)
        setSelectSize(e.target.id)
    }
    const onNavigate = () => {
        navigate(`/payTerms?size=${selectSize}`)
    }
    return (
        <S.Container>
            <PayHeader />
            <S.Body>
                <S.BtnWrapper>
                    {
                        size.map((item, index) => {
                            return (<SizeBtn key={index} size={item} onClick={onClick}/>)
                        })
                    }
                </S.BtnWrapper>
            </S.Body>
            {isBtnClick &&
                <S.BuyBtnWrapper>
                    <B.BuyBtn onClick={onNavigate} isBtnClick={isBtnClick}>구매계속</B.BuyBtn>
                </S.BuyBtnWrapper>}
        </S.Container>

    );
};

export default SizePage;