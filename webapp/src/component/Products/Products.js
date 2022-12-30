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

    const [size ,setSize] = useState("모든 사이즈");

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
                                    <S.BannerAlertContent onClick={e => setModalOpen(true)}>
                                        <div>
                                            <S.AlertTitleCareMark>주의</S.AlertTitleCareMark>
                                            <S.AlertTitleAlertText>판매 거래 주의사항</S.AlertTitleAlertText>
                                        </div>
                                        <S.AlertTitleAlertSubText>반드시 보유한 상품만 판매하세요</S.AlertTitleAlertSubText>
                                    </S.BannerAlertContent>
                                </S.BannerAlert>
                            </S.ColumnBox>
                            {modalOpen && <ModalBasic setModalOpen={setModalOpen} seq={seq}/>}
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
                                                    <S.BtnSizeBtnText>{size}</S.BtnSizeBtnText>
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
                                {/* <div className="detail_wrap">
                                    <div className="product_sales_graph">
                                        <div className="title">
                                            <h3 className="detail_title">시세</h3>
                                            <div className="sales_filter">
                                                <div className="filter_unit">
                                                    <button className="btn btn_select" slot="button">
                                                        <span className="select_text layer_open">
                                                            "모든 사이즈"
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wrap_sales">
                                            <div className="tab_area">
                                                <ul role="tablist" className="tab_list">
                                                    <li role="tab" aria-selected="false" aria-controlls="sales_panel1" className="item">
                                                        <a href="#" className="item_link">1개월</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controlls="sales_panel2" className="item">
                                                        <a href="#" className="item_link">3개월</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controlls="sales_panel3" className="item">
                                                        <a href="#" className="item_link">6개월</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controlls="sales_panel4" className="item">
                                                        <a href="#" className="item_link">1년</a>
                                                    </li>
                                                    <li role="tab" aria-selected="true" aria-controlls="sales_panel5" className="item">
                                                        <a href="#" className="item_link">전체</a>
                                                    </li>
                                                </ul>
                                                <div id="sales_panel1" role="tabpanel" className="tab_content show" span="1m">
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
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wrap_bids">
                                            <div className="tab_area">
                                                <ul role="tablist" className="tab_list">
                                                    <li role="tab" aria-selected="true" aria-controls="panel1" className="item on">
                                                        <a href="#" className="item_link">체결 거래</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controls="panel2" className="item">
                                                        <a href="#" className="item_link">판매 입찰</a>
                                                    </li>
                                                    <li role="tab" aria-selected="false" aria-controls="panel3" className="item">
                                                        <a href="#" className="item_link">구매 입찰</a>
                                                    </li>
                                                </ul>
                                                <div id="panel1" role="tabpanel" className="tab_content show" span="sales">
                                                    <div className="table_wrap">
                                                        <table>
                                                            <caption>
                                                                <span className="blind">데이터 테이블</span>
                                                            </caption>
                                                            <colgroup> width 추후 추가 
                                                                <col></col>
                                                                <col></col>
                                                                <col></col>
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th className="table_th">사이즈</th>
                                                                    <th className="table_th align_right">거래가</th>
                                                                    <th className="table_th align_right">거래일</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <a href="#" className="btn outlinegrey fill medium">체결 내역 더보기</a>
                                                </div>
                                                <div id="panel2" role="tabpanel" className="tab_content" span="asks">
                                                <div className="table_wrap">
                                                        <table>
                                                            <caption>
                                                                <span className="blind">데이터 테이블</span>
                                                            </caption>
                                                            <colgroup>
                                                                <col></col>
                                                                <col></col>
                                                                <col></col>
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th className="table_th">사이즈</th>
                                                                    <th className="table_th align_right">판매 희망가</th>
                                                                    <th className="table_th align_right">수량</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <a href="#" className="btn outlinegrey fill medium">입찰 내역 더보기</a>
                                                </div>
                                                <div id="panel3" role="tabpanel" className="tab_content" span="asks">
                                                <div className="table_wrap">
                                                        <table>
                                                            <caption>
                                                                <span className="blind">데이터 테이블</span>
                                                            </caption>
                                                            <colgroup>
                                                                <col></col>
                                                                <col></col>
                                                                <col></col>
                                                            </colgroup>
                                                            <thead>
                                                                <tr>
                                                                    <th className="table_th">사이즈</th>
                                                                    <th className="table_th align_right">구매 희망가</th>
                                                                    <th className="table_th align_right">수량</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="table_td">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                    <td className="table_td align_right">
                                                                        동적처리
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <a href="#" className="btn outlinegrey fill medium">입찰 내역 더보기</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
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