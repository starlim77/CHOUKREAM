import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from './Pagination';
import * as S from './SalesListStyle';

const SalesList = () => {
    const [sales, setSales] = useState([]);
    const [imgName, setImgName] = useState([]);

    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;

    useEffect(() => {
        axios
            .get('http://localhost:8080/pay/getAllSales')
            .then(res => {
                //이미지
                setSales(res.data);
                res.data.map(item => {
                    if (item.type === 'resell') {
                        axios
                            .get(
                                'http://localhost:8080/getProduct?seq=' +
                                    item.productNum,
                            )
                            .then(result => {
                                //console.log(result.data.imgName);
                                //setImgName(imgName.concat(result.data.imgName));
                                setImgName(...imgName, result.data.imgName);
                            })
                            .catch(err => console.log(err));
                    }
                });
            })
            .catch(err => console.log(err));
    }, []);

    console.log(sales);
    console.log(JSON.stringify(imgName));

    const getImgName = (type, seq) => {
        var imgName;
        if (type === 'resell') {
            axios
                .get('http://localhost:8080/getProduct?seq=' + seq)
                .then(res => {
                    // console.log(res.data.imgName);
                    imgName = '/resellList/' + res.data.imgName;
                    return imgName;
                })
                .catch(err => console.log(err));
        }
        console.log(imgName);
        return imgName;
    };

    const cancelPay = (orderNumber, payPrice) => {
        // axios({
        //     url: 'http://api.iamport.kr/payments/cancel',
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     data: {
        //         merchant_uid: orderNumber, // 주문번호
        //         cancel_request_amount: payPrice, // 환불금액
        //         reason: '테스트 결제 환불', // 환불사유
        //         //refund_holder: "홍길동", // [가상계좌 환불시 필수입력] 환불 수령계좌 예금주
        //         //refund_bank: "88" // [가상계좌 환불시 필수입력] 환불 수령계좌 은행코드(예: KG이니시스의 경우 신한은행은 88번)
        //         //refund_account: "56211105948400" // [가상계좌 환불시 필수입력] 환불 수령계좌 번호
        //     },
        // }).then(alert('Asdf'));
        // axios({
        //     url: 'https://api.iamport.kr/users/getToken',
        //     method: 'post', // POST method
        //     headers: { 'Content-Type': 'application/json' }, // "Content-Type": "application/json"
        //     data: {
        //         imp_key: 'imp11755173', // REST API키
        //         imp_secret:
        //             'ABpaLEt7DIbDUefCfP4Hzu5VR4j5kivPYibwQhLJLz3457NS7twNGEITMibfy6TtoFhlPJnMYGz4682Q', // REST API Secret
        //     },
        // });

        axios
            .post('http://localhost:8080/pay/cancelPay', null, {
                params: { orderNumber, payPrice },
            })
            .then(alert('as'));
    };

    const addComma = num => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const photoshop = itemImg => {
        if (itemImg !== null && itemImg !== undefined) {
            const img = itemImg.split(',');
            return img[0];
        }
    };

    return (
        <S.SalesListWrapper>
            <S.Title>매출 내역</S.Title>

            <S.SalesList>
                {sales.slice(offset, offset + limit).map(item => {
                    return (
                        <S.Sales key={item.orderNumber}>
                            <S.Type>
                                {item.type === 'resell'
                                    ? '리셀상품'
                                    : item.type === 'new'
                                    ? '새 상품'
                                    : '중고상품'}
                            </S.Type>
                            <S.SalesImg
                                src={
                                    item.type === 'resell'
                                        ? `/resellList/${photoshop(
                                              item.img_name,
                                          )}`
                                        : item.type === 'new'
                                        ? `/newProductList/${photoshop(
                                              item.img_name,
                                          )}`
                                        : `/storage/${photoshop(item.img_name)}`
                                }
                            ></S.SalesImg>
                            <S.SalesInfo>
                                <S.SalesOrderNum>
                                    {item.order_number}
                                </S.SalesOrderNum>
                                <S.SalesTitle>{item.title}</S.SalesTitle>
                                <S.SalesSize>{item.size}</S.SalesSize>
                            </S.SalesInfo>
                            <S.Price>{addComma(item.pay_price) + '원'}</S.Price>
                            <S.Status>{item.status}</S.Status>
                            {/* {item.satus === '결제완료' ? (
                                <S.CancelBtn
                                    type="button"
                                    onClick={() => cancelPay(item.order_number)}
                                    value="결제 취소"
                                ></S.CancelBtn>
                            ) : null}
                            <S.CancelBtn
                                type="button"
                                onClick={() =>
                                    cancelPay(item.orderNumber, item.payPrice)
                                }
                                value="결제 취소"
                            ></S.CancelBtn> */}
                        </S.Sales>
                    );
                })}
            </S.SalesList>
            <Pagination
                total={sales.length}
                limit={10}
                page={page}
                setPage={setPage}
            />
        </S.SalesListWrapper>
    );
};

export default SalesList;
