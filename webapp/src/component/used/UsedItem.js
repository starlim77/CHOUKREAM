import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {useSearchParams } from 'react-router-dom';
import * as U from './UsedItemStyle';
const UsedItem = () => {

    // console.log("seq = " + location.seq +" seq = "+ {seq})

    const [searchParams,setSearchParams] = useSearchParams()

    const seq = useState(searchParams.get('seq'))

    const [form,setForm]=useState({
        img:[],
        title:'',
        productName:'',
        size:'',
        price:'',
        contents:''
    });


    const{img, title, productName, size, price, contents} = form;


    useEffect(()=>{
        console.log('seq = ' + seq)
        axios.get('http://localhost:8080/used/viewItem?seq=' + searchParams.get('seq'))
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },[])

    return (
        <U.BaseWrapper>
         <U.BaseDiv>
            <U.MainImg></U.MainImg>
            <U.SmallImg></U.SmallImg>
            <U.SmallImg></U.SmallImg>
            <U.SmallImg></U.SmallImg>
            <U.SmallImg></U.SmallImg>
         </U.BaseDiv>&emsp;


         <U.BaseDiv>
            <U.TitleWrapper>
                <U.TitleSpan>Airpods Max Silver팝니다</U.TitleSpan>
            </U.TitleWrapper>
            

            <U.ProductNameWrapper>
                <U.ProdcuctNameSpan>Airpods Max</U.ProdcuctNameSpan>
            </U.ProductNameWrapper>
            <br/>

            <U.SizeWrapper>
                <U.SizeSpan>사이즈 : </U.SizeSpan>
                <U.SizeSpan>One Size</U.SizeSpan>
            </U.SizeWrapper>

            <U.PriceWrapper>
                <U.PriceSpan>가격 : </U.PriceSpan>
                <U.PriceSpan>50000</U.PriceSpan>
            </U.PriceWrapper>

            <U.InterestWrapper>
                <U.InterestInput></U.InterestInput>&nbsp;
                <U.InterestSpan>찜</U.InterestSpan>&nbsp;
                <U.InterestCount>35</U.InterestCount>
            </U.InterestWrapper>
            <br/><br/><br></br>

            <U.ItemWrapper>
                <U.ItemSpan>제품설명</U.ItemSpan><br/><br/>
                <U.ItemDescription>
                    새상품입니다.
                </U.ItemDescription>
            </U.ItemWrapper>
            <br></br>

            <U.ChatButton>채팅하기</U.ChatButton>
         </U.BaseDiv>
        <br/><br/><br/>

         <U.BottomDiv>
            <U.ProfileWrapper>
                <U.ProfileImg></U.ProfileImg>
                <U.ProfileSpan>아이디/거래수/거래이슈</U.ProfileSpan>
            </U.ProfileWrapper>
         </U.BottomDiv>
         <br></br>

        </U.BaseWrapper>
    );
};

export default UsedItem;