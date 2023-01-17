import React, {} from 'react';
import * as Mo from './ModalStyle';
import modalData from './ModalData';
import axios from 'axios';

const Modal = props => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { dummy, setDummy, sortCheck, setSortCheck, sortDummy, setSortDummy, open, close, setPictures } = props;
    
    
    const sortType = (sort) => {
        if(sort==="favourSort"){
            axios
                .get('http://localhost:8080/shop/favourSort')
                //.then(res => console.log(res.data))
                //.then(res => console.log(res.data[0].img_name))
                //.then(res => console.log(res.data[0]))
                .then(res => setDummy(res.data))
                //.then(console.log('셋더미성공'))
                // .then(console.log(dummy))

                // 더미가 안바껴서 dummy 를 찍으면 undefinded가 나온다
                .catch(error => console.log(error));
                setPictures(8);
                setSortCheck(false);
        }
        
        
        else if (sort === 'BuySort') {
            axios
                .get('http://localhost:8080/shop/BuySort')
                // .then(res => console.log(JSON.stringify(res.data)))
                .then(res => 
                        {
                        var resCopy = res.data
                        var sortCopy = []
                        resCopy.map(item => item.min_price !== '-' && sortCopy.push(item));
                        console.log(sortCopy)
                        setDummy(sortCopy)
                        }
                    // setDummy(dummy.filter(item => item.min_price !== '-')),
                )
                .catch(error => console.log(error));
                setPictures(8); 
                setSortCheck(false);
        }
        else if (sort === 'SellSort') {
            axios
                .get('http://localhost:8080/shop/SellSort')
                //.then(res => console.log(JSON.stringify(res.data)))
                .then(res => 
                        {
                        var resCopy = res.data
                        var sortCopy = []
                        resCopy.map(item => item.max_price !== '-' && sortCopy.push(item));
                        console.log(sortCopy)
                        setDummy(sortCopy)
                        }
                    // setDummy(dummy.filter(item => item.min_price !== '-')),
                )
                .catch(error => console.log(error));
                setPictures(8);
                setSortCheck(true);
        }
        else if(sort==="releaseDateSort"){
            axios
                .get('http://localhost:8080/shop/releaseDateSort')
                // .then(res => console.log(JSON.stringify(res.data)))
                .then(res => setDummy(res.data))
                .catch(error => console.log(error));
                setPictures(8);
                setSortCheck(false);    
        }
    };
    
    return (
        <div>
            {/* {console.log(dummy)} */}
            {open ? (
                <Mo.SortingList>
                    {/* <Mo.SortingItem>
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
                    </Mo.SortingItem> */}
                    {modalData.map(item => (
                        <Mo.SortingItem key={item.id}>
                            <Mo.SortingLink>
                                {/* Desc부터 map 돌리기*/}
                                <Mo.SortingDesc onClick=
                                    { ()=>sortType(item.sort)  }>
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
