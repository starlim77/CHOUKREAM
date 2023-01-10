import axios from "axios";
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import GlobalStyle from './GlobalStyle';
import ScrollToTop from './ScrollToTop';
import * as S from './style';
import NewProductOption from "./NewProductOption";
import * as U from '../Used/UsedItemStyle';

const NewProducts = () => {

    const [count, setCount] = useState('');

    const [option ,setOption] = useState("옵션 선택");

    const [modalOpen, setModalOpen] = useState(false);

    const date = new Date();

    const id = 'gong@naver.com'

    const {seq} = useParams();

    const shopKind = 'new'

    const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장 

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
        const scrollListener= () => {  window.addEventListener("scroll", handleScroll2); } //  window 에서 스크롤을 감시 시작
        scrollListener(); // window 에서 스크롤을 감시
        return () => { window.removeEventListener("scroll", handleScroll2); }; //  window 에서 스크롤을 감시를 종료
    });

    const [likeForm, setLikeForm] = useState({
        seq:'',
        id:'',
        userLike:false,
        registerNo:''
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/getNewProduct?seq=${seq}`)
             .then(res => res.data.length !== 0 && setForm(res.data))
             .catch(error => console.log(error))

        axios.get('http://localhost:8080/used/itemLike?seq=' + seq + '&id=' + id + '&shopKind=' + shopKind)
             .then(res => res.data ? setLikeForm(res.data) : '')
             .catch(error => console.log(error))

        axios.get('http://localhost:8080/likeCount?seq=' + seq + '&shopKind=' + shopKind)
             .then(res => setCount(res.data))
             .catch(err => console.log(err))
    }, [])
    

    const onInterest = () => {   
        setLikeForm({...likeForm, userLike:!likeForm.userLike})

        axios.post(`http://localhost:8080/used/productLikeSet?seq=`+ seq + '&id=' + id + '&userLike=' + likeForm.userLike + '&shopKind=' + shopKind)
        .then()
        .catch(error => console.log(error))

        {likeForm.userLike === false ? setCount(count+1) : setCount(count-1)}
    }

    const [form, setForm] = useState([{}])

    const getOption = (productOption) => {
        setOption(productOption);
        setModalOpen(false)
    }

  
    const element = useRef(null);
    const onMoveToElement = () => {
        element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const element2 = useRef(null);
    const onMoveToElement2 = () => {
        element2.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const element3 = useRef(null);
    const onMoveToElement3 = () => {
        element3.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const element4 = useRef(null);
    const onMoveToElement4 = () => {
        element4.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const [mainImg,setMainImg] = useState('')
    const [subImg0,setSubImg0] = useState('')
    const [subImg1,setSubImg1] = useState('')
    const [subImg2,setSubImg2] = useState('')
    const [subImg3,setSubImg3] = useState('')

    const [desImg0,setDesImg0] = useState('')
    const [desImg1,setDesImg1] = useState('')
    const [desImg2,setDesImg2] = useState('')

    useEffect(()=>{
        if((form.imgName)){
            const img = ((form.imgName).split(','))

            setMainImg(img[0])

            img[0] && setSubImg0(img[0]) 
            img[1] && setSubImg1(img[1]) 
            img[2] && setSubImg2(img[2]) 
            img[3] && setSubImg3(img[3]) 
        }

        if((form.descriptionImg)){
            const desImg = ((form.descriptionImg).split(','))

            desImg[0] && setDesImg0(desImg[0]) 
            desImg[1] && setDesImg1(desImg[1]) 
            desImg[2] && setDesImg2(desImg[2]) 
        }
    },[form])

    const changImg=(e)=>{
        var id = e.target.getAttribute("id");
        if(id == 0) setMainImg(subImg0)
        else if(id == 1) setMainImg(subImg1)
        else if(id == 2) setMainImg(subImg2)
        else if(id == 3) setMainImg(subImg3)
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
                            <>
                            <U.ImgBody2>
                                <U.MainImg2 src={`/storage/${mainImg}`} alt={mainImg}></U.MainImg2>
                                    {subImg1&&<U.SmallImg2 src={`/storage/${subImg0}`} id="0" onClick={e=>changImg(e)}></U.SmallImg2>}
                                    {subImg1&&<U.SmallImg2 src={`/storage/${subImg1}`} id="1" onClick={e=>changImg(e)}></U.SmallImg2>}
                                    {subImg2&&<U.SmallImg2 src={`/storage/${subImg2}`} id="2" onClick={e=>changImg(e)}></U.SmallImg2>}
                                    {subImg3&&<U.SmallImg2 src={`/storage/${subImg3}`} id="3" onClick={e=>changImg(e)}></U.SmallImg2>}
                                </U.ImgBody2>
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
                            </>
                            {/* {modalOpen && <ModalBasic setModalOpen={setModalOpen} getSize={getSize} getAll={getAll} sizeForm={sizeForm} seq={seq}/> } */}
                            {/* <div className="ico_arrow">
                                <svg>
                                    <use></use>
                                </svg>
                            </div> */}                            
                        </S.ColumnIsFixed>
                        <S.NewColumn>
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
                                        <S.DetailSize title='사이즈' option-title="사이즈">
                                            <S.DetailSizeTitle>
                                                <S.DetailSizeTitleText>옵션</S.DetailSizeTitleText>
                                            </S.DetailSizeTitle>
                                            {modalOpen && <NewProductOption setModalOpen={setModalOpen} newProductOption={form.newProductOptionDTO} option={option} newSeq={seq} getOption={getOption}/> }
                                            <S.DetailSizeSize>
                                                <S.BtnSize>
                                                    {form.newProductOptionDTO === null ? 'ONE SIZE' : <S.BtnSizeBtnText onClick={e => setModalOpen(true)}>{option}</S.BtnSizeBtnText> }
                                                    {/* <S.BtnSizeBtnText onClick={e => setModalOpen(true)}>{size}</S.BtnSizeBtnText>
                                                    {/* <svg>
                                                        <use></use>
                                                    </svg> */}
                                                </S.BtnSize>
                                            </S.DetailSizeSize>
                                        </S.DetailSize>
                                        <S.DetailPrice>
                                            <S.DetailPriceTitle>
                                                <S.DetailPriceTitleText>구매가</S.DetailPriceTitleText>
                                            </S.DetailPriceTitle>
                                            <S.DetailPricePrice>
                                                <S.DetailPriceAmount>
                                                    <S.DetailPriceNum>
                                                        {Number(form.price).toLocaleString('ko-KR')}
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
                                            <S.NewProductBuyBtn>
                                                구매하기
                                            </S.NewProductBuyBtn>
                                        </S.DivisionBtnBox>
                                        <S.LargeBtnWish area-label="관심상품" onClick={onInterest}>
                                            <S.LargeBtnWishBtnImg src={likeForm.userLike ? '/image/used/blackBookmark.png' : '../image/used/bookmark.svg'}/>
                                            <S.LargeBtnWishBtnText>관심상품</S.LargeBtnWishBtnText>
                                            <S.LargeBtnWishCountNum>{count}</S.LargeBtnWishCountNum>
                                        </S.LargeBtnWish>
                                    </div>
                                </div>        
                                <S.DeliveryWayWrap>
                                    <S.DeliveryWayWrapDetailTitle>배송 정보</S.DeliveryWayWrapDetailTitle>
                                    <S.DeliveryWay>
                                        <S.WayInfo>
                                            <S.WayStatusThumb>
                                                <img src='https://kream-phinf.pstatic.net/MjAyMTExMjFfMjU5/MDAxNjM3NDczNzU0MjA1.ON3pvFYAq_xSSaNWDgUWe1YfIx-C0fm91PDtcsUn3AEg.Q4EbbNWl_ua916jg0NQ0dWOS3h7W9eiiI2kK9YPWlgwg.PNG/a_120a84f036724d0d97a2343aafff4ecf.png' width="40px" height="40px"/>
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
                                        
                                <S.FloatingPrice ScrollActive2={ ScrollActive2 }>
                                    <S.FloatingPriceInnerBox>
                                        <S.FloatingPriceProductArea>
                                            <S.FloatingPriceProductThumb>
                                                <S.PictureProductImg>
                                                    <S.Image src={`/storage/${mainImg}`} width="65px" height="65px"></S.Image>
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
                                                <S.WishCountNum>{count}</S.WishCountNum>
                                            </S.FloatingBtnOutLineGrey>
                                            <S.FloatingPriceDivisionBtnBox>
                                                <S.FloatingPriceDivisionBuy>
                                                    <S.NewFloatingLargeBtn>구매하기</S.NewFloatingLargeBtn>
                                                </S.FloatingPriceDivisionBuy>
                                            </S.FloatingPriceDivisionBtnBox>
                                        </S.FloatingProductBtnArea>
                                    </S.FloatingPriceInnerBox>
                                </S.FloatingPrice>
                            </div>                           
                        </S.NewColumn>
                    </S.ColumnBind>
                    <S.ProductDetailItemContent>
                        <S.ProductDetailTabWrap>
                            <S.ProductDetailTab>
                                <S.TabActive onClick={onMoveToElement}>상품 상세정보</S.TabActive>
                                <S.Tab onClick={onMoveToElement2}>교환 및 반품 안내</S.Tab>
                                <S.Tab onClick={onMoveToElement3}>스타일 리뷰</S.Tab>
                                <S.Tab onClick={onMoveToElement4}>추천 상품</S.Tab>
                            </S.ProductDetailTab>
                        </S.ProductDetailTabWrap>
                        <div ref={element} style={{paddingTop: "160px"}} />
                        <div className='product_detail_item_wrap' >
                            <div>
                                <S.DetailTitleHeaderImages>
                                    <S.DetailHeaderImgWrap>
                                        <S.CoverImg src={`/storage/${mainImg}`}></S.CoverImg>
                                    </S.DetailHeaderImgWrap>
                                    <S.DetailHeaderTitleWrap>
                                        <S.DetailHeaderProductNo>{form.newSeq}</S.DetailHeaderProductNo>
                                        <S.DetailHeaderTitle>
                                            <em>{form.title}</em>
                                        </S.DetailHeaderTitle>
                                        <S.DetailHeaderSubTitle>{form.subTitle}</S.DetailHeaderSubTitle>
                                        <S.DetailHeaderDescription></S.DetailHeaderDescription>
                                    </S.DetailHeaderTitleWrap>
                                    <S.DetailImgWrap>
                                        <S.DetailContentImages>
                                            <div className='images'>
                                                {desImg0&&<S.CoverImg src={`/storage/${desImg0}`}></S.CoverImg>}
                                                {desImg1&&<S.CoverImg src={`/storage/${desImg1}`}></S.CoverImg>}
                                                {desImg2&&<S.CoverImg src={`/storage/${desImg2}`}></S.CoverImg>}
                                               </div>
                                        </S.DetailContentImages>
                                    </S.DetailImgWrap>
                                </S.DetailTitleHeaderImages>
                            </div>
                        </div>
                        <div ref={element2} style={{paddingTop: "160px"}} />
                        <div className='product_detail_item_wrap'>
                            <div>
                                <S.DetailTitlePreviewWrap>
                                    <div className="detail_title_preview_list">
                                        <ul>
                                            <li className="detail_title_preview">
                                                <div>
                                                    <S.DetailLinkPreviewItemTitleDetailItemTitle>
                                                        <S.ProductDetailItemTitleUndefined>
                                                            판매자 정보
                                                        </S.ProductDetailItemTitleUndefined>
                                                    </S.DetailLinkPreviewItemTitleDetailItemTitle>
                                                    <S.DetailLinkPreviewItemWrap>
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        상호명
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.businessName}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        사업자 등록번호
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.comRegNo}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        대표자
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.representative}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        사업장 소재지
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.businessLocation}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        고객센터
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.serviceCall}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>
                                                    </S.DetailLinkPreviewItemWrap>
                                                </div>
                                            </li>
                                            <li className="detail_title_preview">
                                                <div>
                                                    <S.DetailLinkPreviewItemTitleDetailItemTitle>
                                                        <S.ProductDetailItemTitleUndefined>
                                                            상품정보제공 고시
                                                        </S.ProductDetailItemTitleUndefined>
                                                    </S.DetailLinkPreviewItemTitleDetailItemTitle>
                                                    <S.DetailLinkPreviewItemWrap>
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        소재
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.material}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>                                               
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        색상
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.color}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>                                                    
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        제조자
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.manufacturer}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>                                                  
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        제조국
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.countryOfManufacturer}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>                                                  
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        제조년월
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <li>{form.dateOfManufacturer}</li>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>
                                                    </S.DetailLinkPreviewItemWrap>
                                                </div>
                                            </li>
                                            <li className="detail_title_preview">
                                                <div>
                                                    <S.DetailLinkPreviewItemTitleDetailItemTitle>
                                                        <S.ProductDetailItemTitleUndefined>
                                                            교환 및 반품 안내
                                                        </S.ProductDetailItemTitleUndefined>
                                                    </S.DetailLinkPreviewItemTitleDetailItemTitle>
                                                    <S.DetailLinkPreviewItemWrap>
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        교환/반품 접수 방법 및 기간
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <S.ItemDescriptionLi>• 구매자 단순 변심으로 인한 교환/반품 가능 기간은 상품 수령일로부터 7일 이내이며 배송비는 구매자가 부담합니다.</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 상품이 표시/광고내용과 다르거나 제품의 하자의 경우 상품 수령일로부터 3개월 이내, 또는 사실을 알게된 날 (알 수 있었던 날)부터 30일 이내에 신청 가능하며 배송비는 판매자가 부담합니다.</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 교환/반품 시 먼저 판매자와 사유, 택배사, 배송비, 반품 주소 등을 협의하신 후 반품 상품을 발송해주세요.</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 동일 상품 내 추가 금액이 없는 옵션만 교환 가능합니다.</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 출고 이후 교환/반품/환불 요청 시 상품 회수 후 처리됩니다.</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 교환/반품 접수 안내 : KREAM - MY - 구매내역 - 종료 - 주문상세 - 반품 신청 또는 교환신청에서 내용 작성 후 제출</S.ItemDescriptionLi>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>                                                  
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        교환/반품 비용
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <S.ItemDescriptionLi>• 반품 배송비: 3,500원</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 교환 배송비: 3,500원</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 최초 배송비가 무료일 경우, 왕복 배송비(반품 배송비+최초 배송비)가 부과됩니다.</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 교환/반품 비용 및 지불 방식은 상품 및 교환/반품 사유에 따라 상이할 수 있으므로 반품/교환 접수 시 최종 내용을 확인하시기 바랍니다.</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 제주/도서산간 지역은 추가 운임이 발생할 수 있습니다.</S.ItemDescriptionLi>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>                                                
                                                        <S.DetailLinkPreviewItems>
                                                            <S.DetailLinkPreviewItem>
                                                                <S.ItemTitleWrap>
                                                                    <S.ItemTitle>
                                                                        교환/반품 불가 사유
                                                                    </S.ItemTitle>
                                                                </S.ItemTitleWrap>
                                                                <S.ItemDescription>
                                                                    <S.ItemDescriptionLi>• 구매회원의 단순변심으로 인한 교환/반품 요청이 상품 등을 수령한 날로부터 7일을 경과한 경우• 구매회원의 귀책사유로 상품이 멸실·훼손된 경우(다만, 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외함</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 구매회원의 사용 또는 일부 소비 및 시간이 지나 다시 판매하기 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 복제가 가능한 재화 등의 포장을 훼손한 경우</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 택 제거, 포장 박스 훼손, 구성품 누락, 사용 흔적, 사은품 누락 등이 있을 경우</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 개별적으로 주문제작되는 상품으로 재판매가 불가능한 경우</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 세트 상품 중 일부 상품만 보낸 경우</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 교환/반품 접수 없이 상품을 임의로 반송했을 경우</S.ItemDescriptionLi>
                                                                    <S.ItemDescriptionLi>• 기타 관련 법령이 정하는 청약철회 제한사유에 해당하는 경우</S.ItemDescriptionLi>
                                                                </S.ItemDescription>
                                                            </S.DetailLinkPreviewItem>
                                                        </S.DetailLinkPreviewItems>
                                                    </S.DetailLinkPreviewItemWrap>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </S.DetailTitlePreviewWrap>
                            </div>
                        </div>
                    </S.ProductDetailItemContent>
                </S.Content>
                <div>
                    <div ref={element3} style={{paddingTop: "160px"}} />
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
                    <div ref={element4} style={{paddingTop: "160px"}} />
                    <S.BrandArea>
                        <S.BrandTitle>
                            <S.BrandTitleBrand>브랜드</S.BrandTitleBrand>
                            <S.BrandTitleText>의 다른 상품</S.BrandTitleText>
                            <S.BtnMore>
                                <S.BtnText>더 보기</S.BtnText>
                                {/* <svg></svg> */}
                            </S.BtnMore>
                        </S.BrandTitle>
                        <S.BrandProducts>
                            <S.BrandProductList>
                            {/* {
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
                            } */}
                            </S.BrandProductList>
                        </S.BrandProducts>
                    </S.BrandArea>
                </div>
            </S.ContainerDetail>
        </S.ProductsWrapper>
        </>
    );
};

export default NewProducts;