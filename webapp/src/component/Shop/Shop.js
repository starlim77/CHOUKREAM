import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as Se from './SearchStyle';
import data from './content/TrendData';
import filterData from './content/FilterData';
import Content from './content/Content';
import Banner from './banner/Banner';
import axios from 'axios';



const Shop = () => {
    const [dummy, setDummy] = useState([]);
    const [dummy2, setDummy2] = useState([]);
    const [dummyFilter, setDummyFilter] = useState([]);
    const [sortCheck, setSortCheck] = useState(false);

    

    useEffect(() => {
        axios
            //.get('http://localhost:8080/shop/getProductList')
            .get('http://localhost:8080/shop/favourSort')
            .then(res => {setDummy(res.data); setDummy2(res.data)})
            //.then(res => console.log(JSON.stringify(res.data)))
            .catch(error => console.log(error));
    }, []);
    // console.log(dummyOriginal)
    const [tag, setTag] = useState('');
    const [tagLive, setTagLive] = useState(false);
    
    useEffect(() => {
        if (tag !== '') {
            // console.log(dummy)
            setDummyFilter(dummy.filter(item => item.tag === tag));
            setTagLive(true);
            // console.log('tag 태그 ' + tag)
            // console.log('태그 라이브1 ' + tagLive)
            // console.log('더미더미 ' + dummy)
        } else {
            setTagLive(false);
            // console.log('태그 라이브2 ' + tagLive);
        }
    }, [tag]);
    
    const onTag = text => {
        // console.log('온태그 ' + text)
        // 신발이면 신발 
        setTag(text);
    };
    const tagReset = () => {
        setTag('');
        setTagLive(false);
    };
    // console.log(JSON.stringify(dummy));
    
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        // 한타이밍 늦게 반응함
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Se.Container onClick={() => (modalOpen ? closeModal() : null)}>
                {/* Search */}
                <Se.SearchTop>
                    <Se.TopBox>
                        <Se.SearchTitle>
                            <Se.TitleTxt>SHOP</Se.TitleTxt>
                        </Se.SearchTitle>
                        <Se.QuickFilter>
                            <Se.QuickFilterBox>
                                <Se.BtnQuickFilter
                                    href="#"
                                    ariaLabel="필터선택여부"
                                >
                                    <FontAwesomeIcon icon={faBars} />
                                </Se.BtnQuickFilter>
                            </Se.QuickFilterBox>
                            <Se.QuickFilterItems>
                                <Se.BtnQuickFilter
                                    href="#"
                                    ariaLabel="필터선택여부"
                                >
                                    럭셔리
                                </Se.BtnQuickFilter>
                                <Se.DividerQuickFilter></Se.DividerQuickFilter>
                                {filterData.map(item => (
                                    <Se.BtnQuickFilter
                                        key={item.id}
                                        href="#"
                                        ariaLabel="필터선택여부"
                                        id={item.id}
                                    >
                                        {item.title}
                                    </Se.BtnQuickFilter>
                                ))}
                            </Se.QuickFilterItems>
                        </Se.QuickFilter>
                    </Se.TopBox>
                </Se.SearchTop>
                <Se.SearchTrendContainer>
                    <Se.BrandList>
                        <Se.BrandItem
                            onClick={tagReset}
                        >
                            <Se.BrandBox>
                                <Se.BrandImg
                                    src='../ShopImage/ALL.png'
                                ></Se.BrandImg>
                                <Se.BrandName>전체</Se.BrandName>
                            </Se.BrandBox>
                        </Se.BrandItem>
                        {data.map(item => (
                            <Se.BrandItem
                                key={item.id}
                                onClick={e => onTag(item.text)}
                            >
                                <Se.BrandBox>
                                    <Se.BrandImg
                                        alt={item.text}
                                        src={item.img}
                                    ></Se.BrandImg>
                                    <Se.BrandName>{item.text}</Se.BrandName>
                                </Se.BrandBox>
                            </Se.BrandItem>
                        ))}
                    </Se.BrandList>
                </Se.SearchTrendContainer>
                {/* Banner */}
                <Banner />

                <Content
                    dummy={dummy}
                    setDummy={setDummy}
                    dummy2={dummy2}
                    dummyFilter={dummyFilter}
                    tagLive={tagLive}
                    sortCheck={sortCheck}
                    setSortCheck={setSortCheck}
                    modalOpen={modalOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            </Se.Container>
        </>
    );
};

export default Shop;
