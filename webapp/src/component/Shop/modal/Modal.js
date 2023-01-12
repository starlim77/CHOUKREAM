import React, {} from 'react';
import * as Mo from './ModalStyle';
import modalData from './ModalData';
import axios from 'axios';

const Modal = props => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { setDummy, open, close, setPictures } = props;
    
    const favourSort = () => {
        console.log('인기 정렬')
    }
    const BuySort = () => {
        console.log('구매 정렬');
    }
    const SellSort = () => {
        console.log('판매 정렬');
    }
    
    const sortType = (sort) => {
        if(sort==="favourSort"){
            axios
                .get('http://localhost:8080/shop/sortGetProductList1')
                // .then(res => console.log(JSON.stringify(res.data)))
                .then(res => setDummy(res.data))
                .catch(error => console.log(error));
                setPictures(8); 
            
        }
        else if (sort === 'BuySort') {
            axios
                .get('http://localhost:8080/shop/sortGetProductList2')
               // .then(res => console.log(JSON.stringify(res.data)))
                .then(res => setDummy(res.data))
                .catch(error => console.log(error));
                setPictures(8); 
            
        }
        else if (sort === 'SellSort') {
            axios
                .get('http://localhost:8080/shop/sortGetProductList3')
               // .then(res => console.log(JSON.stringify(res.data)))
                .then(res => setDummy(res.data))
                .catch(error => console.log(error));
                setPictures(8); 
            
        }
        else if(sort==="releaseDateSort"){
            axios
                .get('http://localhost:8080/shop/sortGetProductList')
               // .then(res => console.log(JSON.stringify(res.data)))
                .then(res => setDummy(res.data))
                .catch(error => console.log(error));
                setPictures(8);    
        }
        
    };
    
    return (
        <div>
            {open ? (
                <Mo.SortingList>
                    <Mo.SortingItem>
                        <Mo.SortingLink>
                            <Mo.SortingDesc onClick={favourSort}>
                                <Mo.MainDesc>인기순</Mo.MainDesc>
                                <Mo.ModalSectionHeaderBtn onClick={close}>
                                    &times;
                                </Mo.ModalSectionHeaderBtn>
                                <Mo.SubDesc>
                                    많이 판매된 순서대로 정렬합니다.
                                </Mo.SubDesc>
                            </Mo.SortingDesc>
                        </Mo.SortingLink>
                    </Mo.SortingItem>
                    {modalData.map(item => (
                        <Mo.SortingItem key={item.id}>
                            <Mo.SortingLink>
                                {/* Desc부터 map 돌리기*/}
                                
                                <Mo.SortingDesc onClick=
                                    {()=>sortType(item.sort)  }>
                                    <Mo.MainDesc>{item.maindesc}</Mo.MainDesc>
                                    <Mo.SubDesc>{item.subdesc}</Mo.SubDesc>
                                </Mo.SortingDesc>
                            </Mo.SortingLink>
                        </Mo.SortingItem>
                    ))}
                </Mo.SortingList>
            ) : null}
        </div>
    );
};

export default Modal;
