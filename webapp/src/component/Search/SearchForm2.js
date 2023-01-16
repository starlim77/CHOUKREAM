import { faCircleXmark, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import axios from 'axios';
import SearchContents from './SearchContents';

const SearchForm2 = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const onClose = () => {
        setIsOpen(!isOpen);
    };
    const mounted=useRef(false);
    const opened=useRef(false);

    const[ProductData,setProductData]=useState();
    const[newProductData,setNewProductData]=useState();
    const[usedData,setUsedData]=useState();

    useEffect(()=>{
        if(!mounted.current){
            mounted.current=true;
            axios.get("http://localhost:8080/shop/getProductList")
            .then(res=>setProductData(res.data))
            .catch(err=>console.log(err))
            axios.get("http://localhost:8080/shop/getNewProductList")
                .then(res=>setNewProductData(res.data))
                .catch(err=>console.log(err))
            axios.get("http://localhost:8080/used/getItem")
                .then(res=>setUsedData(res.data))
                .catch(err=>console.log(err))
        }
        console.log(ProductData) 
    },[isOpen])
    return (
        <>
         <div onClick={onClose}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        {isOpen&&
        <S.SearchWrapper>
            <S.bg > 
                <S.closex style={{cursor: 'pointer'}} onClick={onClose}>
                <FontAwesomeIcon icon={faX} size='1x' />
                </S.closex>
            </S.bg>
            <S.popup> 
                <S.searchContainer>
                    <S.searchWrap>
                        <S.searchArea>
                            <S.search>
                                <S.searchinput placeholder="제품명을 입력하세요"></S.searchinput>
                                <S.searchbutton>
                                    <FontAwesomeIcon icon={faX} size='1x' />
                                </S.searchbutton>
                            </S.search>
                            <br></br>
                            <br></br>
                            <S.Searched>
                                <S.CategoryTitle>New</S.CategoryTitle>
                                <ul>
                                    { 
                                        ProductData.filter((product,index)=>index<5)
                                                    .map((items,key)=><SearchContents key={key} items={items}></SearchContents>)
                                    }
                                </ul>
                            </S.Searched>
                            <S.Searched>
                                <S.CategoryTitle>Resell</S.CategoryTitle>
                            </S.Searched>
                            <S.Searched>
                                <S.CategoryTitle>Used</S.CategoryTitle>
                            </S.Searched>
                        </S.searchArea>
                    </S.searchWrap>
                </S.searchContainer>


                <S.searchContent>
                

                </S.searchContent>

            </S.popup>
        </S.SearchWrapper>
        }    
        </>
    );
};

export default SearchForm2;