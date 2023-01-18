import { ResponsiveLine } from '@nivo/line';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ModalBasic from './ModalBasic';
import * as S from './style';
import GlobalStyle from './GlobalStyle';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import CompletedOrderTable from './table/CompletedOrderTable';
import SellBidsTable from './table/SellBidsTable';
import BuyBidsTable from './table/BuyBidsTable';
import EmptyTable from './table/EmptyTable';
import Graph from './Graph';
import * as U from '../Used/UsedItemStyle';
import ListModal from './ListModal';
import jwt_decode from 'jwt-decode';
import { Container } from '@mui/material';
import * as A from '../Lookbook/style';
import TrendingItem from '../Lookbook/TrendingItem';

const Products = () => {
    const [listOpen, setListOpen] = useState(false);

    const [count, setCount] = useState('');

    const date = new Date();

    const shopKind = 'resell';

    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    const onOpen = e => {
        if (e.target.name == 1) {
            setOpen1(true);
            setOpen2(false);
            setOpen3(false);
            setOpen4(false);
            setOpen5(false);
        } else if (e.target.name == 2) {
            setOpen2(true);
            setOpen1(false);
            setOpen3(false);
            setOpen4(false);
            setOpen5(false);
        } else if (e.target.name == 3) {
            setOpen3(true);
            setOpen1(false);
            setOpen2(false);
            setOpen4(false);
            setOpen5(false);
        } else if (e.target.name == 4) {
            setOpen4(true);
            setOpen1(false);
            setOpen2(false);
            setOpen3(false);
            setOpen5(false);
        } else if (e.target.name == 5) {
            setOpen5(true);
            setOpen1(false);
            setOpen2(false);
            setOpen3(false);
            setOpen4(false);
        }
    };

    const [open6, setOpen6] = useState(true);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);

    const onOpen2 = e => {
        if (e.target.name == 6) {
            setOpen6(true);
            setOpen7(false);
            setOpen8(false);
        } else if (e.target.name == 7) {
            setOpen7(true);
            setOpen6(false);
            setOpen8(false);
        } else if (e.target.name == 8) {
            setOpen8(true);
            setOpen6(false);
            setOpen7(false);
        }
    };

    const { seq } = useParams();

    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    const [form, setForm] = useState({});

    const [completedOrderForm, setCompletedOrderForm] = useState([
        {
            price: '-',
        },
    ]);

    const [sellBidsListForm, setSellBidsListForm] = useState([
        {
            price: '-',
        },
    ]);
    const [buyBidsListForm, setBuyBidsListForm] = useState([
        {
            price: '-',
        },
    ]);

    const [likeForm, setLikeForm] = useState({
        seq: '',
        id: '',
        userLike: false,
        registerNo: '',
    });

    const [brandListForm, setBrandListForm] = useState([
        {
            seq: '',
            img_name: '',
            price: '',
            title: '',
            brand: '',
        },
    ]);

    const [sizeForm, setSizeForm] = useState([{}]);

    const [size, setSize] = useState('모든 사이즈');

    const [brand, setBrand] = useState('');

    const [openLayer, setOpenLayer] = useState(true);

    const [isOneSize, setIsOneSize] = useState(true);

    const [brandStyleList, setBrandStyleList] = useState([]);

    const [dropdown, setDropdown] = useState(true);
    const OpenDrop = () => {
        setDropdown(!dropdown);
        console.log(brandListForm);
    };
    const [dropdown1, setDropdown1] = useState(true);
    const OpenDrop1 = () => {
        setDropdown1(!dropdown1);
    };
    const [dropdown2, setDropdown2] = useState(true);
    const OpenDrop2 = () => {
        setDropdown2(!dropdown2);
    };

    const token = localStorage.getItem('accessToken');
    const [sub, setSub] = useState('');

    useEffect(() => {
        if (sub !== '') {
            axios
                .get('http://localhost:8080/getMemberInfo', {
                    params: { seq: sub },
                })
                .then(res => {
                    //console.log(JSON.stringify(res.data));
                    setId(res.data.email);

                    //console.log('id = ' + id);
                })
                .catch(err => console.log(err));
        }
    }, [sub]);

    const [id, setId] = useState('ROLE_GUEST');

    useEffect(() => {
        axios
            .get(`http://localhost:8080/getProduct?seq=${seq}`)
            .then(res => res.data !== null && setForm(res.data))
            .catch(error => console.log(error));

        axios
            .get(`http://localhost:8080/getCompletedOrderList?seq=${seq}`)
            .then(
                res => res.data.length !== 0 && setCompletedOrderForm(res.data),
            )
            .catch(error => console.log(error));

        axios
            .get(`http://localhost:8080/getProductSize?seq=${seq}`)
            .then(res =>
                res.data.length === 1
                    ? setIsOneSize(true)
                    : setIsOneSize(false),
            )
            .catch(error => console.log(error));

        axios
            .get(`http://localhost:8080/getProductSize?seq=${seq}`)
            .then(res => res.data !== null && setSizeForm(res.data))
            .catch(error => console.log(error));

        axios
            .get(`http://localhost:8080/getSellBidsList?seq=${seq}`)
            .then(res => res.data.length !== 0 && setSellBidsListForm(res.data))
            .catch(error => console.log(error));

        axios
            .get(`http://localhost:8080/getBuyBidsList?seq=${seq}`)
            .then(res => res.data.length !== 0 && setBuyBidsListForm(res.data))
            .catch(error => console.log(error));

        axios
            .get(
                'http://localhost:8080/likeCount?seq=' +
                    seq +
                    '&shopKind=' +
                    shopKind,
            )
            .then(res => setCount(res.data))
            .catch(err => console.log(err));

        axios
            .get(`http://localhost:8080/getBrandStyleList?seq=${seq}`)
            .then(res => setBrandStyleList(res.data))
            .catch(error => console.log(error));

        if (token !== null) {
            const tokenJson = jwt_decode(token);
            setSub(tokenJson['sub']);
        }
    }, []);

    useEffect(() => {
        axios
            .get(
                'http://localhost:8080/used/itemLike?seq=' +
                    seq +
                    '&id=' +
                    id +
                    '&shopKind=' +
                    shopKind,
            )
            .then(res => (res.data ? setLikeForm(res.data) : ''))
            .catch(error => console.log(error));
    }, [id]);

    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/getBrandList?seq=${seq}&brand=${form.brand}`,
            )
            .then(res => res.data.length !== 0 && setBrandListForm(res.data))
            .catch(error => console.log(error));
    }, [form]);

    const getSize = (seq, size) => {
        setSize(size);

        axios
            .get(
                `http://localhost:8080/getSellBidsListBySize?size=${size}&seq=${seq}`,
            )
            .then(res =>
                res.data.length !== 0
                    ? setSellBidsListForm(res.data)
                    : setSellBidsListForm([{ price: '-' }]),
            )
            .catch(error => console.log(error));

        axios
            .get(
                `http://localhost:8080/getBuyBidsListBySize?size=${size}&seq=${seq}`,
            )
            .then(res =>
                res.data.length !== 0
                    ? setBuyBidsListForm(res.data)
                    : setBuyBidsListForm([{ price: '-' }]),
            )
            .catch(error => console.log(error));

        axios
            .get(
                `http://localhost:8080/getCompletedOrderListBySize?size=${size}&seq=${seq}`,
            )
            .then(res =>
                res.data.length !== 0
                    ? setCompletedOrderForm(res.data)
                    : setCompletedOrderForm([{ price: '-' }]),
            )
            .catch(error => console.log(error));

        setModalOpen(false);
        setListOpen(false);
    };

    const getAll = seq => {
        setSize('모든 사이즈');

        axios
            .get(`http://localhost:8080/getSellBidsList?seq=${seq}`)
            .then(res =>
                res.data.length !== 0
                    ? setSellBidsListForm(res.data)
                    : setSellBidsListForm([{ price: '-' }]),
            )
            .catch(error => console.log(error));

        axios
            .get(`http://localhost:8080/getBuyBidsList?seq=${seq}`)
            .then(res =>
                res.data.length !== 0
                    ? setBuyBidsListForm(res.data)
                    : setBuyBidsListForm([{ price: '-' }]),
            )
            .catch(error => console.log(error));

        axios
            .get(`http://localhost:8080/getCompletedOrderList?seq=${seq}`)
            .then(res =>
                res.data.length !== 0
                    ? setCompletedOrderForm(res.data)
                    : setCompletedOrderForm([{ price: '-' }]),
            )
            .catch(error => console.log(error));

        setModalOpen(false);
        setListOpen(false);
    };

    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장 
    const [ScrollActive, setScrollActive] = useState(true); 
    const handleScroll = () => { 
        if(ScrollY < 850) {
            setScrollY(window.pageYOffset);
            if (!ScrollActive) setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            if (ScrollActive) setScrollActive(false);
        }
    };

    const [ScrollActive2, setScrollActive2] = useState(true);
    const handleScroll2 = () => {
        if (ScrollY < 400) {
            setScrollY(window.pageYOffset);
            //if(!ScrollActive2)
            setScrollActive2(true);
        } else {
            setScrollY(window.pageYOffset);
            // if(ScrollActive2)
            setScrollActive2(false);
        }
    };
    useEffect(() => {
        const scrollListener = () => {
            window.addEventListener('scroll', handleScroll);
        }; //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }; //  window 에서 스크롤을 감시를 종료
    });

    useEffect(() => {
        const scrollListener = () => {
            window.addEventListener('scroll', handleScroll2);
        }; //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => {
            window.removeEventListener('scroll', handleScroll2);
        }; //  window 에서 스크롤을 감시를 종료
    });

    const buyNavigate = () => {
        navigate(`/buy?productNum=${seq}`);
    };

    const sellNavigate = () => {
        navigate(`/sell?productNum=${seq}`);
    };

    const brandNavigate = seq => {
        navigate(`/products/${seq}`);
        window.location.reload();
    };

    const onInterest = () => {
        if (id !== 'ROLE_GUEST') {
            setLikeForm({ ...likeForm, userLike: !likeForm.userLike });
            axios
                .post(
                    `http://localhost:8080/used/productLikeSet?seq=` +
                        seq +
                        '&id=' +
                        id +
                        '&userLike=' +
                        likeForm.userLike +
                        '&shopKind=' +
                        shopKind,
                )
                .then()
                .catch(error => console.log(error));
            {
                likeForm.userLike === false
                    ? setCount(count + 1)
                    : setCount(count - 1);
            }
        } else {
            navigate(`/login`);
        }
    };

    const [mainImg, setMainImg] = useState('');
    const [subImg0, setSubImg0] = useState('');
    const [subImg1, setSubImg1] = useState('');
    const [subImg2, setSubImg2] = useState('');
    const [subImg3, setSubImg3] = useState('');

    useEffect(() => {
        if (form.imgName) {
            const img = form.imgName.split(',');

            setMainImg(img[0]);

            img[0] && setSubImg0(img[0]);
            img[1] && setSubImg1(img[1]);
            img[2] && setSubImg2(img[2]);
            img[3] && setSubImg3(img[3]);
        }
    }, [form]);

    const changImg = e => {
        var id = e.target.getAttribute('id');
        if (id == 0) setMainImg(subImg0);
        else if (id == 1) setMainImg(subImg1);
        else if (id == 2) setMainImg(subImg2);
        else if (id == 3) setMainImg(subImg3);
    };

    const photoshop = itemImg => {
        // console.log(itemImg)
        // console.log(typeof(itemImg))
        if (itemImg !== null && itemImg !== undefined) {
            //console.log(itemImg);
            const img = itemImg.split(',');
            // console.log(img[0])
            // console.log(typeof(img[0]))
            return img[0];
        }
    };

    return (
        <>
            <ScrollToTop />
            <GlobalStyle />
            <S.ProductsWrapper>
                <S.ContainerDetail>
                    <S.Content>
                        <h2 hidden={true}>상품상세</h2>
                        <S.ColumnBind>
                            <S.ColumnIsFixed>
                                <S.ColumnBox ScrollActive={ScrollActive}>
                                    <U.ImgBody2>
                                        <U.MainImg
                                            src={`/resellList/${mainImg}`}
                                            alt={mainImg}
                                        ></U.MainImg>
                                        {subImg1 && (
                                            <U.SmallImg2
                                                src={`/resellList/${subImg0}`}
                                                id="0"
                                                onClick={e => changImg(e)}
                                            ></U.SmallImg2>
                                        )}
                                        {subImg1 && (
                                            <U.SmallImg2
                                                src={`/resellList/${subImg1}`}
                                                id="1"
                                                onClick={e => changImg(e)}
                                            ></U.SmallImg2>
                                        )}
                                        {subImg2 && (
                                            <U.SmallImg2
                                                src={`/resellList/${subImg2}`}
                                                id="2"
                                                onClick={e => changImg(e)}
                                            ></U.SmallImg2>
                                        )}
                                        {subImg3 && (
                                            <U.SmallImg2
                                                src={`/resellList/${subImg3}`}
                                                id="3"
                                                onClick={e => changImg(e)}
                                            ></U.SmallImg2>
                                        )}
                                    </U.ImgBody2>
                                    {/* <div className="spread">
        <ScrollToTop/>
        <GlobalStyle/>
        <S.ProductsWrapper>
            {console.log(id)}
            <S.ContainerDetail>
                <S.Content>
                    <h2 hidden={true}>상품상세</h2>
                    <S.ColumnBind>
                        <S.ColumnIsFixed>
                            <S.ColumnBox ScrollActive={ ScrollActive }>
                                <U.ImgBody2>
                                    <U.MainImg src={`/resellList/${mainImg}`} alt={mainImg}></U.MainImg>
                                    {subImg1&&<U.SmallImg2 src={`/resellList/${subImg0}`} id="0" onClick={e=>changImg(e)}></U.SmallImg2>}
                                    {subImg1&&<U.SmallImg2 src={`/resellList/${subImg1}`} id="1" onClick={e=>changImg(e)}></U.SmallImg2>}
                                    {subImg2&&<U.SmallImg2 src={`/resellList/${subImg2}`} id="2" onClick={e=>changImg(e)}></U.SmallImg2>}
                                    {subImg3&&<U.SmallImg2 src={`/resellList/${subImg3}`} id="3" onClick={e=>changImg(e)}></U.SmallImg2>}
                                </U.ImgBody2>
                                {/* <div className="spread">
                                    <S.Image src={form.imgName} ></S.Image>
                                </div> */}
                                    {/* <div className="column_box">
                                    <div className="detail_banner_area">
                                        <div className="banner_slide detail_slide slick-slider slick-initialized">
                                            <button data-role="none" className="slick-arrow slick-prev slick-disabled" display="block">Previous</button>
                                            <div className="slick-list">
                                            </div>
                                            <button data-role="none" className="slick-arrow slick-prev slick-disabled" display="block">Next</button>
                                        </div>
                                    </div>
                                </div> */}
                                    <S.BannerAlert subImg1={subImg1}>
                                        <S.BannerAlertContent>
                                            <div>
                                                <S.AlertTitleCareMark>
                                                    주의
                                                </S.AlertTitleCareMark>
                                                <S.AlertTitleAlertText>
                                                    판매 거래 주의사항
                                                </S.AlertTitleAlertText>
                                            </div>
                                            <S.AlertTitleAlertSubText>
                                                반드시 보유한 상품만 판매하세요
                                            </S.AlertTitleAlertSubText>
                                        </S.BannerAlertContent>
                                    </S.BannerAlert>
                                </S.ColumnBox>
                                {modalOpen && (
                                    <ModalBasic
                                        setModalOpen={setModalOpen}
                                        getSize={getSize}
                                        getAll={getAll}
                                        sizeForm={sizeForm}
                                        seq={seq}
                                    />
                                )}
                                {/* <div className="ico_arrow">
                                <svg>
                                    <use></use>
                                </svg>
                            </div> */}
                            </S.ColumnIsFixed>
                            <S.Column>
                                <div className="column_box">
                                    <div className="column_top">
                                        <div className="detail_main_title">
                                            <div className="main_title_box">
                                                <div>
                                                    <S.MainTitleBoxBrand>
                                                        {form.brand}
                                                    </S.MainTitleBoxBrand>
                                                </div>
                                                <S.MainTitleBoxTitle>
                                                    {form.title}
                                                </S.MainTitleBoxTitle>
                                                <S.MainTitleBoxSubTitle>
                                                    {form.subTitle}
                                                </S.MainTitleBoxSubTitle>
                                            </div>
                                        </div>
                                        <div className="product_figure_wrap">
                                            <S.DetailSize
                                                title={size}
                                                option-title="사이즈"
                                            >
                                                <S.DetailSizeTitle>
                                                    <S.DetailSizeTitleText>
                                                        사이즈
                                                    </S.DetailSizeTitleText>
                                                </S.DetailSizeTitle>
                                                <S.DetailSizeSize>
                                                    <S.BtnSize
                                                        onClick={e =>
                                                            setModalOpen(true)
                                                        }
                                                    >
                                                        {isOneSize ? (
                                                            'ONE SIZE'
                                                        ) : (
                                                            <S.BtnSizeBtnText>
                                                                {size}
                                                            </S.BtnSizeBtnText>
                                                        )}
                                                        <img
                                                            src={
                                                                '/image/product/4829876_arrow_direction_down_navigation_icon.png'
                                                            }
                                                            width="24px"
                                                            heigh="24px"
                                                        ></img>
                                                    </S.BtnSize>
                                                </S.DetailSizeSize>
                                            </S.DetailSize>
                                            <S.DetailPrice>
                                                <S.DetailPriceTitle>
                                                    <S.DetailPriceTitleText>
                                                        최근 거래가
                                                    </S.DetailPriceTitleText>
                                                </S.DetailPriceTitle>
                                                <S.DetailPricePrice>
                                                    <S.DetailPriceAmount>
                                                        <S.DetailPriceNum>
                                                            {completedOrderForm[0].price.toLocaleString(
                                                                'ko-KR',
                                                            )}
                                                        </S.DetailPriceNum>
                                                        <S.DetailPriceWon>
                                                            원
                                                        </S.DetailPriceWon>
                                                    </S.DetailPriceAmount>
                                                    <div className="fluctuation decrease">
                                                        <p></p>
                                                    </div>
                                                </S.DetailPricePrice>
                                            </S.DetailPrice>
                                        </div>
                                        <div className="btn-wrap">
                                            <S.DivisionBtnBox>
                                                <S.DivisionBtnBoxBtnDivisionBuy
                                                    onClick={buyNavigate}
                                                >
                                                    <S.DivisionBtnBoxTitle>
                                                        구매
                                                    </S.DivisionBtnBoxTitle>
                                                    <S.DivisionBtnBoxPrice>
                                                        <S.DivisionBtnBoxAmount>
                                                            <S.DivisionBtnBoxNum>
                                                                {sellBidsListForm[0].price.toLocaleString(
                                                                    'ko-KR',
                                                                )}
                                                            </S.DivisionBtnBoxNum>
                                                            <S.DivisionBtnBoxWon>
                                                                원
                                                            </S.DivisionBtnBoxWon>
                                                        </S.DivisionBtnBoxAmount>
                                                        <S.DivisionBtnBoxDesc>
                                                            즉시 구매가
                                                        </S.DivisionBtnBoxDesc>
                                                    </S.DivisionBtnBoxPrice>
                                                </S.DivisionBtnBoxBtnDivisionBuy>
                                                <S.DivisionBtnBoxBtnDivisionSell
                                                    onClick={sellNavigate}
                                                >
                                                    <S.DivisionBtnBoxTitle>
                                                        판매
                                                    </S.DivisionBtnBoxTitle>
                                                    <S.DivisionBtnBoxPrice>
                                                        <S.DivisionBtnBoxAmount>
                                                            <S.DivisionBtnBoxNum>
                                                                {buyBidsListForm[0].price.toLocaleString(
                                                                    'ko-KR',
                                                                )}
                                                            </S.DivisionBtnBoxNum>
                                                            <S.DivisionBtnBoxWon>
                                                                원
                                                            </S.DivisionBtnBoxWon>
                                                        </S.DivisionBtnBoxAmount>
                                                        <S.DivisionBtnBoxDesc>
                                                            즉시 판매가
                                                        </S.DivisionBtnBoxDesc>
                                                    </S.DivisionBtnBoxPrice>
                                                </S.DivisionBtnBoxBtnDivisionSell>
                                            </S.DivisionBtnBox>
                                            <S.LargeBtnWish
                                                area-label="관심상품"
                                                onClick={onInterest}
                                            >
                                                {/* <U.InterestInput src={likeForm.userLike?'/image/used/blackBookmark.png':'../image/used/bookmark.svg'}/> */}
                                                <S.LargeBtnWishBtnImg
                                                    src={
                                                        likeForm.userLike
                                                            ? '/image/used/blackBookmark.png'
                                                            : '../image/used/bookmark.svg'
                                                    }
                                                />
                                                <S.LargeBtnWishBtnText>
                                                    관심상품
                                                </S.LargeBtnWishBtnText>
                                                <S.LargeBtnWishCountNum>
                                                    {count}
                                                </S.LargeBtnWishCountNum>
                                            </S.LargeBtnWish>
                                        </div>
                                    </div>
                                    <div className="product_info_wrap">
                                        <S.DetailTitleInfoTitle>
                                            상품 정보
                                        </S.DetailTitleInfoTitle>
                                        <S.DetailProductWrap>
                                            <S.DetailProduct>
                                                <S.DetailBoxModelNum>
                                                    <S.DetailBoxProductTitle>
                                                        모델번호
                                                    </S.DetailBoxProductTitle>
                                                    <S.DetailBoxProductInfo>
                                                        {form.modelNum}
                                                    </S.DetailBoxProductInfo>
                                                </S.DetailBoxModelNum>
                                                <S.DetailBox>
                                                    <S.DetailBoxProductTitle>
                                                        출시일
                                                    </S.DetailBoxProductTitle>
                                                    <S.DetailBoxProductInfo>
                                                        {form.releaseDate}
                                                    </S.DetailBoxProductInfo>
                                                </S.DetailBox>
                                                <S.DetailBox>
                                                    <S.DetailBoxProductTitle>
                                                        컬러
                                                    </S.DetailBoxProductTitle>
                                                    <S.DetailBoxProductInfo>
                                                        {form.color}
                                                    </S.DetailBoxProductInfo>
                                                </S.DetailBox>
                                                <S.DetailBox>
                                                    <S.DetailBoxProductTitle>
                                                        발매가
                                                    </S.DetailBoxProductTitle>
                                                    <S.DetailBoxProductInfo>
                                                        {Number(
                                                            form.releasePrice,
                                                        ).toLocaleString(
                                                            'ko-KR',
                                                        ) + '원'}
                                                    </S.DetailBoxProductInfo>
                                                </S.DetailBox>
                                            </S.DetailProduct>
                                        </S.DetailProductWrap>
                                    </div>
                                    <S.DeliveryWayWrap>
                                        <S.DeliveryWayWrapDetailTitle>
                                            배송 정보
                                        </S.DeliveryWayWrapDetailTitle>
                                        <S.DeliveryWay>
                                            <S.WayInfo>
                                                <S.WayStatusThumb>
                                                    <img
                                                        src="/image/product/a_120a84f036724d0d97a2343aafff4ecf.png"
                                                        width="40px"
                                                        height="40px"
                                                    />
                                                </S.WayStatusThumb>
                                                <S.WayDesc>
                                                    <S.Company>
                                                        <S.CompanyBadgeTitle>
                                                            빠른배송
                                                        </S.CompanyBadgeTitle>
                                                    </S.Company>
                                                    <S.SubText>
                                                        지금 결제시
                                                        <em
                                                            style={{
                                                                color:
                                                                    '#297dcb',
                                                            }}
                                                        >
                                                            &nbsp; 모레{' '}
                                                            {date.getMonth() +
                                                                1 +
                                                                '/' +
                                                                (date.getDate() +
                                                                    2)}
                                                            일 도착 예정
                                                        </em>
                                                    </S.SubText>
                                                </S.WayDesc>
                                            </S.WayInfo>
                                        </S.DeliveryWay>
                                    </S.DeliveryWayWrap>
                                    <div className="banner_box">
                                        {' '}
                                        {/*움직이는 배너박스, 차후 적용*/}
                                    </div>
                                    <div className="detail_wrap">
                                        <S.ProductSalesGraph>
                                            <S.ProductSalesGraphTitle>
                                                <S.ProductSalesGraphDetailTitle>
                                                    시세
                                                </S.ProductSalesGraphDetailTitle>
                                                <S.ProductSalesGraphSalesFilter>
                                                    <S.FilterUnit>
                                                        <S.BtnBtnSelect
                                                            slot="button"
                                                            onClick={e =>
                                                                setOpenLayer(
                                                                    !openLayer,
                                                                )
                                                            }
                                                        >
                                                            <S.SelectTextLayerOpen>
                                                                {isOneSize
                                                                    ? 'ONE SIZE'
                                                                    : size}
                                                                {openLayer ? (
                                                                    <img
                                                                        src={
                                                                            '/image/product/211687_down_arrow_icon.png'
                                                                        }
                                                                        width="15px"
                                                                        heigh="15px"
                                                                    ></img>
                                                                ) : (
                                                                    <img
                                                                        src={
                                                                            '/image/product/211690_up_arrow_icon.png'
                                                                        }
                                                                        width="15px"
                                                                        heigh="15px"
                                                                    ></img>
                                                                )}
                                                            </S.SelectTextLayerOpen>
                                                        </S.BtnBtnSelect>
                                                        <S.LayerSizeListLayer
                                                            hidden={openLayer}
                                                        >
                                                            <S.LayerSizeListLayerContainer>
                                                                <S.LayerSizeListLayercontent>
                                                                    <S.SizeList>
                                                                        <S.SizeItem>
                                                                            <S.SizeLink
                                                                                size={
                                                                                    size
                                                                                }
                                                                                itemSize={
                                                                                    '모든 사이즈'
                                                                                }
                                                                                onClick={e => {
                                                                                    getAll(
                                                                                        seq,
                                                                                    );
                                                                                    setOpenLayer(
                                                                                        true,
                                                                                    );
                                                                                }}
                                                                            >
                                                                                {isOneSize
                                                                                    ? 'ONE SIZE'
                                                                                    : '모든 사이즈'}
                                                                            </S.SizeLink>
                                                                        </S.SizeItem>
                                                                        {!isOneSize &&
                                                                            sizeForm.map(
                                                                                (
                                                                                    item,
                                                                                    index,
                                                                                ) => (
                                                                                    <S.SizeItem
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <S.SizeLink
                                                                                            size={
                                                                                                size
                                                                                            }
                                                                                            itemSize={
                                                                                                item.size
                                                                                            }
                                                                                            onClick={e => {
                                                                                                getSize(
                                                                                                    seq,
                                                                                                    item.size,
                                                                                                );
                                                                                                setOpenLayer(
                                                                                                    true,
                                                                                                );
                                                                                            }}
                                                                                        >
                                                                                            {
                                                                                                item.size
                                                                                            }
                                                                                        </S.SizeLink>
                                                                                    </S.SizeItem>
                                                                                ),
                                                                            )}
                                                                    </S.SizeList>
                                                                </S.LayerSizeListLayercontent>
                                                            </S.LayerSizeListLayerContainer>
                                                        </S.LayerSizeListLayer>
                                                    </S.FilterUnit>
                                                </S.ProductSalesGraphSalesFilter>
                                            </S.ProductSalesGraphTitle>
                                            <S.WrapSales>
                                                <S.TabArea>
                                                    <S.TabList>
                                                        <S.TabAreaItem>
                                                            <S.TabAreaItemLink
                                                                onClick={onOpen}
                                                                open={open1}
                                                                name="1"
                                                            >
                                                                1개월
                                                            </S.TabAreaItemLink>
                                                        </S.TabAreaItem>
                                                        <S.TabAreaItem>
                                                            <S.TabAreaItemLink
                                                                onClick={onOpen}
                                                                open={open2}
                                                                name="2"
                                                            >
                                                                3개월{' '}
                                                            </S.TabAreaItemLink>
                                                        </S.TabAreaItem>
                                                        <S.TabAreaItem>
                                                            <S.TabAreaItemLink
                                                                onClick={onOpen}
                                                                open={open3}
                                                                name="3"
                                                            >
                                                                6개월
                                                            </S.TabAreaItemLink>
                                                        </S.TabAreaItem>
                                                        <S.TabAreaItem>
                                                            <S.TabAreaItemLink
                                                                onClick={onOpen}
                                                                open={open4}
                                                                name="4"
                                                            >
                                                                1년
                                                            </S.TabAreaItemLink>
                                                        </S.TabAreaItem>
                                                        <S.TabAreaItem>
                                                            <S.TabAreaItemLink
                                                                onClick={onOpen}
                                                                open={open5}
                                                                name="5"
                                                            >
                                                                전체
                                                            </S.TabAreaItemLink>
                                                        </S.TabAreaItem>
                                                    </S.TabList>

                                                    <div
                                                        id="sales_panel1"
                                                        role="tabpanel"
                                                        className="tab_content show"
                                                        span="1m"
                                                    >
                                                        <div className="graph">
                                                            <Graph></Graph>
                                                        </div>
                                                    </div>
                                                    {/* <div id="sales_panel2" role="tabpanel" className="tab_content" span="3m">
                                                                        </S.SizeItem>))
                                                                    }
                                                                </S.SizeList>
                                                            </S.LayerSizeListLayercontent>
                                                        </S.LayerSizeListLayerContainer>
                                                    </S.LayerSizeListLayer>
                                                </S.FilterUnit>
                                            </S.ProductSalesGraphSalesFilter>
                                        </S.ProductSalesGraphTitle>
                                        {/* <S.WrapSales>
                                            <S.TabArea>
                                                <S.TabList>
                                                    <S.TabAreaItem>
                                                        <S.TabAreaItemLink onClick={ onOpen } open={ open1 } name='1'>1개월</S.TabAreaItemLink>
                                                    </S.TabAreaItem>
                                                    <S.TabAreaItem>
                                                        <S.TabAreaItemLink onClick={ onOpen } open={ open2 } name='2'>3개월 </S.TabAreaItemLink>
                                                    </S.TabAreaItem>
                                                    <S.TabAreaItem>
                                                        <S.TabAreaItemLink onClick={ onOpen } open={ open3 } name='3'>6개월</S.TabAreaItemLink>
                                                    </S.TabAreaItem>
                                                    <S.TabAreaItem>
                                                        <S.TabAreaItemLink onClick={ onOpen } open={ open4 } name='4'>1년</S.TabAreaItemLink>
                                                    </S.TabAreaItem>
                                                    <S.TabAreaItem>
                                                        <S.TabAreaItemLink onClick={ onOpen } open={ open5 } name='5'>전체</S.TabAreaItemLink>
                                                    </S.TabAreaItem>
                                                </S.TabList>
    
                                                <div id="sales_panel1" role="tabpanel" className="tab_content show" span="1m">
                                                    <div className="graph">
                                                        <Graph></Graph>
                                                    </div>
                                                </div>
                                                <div id="sales_panel2" role="tabpanel" className="tab_content" span="3m">
                                                    <div className="graph">
                                                        <canvas></canvas>
                                                    </div>
                                                </div>
                                                <div id="sales_panel3" role="tabpanel" className="tab_content" span="6m">
                                                    <div className="graph">
                                                        <canvas></canvas>
                                                    </div>
                                                </div>
                                                <div id="sales_panel4" role="tabpanel" className="tab_content" span="1y">
                                                    <div className="graph">
                                                        <canvas></canvas>
                                                    </div>
                                                </div>
                                                <div id="sales_panel5" role="tabpanel" className="tab_content" span="all">
                                                    <div className="graph">
                                                        <canvas></canvas>
                                                    </div>
                                                </div>
                                            </S.TabArea>
                                        </S.WrapSales> */}
                                        <S.WrapBids>
                                            <S.TabArea>
                                                <S.TabList>
                                                    <S.TabAreaItem>
                                                        <S.TabAreaItemLink onClick={ onOpen2 } open={ open6 } name='6'>체결 거래</S.TabAreaItemLink>
                                                    </S.TabAreaItem>
                                                    <S.TabAreaItem>
                                                        <S.TabAreaItemLink onClick={ onOpen2 } open={ open7 } name='7'>판매 입찰</S.TabAreaItemLink>
                                                    </S.TabAreaItem>
                                                    <S.TabAreaItem>
                                                        <S.TabAreaItemLink onClick={ onOpen2 } open={ open8 } name='8'>구매 입찰</S.TabAreaItemLink>
                                                    </S.TabAreaItem>
                                                </S.TabList>
                                                <S.TabContent open={ open6 }>
                                                    <S.TableWrap>
                                                        {completedOrderForm[0].price !== '-' ? <CompletedOrderTable completedOrderForm={completedOrderForm}/> : <EmptyTable word={'체결된 거래'}/>}
                                                    </S.TableWrap>
                                                    {completedOrderForm[0].price !== '-' && <S.BtnOutLineGrey onClick={() => setModalOpen2(true)}>체결 내역 더보기</S.BtnOutLineGrey>}
                                                </S.TabContent>
                                                <S.TabContent open={ open7 }>
                                                    <S.TableWrap>
                                                        {sellBidsListForm[0].price !== '-' ? <SellBidsTable sellBidsListForm={sellBidsListForm}/> : <EmptyTable word={'판매 희망가'}/>}
                                                    </S.TableWrap>
                                                    {sellBidsListForm[0].price !== '-' && <S.BtnOutLineGrey onClick={() => setModalOpen2(true)}>입찰 내역 더보기</S.BtnOutLineGrey>}
                                                </S.TabContent>
                                                <S.TabContent open={ open8 }>
                                                    <S.TableWrap>
                                                        {buyBidsListForm[0].price !== '-' ? <BuyBidsTable buyBidsListForm={buyBidsListForm}/> : <EmptyTable word={'구매 희망가'}/>}   
                                                    </S.TableWrap>
                                                    {buyBidsListForm[0].price !== '-' && <S.BtnOutLineGrey onClick={() => setModalOpen2(true)}>입찰 내역 더보기</S.BtnOutLineGrey>}
                                                </S.TabContent>
                                            </S.TabArea>
                                        </S.WrapBids>
                                    </S.ProductSalesGraph>
                                    {modalOpen2 && <ListModal setModalOpen={setModalOpen2} completedOrderForm={completedOrderForm} sellBidsListForm={sellBidsListForm} buyBidsListForm={buyBidsListForm} 
                                                              form={form} mainImg={mainImg} sizeForm={sizeForm} onOpen2={onOpen2} open6={open6} open7={open7} open={open8}
                                                              getSize={getSize} getAll={getAll} setListOpen={setListOpen} listOpen={listOpen} size={size} seq={seq}/> }
                                    <div>
                                        <S.ConfirmWrap>
                                            <S.ConfirmWrapConfirmTitle>구매 전 꼭 확인해주세요</S.ConfirmWrapConfirmTitle>
                                            <S.ConfirmWrapConfirmContemt>
                                                <ul className="dropdown_list">
                                                    <li>
                                                        <div className="dropdown">
                                                            <S.DropdownHead onClick={ OpenDrop }>
                                                                <S.DropdownHeadTitle>배송 기간 안내</S.DropdownHeadTitle>
                                                                {/* <svg>
                                                                    <use></use>
                                                                </svg> */}
                                                            </S.DropdownHead>
                                                            <S.DropdownContent hidden={dropdown}>
                                                                <S.DropdownContentContent>
                                                                    <div className="content_box">
                                                                        <div className="emphasis_box">
                                                                            <S.Emphasis>
                                                                                슈크림은 최대한 빠르게 모든 상품을 배송하기 위해 노력하고 있습니다. 배송 시간은 판매자가 검수를 위하여 상품을 검수센터로 보내는 속도에 따라 차이가 있습니다.
                                                                            </S.Emphasis>
                                                                        </div>
                                                                        <ul className="content_list" style={{ marginTop: "20px" }}>
                                                                            <li className="content_item">
                                                                                <p className="title_txt"> [빠른배송 구매]</p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt" style={{ marginTop: "20px" }}> - 판매자가 보관 신청한 상품 중 검수에 합격한 상품을 KREAM의 전용 창고에 보관합니다. 보관 상품에 한하여 바로 구매와 95점 구매가 가능합니다. </p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt" style={{ marginTop: "10px" }}> 
                                                                                - 오늘(오후 11:59까지) 결제하면 내일 바로 출고되어 빠른 배송이 가능합니다. (연휴 및 공휴일, 천재지변, 택배사 사유 등 예외적으로 출고일이 변경될 수 있습니다.
                                                                                </p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </S.DropdownContentContent>
                                                            </S.DropdownContent>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="dropdown">
                                                            <S.DropdownHead onClick={ OpenDrop1 }>
                                                                <S.DropdownHeadTitle>검수 안내</S.DropdownHeadTitle>
                                                                {/* <svg>
                                                                    <use></use>
                                                                </svg> */}
                                                            </S.DropdownHead>
                                                            <S.DropdownContent hidden={dropdown1}>
                                                                <S.DropdownContentContent>
                                                                    <div className="content_box">
                                                                        <div className="emphasis_box">
                                                                            <S.Emphasis>
                                                                                판매자의 상품이 검수센터에 도착하면 전담 검수팀이 철저한 분석과 검사로 정가품 확인을 진행합니다.
                                                                            </S.Emphasis>
                                                                        </div>
                                                                        <ul className="content_list" style={{ marginTop: "20px" }}>
                                                                            <li className="content_item">
                                                                                <p className="title_txt"> - 검수센터에서는 정가품 여부를 확인하기 위하여, 지속적으로 데이터를 쌓고 분석하여 기록하고 있습니다. </p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt" style={{ marginTop: "10px" }}> - 업계 전문가로 구성된 검수팀은 박스와 상품의 라벨에서 바느질, 접착, 소재 등 모든 것을 검수합니다. </p>
                                                                            </li>
                                                                        </ul>

                                                                        <div className="emphasis_box" style={{ marginTop: "40px" }}>
                                                                            <S.Emphasis>
                                                                                검수 결과는 불합격•검수 보류•합격의 세가지 상태로 결과가 변경됩니다.
                                                                            </S.Emphasis>
                                                                        </div>
                                                                        <ul className="content_list" style={{ marginTop: "20px" }}>
                                                                            <li className="content_item">
                                                                                <p className="title_txt"> * 검수 합격: 슈크림 검수택(Tag)이 부착되어 배송을 준비함 </p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt"> * 검수 보류: 앱에서 사진으로 상품의 상태 확인 및 구매 여부를 선택. (24시간 이후 자동 검수 합격) </p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt"> * 검수 불합격: 즉시 거래가 취소되고 구매하신 금액을 환불 처리함.(환불 수단은 결제 수단과 동일) </p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </S.DropdownContentContent>
                                                            </S.DropdownContent>
                                                        </div>
                                                    </li>                                                               
                                                    <li>
                                                        <div className="dropdown">
                                                            <S.DropdownHead onClick={ OpenDrop2 }>
                                                                <S.DropdownHeadTitle>구매/환불/취소/교환 안내</S.DropdownHeadTitle>
                                                                {/* <svg>
                                                                    <use></use>
                                                                </svg> */}
                                                            </S.DropdownHead>
                                                            <S.DropdownContent hidden={dropdown2}>
                                                                <S.DropdownContentContent>
                                                                    <div className="content_box">
                                                                        <div className="emphasis_box">
                                                                            <S.Emphasis>
                                                                                슈크림은 익명 거래를 기반으로 판매자가 판매하는 상품을 구매자가 실시간으로 구매하여 거래를 체결합니다.
                                                                            </S.Emphasis>
                                                                        </div>
                                                                        <ul className="content_list" style={{ marginTop: "20px" }}>
                                                                            <li className="content_item">
                                                                                <p className="title_txt"> - 단순 변심이나 실수에 의한 취소/교환/반품이 불가능합니다. 상품을 원하지 않으시는 경우 언제든지 슈크림에서 재판매를 하실 수 있습니다.</p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt" style={{ marginTop: "10px" }}> - 상품 수령 후, 이상이 있는 경우 슈크림 고객센터로 문의해주시기 바랍니다. </p>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </S.DropdownContentContent>
                                                            </S.DropdownContent>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </S.ConfirmWrapConfirmContemt>
                                        </S.ConfirmWrap>
                                        <div className="point_guide" style={{paddingTop: "40px"}}>
                                            <ul className="guide_list">
                                                <li className="guide_item" style={{overflow: "hidden"}}>
                                                    <S.ThumbArea>
                                                        <S.ThumbAreaImg src={'/image/product/100-percent.png'}>
                                                            {/* <img src={'/image/product/211690_up_arrow_icon.png'} width="15px" heigh="15px"></img>  */}
                                                        </S.ThumbAreaImg>
                                                    </S.ThumbArea>
                                                    <div className="text_area" style={{overflow: "hidden"}}>
                                                        <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                        <S.TextAreaDesc>슈크림사에서 검수한 상품이 정품 아니면 최대 3배까지 보상해드립니다</S.TextAreaDesc>
                                                    </div>
                                                </li>
                                                <li className="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                    <S.ThumbArea>
                                                        <S.ThumbAreaImg src={'/image/product/magnifying-glass-with-check-mark.png'}></S.ThumbAreaImg>
                                                    </S.ThumbArea>
                                                    <div className="text_area" style={{overflow: "hidden"}}>
                                                        <S.TextAreaTitle>엄격한 다중검수</S.TextAreaTitle>
                                                        <S.TextAreaDesc>모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.</S.TextAreaDesc>
                                                    </div>
                                                </li>
                                                <li className="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                    <S.ThumbArea>
                                                        <S.ThumbAreaImg src={'/image/product/package-box.png'}></S.ThumbAreaImg>
                                                    </S.ThumbArea>
                                                    <div className="text_area" style={{overflow: "hidden"}}>
                                                        <S.TextAreaTitle>정품 인증 패키지</S.TextAreaTitle>
                                                        <S.TextAreaDesc>검수에 합격한 경우에 한하여 슈크림의 정품 인증 패키지가 포함된 상품이 배송됩니다.</S.TextAreaDesc>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <S.MeditationNoticeProduct>
                                        슈크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 슈크림(주)에 있습니다.
                                        </S.MeditationNoticeProduct>
                                    </div>
                                    <S.FloatingPrice
                                        ScrollActive2={ScrollActive2}
                                    >
                                        <S.FloatingPriceInnerBox>
                                            <S.FloatingPriceProductArea>
                                                <S.FloatingPriceProductThumb>
                                                    <S.PictureProductImg>
                                                        <S.Image
                                                            src={`/resellList/${subImg0}`}
                                                            width="65px"
                                                            height="65px"
                                                        ></S.Image>
                                                    </S.PictureProductImg>
                                                </S.FloatingPriceProductThumb>
                                                <S.FloatingProductInfo>
                                                    <S.FloatingProductName>
                                                        {form.title}
                                                    </S.FloatingProductName>
                                                    <S.FloatingProductTranslatedName>
                                                        {form.subTitle}
                                                    </S.FloatingProductTranslatedName>
                                                </S.FloatingProductInfo>
                                            </S.FloatingPriceProductArea>
                                            <S.FloatingProductBtnArea>
                                                <S.FloatingBtnOutLineGrey
                                                    onClick={onInterest}
                                                >
                                                    <S.LargeBtnWishBtnImg
                                                        src={
                                                            likeForm.userLike
                                                                ? '/image/used/blackBookmark.png'
                                                                : '../image/used/bookmark.svg'
                                                        }
                                                    />
                                                    <S.WishCountNum>
                                                        {count}
                                                    </S.WishCountNum>
                                                </S.FloatingBtnOutLineGrey>
                                                <S.FloatingPriceDivisionBtnBox>
                                                    <S.FloatingPriceDivisionBuy
                                                        onClick={buyNavigate}
                                                    >
                                                        <S.FloatingPriceTitle>
                                                            구매
                                                        </S.FloatingPriceTitle>
                                                        <S.FloatingPriceBuyPrice>
                                                            <S.DivisionBtnBoxAmount>
                                                                <S.DivisionBtnBoxNum>
                                                                    {sellBidsListForm[0].price.toLocaleString(
                                                                        'ko-KR',
                                                                    )}
                                                                </S.DivisionBtnBoxNum>
                                                                <S.DivisionBtnBoxWon>
                                                                    원
                                                                </S.DivisionBtnBoxWon>
                                                            </S.DivisionBtnBoxAmount>
                                                            <S.DivisionBtnBoxDesc>
                                                                즉시 구매가
                                                            </S.DivisionBtnBoxDesc>
                                                        </S.FloatingPriceBuyPrice>
                                                    </S.FloatingPriceDivisionBuy>
                                                    <S.FloatingPriceBtnDivisionSell
                                                        onClick={sellNavigate}
                                                    >
                                                        <S.FloatingPriceTitle>
                                                            판매
                                                        </S.FloatingPriceTitle>
                                                        <S.FloatingPriceSellPrice>
                                                            <S.DivisionBtnBoxAmount>
                                                                <S.DivisionBtnBoxNum>
                                                                    {buyBidsListForm[0].price.toLocaleString(
                                                                        'ko-KR',
                                                                    )}
                                                                </S.DivisionBtnBoxNum>
                                                                <S.DivisionBtnBoxWon>
                                                                    원
                                                                </S.DivisionBtnBoxWon>
                                                            </S.DivisionBtnBoxAmount>
                                                            <S.DivisionBtnBoxDesc>
                                                                즉시 판매가
                                                            </S.DivisionBtnBoxDesc>
                                                        </S.FloatingPriceSellPrice>
                                                    </S.FloatingPriceBtnDivisionSell>
                                                </S.FloatingPriceDivisionBtnBox>
                                            </S.FloatingProductBtnArea>
                                        </S.FloatingPriceInnerBox>
                                    </S.FloatingPrice>
                                </div>
                            </S.Column>
                        </S.ColumnBind>
                    </S.Content>
                    <div>
                        <S.FeedArea>
                            <S.FeedTitle>
                                <S.FeedTitleTitle>스타일</S.FeedTitleTitle>
                                {/* <S.FeedTitleNum>1234</S.FeedTitleNum>  */}
                            </S.FeedTitle>
                            <S.SocialFeeds>
                                <Container fixed>
                                    <A.TrGridContainer>
                                        <A.TrGridContainerSub>
                                            {brandStyleList.map((item, index) =>
                                                index % 4 === 0 ? (
                                                    <TrendingItem
                                                        key={item.seq}
                                                        item={item}
                                                        index={index}
                                                        itemLength={8}
                                                    />
                                                ) : (
                                                    ''
                                                ),
                                            )}
                                        </A.TrGridContainerSub>

                                        <A.TrGridContainerSub>
                                            {brandStyleList.map((item, index) =>
                                                index % 4 === 1 ? (
                                                    <TrendingItem
                                                        key={item.seq}
                                                        item={item}
                                                        index={index}
                                                        itemLength={8}
                                                    />
                                                ) : (
                                                    ''
                                                ),
                                            )}
                                        </A.TrGridContainerSub>

                                        <A.TrGridContainerSub>
                                            {brandStyleList.map((item, index) =>
                                                index % 4 === 2 ? (
                                                    <TrendingItem
                                                        key={item.seq}
                                                        item={item}
                                                        index={index}
                                                        itemLength={8}
                                                    />
                                                ) : (
                                                    ''
                                                ),
                                            )}
                                        </A.TrGridContainerSub>

                                        <A.TrGridContainerSub>
                                            {brandStyleList.map((item, index) =>
                                                index % 4 === 3 ? (
                                                    <TrendingItem
                                                        key={item.seq}
                                                        item={item}
                                                        index={index}
                                                        itemLength={8}
                                                    />
                                                ) : (
                                                    ''
                                                ),
                                            )}
                                        </A.TrGridContainerSub>
                                    </A.TrGridContainer>
                                </Container>
                                <S.MoreBtnBox>
                                    <Link to={`/styleOneProduct/${seq}`}>
                                        <S.ButtonOutlineGreyMedium>
                                            더보기
                                        </S.ButtonOutlineGreyMedium>
                                    </Link>
                                </S.MoreBtnBox>
                            </S.SocialFeeds>
                        </S.FeedArea>
                        <S.BrandArea>
                            <S.BrandTitle>
                                <S.BrandTitleBrand>
                                    {form.brand}
                                </S.BrandTitleBrand>
                                <S.BrandTitleText>
                                    의 다른 상품
                                </S.BrandTitleText>
                                <S.BtnMore>
                                    <S.BtnText>더 보기</S.BtnText>
                            </S.BtnMore>
                        </S.BrandTitle>
                        <S.BrandProducts>
                            <S.BrandProductList>
                            {
                                brandListForm.length > 10 ? 

                                    [...Array(parseInt(10))].map((n, index) => {
                                        return <S.ProductItem key={index}>
                                        <S.ItemInner onClick={() => brandNavigate(brandListForm[index].seq)}>
                                            <div className='thumb_box'>
                                                <S.Product>
                                                    <S.PictureBrandProductImg>
                                                        <S.BrandProductImg src={`/resellList/${photoshop(brandListForm[index].img_name)}`}/>
                                                    </S.PictureBrandProductImg>
                                                </S.Product>
                                            </div>
                                            <S.ProductItemInfoBox>
                                            <div className='info_box'>
                                                <div className='brand'>
                                                    <S.BrandTextWithOutWish>{brandListForm[index].brand}</S.BrandTextWithOutWish>
                                                </div>
                                                <S.BrandProductInfoBoxName>{brandListForm[index].title}</S.BrandProductInfoBoxName>
                                                <S.BrandProductInfoBoxPrice>
                                                    <S.BrandProductInfoBoxPriceAmount>
                                                        <S.BrandProductInfoBoxPriceAmountNum>{brandListForm[index].price !== '-' ? Number(brandListForm[index].price).toLocaleString('ko-KR') : brandListForm[index].price}</S.BrandProductInfoBoxPriceAmountNum>
                                                    </S.BrandProductInfoBoxPriceAmount>
                                                    <S.BrandProductInfoBoxPriceDesc>즉시 구매가</S.BrandProductInfoBoxPriceDesc>
                                                </S.BrandProductInfoBoxPrice>
                                            </div>
                                        </S.ProductItemInfoBox>
                                        </S.ItemInner>
                                    </S.ProductItem>
                                    })

                                    :

                                    brandListForm[0].img_name !== '' &&

                                    brandListForm.map((item, index) => (
                                        <S.ProductItem key={index}>
                                            <S.ItemInner onClick={() => brandNavigate(item.seq)}>
                                                <div className='thumb_box'>
                                                    <S.Product>
                                                        <S.PictureBrandProductImg>
                                                            <S.BrandProductImg src={`/resellList/${photoshop(item.img_name)}`}/>
                                                        </S.PictureBrandProductImg>
                                                    </S.Product>
                                                </div>
                                                <S.ProductItemInfoBox>
                                                <div className='info_box'>
                                                    <div className='brand'>
                                                        <S.BrandTextWithOutWish>{item.brand}</S.BrandTextWithOutWish>
                                                    </div>
                                                    <S.BrandProductInfoBoxName>{item.title}</S.BrandProductInfoBoxName>
                                                    <S.BrandProductInfoBoxPrice>
                                                        <S.BrandProductInfoBoxPriceAmount>
                                                            <S.BrandProductInfoBoxPriceAmountNum>{item.price !== '-' ? Number(item.price).toLocaleString('ko-KR') + "원" : item.price}</S.BrandProductInfoBoxPriceAmountNum>
                                                        </S.BrandProductInfoBoxPriceAmount>
                                                        <S.BrandProductInfoBoxPriceDesc>즉시 구매가</S.BrandProductInfoBoxPriceDesc>
                                                    </S.BrandProductInfoBoxPrice>
                                                </div>
                                            </S.ProductItemInfoBox>
                                            </S.ItemInner>
                                        </S.ProductItem>))
                                    
                            }
                            </S.BrandProductList>
                        </S.BrandProducts>
                    </S.BrandArea>
                </div>
            </S.ContainerDetail>
        </S.ProductsWrapper>
        </>
    );
};

export default Products;
