import { faCircleXmark, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import axios from 'axios';
import SearchContents from './SearchContents';
import SearchContents2 from './SearchContents2';
import SearchContents3 from './SearchContents3';

const SearchForm2 = () => {

    const[isOpen, setIsOpen] = useState(false);
    
    const onClose = () => {
        setIsOpen(!isOpen);
    };
    const mounted=useRef(false);
    const opened=useRef(false);

    const[productData,setProductData]=useState();
    const[newProductData,setNewProductData]=useState();
    const[usedData,setUsedData]=useState();

    const[productDataTemp,setProductDataTemp]=useState();
    const[newProductDataTemp,setNewProductDataTemp]=useState();
    const[usedDataTemp,setUsedDataTemp]=useState();

    useEffect(()=>{
        if(!mounted.current){
            mounted.current=true;
            axios.get("http://localhost:8080/shop/getProductList")
            .then(res=>{setProductData(res.data)
                        setProductDataTemp(res.data)})
            .catch(err=>console.log(err))
            axios.get("http://localhost:8080/shop/getNewProductList")
                .then(res=>{setNewProductData(res.data)
                            setNewProductDataTemp(res.data)})
                .catch(err=>console.log(err))
            axios.get("http://localhost:8080/used/getItem")
                .then(res=>{setUsedData(res.data)
                            setUsedDataTemp(res.data)})
                .catch(err=>console.log(err))
        }
    },[isOpen])
    
    const[searchTitle,setSearchTitle]=useState('');
    const onSearchTitle=(e)=>{
        setSearchTitle(e.target.value);
    }
    const mounted2=useRef(false);
    useEffect(()=>{
        if(!mounted2.current){
            mounted2.current=true;
        }else{
        
            if(!searchTitle){
                setProductDataTemp(productData);
                setNewProductDataTemp(newProductData);
                setUsedDataTemp(usedData);
            }else{
                var productDataTemp1= productData.filter(item=>item.title.toLowerCase().indexOf(searchTitle)!==-1);
                var newProductDataTemp1= newProductData.filter(item=>item.title.toLowerCase().indexOf(searchTitle)!==-1);
                var usedDataTemp1= usedData.filter(item=>item.title.toLowerCase().indexOf(searchTitle)!==-1);
             
                setProductDataTemp(productDataTemp1);
                setNewProductDataTemp(newProductDataTemp1);
                setUsedDataTemp(usedDataTemp1);
            }
        }
    },[searchTitle])
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
                                <S.searchinput placeholder="제품명을 입력하세요" value={searchTitle} onChange={e=>onSearchTitle(e)}>
                                </S.searchinput>
                                <S.searchbutton>
                                    <FontAwesomeIcon icon={faX} size='1x' />
                                </S.searchbutton>
                            </S.search>
                            <br></br>
                            <br></br>
                            <S.Searched>
                                <S.CategoryTitle>Resell</S.CategoryTitle><br/>
                                <ul>
                                    { 
                                        productDataTemp.map((items,key)=><SearchContents key={key} items={items} onClose={onClose}></SearchContents>)
                                    }
                                </ul>
                            </S.Searched>
                            <S.Searched>
                                <S.CategoryTitle>New</S.CategoryTitle><br/>
                                <ul>
                                    { 
                                        newProductDataTemp.map((items,key)=><SearchContents2 key={key} items={items} onClose={onClose}></SearchContents2>)
                                    }
                                </ul>
                            </S.Searched>
                            <S.Searched>
                                <S.CategoryTitle>Used</S.CategoryTitle><br/>
                                <ul>
                                    { 
                                        usedDataTemp.map((items,key)=><SearchContents3 key={key} items={items} onClose={onClose}></SearchContents3>)
                                    }
                                </ul>
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