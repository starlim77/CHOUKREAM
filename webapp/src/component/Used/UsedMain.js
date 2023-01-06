import React, { useEffect, useState } from 'react';
import MainItem from './MainItem';
import * as S from './style';
import tagData from './TagItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UsedMain = () => {

    const [data,setData] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:8080/used/getItem')
         .then(res => setData(res.data))
         .catch(error => console.log(error))

    },[])


    // console.log(data[0])

    const [dataFilter,setDataFilter] = useState()

    const [hash,setHash] = useState()

    const navigate = useNavigate()

    const [id,setId] = useState('')
    const [writeBtn,setWriteBtn] = useState(true)


    // useEffect(() => {
    //     axios
    //         .get()
    //         .then(res => setId(res))
    //         .catch(error => console.log(error))

        
    // },[])

    const onItem = (seq) => {
        // console.log(seq)
        navigate(`/Used/usedItem?seq=${seq}`)
    }

    
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
                    
                    data.map(item => <MainItem key={item.seq} data = {item} onItem={onItem} />)
                }
            </S.UsedMain>
            { writeBtn ? <S.WriteBtn src='/image/used/plus.svg' onClick={ onWrite } alt="writeBtn"/> : '' }
        </>
    );
};

export default UsedMain;