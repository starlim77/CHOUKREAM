import React, { useEffect, useState } from 'react';
import MainItem from './MainItem';
import * as S from './style';
import tagData from './TagItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UsedMain = () => {

    const [data,setData] = useState([])
    const [dataFilter,setDataFilter] = useState([])   

    

    useEffect(()=> {
        axios.get('http://localhost:8080/used/getItem')
         .then(res => setData(res.data))
         .catch(error => console.log(error))
    },[])


    // console.log(data[0])

    

    const [hash,setHash] = useState()

    const navigate = useNavigate()

    const [id,setId] = useState('')
    const [writeBtn,setWriteBtn] = useState(true)


    const[tag,setTag] = useState('')
    const[tagLive,setTagLive] = useState(false)
    

    const onTag = (title) => {
        setTag(title)
        setItemLength(8)
    }

    useEffect(() => {

        if(tag !== ''){
        setDataFilter( data.filter(item => (item.kind === tag)) )
        setTagLive(true)
        }else{
         setTagLive(false)   
        }

    },[tag])



    const onItem = (seq) => {
        // console.log(seq)
        navigate(`/Used/usedItem?seq=${seq}`)
    }

    const [itemLength,setItemLength] = useState(8)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            // 여기서 return 은 무슨 뜻 ?? 다른페이지로 이동하거나 할때 발동됨
            // console.log( addEventListener 추가한 스크롤 이벤트 종료 시키기 'end') //처음에 1번나오고 이후에 나옴 
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        var heightTop = window.scrollY; // 화면의 Y축의 상단값

        const heightBottom = window.scrollY + window.innerHeight; // 화면의 Y축의 하단값
        const innerHeight = window.innerHeight;

        const scrollHeight = document.body.scrollHeight;
        // console.log('scrollHeight 스크롤 전체길이 ' + scrollHeight); // 불변

        if (heightBottom >= scrollHeight - 80) {
            // console.log( '하단높이 '+ heightBottom + ' , ' + (scrollHeight - 100));
            setItemLength(itemLength => itemLength + 4)
        }
    };


    const onWrite = () => {
            navigate('/Used/usedWrite');
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
                    tagLive ? 
                    
                    dataFilter.slice(0).reverse().map((item,index) => index >= itemLength ? '':
                         <MainItem key={item.seq} data = {item} onItem={onItem} index={index} itemLength={itemLength}/>)
                    
                    : 
                    
                    data.slice(0).reverse().map((item,index) => index >= itemLength ? '':
                        <MainItem key={item.seq} data = {item} onItem={onItem} index={index} itemLength={itemLength}/>)

                }


                {/* {
                    data.slice(0).reverse().map((item,index) => index >= itemLength ? '':
                         <MainItem key={item.seq} data = {item} onItem={onItem} index={index} itemLength={itemLength}/>)
                } */}
            </S.UsedMain>
            { writeBtn ? <S.WriteBtn src='../image/used/plus.svg' onClick={ onWrite }/> : '' }
        </>
    );
};

export default UsedMain;