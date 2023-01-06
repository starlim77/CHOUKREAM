import { ResponsiveLine } from '@nivo/line'
import axios from "axios";
import React, { useEffect, useState } from 'react';
import ModalBasic from './ModalBasic';
import * as S from './style';
import GlobalStyle from './GlobalStyle';
import { Link, useNavigate, useParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import CompletedOrderTable from "./table/CompletedOrderTable";
import SellBidsTable from "./table/SellBidsTable";
import BuyBidsTable from "./table/BuyBidsTable";
import EmptyTable from "./table/EmptyTable";
import Graph from './Graph';

const Products = () => {

    const date = new Date();

    const id = "asd";

    const shopKind = 'resell'

    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)

    const onOpen = (e) => {
       if(e.target.name == 1) {setOpen1(true); setOpen2(false); setOpen3(false); setOpen4(false); setOpen5(false)}
       else if(e.target.name == 2) {setOpen2(true); setOpen1(false); setOpen3(false); setOpen4(false); setOpen5(false)}
       else if(e.target.name == 3) {setOpen3(true); setOpen1(false); setOpen2(false); setOpen4(false); setOpen5(false)}
       else if(e.target.name == 4) {setOpen4(true); setOpen1(false); setOpen2(false); setOpen3(false); setOpen5(false)}
       else if(e.target.name == 5) {setOpen5(true); setOpen1(false); setOpen2(false); setOpen3(false); setOpen4(false)}
    }

    const [open6, setOpen6] = useState(true)
    const [open7, setOpen7] = useState(false)
    const [open8, setOpen8] = useState(false)

    const onOpen2 = (e) => {
       if(e.target.name == 6) {setOpen6(true); setOpen7(false); setOpen8(false);}
       else if(e.target.name == 7) {setOpen7(true); setOpen6(false); setOpen8(false);}
       else if(e.target.name == 8) {setOpen8(true); setOpen6(false); setOpen7(false);}
    }

    const {seq} = useParams();

    const navigate = useNavigate();

    const [modalOpen, setModalOpen] = useState(false);

    const [form, setForm] = useState({});

    const [completedOrderForm, setCompletedOrderForm] = useState([{
        price: '-'
    }]);

    const [sellBidsListForm, setSellBidsListForm] = useState([{
        price: '-'
    }])
    const [buyBidsListForm, setBuyBidsListForm] = useState([{
        price: '-'
    }])

    const [likeForm, setLikeForm] = useState({
        seq:'',
        id:'',
        userLike:false,
        registerNo:''
    })

    const [brandListForm, setBrandListForm] = useState([])

    const [sizeForm, setSizeForm] = useState([{}])

    const [size ,setSize] = useState("모든 사이즈");

    const [brand, setBrand] = useState('');

    const [openLayer, setOpenLayer] =useState(true)

    const [isOneSize, setIsOneSize] = useState(true);

    const [dropdown, setDropdown] = useState(true);
    const OpenDrop = () => {  
        setDropdown(!dropdown);
        console.log(completedOrderForm)
        console.log(form.brand)
        console.log(brandListForm)
        
    }
    const [dropdown1, setDropdown1] = useState(true);
    const OpenDrop1 = () => {
        setDropdown1(!dropdown1);
        console.log(sellBidsListForm)
    }
    const [dropdown2, setDropdown2] = useState(true);
    const OpenDrop2 = () => {
        setDropdown2(!dropdown2);
        console.log(buyBidsListForm)
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/getProduct?seq=${seq}`)
             .then(res => res.data !== null && setForm(res.data))
             .catch(error => console.log(error))
 
        axios.get(`http://localhost:8080/getCompletedOrderList?seq=${seq}`)
             .then(res => res.data.length !== 0 && setCompletedOrderForm(res.data))
             .catch(error => console.log(error));   
        
        axios.get(`http://localhost:8080/getProductSize?seq=${seq}`)
             .then(res => res.data.length === 1 ? setIsOneSize(true) : setIsOneSize(false))
             .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getProductSize?seq=${seq}`)
             .then(res => res.data !== null && setSizeForm(res.data))
             .catch(error => console.log(error))
        
        axios.get(`http://localhost:8080/getSellBidsList?seq=${seq}`)
             .then(res => res.data.length !== 0 && setSellBidsListForm(res.data))
             .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getBuyBidsList?seq=${seq}`)
             .then(res => res.data.length !== 0 && setBuyBidsListForm(res.data))
             .catch(error => console.log(error))
        
        axios.get('http://localhost:8080/used/itemLike?seq=' + seq + '&id=' + id + '&shopKind=' + shopKind)
             .then(res => res.data ? setLikeForm(res.data) : '')
             .catch(error => console.log(error))

    }, []);

    useEffect(() => {
        axios.get(`http://localhost:8080/getBrandList?seq=${seq}&brand=${form.brand}`)
             .then(res => res.data.length !== 0 && setBrandListForm(res.data))
             .catch(error => console.log(error))
    }, [form])

    const getSize = (seq, size) => {
        setSize(size);

        axios.get(`http://localhost:8080/getSellBidsListBySize?size=${size}&seq=${seq}`)
             .then(res => res.data.length !== 0 ? setSellBidsListForm(res.data) : setSellBidsListForm([{price: '-'}]))
             .catch(error => console.log(error))    

        axios.get(`http://localhost:8080/getBuyBidsListBySize?size=${size}&seq=${seq}`)
             .then(res => res.data.length !== 0 ? setBuyBidsListForm(res.data) : setBuyBidsListForm([{price: '-'}]))
             .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getCompletedOrderListBySize?size=${size}&seq=${seq}`)
             .then(res => res.data.length !== 0 ? setCompletedOrderForm(res.data) : setCompletedOrderForm([{price: '-'}]))
             .catch(error => console.log(error));   

        setModalOpen(false)
    }

    const getAll = (seq) => {
        setSize('모든 사이즈');

        axios.get(`http://localhost:8080/getSellBidsList?seq=${seq}`)
                .then(res => res.data.length !== 0 ? setSellBidsListForm(res.data) : setSellBidsListForm([{price: '-'}]))
                .catch(error => console.log(error))    

        axios.get(`http://localhost:8080/getBuyBidsList?seq=${seq}`)
                .then(res => res.data.length !== 0 ? setBuyBidsListForm(res.data) : setBuyBidsListForm([{price: '-'}]))
                .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getCompletedOrderList?seq=${seq}`)
                .then(res => res.data.length !== 0 ? setCompletedOrderForm(res.data) : setCompletedOrderForm([{price: '-'}]))
                .catch(error => console.log(error));    
        
        setModalOpen(false)
    }

    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장 
    const [ScrollActive, setScrollActive] = useState(true); 
    const handleScroll = () => { 
        if(ScrollY < 1100) {
            setScrollY(window.pageYOffset);
            if(!ScrollActive) setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            if(ScrollActive) setScrollActive(false);
            
        }
    }

    const [ScrollActive2, setScrollActive2] = useState(true); 
    const handleScroll2 = () => { 
        if(ScrollY < 400) {
            setScrollY(window.pageYOffset);
            //if(!ScrollActive2) 
            setScrollActive2(true);
        } else {
            setScrollY(window.pageYOffset);
           // if(ScrollActive2) 
            setScrollActive2(false);
        }
    }
    useEffect(() => {
        const scrollListener= () => {  window.addEventListener("scroll", handleScroll); } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => { window.removeEventListener("scroll", handleScroll); }; //  window 에서 스크롤을 감시를 종료
    });

    useEffect(() => {
        const scrollListener= () => {  window.addEventListener("scroll", handleScroll2); } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => { window.removeEventListener("scroll", handleScroll2); }; //  window 에서 스크롤을 감시를 종료
    });

    const buyNavigate = () => {
        navigate(`/buy?seq=${seq}`)
    }

    const sellNavigate = () => {
        navigate(`/sell?seq=${seq}`)
    }

    const brandNavigate = (seq) => {
        navigate(`/products/${seq}`)
        window.location.reload()
    }

    const onInterest = () => {
        // likeForm.userLike || setLikeForm({...likeForm, userLike:'false'})
        
        setLikeForm({...likeForm, userLike:!likeForm.userLike})
        if(likeForm.userLike){
            setForm({...form,likes:form.likes-1})
        }else{
            setForm({...form,likes:form.likes+1})
        }
        // console.log(likeForm)
    
        // // 데이터가 없어서 강제 주입
        // setLikeForm({...likeForm , seq:searchParams.get('seq'),id:'asd'})

        axios.post(`http://localhost:8080/used/likeSet?seq=`+seq + '&id=' + id + '&userLike=' + likeForm.userLike + '&shopKind=' + shopKind)
        // axios.post('http://localhost:8080/used/likeSet',null,{params:likeForm})
        // axios.get('http://localhost:8080/used/likeSet'+   likeForm) 나중에 다시 해보기
        .then()
        .catch()
        
    }



    return (
        <>
        <ScrollToTop/>
        <GlobalStyle/>
        <S.ProductsWrapper>
            <S.ContainerDetail>
                <S.Content>
                    <h2 hidden={true}>상품상세</h2>
                    <S.ColumnBind>
                        <S.ColumnIsFixed>
                            <S.ColumnBox ScrollActive={ ScrollActive }>
                                <div className="spread">
                                    <S.Image src={form.img} ></S.Image>
                                </div>
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
                                <S.BannerAlert>
                                    <S.BannerAlertContent>
                                        <div>
                                            <S.AlertTitleCareMark>주의</S.AlertTitleCareMark>
                                            <S.AlertTitleAlertText>판매 거래 주의사항</S.AlertTitleAlertText>
                                        </div>
                                        <S.AlertTitleAlertSubText>반드시 보유한 상품만 판매하세요</S.AlertTitleAlertSubText>
                                    </S.BannerAlertContent>
                                </S.BannerAlert>
                            </S.ColumnBox>
                            {modalOpen && <ModalBasic setModalOpen={setModalOpen} getSize={getSize} getAll={getAll} sizeForm={sizeForm} seq={seq}/> }
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
                                                <S.MainTitleBoxBrand>{form.brand}</S.MainTitleBoxBrand>
                                            </div>
                                            <S.MainTitleBoxTitle>{form.title}</S.MainTitleBoxTitle>
                                            <S.MainTitleBoxSubTitle>{form.subTitle}</S.MainTitleBoxSubTitle>
                                        </div>
                                    </div>
                                    <div className="product_figure_wrap">
                                        <S.DetailSize title={size} option-title="사이즈">
                                            <S.DetailSizeTitle>
                                                <S.DetailSizeTitleText>사이즈</S.DetailSizeTitleText>
                                            </S.DetailSizeTitle>
                                            <S.DetailSizeSize>
                                                <S.BtnSize>
                                                    {isOneSize ? 'ONE SIZE' : <S.BtnSizeBtnText onClick={e => setModalOpen(true)}>{size}</S.BtnSizeBtnText> }
                                                    {/* <S.BtnSizeBtnText onClick={e => setModalOpen(true)}>{size}</S.BtnSizeBtnText> */}
                                                    {/* <svg>
                                                        <use></use>
                                                    </svg> */}
                                                </S.BtnSize>
                                            </S.DetailSizeSize>
                                        </S.DetailSize>
                                        <S.DetailPrice>
                                            <S.DetailPriceTitle>
                                                <S.DetailPriceTitleText>최근 거래가</S.DetailPriceTitleText>
                                            </S.DetailPriceTitle>
                                            <S.DetailPricePrice>
                                                <S.DetailPriceAmount>
                                                    <S.DetailPriceNum>
                                                        { completedOrderForm[0].price }
                                                    </S.DetailPriceNum>
                                                    <S.DetailPriceWon>원</S.DetailPriceWon>
                                                </S.DetailPriceAmount>
                                                <div className="fluctuation decrease">
                                                    <p></p>
                                                </div>
                                            </S.DetailPricePrice>
                                        </S.DetailPrice>
                                    </div>
                                    <div className="btn-wrap">
                                        <S.DivisionBtnBox>
                                            <S.DivisionBtnBoxBtnDivisionBuy onClick={ buyNavigate }>
                                                <S.DivisionBtnBoxTitle>구매</S.DivisionBtnBoxTitle>
                                                <S.DivisionBtnBoxPrice>
                                                    <S.DivisionBtnBoxAmount>
                                                        <S.DivisionBtnBoxNum>
                                                            { sellBidsListForm[0].price }
                                                        </S.DivisionBtnBoxNum>
                                                        <S.DivisionBtnBoxWon>원</S.DivisionBtnBoxWon>
                                                    </S.DivisionBtnBoxAmount>
                                                    <S.DivisionBtnBoxDesc>즉시 구매가</S.DivisionBtnBoxDesc>
                                                </S.DivisionBtnBoxPrice>
                                            </S.DivisionBtnBoxBtnDivisionBuy>
                                            <S.DivisionBtnBoxBtnDivisionSell onClick={ sellNavigate }>
                                                <S.DivisionBtnBoxTitle>판매</S.DivisionBtnBoxTitle>
                                                <S.DivisionBtnBoxPrice>
                                                    <S.DivisionBtnBoxAmount>
                                                        <S.DivisionBtnBoxNum>   
                                                            { buyBidsListForm[0].price }
                                                        </S.DivisionBtnBoxNum>
                                                        <S.DivisionBtnBoxWon>원</S.DivisionBtnBoxWon>
                                                    </S.DivisionBtnBoxAmount>
                                                    <S.DivisionBtnBoxDesc>즉시 판매가</S.DivisionBtnBoxDesc>
                                                </S.DivisionBtnBoxPrice>
                                            </S.DivisionBtnBoxBtnDivisionSell>
                                        </S.DivisionBtnBox>
                                        <S.LargeBtnWish area-label="관심상품" onClick={onInterest} >
                                            {/* <U.InterestInput src={likeForm.userLike?'/image/used/blackBookmark.png':'../image/used/bookmark.svg'}/> */}
                                            <S.LargeBtnWishBtnImg src={likeForm.userLike?'/image/used/blackBookmark.png':'../image/used/bookmark.svg'}/>
                                            <S.LargeBtnWishBtnText>관심상품</S.LargeBtnWishBtnText>
                                            <S.LargeBtnWishCountNum>100</S.LargeBtnWishCountNum>
                                        </S.LargeBtnWish>
                                    </div>
                                </div>
                                <div className="product_info_wrap">
                                    <S.DetailTitleInfoTitle>상품 정보</S.DetailTitleInfoTitle>
                                    <S.DetailProductWrap>
                                        <S.DetailProduct>
                                            <S.DetailBoxModelNum>
                                                <S.DetailBoxProductTitle>모델번호</S.DetailBoxProductTitle>
                                                <S.DetailBoxProductInfo>{form.modelNum}</S.DetailBoxProductInfo>
                                            </S.DetailBoxModelNum>
                                            <S.DetailBox>
                                                <S.DetailBoxProductTitle>출시일</S.DetailBoxProductTitle>
                                                <S.DetailBoxProductInfo>{form.releaseDate}</S.DetailBoxProductInfo>
                                            </S.DetailBox>
                                            <S.DetailBox>
                                                <S.DetailBoxProductTitle>컬러</S.DetailBoxProductTitle>
                                                <S.DetailBoxProductInfo>{form.color}</S.DetailBoxProductInfo>
                                            </S.DetailBox>
                                            <S.DetailBox>
                                                <S.DetailBoxProductTitle>발매가</S.DetailBoxProductTitle>
                                                <S.DetailBoxProductInfo>{form.releasePrice}</S.DetailBoxProductInfo>
                                            </S.DetailBox>
                                        </S.DetailProduct>
                                    </S.DetailProductWrap>
                                </div>                               
                                <S.DeliveryWayWrap>
                                    <S.DeliveryWayWrapDetailTitle>배송 정보</S.DeliveryWayWrapDetailTitle>
                                    <S.DeliveryWay>
                                        <S.WayInfo>
                                            <S.WayStatusThumb>
                                                <img src="https://kream-phinf.pstatic.net/MjAyMTExMjFfMjU5/MDAxNjM3NDczNzU0MjA1.ON3pvFYAq_xSSaNWDgUWe1YfIx-C0fm91PDtcsUn3AEg.Q4EbbNWl_ua916jg0NQ0dWOS3h7W9eiiI2kK9YPWlgwg.PNG/a_120a84f036724d0d97a2343aafff4ecf.png" width="40px" height="40px"/>
                                            </S.WayStatusThumb>
                                            <S.WayDesc>
                                                <S.Company>
                                                    <S.CompanyBadgeTitle>빠른배송</S.CompanyBadgeTitle>
                                                </S.Company>
                                                <S.SubText>
                                                    지금 결제시 
                                                    <em style={{color: "#297dcb"}}>&nbsp; 모레 {(date.getMonth()+1) + "/" + (date.getDate()+2)}일 도착 예정</em>
                                                </S.SubText>
                                            </S.WayDesc>
                                        </S.WayInfo>
                                    </S.DeliveryWay>
                                </S.DeliveryWayWrap>
                                <div className="banner_box"> {/*움직이는 배너박스, 차후 적용*/}
                                </div>
                                <div className="detail_wrap">
                                    <S.ProductSalesGraph>
                                        <S.ProductSalesGraphTitle>
                                            <S.ProductSalesGraphDetailTitle>시세</S.ProductSalesGraphDetailTitle>
                                            <S.ProductSalesGraphSalesFilter>
                                                <S.FilterUnit>
                                                    <S.BtnBtnSelect slot="button" onClick={ e => setOpenLayer(!openLayer)}>
                                                        <S.SelectTextLayerOpen>
                                                            {isOneSize ? 'ONE SIZE' : size}
                                                        </S.SelectTextLayerOpen>
                                                    </S.BtnBtnSelect>
                                                    <S.LayerSizeListLayer hidden={openLayer}>
                                                        <S.LayerSizeListLayerContainer>
                                                            <S.LayerSizeListLayercontent>
                                                                <S.SizeList>
                                                                    <S.SizeItem>
                                                                        <S.SizeLink size={size} itemSize={'모든 사이즈'} onClick={(e) => {getAll(seq); setOpenLayer(true);}}>
                                                                            {isOneSize ? 'ONE SIZE' : '모든 사이즈'}
                                                                        </S.SizeLink>
                                                                    </S.SizeItem>
                                                                    {   
                                                                        !isOneSize && 
                                                                        sizeForm.map((item, index) => (
                                                                        <S.SizeItem key={index}>
                                                                            <S.SizeLink size={size} itemSize={item.size} onClick={(e) => {getSize(seq, item.size); setOpenLayer(true);}}>
                                                                                {item.size}
                                                                            </S.SizeLink>
                                                                        </S.SizeItem>))
                                                                    }
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
                                                {/* <div id="sales_panel2" role="tabpanel" className="tab_content" span="3m">
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
                                                </div> */}
                                            </S.TabArea>
                                        </S.WrapSales>
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
                                                    {completedOrderForm[0].price !== '-' && <S.BtnOutLineGrey>체결 내역 더보기</S.BtnOutLineGrey>}
                                                </S.TabContent>
                                                <S.TabContent open={ open7 }>
                                                    <S.TableWrap>
                                                        {sellBidsListForm[0].price !== '-' ? <SellBidsTable sellBidsListForm={sellBidsListForm}/> : <EmptyTable word={'판매 희망가'}/>}
                                                    </S.TableWrap>
                                                    {sellBidsListForm[0].price !== '-' && <S.BtnOutLineGrey>입찰 내역 더보기</S.BtnOutLineGrey>}
                                                </S.TabContent>
                                                <S.TabContent open={ open8 }>
                                                    <S.TableWrap>
                                                        {buyBidsListForm[0].price !== '-' ? <BuyBidsTable buyBidsListForm={buyBidsListForm}/> : <EmptyTable word={'구매 희망가'}/>}   
                                                    </S.TableWrap>
                                                    {buyBidsListForm[0].price !== '-' && <S.BtnOutLineGrey>입찰 내역 더보기</S.BtnOutLineGrey>}
                                                </S.TabContent>
                                            </S.TabArea>
                                        </S.WrapBids>
                                    </S.ProductSalesGraph>
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
                                                                                "크림은 최대한 빠르게 불라불라 속도에 차이있음"
                                                                            </S.Emphasis>
                                                                        </div>
                                                                        <ul className="content_list" style={{ marginTop: "20px" }}>
                                                                            <li className="content_item">
                                                                                <p className="title_txt"> [빠른배송 구매]</p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt" style={{ marginTop: "20px" }}> "판매자가 어쩌구 구매 가능합니다" </p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt"> 
                                                                                    "오늘오후 어쩌구 출고일 변경"
                                                                                    <a href="#" className="txt_link">빠른배송 안내</a> 
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
                                                                                "크림은 책임없음"
                                                                            </S.Emphasis>
                                                                        </div>
                                                                        <ul className="content_list" style={{ marginTop: "20px" }}>
                                                                            <li className="content_item">
                                                                                <p className="title_txt"> [검수정책 알아보기]</p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt" style={{ marginTop: "20px" }}> "판매자가 어쩌구 구매 가능합니다" </p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt"> 
                                                                                    "오늘오후 어쩌구 출고일 변경"
                                                                                    <a href="#" className="txt_link">빠른배송 안내</a> 
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
                                                                                "크림은 책임없음"
                                                                            </S.Emphasis>
                                                                        </div>
                                                                        <ul className="content_list" style={{ marginTop: "20px" }}>
                                                                            <li className="content_item">
                                                                                <p className="title_txt"> [검수정책 알아보기]</p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt" style={{ marginTop: "20px" }}> "판매자가 어쩌구 구매 가능합니다" </p>
                                                                            </li>
                                                                            <li className="content_item">
                                                                                <p className="main_txt"> 
                                                                                    "오늘오후 어쩌구 출고일 변경"
                                                                                    <a href="#" className="txt_link">빠른배송 안내</a> 
                                                                                </p>
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
                                                        <S.ThumbAreaImg>  
                                                        </S.ThumbAreaImg>
                                                    </S.ThumbArea>
                                                    <div className="text_area" style={{overflow: "hidden"}}>
                                                        <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                        <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                    </div>
                                                </li>
                                                <li className="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                    <S.ThumbArea>
                                                        <S.ThumbAreaImg></S.ThumbAreaImg>
                                                    </S.ThumbArea>
                                                    <div className="text_area" style={{overflow: "hidden"}}>
                                                        <S.TextAreaTitle>엄격한 다중검수</S.TextAreaTitle>
                                                        <S.TextAreaDesc>모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.</S.TextAreaDesc>
                                                    </div>
                                                </li>
                                                <li className="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                    <S.ThumbArea>
                                                        <S.ThumbAreaImg></S.ThumbAreaImg>
                                                    </S.ThumbArea>
                                                    <div className="text_area" style={{overflow: "hidden"}}>
                                                        <S.TextAreaTitle>정품 인증 패키지</S.TextAreaTitle>
                                                        <S.TextAreaDesc>검수에 합격한 경우에 한하여 KREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.</S.TextAreaDesc>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <S.MeditationNoticeProduct>
                                        크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 크림(주)에 있습니다.
                                        </S.MeditationNoticeProduct>
                                    </div>
                                </div>
                                <S.FloatingPrice ScrollActive2={ ScrollActive2 }>
                                    <S.FloatingPriceInnerBox>
                                        <S.FloatingPriceProductArea>
                                            <S.FloatingPriceProductThumb>
                                                <S.PictureProductImg>
                                                    <S.Image src={form.img} width="65px" height="65px"></S.Image>
                                                </S.PictureProductImg>
                                            </S.FloatingPriceProductThumb>
                                            <S.FloatingProductInfo>
                                                <S.FloatingProductName>{form.title}</S.FloatingProductName>
                                                <S.FloatingProductTranslatedName>{form.subTitle}</S.FloatingProductTranslatedName>
                                            </S.FloatingProductInfo>
                                        </S.FloatingPriceProductArea>
                                        <S.FloatingProductBtnArea>
                                            <S.FloatingBtnOutLineGrey onClick={onInterest}>
                                            <S.LargeBtnWishBtnImg src={likeForm.userLike?'/image/used/blackBookmark.png':'../image/used/bookmark.svg'}/>
                                                <S.WishCountNum>3.1만</S.WishCountNum>
                                            </S.FloatingBtnOutLineGrey>
                                            <S.FloatingPriceDivisionBtnBox>
                                                <S.FloatingPriceDivisionBuy onClick={ buyNavigate }>
                                                    <S.FloatingPriceTitle>구매</S.FloatingPriceTitle>
                                                    <S.FloatingPriceBuyPrice>
                                                        <S.DivisionBtnBoxAmount>
                                                            <S.DivisionBtnBoxNum>{ sellBidsListForm[0].price.toLocaleString('ko-KR') }</S.DivisionBtnBoxNum>
                                                            <S.DivisionBtnBoxWon>원</S.DivisionBtnBoxWon>
                                                        </S.DivisionBtnBoxAmount>
                                                        <S.DivisionBtnBoxDesc>즉시 구매가</S.DivisionBtnBoxDesc>
                                                    </S.FloatingPriceBuyPrice>
                                                </S.FloatingPriceDivisionBuy>
                                                <S.FloatingPriceBtnDivisionSell onClick={ sellNavigate }>
                                                    <S.FloatingPriceTitle>판매</S.FloatingPriceTitle>
                                                        <S.FloatingPriceSellPrice>
                                                            <S.DivisionBtnBoxAmount>
                                                                <S.DivisionBtnBoxNum>{ buyBidsListForm[0].price.toLocaleString('ko-KR')}</S.DivisionBtnBoxNum>
                                                                <S.DivisionBtnBoxWon>원</S.DivisionBtnBoxWon>
                                                            </S.DivisionBtnBoxAmount>
                                                            <S.DivisionBtnBoxDesc>즉시 판매가</S.DivisionBtnBoxDesc>
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
                            {/* 스타일 카운트 */}
                            <S.FeedTitleNum>1234</S.FeedTitleNum> 
                        </S.FeedTitle>
                        <S.SocialFeeds>
                            <S.MoreBtnBox>
                                <S.ButtonOutlineGreyMedium>
                                    더보기
                                </S.ButtonOutlineGreyMedium>
                            </S.MoreBtnBox>
                        </S.SocialFeeds>
                    </S.FeedArea>
                    <S.BrandArea>
                        <S.BrandTitle>
                            <S.BrandTitleBrand>{form.brand}</S.BrandTitleBrand>
                            <S.BrandTitleText>의 다른 상품</S.BrandTitleText>
                            <S.BtnMore>
                                <S.BtnText>더 보기</S.BtnText>
                                {/* <svg></svg> */}
                            </S.BtnMore>
                        </S.BrandTitle>
                        <S.BrandProducts>
                            <S.BrandProductList>
                            {
                                brandListForm.map((item, index) => (
                                    <S.ProductItem key={index}>
                                        <S.ItemInner onClick={() => brandNavigate(item.seq)}>
                                            <div className='thumb_box'>
                                                <S.Product>
                                                    <S.PictureBrandProductImg>
                                                        <S.BrandProductImg src={item.img}/>
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
                                                        <S.BrandProductInfoBoxPriceAmountNum>{item.price}</S.BrandProductInfoBoxPriceAmountNum>
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