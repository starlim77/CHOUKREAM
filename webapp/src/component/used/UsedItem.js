import React, { useEffect, useState} from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import * as U from './UsedItemStyle';
const UsedItem = ({seq}) => {

    const location = useLocation()
    // console.log("seq = " + location.seq +" seq = "+ {seq})

    const [searchParams,setSearchParams] = useSearchParams()
    console.log(searchParams.get('seq'))

    const [form,setForm]=useState({
        img:[],
        title:'',
        productName:'',
        size:'',
        price:'',
        productDescription:''
    });
    const{img, title, productName, size, price, description} = form;
    useEffect(()=>{},[])

    return (
        <>
        <U.BaseBody>
            <U.ImgBody>
                <U.MainImg></U.MainImg>
                <U.SmallImg></U.SmallImg>
                <U.SmallImg></U.SmallImg>
                <U.SmallImg></U.SmallImg>
            </U.ImgBody>&emsp;


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
                    <U.ItemContents>
                    새상품입니다.<br></br>
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