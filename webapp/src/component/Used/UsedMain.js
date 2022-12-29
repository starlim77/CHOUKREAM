import React, { useEffect, useState } from 'react';
import MainItem from './MainItem';
import * as S from './style';
import tagData from './TagItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// 임시
import data from './imsiData'






const UsedMain = () => {

    axios.get('')
         .then(res => setData(res))
         .catch(error => console.log(error))


    const [data1,setData] = useState(data)
    const [dataFilter,setDataFilter] = useState(data)

    const [hash,setHash] = useState()

    const navigate = useNavigate()

    const [id,setId] = useState('')
    const [writeBtn,SetWriteBtn] = useState(true)


    // useEffect(() => {
    //     axios
    //         .get()
    //         .then(res => setId(res))
    //         .catch(error => console.log(error))

        
    // },[])

    
    const onWrite = () => {
            navigate('/Used/usedWrite')
    }

    return (

        <>
            <S.H2>중고 상품</S.H2>
                
            <S.TagImg>
                    {
                        tagData.map(item => <S.TagImgLi key={item.id}><S.TagImgItem src={item.img}/><S.TagImgSpan>{item.title}</S.TagImgSpan></S.TagImgLi>)
                    }
                   
            </S.TagImg>
            <S.SearchHashTag>해쉬태그 검색 기능</S.SearchHashTag>

            <S.UsedMain>
                {
                    dataFilter.map(item => <MainItem key={item.seq} data = {item}/>)
                }
                {/* <MainItem /> */}
            </S.UsedMain>
            { writeBtn ? <S.WriteBtn src='../image/used/plus.svg' onClick={ onWrite }/> : '' }
        </>
    );
};

export default UsedMain;