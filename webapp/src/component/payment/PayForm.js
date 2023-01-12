import React, { useEffect, useState } from 'react';
import * as S from './PayFormStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import NewAddressModal from './NewAddressModal';
import ChangeAddressModal from './ChangeAddressModal';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Ask from './Ask';
import jwt_decode from 'jwt-decode';

const PayForm = () => {
    const token = localStorage.getItem('accessToken');
    const tokenJson = jwt_decode(token);
    const sub = tokenJson['sub'];

    var id = null;
    var phone = null;
    useEffect(() => {
        axios
            .get('http://localhost:8080/getMemberInfo', 'seq=' + sub)
            .then(res => {
                id = res.data.email;
            })
            .catch(err => console.log(err));
    }, []);

    console.log(id);
    console.log(phone);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [modals, setModals] = useState([false, false]);

    const type = searchParams.get('type');
    const productNum = searchParams.get('productNum');
    const size = searchParams.get('size');

    const [shipInfo, setShipInfo] = useState({
        shipName: '',
        shipPhone: '',
        shipAddress: '',
    });

    const { shipName, shipPhone, shipAddress } = shipInfo;
    const [ask, setAsk] = useState('배송 시 요청사항을 선택해주세요');
    const [usePoint, setUsePoint] = useState(0);
    const [havePoint, setHavePoint] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:8080/my/getHavePoint', { params: { id } })
            .then(res => setHavePoint(res.data))
            .catch(error => console.log(error));

        axios
            .get('http://localhost:8080/my/getDefaultAddress', {
                params: { id },
            })
            .then(res => {
                if (res.data !== null) {
                    setShipInfo({
                        shipName: res.data.name,
                        shipPhone: res.data.phone,
                        shipAddress: `(${res.data.zipcode}) ${res.data.addr1} ${res.data.addr2}`,
                    });
                }
            })
            .catch(err => console.log(err));

        if (type === 'new') {
            axios.get('http://localhost:8080').then().post();
        } else if (type === 'resell') {
            axios.get('http://localhost:8080/').then().post();
        } else if (type === 'used') {
            axios.get('http://local').then().post();
        }
    }, []);

    const [productPrice] = useState(13000);
    const [payPrice, setPayPrice] = useState(productPrice);

    const addComma = num => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const handleInputChange = e => {
        const { value } = e.target;
        if (value <= havePoint) {
            setUsePoint(Number(value.replace(/[^0-9]/g, '')).toLocaleString());
            const removedCommaValue = Number(value.replaceAll(',', ''));
            setPayPrice(productPrice - removedCommaValue);
        }
    };
    const date = new Date();
    const todayDate =
        date.getFullYear() + '' + (date.getMonth() + 1) + '' + date.getDate();

    const [orderNumber, setOrderNumber] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:8080/pay/getOrderNumber')
            .then(res => {
                //console.log(res.data);
                setOrderNumber(
                    'ORD' + todayDate + '-' + ('00000000' + res.data).slice(-8),
                );
            })
            .catch(error => console.log(error));
    }, []);

    const changePoint = (id, point) => {
        console.log(point);
        axios
            .post('http://localhost:8080/my/changePoint', null, {
                params: {
                    id,
                    point,
                },
            })
            .then(alert('적립 완료'))
            .catch(error => console.log(error));
    };

    const completePayment = () => {
        axios
            .post('http://localhost:8080/pay/completePay', null, {
                params: {
                    id,
                    type,
                    productNum,
                    size,
                    orderNumber,
                    productPrice,
                    payPrice,
                    usePoint,
                    shipName,
                    shipPhone,
                    shipAddress,
                    ask,
                },
            })
            .then(alert('결제 완료'))
            .catch(err => console.log(err));
    };

    // console.log(
    //     havePoint -
    //         Number(usePoint.replaceAll(',', '')) +
    //         Math.ceil(payPrice / 100),
    // );
    // console.log(finalOrderNumber);

    const payment = () => {
        const { IMP } = window;
        IMP.init('imp11755173');
        // IMP.request_pay(param, callback) 결제창 호출

        IMP.request_pay(
            {
                // param
                pg: 'html5_inicis',
                pay_method: 'card',
                merchant_uid: orderNumber,
                name: '노르웨이 회전 의자',
                amount: payPrice,
                buyer_email: id,
                buyer_name: '',
                buyer_tel: phone,
                buyer_addr: '',
                buyer_postcode: '',
            },
            res => {
                // callback
                if (res.success) {
                    // 결제 성공 시 로직,
                    //alert('결제 완료');
                    completePayment();
                    // changePoint(
                    //     id,
                    //     havePoint -
                    //         Number(usePoint.replaceAll(',', '')) +
                    //         Math.ceil(payPrice / 100),
                    // );
                } else {
                    // 결제 실패 시 로직,
                    alert('결제 취소');
                }
            },
        );
    };

    const pointBtn = e => {
        if (e.target.innerText === '모두 이용') {
            setUsePoint(havePoint);
            setPayPrice(productPrice - havePoint);
        } else {
            setUsePoint(0);
            setPayPrice(productPrice);
        }
    };

    return (
        <S.PayForm>
            {modals[0] && (
                <S.ModalBackground
                    onClick={() => setModals([false, false, false])}
                ></S.ModalBackground>
            )}

            {modals[1] && (
                <S.ModalBackground
                    onClick={() => setModals([false, false, false])}
                ></S.ModalBackground>
            )}
            {modals[2] && (
                <S.ModalBackground
                    onClick={() => setModals([false, false, false])}
                ></S.ModalBackground>
            )}
            {modals[0] ? (
                <NewAddressModal
                    id={id}
                    setShipInfo={setShipInfo}
                    setModals={setModals}
                ></NewAddressModal>
            ) : null}
            {modals[1] ? (
                <ChangeAddressModal
                    id={id}
                    setShipInfo={setShipInfo}
                    setModals={setModals}
                ></ChangeAddressModal>
            ) : null}
            {modals[2] ? (
                <Ask setModals={setModals} ask={ask} setAsk={setAsk}></Ask>
            ) : null}
            <S.Address>
                <S.AddressTitle>
                    <S.AddressText>배송 주소</S.AddressText>
                    <S.AddressAddNew
                        onClick={() => setModals([true, false, false])}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        &nbsp;새 주소 추가
                    </S.AddressAddNew>
                </S.AddressTitle>
                <S.AddressContent>
                    <S.AddressDeleveryInfo>
                        <S.AddressInfo>
                            <S.AddressInfoBox>
                                <S.AddressInfoTitle>받는 분</S.AddressInfoTitle>
                                <S.AddressInfoDesc>
                                    {shipName}
                                </S.AddressInfoDesc>
                            </S.AddressInfoBox>
                            <S.AddressInfoBox>
                                <S.AddressInfoTitle>연락처</S.AddressInfoTitle>
                                <S.AddressInfoDesc>
                                    {shipPhone}
                                </S.AddressInfoDesc>
                            </S.AddressInfoBox>
                            <S.AddressInfoBox>
                                <S.AddressInfoTitle>
                                    배송 주소
                                </S.AddressInfoTitle>
                                <S.AddressInfoDesc>
                                    {shipAddress}
                                </S.AddressInfoDesc>
                            </S.AddressInfoBox>
                        </S.AddressInfo>
                        <S.AddressChangeBtn
                            type="button"
                            value="변경"
                            onClick={() => setModals([false, true, false])}
                        ></S.AddressChangeBtn>
                    </S.AddressDeleveryInfo>
                </S.AddressContent>
                <S.AddressDeleveryAsk
                    onClick={() => setModals([false, false, true])}
                >
                    <S.ShippingMemo>{ask}</S.ShippingMemo>
                </S.AddressDeleveryAsk>
                <S.Hr></S.Hr>
                <S.AddressText>배송 방법</S.AddressText>
                <S.BrandDelevery>
                    <S.DeleveryImg src="/image/payment/brand_delevery.png"></S.DeleveryImg>
                    <S.DeleveryInfo>
                        <S.DeleveryTitle>
                            <S.DeleveryName>브랜드배송</S.DeleveryName>
                            <S.DeleveryCost>무료</S.DeleveryCost>
                        </S.DeleveryTitle>
                        <S.DeleveryDesc>
                            입점한 브랜드에서 직접 택배 배송
                        </S.DeleveryDesc>
                    </S.DeleveryInfo>
                </S.BrandDelevery>
            </S.Address>
            <S.Point>
                <S.AddressText>포인트</S.AddressText>
                <S.UsePoint>
                    <S.UsePointShow
                        type="text"
                        placeholder="0"
                        value={usePoint}
                        onChange={handleInputChange}
                    ></S.UsePointShow>
                    <S.UseAllBtn
                        havePoint={havePoint}
                        onClick={e => pointBtn(e)}
                        usePoint={usePoint}
                    >
                        {usePoint === 0 ? '모두 이용' : '모두 취소'}
                    </S.UseAllBtn>
                </S.UsePoint>
                <S.HavePoint>
                    <S.HavePointSpan>
                        보유 포인트&nbsp;
                        <FontAwesomeIcon
                            icon={faCircleQuestion}
                        ></FontAwesomeIcon>
                    </S.HavePointSpan>
                    <S.HavePointShow>{addComma(havePoint)}P</S.HavePointShow>
                </S.HavePoint>
            </S.Point>
            <S.OrderInfo>
                <S.AddressText>최종 주문 정보</S.AddressText>
                <S.PriceTitle>총 결제금액</S.PriceTitle>
                <S.Price>
                    <S.PriceFont>{addComma(payPrice)}</S.PriceFont>원
                </S.Price>
                <S.Hr></S.Hr>
                <S.PriceInfo>
                    <S.PriceDL>
                        <S.PriceDT style={{ color: '#222' }}>구매가</S.PriceDT>
                        <S.PriceDD
                            style={{ fontWeight: 700, fontSize: '14px' }}
                        >
                            <S.PriceFont>{addComma(productPrice)}</S.PriceFont>
                            원
                        </S.PriceDD>
                    </S.PriceDL>
                    <S.PriceDL>
                        <S.PriceDT>포인트</S.PriceDT>
                        <S.PriceDD>
                            {usePoint === 0
                                ? '-'
                                : '-' + addComma(usePoint) + 'P'}
                        </S.PriceDD>
                    </S.PriceDL>
                    <S.PriceDL>
                        <S.PriceDT>배송비</S.PriceDT>
                        <S.PriceDD>무료</S.PriceDD>
                    </S.PriceDL>
                </S.PriceInfo>
            </S.OrderInfo>
            <S.OrderWay>
                <S.AddressText>결제 방법</S.AddressText>
                <S.OrderNormal>
                    <S.OrderNormalTitle>일반 결제</S.OrderNormalTitle>
                    <S.OrderNormalDesc>일시불・할부</S.OrderNormalDesc>
                </S.OrderNormal>
                <S.PayWay>
                    <S.PayWayImg src="/image/payment/kg_inisis_logo.png"></S.PayWayImg>
                </S.PayWay>
                <S.PayWayAlert>
                    ※ 신용카드, 카카오페이, 네이버페이, PAYCO 등 결제수단은 결제
                    버튼 클릭 후 선택 가능합니다.
                </S.PayWayAlert>
            </S.OrderWay>
            <S.Agree>
                <S.AgreeList>
                    <S.AgreeItem>
                        <S.Notice>
                            제휴 사업자가 직접 배송하며, 재고 부족 등 사업자의
                            상황에 따라 거래가 취소될 수 있습니다.
                        </S.Notice>
                        <S.Checkbox type="checkbox"></S.Checkbox>
                    </S.AgreeItem>
                    <S.HrAgree></S.HrAgree>
                    <S.AgreeItem>
                        <S.Notice>개인정보의 제3자 제공에 동의합니다.</S.Notice>
                        <S.Checkbox type="checkbox"></S.Checkbox>
                    </S.AgreeItem>
                    <S.HrAgree></S.HrAgree>
                    <S.AgreeItem>
                        <S.Notice>
                            '결제하기'를 선택하시면 즉시 결제가 진행됩니다.
                        </S.Notice>
                        <S.Checkbox type="checkbox"></S.Checkbox>
                    </S.AgreeItem>
                    <S.HrAgree></S.HrAgree>
                    <S.AgreeItem>
                        <S.Notice style={{ fontWeight: 700 }}>
                            구매 조건을 모두 확인하였으며, 거래진행에
                            동의합니다.
                        </S.Notice>
                        <S.Checkbox type="checkbox"></S.Checkbox>
                    </S.AgreeItem>
                </S.AgreeList>
                <S.PayPriceShow>
                    <S.PayPriceShowTitle>총 결제금액</S.PayPriceShowTitle>
                    <S.PayPriceShowDiv>
                        <S.PriceFont>{addComma(payPrice)}</S.PriceFont>원
                    </S.PayPriceShowDiv>
                </S.PayPriceShow>
                <S.PayBtn onClick={payment} disabled={false}>
                    <span>결제하기</span>
                </S.PayBtn>
            </S.Agree>
        </S.PayForm>
    );
};

export default PayForm;
