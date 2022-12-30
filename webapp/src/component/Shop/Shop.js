import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as Ba from './BannerStyle';
import * as Se from './SearchStyle';
import data from './TrendData';
import filterData from './FilterData';
import Content from './Content';
import axios from 'axios';

const Shop = () => {
    const [dummy, setDummy] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/shop/getProductList')
            .then(res => setDummy(res.data))
            .catch(error => console.log(error));
    }, []);

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
                        {data.map(item => (
                            <Se.BrandItem key={item.id}>
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
                <Ba.Banner>
                    <Ba.BannerBox>
                        <Ba.BannerSlide>
                            <Ba.SlickList>
                                <Ba.SlickTrack>
                                    <Ba.SlickSlide
                                        tabIndex="-1"
                                        aria-hidden="false"
                                    >
                                        <div>
                                            <Ba.DetailBanner tabIndex="-1">
                                                <Ba.BannerLink href="https://kream.co.kr/search?keyword=나이키 오프화이트 신상">
                                                    <Ba.BannerImg
                                                        alt="배너"
                                                        src="../ShopImage/나이키 오프 화이트 신상.jpg"
                                                    />
                                                    <Ba.BannerCountBox>
                                                        <Ba.SlickPrev>
                                                            Previous
                                                        </Ba.SlickPrev>
                                                        <Ba.BannerCount>
                                                            <Ba.Current>
                                                                1
                                                            </Ba.Current>
                                                            /
                                                            <Ba.Total>
                                                                10
                                                            </Ba.Total>
                                                        </Ba.BannerCount>
                                                        <Ba.SlickNext>
                                                            Next
                                                        </Ba.SlickNext>
                                                    </Ba.BannerCountBox>
                                                </Ba.BannerLink>
                                            </Ba.DetailBanner>
                                        </div>
                                    </Ba.SlickSlide>
                                </Ba.SlickTrack>
                            </Ba.SlickList>
                        </Ba.BannerSlide>
                    </Ba.BannerBox>
                </Ba.Banner>
                <Content
                    dummy={dummy}
                    setDummy={setDummy}
                    modalOpen={modalOpen}
                    openModal={openModal}
                    closeModal={closeModal}
                />
            </Se.Container>
        </>
    );
};

export default Shop;
