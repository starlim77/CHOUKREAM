import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate, useSearchParams } from 'react-router-dom';
import * as S from './PayFormStyle';
import axios from 'axios';
import NewAddressModal from './NewAddressModal';
import ChangeAddressModal from './ChangeAddressModal';
import Ask from './Ask';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const SellForm = () => {
    const token = localStorage.getItem('accessToken');
    const tokenJson = jwt_decode(token);
    const sub = tokenJson['sub'];

    const navigate = useNavigate();

    const [searchParams] = useSearchParams();
    const [modals, setModals] = useState([false, false, false]);
    const [accountModal, setAccountModal] = useState(false);

    const [id, setId] = useState('');
    const [phone, setPhone] = useState('');

    const productNum = searchParams.get('productNum');
    const [size, setSize] = useState(searchParams.get('size'));
    const bidPrice = Number(searchParams.get('bid').replaceAll(',', ''));
    const getPrice = bidPrice - Math.floor(bidPrice * 0.05);

    const [imgName, setImgName] = useState('');
    const [modelNum, setModelNum] = useState('');
    const [productName, setProductName] = useState('샘플 이름');
    const [productSubName, setProductSubName] = useState('');

    const [shipInfo, setShipInfo] = useState({
        shipName: '',
        shipPhone: '',
        shipAddress: '',
    });
    const { shipName, shipPhone, shipAddress } = shipInfo;
    const [ask, setAsk] = useState('배송 시 요청사항을 선택해주세요');

    const [checkedList, setCheckedList] = useState([]);

    const checkedItemHandler = (id, checked) => {
        if (checked) {
            setCheckedList([...checkedList, id]);
        } else {
            setCheckedList(checkedList.filter(checked => checked !== id));
        }
    };

    const [account, setAccount] = useState({
        bankName: '',
        accountNumber: '',
        accountName: '',
    });
    const { bankName, accountNumber, accountName } = account;

    useEffect(() => {
        axios
            .get('http://localhost:8080/getMemberInfo', {
                params: { seq: sub },
            })
            .then(res => {
                //console.log(JSON.stringify(res.data));
                setId(res.data.email);
                setPhone(res.data.phone);

                //console.log('id = ' + id);
            })
            .catch(err => console.log(err));
        axios
            .post(
                'http://localhost:8080/shop/getProductBySeq?seq=' + productNum,
            )
            .then(res => {
                setImgName(res.data.imgName);
                setModelNum(res.data.modelNum);
                setProductName(res.data.title);
                setProductSubName(res.data.subTitle);
            })
            .catch(err => console.log(err));
    }, []);
    useEffect(() => {
        axios
            .get('http://localhost:8080/my/getDefaultAddress', {
                params: { id },
            })
            .then(res => {
                console.log(JSON.stringify(res.data));
                if (res.data !== null) {
                    setShipInfo({
                        shipName: res.data.name,
                        shipPhone: res.data.phone,
                        shipAddress: `(${res.data.zipcode}) ${res.data.addr1} ${res.data.addr2}`,
                    });
                }
            })
            .catch(err => console.log(err));
    }, [id]);

    const addComma = num => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const sellOrder = () => {
        axios
            .post('http://localhost:8080/addSellOrder', null, {
                params: {
                    seq: productNum,
                    buySell: 1,
                    size: size,
                    orderPrice: bidPrice,
                    sellOrderUser: id,
                    shipName,
                    shipPhone,
                    shipAddress,
                    ask:
                        ask !== '배송 시 요청사항을 선택해주세요' &&
                        ask !== '요청사항 없음'
                            ? ask
                            : '',
                },
            })
            .then(() => {
                alert('판매 입찰 완료');
                navigate('/shop');
            })
            .catch(err => console.log(err));
    };

    const isShipInfoEmpty = object =>
        !Object.values(object).every(x => x !== null && x !== '');

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
            <S.Product>
                <S.ProductInfo>
                    <S.ProductImg
                        src={'/resellList/' + photoshop(imgName)}
                    ></S.ProductImg>
                    <S.ProductEachInfo>
                        <S.ProductSerial>{modelNum}</S.ProductSerial>
                        <S.ProductName>{productName}</S.ProductName>
                        <S.ProductSubName>{productSubName}</S.ProductSubName>
                        <S.ProductSize>{size}</S.ProductSize>
                    </S.ProductEachInfo>
                </S.ProductInfo>
            </S.Product>
            {/* <S.OrderInfo>
                <S.AddressText>판매 정산 계좌</S.AddressText>
                <S.AddressDeleveryInfo>
                    <S.AddressInfo>
                        <S.AddressInfoBox>
                            <S.AddressInfoTitle>계좌</S.AddressInfoTitle>
                            <S.AddressInfoDesc>
                                {bankName + '' + accountNumber}
                            </S.AddressInfoDesc>
                        </S.AddressInfoBox>
                        <S.AddressInfoBox>
                            <S.AddressInfoTitle>예금주</S.AddressInfoTitle>
                            <S.AddressInfoDesc>{accountName}</S.AddressInfoDesc>
                        </S.AddressInfoBox>
                    </S.AddressInfo>
                    <S.AddressChangeBtn
                        type="button"
                        value="변경"
                        onClick={() => {}}
                    ></S.AddressChangeBtn>
                </S.AddressDeleveryInfo>
            </S.OrderInfo> */}
            <S.Address>
                <S.AddressTitle>
                    <S.AddressText>반송 주소</S.AddressText>
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
                    <S.DeleveryImg src="/image/payment/seller_delevery.png"></S.DeleveryImg>
                    <S.DeleveryInfo>
                        <S.DeleveryTitle>
                            <S.DeleveryName>판매자 배송</S.DeleveryName>
                            <S.DeleveryCost>선불</S.DeleveryCost>
                        </S.DeleveryTitle>
                        <S.DeleveryDesc>
                            착불 발송 시 정산금액에서 차감
                        </S.DeleveryDesc>
                    </S.DeleveryInfo>
                </S.BrandDelevery>
            </S.Address>
            <S.OrderInfo>
                <S.AddressText>최종 주문 정보</S.AddressText>
                <S.PriceTitle>정산금액</S.PriceTitle>
                <S.PriceGreen>
                    <S.PriceFont>{addComma(getPrice)}</S.PriceFont>원
                </S.PriceGreen>
                <S.Hr></S.Hr>
                <S.PriceInfo>
                    <S.PriceDL>
                        <S.PriceDT style={{ color: '#222' }}>
                            즉시 판매가
                        </S.PriceDT>
                        <S.PriceDD
                            style={{ fontWeight: 700, fontSize: '14px' }}
                        >
                            <S.PriceFont>{addComma(bidPrice)}</S.PriceFont>원
                        </S.PriceDD>
                    </S.PriceDL>
                    <S.PriceDL>
                        <S.PriceDT>검수비</S.PriceDT>
                        <S.PriceDD>무료</S.PriceDD>
                    </S.PriceDL>
                    <S.PriceDL>
                        <S.PriceDT>수수료</S.PriceDT>
                        <S.PriceDD>
                            {'+' + addComma(Math.floor(bidPrice * 0.05)) + '원'}
                        </S.PriceDD>
                    </S.PriceDL>
                    <S.PriceDL>
                        <S.PriceDT>배송비</S.PriceDT>
                        <S.PriceDD>선불. 판매자 부담</S.PriceDD>
                    </S.PriceDL>
                </S.PriceInfo>
            </S.OrderInfo>
            <S.Agree>
                <S.AgreeList>
                    <S.AgreeItem>
                        <S.Notice>
                            검수 기준과 페널티 및 이용 정책을 확인하였습니다.
                        </S.Notice>
                        <S.Checkbox
                            type="checkbox"
                            onChange={e =>
                                checkedItemHandler('check1', e.target.checked)
                            }
                            checked={
                                checkedList.includes('check1') ? true : false
                            }
                        ></S.Checkbox>
                    </S.AgreeItem>
                    <S.HrAgree></S.HrAgree>
                    <S.AgreeItem>
                        <S.Notice>
                            신청이 완료되면 휴일을 제외하고 48시간 내에 발송을
                            완료해야 합니다.
                        </S.Notice>
                        <S.Checkbox
                            type="checkbox"
                            onChange={e =>
                                checkedItemHandler('check2', e.target.checked)
                            }
                            checked={
                                checkedList.includes('check2') ? true : false
                            }
                        ></S.Checkbox>
                    </S.AgreeItem>
                    <S.HrAgree></S.HrAgree>
                    <S.AgreeItem>
                        <S.Notice>
                            '판매하기'를 선택하시면 판매 입찰 내역이 등록됩니다.
                        </S.Notice>
                        <S.Checkbox
                            type="checkbox"
                            onChange={e =>
                                checkedItemHandler('check3', e.target.checked)
                            }
                            checked={
                                checkedList.includes('check3') ? true : false
                            }
                        ></S.Checkbox>
                    </S.AgreeItem>
                    <S.HrAgree></S.HrAgree>
                    <S.AgreeItem>
                        <S.Notice style={{ fontWeight: 700 }}>
                            판매 조건을 모두 확인하였으며, 진행에 동의합니다.
                        </S.Notice>
                        <S.Checkbox
                            type="checkbox"
                            onChange={e =>
                                checkedItemHandler('check4', e.target.checked)
                            }
                            checked={
                                checkedList.includes('check4') ? true : false
                            }
                        ></S.Checkbox>
                    </S.AgreeItem>
                </S.AgreeList>
                <S.PayPriceShow>
                    <S.PayPriceShowTitle>정산금액</S.PayPriceShowTitle>
                    <S.SellPriceShowDiv>
                        <S.PriceFont>{addComma(getPrice)}</S.PriceFont>원
                    </S.SellPriceShowDiv>
                </S.PayPriceShow>
                <S.PayBtn
                    onClick={sellOrder}
                    style={{
                        background:
                            isShipInfoEmpty(shipInfo) ||
                            checkedList.length !== 4
                                ? '#ebebeb'
                                : '#31b46e',
                    }}
                    disabled={
                        isShipInfoEmpty(shipInfo) || checkedList.length !== 4
                    }
                >
                    <span>판매하기</span>
                </S.PayBtn>
            </S.Agree>
        </S.PayForm>
    );
};

export default SellForm;
