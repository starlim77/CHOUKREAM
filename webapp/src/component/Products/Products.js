import axios from "axios";
import React, { useEffect, useState } from 'react';
import ModalBasic from './ModalBasic';
import * as S from './style';
import GlobalStyle from './GlobalStyle';
import { useNavigate, useParams } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const Products = () => {

    const time = (a) => {
        var date = new Date(a)
        var b = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()
        return b
    }

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

    const [sizeForm, setSizeForm] = useState([{}])

    const [size ,setSize] = useState("모든 사이즈");

    const [openLayer, setOpenLayer] =useState(true)

    const [isOneSize, setIsOneSize] = useState(true);

    const [dropdown, setDropdown] = useState(true);
    const OpenDrop = () => {  
        setDropdown(!dropdown);
        console.log(completedOrderForm)
        console.log(completedOrderForm[0].size)
        
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
        
    }, []);

    const getSize = (seq, size) => {
        setSize(size);

        axios.get(`http://localhost:8080/getSellBidsListBySize?size=${size}&seq=${seq}`)
             .then(res => res.data.length !== 0 ? setSellBidsListForm(res.data) : setSellBidsListForm([{orderPrice: '-'}]))
             .catch(error => console.log(error))    

        axios.get(`http://localhost:8080/getBuyBidsListBySize?size=${size}&seq=${seq}`)
             .then(res => res.data.length !== 0 ? setBuyBidsListForm(res.data) : setBuyBidsListForm([{orderPrice: '-'}]))
             .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getCompletedOrderListBySize?size=${size}&seq=${seq}`)
             .then(res => res.data.length !== 0 ? setCompletedOrderForm(res.data) : setCompletedOrderForm([{price: '-'}]))
             .catch(error => console.log(error));   

        setModalOpen(false)
    }

    const getAll = (seq) => {
        setSize('모든 사이즈');

        axios.get(`http://localhost:8080/getSellBidsList?seq=${seq}`)
                .then(res => res.data.length !== 0 && setSellBidsListForm(res.data))
                .catch(error => console.log(error))    

        axios.get(`http://localhost:8080/getBuyBidsList?seq=${seq}`)
                .then(res => res.data.length !== 0 && setBuyBidsListForm(res.data))
                .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getCompletedOrderList?seq=${seq}`)
                .then(res => res.data.length !== 0 && setCompletedOrderForm(res.data))
                .catch(error => console.log(error));    
        
        setModalOpen(false)
    }

    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장 
    const [ScrollActive, setScrollActive] = useState(true); 
    const handleScroll = () => { 
        if(ScrollY < 390) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
        }
    }
    useEffect(() => {
        const scrollListener= () => {  window.addEventListener("scroll", handleScroll); } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => { window.removeEventListener("scroll", handleScroll); }; //  window 에서 스크롤을 감시를 종료
    });

    const buyNavigate = () => {
        navigate(`/buy?seq=${seq}`)
    }

    const sellNavigate = () => {
        navigate(`/sell?seq=${seq}`)
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
                                    <img src={form.img}></img>
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
                            {modalOpen && <ModalBasic setModalOpen={setModalOpen} setSellBidsListForm={setSellBidsListForm} setSize={setSize} getSize={getSize} 
                                                      setBuyBidsListForm={setBuyBidsListForm} setCompletedOrderForm={setCompletedOrderForm} sizeForm={sizeForm} seq={seq}/> }
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
                                        <S.LargeBtnWish area-label="관심상품">
                                            {/* <svg className="icon sprite-icons ico-wish-off">
                                                <use></use>
                                            </svg> */}
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
                                {/* <div className="delivery_way_wrap"> 배송
                                    <h3 className="detail_title">배송 정보</h3>
                                    <div className="delivery_way">
                                        <div className="way_info">
                                            <div className="way_status_thumb">
                                                <img></img>
                                            </div>
                                            <div className="way_desc">
                                                <p className="company">
                                                    <span className="badge_title">일반배송</span>
                                                    <span className="title"></span>
                                                </p>
                                                <p className="sub_text">검수 후 배송 * 일 내 도착 예정</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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
                                                                            {isOneSize ? 'ONE SIZE' : size}
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
                                                {/* <div id="sales_panel1" role="tabpanel" className="tab_content show" span="1m">
                                                    <div className="graph">
                                                        <canvas></canvas>
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
                                                        <S.Table>
                                                            <S.TableCaption>
                                                                <S.TableBlind>데이터 테이블</S.TableBlind>
                                                            </S.TableCaption>
                                                            <S.ColGroup>
                                                                <col style={{width: "29.76%"}}/>
                                                                <col style={{width: "36.52%"}}/>
                                                                <col style={{width: "33.72%"}}/>
                                                            </S.ColGroup>
                                                            <thead>
                                                                <tr>
                                                                    <S.TableTh>사이즈</S.TableTh>
                                                                    <S.TableThAlignRight>거래가</S.TableThAlignRight>
                                                                    <S.TableThAlignRight>거래일</S.TableThAlignRight>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {[...Array(parseInt(5))].map((n, index) => {
                                                                    return <tr key={index}>
                                                                    <S.TableTd>
                                                                        {completedOrderForm.length > index ? completedOrderForm[index].size : '-'}
                                                                    </S.TableTd>
                                                                    <S.TableTdAlignRight>
                                                                        {completedOrderForm.length > index ? completedOrderForm[index].price.toLocaleString('ko-KR')+'원' : '-'}
                                                                    </S.TableTdAlignRight>
                                                                    <S.TableTdAlignRight>
                                                                        {completedOrderForm.length > index ? time(completedOrderForm[index].tradeDate) : '-'}
                                                                    </S.TableTdAlignRight>
                                                                </tr>
                                                            })}
                                                            </tbody>
                                                        </S.Table>
                                                    </S.TableWrap>
                                                    <S.BtnOutLineGrey>체결 내역 더보기</S.BtnOutLineGrey>
                                                </S.TabContent>
                                                <S.TabContent open={ open7 }>
                                                    <S.TableWrap>
                                                        <S.Table>
                                                            <S.TableCaption>
                                                                <S.TableBlind>데이터 테이블</S.TableBlind>
                                                            </S.TableCaption>
                                                            <S.ColGroup>
                                                                <col style={{width: "29.76%"}}/>
                                                                <col style={{width: "36.52%"}}/>
                                                                <col style={{width: "33.72%"}}/>
                                                            </S.ColGroup>
                                                            <thead>
                                                                <tr>
                                                                    <S.TableTh>사이즈</S.TableTh>
                                                                    <S.TableThAlignRight>판매 희망가</S.TableThAlignRight>
                                                                    <S.TableThAlignRight>수량</S.TableThAlignRight>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {[...Array(parseInt(5))].map((n, index) => {
                                                                    return <tr key={index}>
                                                                    <S.TableTd>
                                                                        {sellBidsListForm.length > index ? sellBidsListForm[index].size : '-'}
                                                                    </S.TableTd>
                                                                    <S.TableTdAlignRight>
                                                                        {sellBidsListForm.length > index ? sellBidsListForm[index].price.toLocaleString('ko-KR')+'원' : '-'}
                                                                    </S.TableTdAlignRight>
                                                                    <S.TableTdAlignRight>
                                                                        {sellBidsListForm.length > index ? sellBidsListForm[index].count : '-'}
                                                                    </S.TableTdAlignRight>
                                                                </tr>
                                                            })}
                                                            </tbody>
                                                        </S.Table>
                                                    </S.TableWrap>
                                                    <S.BtnOutLineGrey>입찰 내역 더보기</S.BtnOutLineGrey>
                                                </S.TabContent>
                                                <S.TabContent open={ open8 }>
                                                    <S.TableWrap>
                                                        <S.Table>
                                                            <S.TableCaption>
                                                                <S.TableBlind>데이터 테이블</S.TableBlind>
                                                            </S.TableCaption>
                                                            <S.ColGroup>
                                                                <col style={{width: "29.76%"}}/>
                                                                <col style={{width: "36.52%"}}/>
                                                                <col style={{width: "33.72%"}}/>
                                                            </S.ColGroup>
                                                            <thead>
                                                                <tr>
                                                                    <S.TableTh>사이즈</S.TableTh>
                                                                    <S.TableThAlignRight>구매 희망가</S.TableThAlignRight>
                                                                    <S.TableThAlignRight>수량</S.TableThAlignRight>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            {[...Array(parseInt(5))].map((n, index) => {
                                                                    return <tr key={index}>
                                                                    <S.TableTd>
                                                                        {buyBidsListForm.length > index ? buyBidsListForm[index].size : '-'}
                                                                    </S.TableTd>
                                                                    <S.TableTdAlignRight>
                                                                        {buyBidsListForm.length > index ? buyBidsListForm[index].price.toLocaleString('ko-KR')+'원' : '-'}
                                                                    </S.TableTdAlignRight>
                                                                    <S.TableTdAlignRight>
                                                                        {buyBidsListForm.length > index ? buyBidsListForm[index].count : '-'}
                                                                    </S.TableTdAlignRight>
                                                                </tr>
                                                            })}
                                                            </tbody>
                                                        </S.Table>
                                                    </S.TableWrap>
                                                    <S.BtnOutLineGrey>입찰 내역 더보기</S.BtnOutLineGrey>
                                                </S.TabContent>
                                            </S.TabArea>
                                        </S.WrapBids>
                                    </S.ProductSalesGraph>
                                </div>
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
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
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
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li className="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div className="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <S.MeditationNoticeProduct>
                                    크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 크림(주)에 있습니다.
                                    </S.MeditationNoticeProduct>
                                </div>
                            </div>                           
                        </S.Column>
                    </S.ColumnBind>
                </S.Content>
                <S.Content div className="feed_area">
                <div className="point_guide" style={{paddingTop: "40px"}}>
                    
                                        <ul className="guide_list">
                                            <li className="guide_item" style={{overflow: "hidden"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
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
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li className="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div className="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="point_guide" style={{paddingTop: "40px"}}>
                                        <ul className="guide_list">
                                            <li className="guide_item" style={{overflow: "hidden"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
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
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li className="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div className="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="point_guide" style={{paddingTop: "40px"}}>
                                        <ul className="guide_list">
                                            <li className="guide_item" style={{overflow: "hidden"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
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
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li className="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div className="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>                                                 */}
                </S.Content>
                <div className="other_product_area">

                </div>
            </S.ContainerDetail>
            <div className="footer floation_price"> {/*나중에 위에 달라붙는 가격표 만들기*/}

            </div>
        </S.ProductsWrapper>
        </>
    );
};

export default Products;