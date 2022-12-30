import axios from "axios";
import React, { useEffect, useState } from 'react';
import ModalBasic from './ModalBasic';
import * as S from './style';
import GlobalStyle from './GlobalStyle';
import { useParams } from "react-router-dom";

const Products = () => {
    const {seq} = useParams();

    const [modalOpen, setModalOpen] = useState(false);

    const [form, setForm] = useState({});

    const [sellOrderForm, setSellOrderForm] = useState([{
        orderPrice: '-'
    }]);

    const [buyOrderForm, setBuyOrderForm] = useState([{
        orderPrice: '-'
    }]);

    const [completedOrderForm, setCompletedOrderForm] = useState([{
        price: '-'
    }]);

    const [dropdown, setDropdown] = useState(true);
    const OpenDrop = () => {  
        setDropdown(!dropdown);
        console.log(completedOrderForm)
    }
    const [dropdown1, setDropdown1] = useState(true);
    const OpenDrop1 = () => {
        setDropdown1(!dropdown1);
        console.log(sellOrderForm)
    }
    const [dropdown2, setDropdown2] = useState(true);
    const OpenDrop2 = () => {
        setDropdown2(!dropdown2);
        console.log(buyOrderForm)
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/getProduct?seq=${seq}`)
             .then(res => res.data !== null && setForm(res.data))
             .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getSellOrderList?seq=${seq}`)
             .then(res => res.data.length !== 0 && setSellOrderForm(res.data))
             .catch(error => console.log(error))    

        axios.get(`http://localhost:8080/getBuyOrderList?seq=${seq}`)
             .then(res => res.data.length !== 0 && setBuyOrderForm(res.data))
             .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getCompletedOrderList?seq=${seq}`)
             .then(res => res.data.length !== 0 && setCompletedOrderForm(res.data))
             .catch(error => console.log(error));   

    }, []);


    return (
        <>
        
        <GlobalStyle/>
        <S.ProductsWrapper>
            <S.ContainerDetail>
                <S.Content>
                    <h2 hidden={true}>상품상세</h2>
                    <S.ColumnBind>
                        <S.ColumnIsFixed>
                            <S.ColumnBox>
                                <div class="spread">
                                    <img src={form.img}></img>
                                </div>
                                {/* <div class="column_box">
                                    <div class="detail_banner_area">
                                        <div class="banner_slide detail_slide slick-slider slick-initialized">
                                            <button data-role="none" class="slick-arrow slick-prev slick-disabled" display="block">Previous</button>
                                            <div class="slick-list">
                                            </div>
                                            <button data-role="none" class="slick-arrow slick-prev slick-disabled" display="block">Next</button>
                                        </div>
                                    </div>
                                </div> */}
                                <S.BannerAlert>
                                    <S.BannerAlertContent onClick={e => setModalOpen(true)}>
                                        <p>
                                            <S.AlertTitleCareMark>주의</S.AlertTitleCareMark>
                                            <S.AlertTitleAlertText>판매 거래 주의사항</S.AlertTitleAlertText>
                                        </p>
                                        <S.AlertTitleAlertSubText>반드시 보유한 상품만 판매하세요</S.AlertTitleAlertSubText>
                                    </S.BannerAlertContent>
                                </S.BannerAlert>
                            </S.ColumnBox>
                            {modalOpen && <ModalBasic setModalOpen={setModalOpen}/>}
                            {/* <div class="ico_arrow">
                                <svg>
                                    <use></use>
                                </svg>
                            </div> */}                            
                        </S.ColumnIsFixed>
                        <S.Column>
                            <div class="column_box">
                                <div class="column_top">
                                    <div class="detail_main_title">
                                        <div class="main_title_box">
                                            <div>
                                                <S.MainTitleBoxBrand>{form.brand}</S.MainTitleBoxBrand>
                                            </div>
                                            <S.MainTitleBoxTitle>{form.title}</S.MainTitleBoxTitle>
                                            <S.MainTitleBoxSubTitle>{form.subTitle}</S.MainTitleBoxSubTitle>
                                        </div>
                                    </div>
                                    <div class="product_figure_wrap">
                                        <S.DetailSize title="모든 사이즈" option-title="사이즈">
                                            <S.DetailSizeTitle>
                                                <S.DetailSizeTitleText>사이즈</S.DetailSizeTitleText>
                                            </S.DetailSizeTitle>
                                            <S.DetailSizeSize>
                                                <S.BtnSize>
                                                    <S.BtnSizeBtnText>{form.size}</S.BtnSizeBtnText>
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
                                                <div class="fluctuation decrease">
                                                    <p></p>
                                                </div>
                                            </S.DetailPricePrice>
                                        </S.DetailPrice>
                                    </div>
                                    <div class="btn-wrap">
                                        <S.DivisionBtnBox>
                                            <S.DivisionBtnBoxBtnDivisionBuy>
                                                <S.DivisionBtnBoxTitle>구매</S.DivisionBtnBoxTitle>
                                                <S.DivisionBtnBoxPrice>
                                                    <S.DivisionBtnBoxAmount>
                                                        <S.DivisionBtnBoxNum>
                                                            { sellOrderForm[0].orderPrice }
                                                        </S.DivisionBtnBoxNum>
                                                        <S.DivisionBtnBoxWon>원</S.DivisionBtnBoxWon>
                                                    </S.DivisionBtnBoxAmount>
                                                    <S.DivisionBtnBoxDesc>즉시 구매가</S.DivisionBtnBoxDesc>
                                                </S.DivisionBtnBoxPrice>
                                            </S.DivisionBtnBoxBtnDivisionBuy>
                                            <S.DivisionBtnBoxBtnDivisionSell>
                                                <S.DivisionBtnBoxTitle>판매</S.DivisionBtnBoxTitle>
                                                <S.DivisionBtnBoxPrice>
                                                    <S.DivisionBtnBoxAmount>
                                                        <S.DivisionBtnBoxNum>   
                                                            { buyOrderForm[0].orderPrice }
                                                        </S.DivisionBtnBoxNum>
                                                        <S.DivisionBtnBoxWon>원</S.DivisionBtnBoxWon>
                                                    </S.DivisionBtnBoxAmount>
                                                    <S.DivisionBtnBoxDesc>즉시 판매가</S.DivisionBtnBoxDesc>
                                                </S.DivisionBtnBoxPrice>
                                            </S.DivisionBtnBoxBtnDivisionSell>
                                        </S.DivisionBtnBox>
                                        <S.LargeBtnWish area-label="관심상품">
                                            {/* <svg class="icon sprite-icons ico-wish-off">
                                                <use></use>
                                            </svg> */}
                                            <S.LargeBtnWishBtnText>관심상품</S.LargeBtnWishBtnText>
                                            <S.LargeBtnWishCountNum>100</S.LargeBtnWishCountNum>
                                        </S.LargeBtnWish>
                                    </div>
                                </div>
                                <div class="product_info_wrap">
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
                                {/* <div class="delivery_way_wrap"> 배송
                                    <h3 class="detail_title">배송 정보</h3>
                                    <div class="delivery_way">
                                        <div class="way_info">
                                            <div class="way_status_thumb">
                                                <img></img>
                                            </div>
                                            <div class="way_desc">
                                                <p class="company">
                                                    <span class="badge_title">일반배송</span>
                                                    <span class="title"></span>
                                                </p>
                                                <p class="sub_text">검수 후 배송 * 일 내 도착 예정</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div class="banner_box"> {/*움직이는 배너박스, 차후 적용*/}
                                </div>
                                {/* <div class="detail_wrap">
                                    <div class="product_sales_graph">
                                        <div class="title">
                                            <h3 class="detail_title">시세</h3>
                                            <div class="sales_filter">
                                                <div class="filter_unit">
                                                    <button class="btn btn_select" slot="button">
                                                        <span class="select_text layer_open">
                                                            "모든 사이즈"
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wrap_sales">
                                            <div class="tab_area">
                                                <ul role="tablist" class="tab_list">
                                                    <li role="tab" aria-selected="false" aria-controlls="sales_panel1" class="item">
                                                        <a href="#" class="item_link">1개월</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controlls="sales_panel2" class="item">
                                                        <a href="#" class="item_link">3개월</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controlls="sales_panel3" class="item">
                                                        <a href="#" class="item_link">6개월</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controlls="sales_panel4" class="item">
                                                        <a href="#" class="item_link">1년</a>
                                                    </li>
                                                    <li role="tab" aria-selected="true" aria-controlls="sales_panel5" class="item">
                                                        <a href="#" class="item_link">전체</a>
                                                    </li>
                                                </ul>
                                                <div id="sales_panel1" role="tabpanel" class="tab_content show" span="1m">
                                                    <div class="graph">
                                                        <canvas></canvas>
                                                    </div>
                                                </div>
                                                <div id="sales_panel2" role="tabpanel" class="tab_content" span="3m">
                                                    <div class="graph">
                                                        <canvas></canvas>
                                                    </div>
                                                </div>
                                                <div id="sales_panel3" role="tabpanel" class="tab_content" span="6m">
                                                    <div class="graph">
                                                        <canvas></canvas>
                                                    </div>
                                                </div>
                                                <div id="sales_panel4" role="tabpanel" class="tab_content" span="1y">
                                                    <div class="graph">
                                                        <canvas></canvas>
                                                    </div>
                                                </div>
                                                <div id="sales_panel5" role="tabpanel" class="tab_content" span="all">
                                                    <div class="graph">
                                                        <canvas></canvas>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="wrap_bids">
                                            <div class="tab_area">
                                                <ul role="tablist" class="tab_list">
                                                    <li role="tab" aria-selected="true" aria-controls="panel1" class="item on">
                                                        <a href="#" class="item_link">체결 거래</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controls="panel2" class="item">
                                                        <a href="#" class="item_link">판매 입찰</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controls="panel3" class="item">
                                                        <a href="#" class="item_link">구매 입찰</a>
                                                    </li>
                                                </ul>
                                                <div id="panel1" role="tabpanel" class="tab_content show" span="sales">
                                                    <div class="table_wrap">
                                                        <table>
                                                            <caption>
                                                                <span class="blind">데이터 테이블</span>
                                                            </caption>
                                                            <colgroup> width 추후 추가 
                                                                <col></col>
                                                                <col></col>
                                                                <col></col>
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th class="table_th">사이즈</th>
                                                                    <th class="table_th align_right">거래가</th>
                                                                    <th class="table_th align_right">거래일</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <a href="#" class="btn outlinegrey fill medium">체결 내역 더보기</a>
                                                </div>
                                                <div id="panel2" role="tabpanel" class="tab_content" span="asks">
                                                <div class="table_wrap">
                                                        <table>
                                                            <caption>
                                                                <span class="blind">데이터 테이블</span>
                                                            </caption>
                                                            <colgroup>
                                                                <col></col>
                                                                <col></col>
                                                                <col></col>
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th class="table_th">사이즈</th>
                                                                    <th class="table_th align_right">판매 희망가</th>
                                                                    <th class="table_th align_right">수량</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <a href="#" class="btn outlinegrey fill medium">입찰 내역 더보기</a>
                                                </div>
                                                <div id="panel3" role="tabpanel" class="tab_content" span="asks">
                                                <div class="table_wrap">
                                                        <table>
                                                            <caption>
                                                                <span class="blind">데이터 테이블</span>
                                                            </caption>
                                                            <colgroup>
                                                                <col></col>
                                                                <col></col>
                                                                <col></col>
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th class="table_th">사이즈</th>
                                                                    <th class="table_th align_right">구매 희망가</th>
                                                                    <th class="table_th align_right">수량</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td class="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td class="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <a href="#" class="btn outlinegrey fill medium">입찰 내역 더보기</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <div>
                                    <S.ConfirmWrap>
                                        <S.ConfirmWrapConfirmTitle>구매 전 꼭 확인해주세요</S.ConfirmWrapConfirmTitle>
                                        <S.ConfirmWrapConfirmContemt>
                                            <ul class="dropdown_list">
                                                <li>
                                                    <div class="dropdown">
                                                        <S.DropdownHead onClick={ OpenDrop }>
                                                            <S.DropdownHeadTitle>배송 기간 안내</S.DropdownHeadTitle>
                                                            {/* <svg>
                                                                <use></use>
                                                            </svg> */}
                                                        </S.DropdownHead>
                                                        <S.DropdownContent hidden={dropdown}>
                                                            <S.DropdownContentContent>
                                                                <div class="content_box">
                                                                    <div class="emphasis_box">
                                                                        <S.Emphasis>
                                                                            "크림은 최대한 빠르게 불라불라 속도에 차이있음"
                                                                        </S.Emphasis>
                                                                    </div>
                                                                    <ul class="content_list" style={{ marginTop: "20px" }}>
                                                                        <li class="content_item">
                                                                            <p class="title_txt"> [빠른배송 구매]</p>
                                                                        </li>
                                                                        <li class="content_item">
                                                                            <p class="main_txt" style={{ marginTop: "20px" }}> "판매자가 어쩌구 구매 가능합니다" </p>
                                                                        </li>
                                                                        <li class="content_item">
                                                                            <p class="main_txt"> 
                                                                                "오늘오후 어쩌구 출고일 변경"
                                                                                <a href="#" class="txt_link">빠른배송 안내</a> 
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </S.DropdownContentContent>
                                                        </S.DropdownContent>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="dropdown">
                                                        <S.DropdownHead onClick={ OpenDrop1 }>
                                                            <S.DropdownHeadTitle>검수 안내</S.DropdownHeadTitle>
                                                            {/* <svg>
                                                                <use></use>
                                                            </svg> */}
                                                        </S.DropdownHead>
                                                        <S.DropdownContent hidden={dropdown1}>
                                                            <S.DropdownContentContent>
                                                                <div class="content_box">
                                                                    <div class="emphasis_box">
                                                                        <S.Emphasis>
                                                                            "크림은 책임없음"
                                                                        </S.Emphasis>
                                                                    </div>
                                                                    <ul class="content_list" style={{ marginTop: "20px" }}>
                                                                        <li class="content_item">
                                                                            <p class="title_txt"> [검수정책 알아보기]</p>
                                                                        </li>
                                                                        <li class="content_item">
                                                                            <p class="main_txt" style={{ marginTop: "20px" }}> "판매자가 어쩌구 구매 가능합니다" </p>
                                                                        </li>
                                                                        <li class="content_item">
                                                                            <p class="main_txt"> 
                                                                                "오늘오후 어쩌구 출고일 변경"
                                                                                <a href="#" class="txt_link">빠른배송 안내</a> 
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </S.DropdownContentContent>
                                                        </S.DropdownContent>
                                                    </div>
                                                </li>                                                               
                                                <li>
                                                    <div class="dropdown">
                                                        <S.DropdownHead onClick={ OpenDrop2 }>
                                                            <S.DropdownHeadTitle>구매/환불/취소/교환 안내</S.DropdownHeadTitle>
                                                            {/* <svg>
                                                                <use></use>
                                                            </svg> */}
                                                        </S.DropdownHead>
                                                        <S.DropdownContent hidden={dropdown2}>
                                                            <S.DropdownContentContent>
                                                                <div class="content_box">
                                                                    <div class="emphasis_box">
                                                                        <S.Emphasis>
                                                                            "크림은 책임없음"
                                                                        </S.Emphasis>
                                                                    </div>
                                                                    <ul class="content_list" style={{ marginTop: "20px" }}>
                                                                        <li class="content_item">
                                                                            <p class="title_txt"> [검수정책 알아보기]</p>
                                                                        </li>
                                                                        <li class="content_item">
                                                                            <p class="main_txt" style={{ marginTop: "20px" }}> "판매자가 어쩌구 구매 가능합니다" </p>
                                                                        </li>
                                                                        <li class="content_item">
                                                                            <p class="main_txt"> 
                                                                                "오늘오후 어쩌구 출고일 변경"
                                                                                <a href="#" class="txt_link">빠른배송 안내</a> 
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
                                    <div class="point_guide" style={{paddingTop: "40px"}}>
                                        <ul class="guide_list">
                                            <li class="guide_item" style={{overflow: "hidden"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li class="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li class="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
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
                <S.Content div class="feed_area">
                <div class="point_guide" style={{paddingTop: "40px"}}>
                    
                                        <ul class="guide_list">
                                            <li class="guide_item" style={{overflow: "hidden"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li class="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li class="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div class="point_guide" style={{paddingTop: "40px"}}>
                                        <ul class="guide_list">
                                            <li class="guide_item" style={{overflow: "hidden"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li class="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li class="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="point_guide" style={{paddingTop: "40px"}}>
                                        <ul class="guide_list">
                                            <li class="guide_item" style={{overflow: "hidden"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li class="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                            <li class="guide_item" style={{overflow: "hidden", paddingTop: "5px"}}>
                                                <S.ThumbArea>
                                                    <S.ThumbAreaImg></S.ThumbAreaImg>
                                                </S.ThumbArea>
                                                <div class="text_area" style={{overflow: "hidden"}}>
                                                    <S.TextAreaTitle>100% 정품 보증</S.TextAreaTitle>
                                                    <S.TextAreaDesc>크림사에서 검수한 상품이 정품 아니면 3배 보상</S.TextAreaDesc>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>                                                 */}
                </S.Content>
                <div class="other_product_area">

                </div>
            </S.ContainerDetail>
            <div class="footer floation_price"> {/*나중에 위에 달라붙는 가격표 만들기*/}

            </div>
        </S.ProductsWrapper>
        </>
    );
};

export default Products;