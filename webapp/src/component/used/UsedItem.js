import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {useParams, useSearchParams } from 'react-router-dom';
import * as U from './UsedItemStyle';
const UsedItem = () => {

    // console.log("seq = " + location.seq +" seq = "+ {seq})

    const [searchParams,setSearchParams] = useSearchParams()

    const [form,setForm]=useState({
        imgName:'',
        title:'',
        productName:'',
        size:'',
        price:'',
        likes:'',
        contents:''
    });

    const [likeForm,setLikeForm] = useState({
        seq:'',
        id:'',
        userLike:'',
        registerNo:''
    })

    useEffect(()=>{
        console.log(searchParams.get('seq'));
        axios.get('http://localhost:8080/used/viewItem?seq=' + searchParams.get('seq'))
        .then(res => setForm(res.data))
        .catch(error => console.log(error))


        axios.get('http://localhost:8080/used/itemLike2?seq=' + searchParams.get('seq'))
        .then(respond => setLikeForm(respond.data))
        .catch(error => console.log(error))
        console.log(likeForm);
    },[])

    const [splitImg,setSplitImg] = useState([])

    const [mainImg,setMainImg] = useState('')
    const [subImg1,setSubImg1] = useState('')
    const [subImg2,setSubImg2] = useState('')
    const [subImg3,setSubImg3] = useState('')

    useEffect(()=>{

        if((form.imgName)){

            const img = ((form.imgName).split(','))

            setMainImg(img[0])
        
            img[1] && setSubImg1(img[1])
            img[2] && setSubImg2(img[2])
            img[3] && setSubImg3(img[3])
        }
    },[form])


    // 관심등록

    const [interest,setInterest] = useState()

    const onInterest = () => {
        setLikeForm({...likeForm, userLike:!likeForm.userLike})
        axios.get('http://localhost:8080/used/likeSet',{params:likeForm})
       // axios.get('http://localhost:8080/used/likeSet'+likeForm) 나중에 다시 해보기
        .then()
        .catch()
    }

    return (

        <>
        <U.BaseBody>
            <U.ImgBody>
                <U.MainImg src={`/storage/${mainImg}`}></U.MainImg>
                <U.SmallImg src={`/storage/${subImg1}`}></U.SmallImg>
                <U.SmallImg src={`/storage/${subImg2}`}></U.SmallImg>
                <U.SmallImg src={`/storage/${subImg3}`}></U.SmallImg>
            </U.ImgBody>&emsp;


            <U.BaseDiv>
            <U.TitleWrapper>
                <U.TitleSpan>{form.title}</U.TitleSpan>
            </U.TitleWrapper>
            

            <U.ProductNameWrapper>
                <U.ProdcuctNameSpan>{form.productName}</U.ProdcuctNameSpan>
            </U.ProductNameWrapper>
            <br/>

            <U.SizeWrapper>
                <U.SizeSpan>사이즈 : </U.SizeSpan>
                <U.SizeSpan>{form.size}</U.SizeSpan>
            </U.SizeWrapper>

            <U.PriceWrapper>
                <U.PriceSpan>가격 : </U.PriceSpan>
                <U.PriceSpan>{form.price}</U.PriceSpan>
            </U.PriceWrapper>

            <U.InterestWrapper onClick={onInterest}>
                <U.InterestInput src={likeForm.userLike?'/image/used/blackBookmark.png':'../image/used/bookmark.svg'}/>
                <U.InterestSpan>관심 상품</U.InterestSpan>&nbsp;
                <U.InterestCount>{form.likes}</U.InterestCount>
            </U.InterestWrapper>
            <br/><br/><br></br>

            <U.ItemWrapper>
                <U.ItemSpan>제품설명</U.ItemSpan><br/><br/>
                <U.ItemContents>
                   {form.contents}
                </U.ItemContents>
            </U.ItemWrapper>
            <br></br>


                <U.ChatButton>채팅하기</U.ChatButton>
            </U.BaseDiv>
        </U.BaseBody>
        
        <U.BottomDiv>
            <U.ProfileWrapper>
                <U.ProfileImg></U.ProfileImg>
                <U.ProfileSpan>아이디/거래수/거래이슈</U.ProfileSpan>
            </U.ProfileWrapper>
        </U.BottomDiv>
    </>
         
        

        
    );
};

export default UsedItem;