import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import NewAddressModal from '../../payment/NewAddressModal';
import UpdateAddressModal from './UpdateAddressModal';
import * as S from './AddressStyle';

const Address = () => {
    const memberSeq = jwtDecode(localStorage.getItem('accessToken')).sub;
    const navigate = useNavigate();
    const [modals, setModals] = useState([false, false]);
    const [shipInfo, setShipInfo] = useState();
    const [addressList, setAddressList] = useState([]);
    const [id, setId] = useState();
    const [updateSeq, setUpdateSeq] = useState();
    const [updateCheck, setUpdateCheck] = useState()

    useEffect(() => {
        axios
            .get('http://localhost:8080/getMember', {
                params: { id: memberSeq },
            })
            .then(res => setId(res.data.email));
    }, []);

    useEffect(() => {
        axios
            .get('http://localhost:8080/my/getAllAddress', {
                params: { id },
            })
            .then(res => {
                setAddressList(res.data);
            })
            .catch(err => console.log(err));
    }, [id, modals, updateCheck]);

    const onAddressDelete = seq => {
        window.confirm('정말로 삭제 하시겠습니까?') &&
            axios
                .delete('http://localhost:8080/my/deleteAddress', {
                    params: { id, seq },
                })
                .then(res => setAddressList(res.data))
                .catch(err => console.log(err));
    };
    return (
        <S.AddressPage>
            <S.AddressTitle>
                <S.AddressTitleText>기본배송지</S.AddressTitleText>
                <S.NewAddressBtn
                    onClick={() => setModals([true, false, false])}
                >
                    + 새 배송지 추가
                </S.NewAddressBtn>
                {modals[0] ? (
                    <NewAddressModal
                        id={id}
                        setShipInfo={setShipInfo}
                        setModals={setModals}
                    ></NewAddressModal>
                ) : (
                    false
                )}
            </S.AddressTitle>
            <S.AddressContainer>
                {addressList.length === 0 ? (
                    <S.NoneAddress>
                        <S.NoneText>배송지 정보가 없습니다</S.NoneText>
                        <S.NoneText>새 배송지를 등록해 주세요</S.NoneText>
                        <S.NoneAddressBtn
                            name="address"
                            onClick={() => setModals([true, false, false])}
                        >
                            새 배송지 추가
                        </S.NoneAddressBtn>
                        {modals[0] ? (
                            <NewAddressModal
                                id={id}
                                setShipInfo={setShipInfo}
                                setModals={setModals}
                            ></NewAddressModal>
                        ) : null}
                    </S.NoneAddress>
                ) : (
                    <S.AddressList>
                        {addressList.map((item, index) => {
                            return (
                                <S.Address key={index}>
                                    <S.Name>
                                        {item.name}
                                        {index === 0 ? (
                                            <S.Mark>기본 배송지</S.Mark>
                                        ) : null}
                                    </S.Name>
                                    <S.Tel>{item.phone}</S.Tel>
                                    <S.UpdateBtn
                                        onClick={() => {
                                            setModals([false, true, false]);
                                            setUpdateSeq(item.seq);
                                            setUpdateCheck(0)
                                        }}
                                    >
                                        수정
                                    </S.UpdateBtn>

                                    <S.DeleteBtn
                                        onClick={() =>
                                            onAddressDelete(item.seq)
                                        }
                                    >
                                        삭제
                                    </S.DeleteBtn>
                                    <S.AllAddress>{`(${item.zipcode}) ${item.addr1} ${item.addr2}`}</S.AllAddress>
                                    <S.Hr></S.Hr>
                                </S.Address>
                            );
                        })}
                        {modals[1] ? (
                            <UpdateAddressModal
                                seq={updateSeq}
                                setShipInfo={setShipInfo}
                                setModals={setModals}
                                setUpdateCheck={setUpdateCheck}
                            ></UpdateAddressModal>
                        ) : null}
                    </S.AddressList>
                )}
            </S.AddressContainer>
        </S.AddressPage>
    );
};

export default Address;
