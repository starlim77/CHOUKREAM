import React, { useEffect, useMemo, useState } from 'react';
import PayHeader from './PayHeader';
import * as S from './styles/SizePageStyle';
import * as B from './styles/TermStyle'
import SizeBtn from './SizeBtn';
import ProductData from "./ProductData"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SizePage = () => {
    const [sizeList, setSizeList] = useState([])
    const [size, setSize] = useState([])
    const [isBtnClick, setIsBtnClick] = useState(false)
    const [selectSize, setSelectSize] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    
    useEffect(() => {
        axios.get('http://localhost:8080/shop/getSizeList?productType=1')
             .then(res => (setSizeList(res.data)))
             .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        sizeList.map(item => setSize([item.size]))
    }, [sizeList])

    const onClick = (e) => {
        setIsBtnClick(true)
        setSelectSize(e.target.id)
    }

    const onNavigate = () => {
        navigate(`/payTerms?type=${location.pathname}&size=${selectSize}`)
    }
    return (
        <S.Container>
            <PayHeader />
            <S.Body>
                <S.BtnWrapper>
                    {/* {sizeList} */}
                    {/* {sizeList.map((item, index) => item.size)} */}
                        {
                            size.map((item, index) => {
                                return (<SizeBtn key={index} size={item} location={location} onClick={onClick} isBtnClick={isBtnClick}/>)
                            })
                        }
                </S.BtnWrapper>
            </S.Body>
            {isBtnClick &&
                <S.BuyBtnWrapper>
                    <B.BuyBtn onClick={onNavigate} isBtnClick={isBtnClick}>{location.pathname === "/buy" ? "구매" : "판매"}계속</B.BuyBtn>
                </S.BuyBtnWrapper>}
        </S.Container>

    );
};

export default SizePage;