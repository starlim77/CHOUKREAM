import React, { useEffect, useState } from 'react';
import MainItem from './MainItem';
import * as S from './style';
import tagData from './TagItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UsedMain = () => {

    const [data,setData] = useState([])
    const [dataFilter,setDataFilter] = useState()   


    useEffect(()=> {
        axios.get('http://localhost:8080/used/getItem')
         .then(res => setData(res.data))
         .then(setDataFilter(data))
         .catch(error => console.log(error))
    },[])


    // console.log(data[0])

    

    const [hash,setHash] = useState()

    const navigate = useNavigate()

    const [id,setId] = useState('')
    const [writeBtn,setWriteBtn] = useState(true)

    const[tag,setTag] = useState()

    // useEffect(() => {
        
    // },[])

    const onTag = (title) => {
        alert(title)
        console.log(dataFilter)
    }

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
                    tagData.map(item => <S.TagImgLi key={item.id} onClick={ e => onTag(item.title)}><S.TagImgItem src={item.img}/><S.TagImgSpan>{item.title}</S.TagImgSpan></S.TagImgLi>)
                }
                   
            </S.TagImg>
            <S.SearchHashTag>해쉬태그 검색 기능</S.SearchHashTag>

            <S.UsedMain>
                {
                    //데이터를 오래된 순으로 뽑아오기 때문에 역순으로 배열 출력
                    //https://velog.io/@dregonc/map%EC%9D%84-%EC%97%AD%EC%88%9C%EC%9C%BC%EB%A1%9C
                    data.slice(0).reverse().map(item => <MainItem key={item.seq} data = {item} onItem={onItem} />)
                }
            </S.UsedMain>
            { writeBtn ? <S.WriteBtn src='../image/used/plus.svg' onClick={ onWrite }/> : '' }
        </>
    );
};

export default UsedMain;