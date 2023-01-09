import React, { useEffect, useMemo, useState } from 'react';
import PayHeader from './PayHeader';
import * as S from './styles/SizePageStyle';
import * as B from './styles/TermStyle'
import SizeBtn from './SizeBtn';
import ProductData from "./ProductData"
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const SizePage = () => {
    const [sizeList, setSizeList] = useState([])
    const [size, setSize] = useState([])
    const [isBtnClick, setIsBtnClick] = useState(false)
    const [selectSize, setSelectSize] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    const url = location.pathname
    const seq = searchParams.get("seq")

    useEffect(() => {
        url === "/buy" ?

        axios.get(`http://localhost:8080/getProductSize?seq=${seq}`)
             .then(res => (setSizeList(res.data)))
             .catch(error => console.log(error))

        : 
        axios.get(`http://localhost:8080/getProductSizeSell?seq=${seq}`)
             .then(res => (setSizeList(res.data)))
             .catch(error => console.log(error))
    }, [])



    useEffect(() => {
        sizeList.map(item => setSize([... size, item.size]))
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
                            sizeList.map((item, index) => {
                                return (<SizeBtn key={index} size={item.size} location={location} price={item.price} onClick={onClick} isBtnClick={isBtnClick}/>)
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