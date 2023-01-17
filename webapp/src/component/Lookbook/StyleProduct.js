import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as M from '../Products/style';
import * as S from './style';

const StyleProduct = (props) => {

    //태그상품뿌리기
    const [productList,setProductList] = useState([]);
   
    useEffect(()=>{
        {
        props.productSeq &&

        axios.get(`http://localhost:8080/lookbook/styleProductSearch?seq=${props.productSeq}`)
        .then(
            //res=>console.log(res.data))
            res => setProductList(res.data))
        .catch(error => console.log(error))
        }

    },[])


    return (

        <div>

            {
                        <S.ProductItem >
                           
                            <Link to={`/products/${productList.seq}`}>
                            
                                <M.ItemInner>
                                    <div className='thumb_box'>
                                        <M.Product>
                                            <M.PictureBrandProductImg>
                                                <S.PictureBrandProductImg src={`/resellList/${productList.imgName}`} />
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
                        </S.ProductItem>

            } 
        
        </div>
    );
};

export default StyleProduct;