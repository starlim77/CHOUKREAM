import React, { useEffect, useState } from 'react';
import {
    Container,
} from '@mui/material';
import * as S from './style';
import axios from 'axios';
import TrendingItem from './TrendingItem';
import StyleProduct from './StyleProduct';
import * as M from '../Products/style';
import { Link, useParams } from 'react-router-dom';



const StyleOneProduct = () => {   
   
    const { seq } = useParams();  //주소값 파라미터 seq 가져오기
    //const seq = '6'
    
    const [productList,setProductList] = useState([]);

    const [list, setList] = useState([
        {
            seq: '',
            id: '',
            content: '',
            logtime: '',
            styleFile: '',
            originalFileName: [],
            storedFileName: [],
        },
    ]);


    useEffect(() => {
        axios.get(`http://localhost:8080/lookbook/styleProductSearch?seq=${seq}`)
                .then(
                    //res=>console.log(res.data))
                    res => setProductList(res.data))
                .catch(error => console.log(error))

        axios .get(`http://localhost:8080/lookbook/styleOneProduct?productSeq=${seq}`)
            .then(res => setList(res.data))
            .catch(error => console.log(error));
    }, []);


    const [itemLength,setItemLength] = useState(12) // 처음에 가져올 아이템 갯수

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
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

            setItemLength(itemLength => itemLength + 8)
        }
    };

    return (
        <>
            <S.OneContainer>
                <S.OneItem >
                    <Link to={`/products/${productList.seq}`}>
                    
                        <M.ItemInner>
                            <div className='thumb_box'>
                                <M.Product>
                                    <M.PictureBrandProductImg>
                                        <M.BrandProductImg src={`/resellList/${productList.imgName}`} />
                                    </M.PictureBrandProductImg>
                                </M.Product>
                            </div>
                            <M.ProductItemInfoBox>
                            <div className='info_box'>
                                <div className='brand'>
                                    <M.BrandTextWithOutWish>{productList.brand}</M.BrandTextWithOutWish>
                                </div>
                                <M.BrandProductInfoBoxName>{productList.title}</M.BrandProductInfoBoxName>
                                <M.BrandProductInfoBoxPrice>
                                    <M.BrandProductInfoBoxPriceAmount>
                                        <M.BrandProductInfoBoxPriceAmountNum>{productList.price}</M.BrandProductInfoBoxPriceAmountNum>
                                    </M.BrandProductInfoBoxPriceAmount>
                                    <M.BrandProductInfoBoxPriceDesc>즉시 구매가</M.BrandProductInfoBoxPriceDesc>
                                </M.BrandProductInfoBoxPrice>
                            </div>
                        </M.ProductItemInfoBox>
                        </M.ItemInner>
                    </Link>
                </S.OneItem>
            </S.OneContainer>


            <Container fixed>
                <S.TrGridContainer>
                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                    
                        index % 4 === 0 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength} />
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 1 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength} />
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 2 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 3 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength} />
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                </S.TrGridContainer>
            </Container>
        </>
    );
};

export default StyleOneProduct;