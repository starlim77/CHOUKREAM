import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import Postcode from '../../postcode/Postcode';
import * as S from './UpdateAddressModalStyle';

const NewAddressModal = props => {
    const { setShipInfo, seq, setModals, setUpdateCheck } = props;
    const [defaultAddress, setDefaultAddress] = useState(false);

    const [address, setAddress] = useState({
        name: '',
        phone: '',
        zipcode: '',
        addr1: '',
        addr2: '',
    });
    const { name, phone, zipcode, addr1, addr2 } = address;

    useEffect(() => {
        axios
            .get('http://localhost:8080/my/getAddressBySeq', {
                params: { seq },
            })
            .then(res => setAddress(res.data));
    }, []);

    const updateAddress = () => {
        axios
            .post('http://localhost:8080/my/addressUpdate', null, {
                params: {
                    ...address,
                    defaultAddress: defaultAddress ? 1 : 0,
                },
            })
            .then(res => setUpdateCheck(1));
    };

    const addr2Ref = useRef();
    const changeAddress = e => {
        var { name, value } = e.target;
        setAddress({ ...address, [name]: value });
    };

    useEffect(() => {
        //console.log(address);
    }, [address]);

    return (
        <>
            <S.ModalWrapper></S.ModalWrapper>
            <S.NewAddress>
                <S.NewAddressTitle>
                    <S.HeaderTitle>주소 수정</S.HeaderTitle>
                    <S.HeaderCloseBtn></S.HeaderCloseBtn>
                </S.NewAddressTitle>
                <S.InputInfo>
                    <S.InputTitle>이름</S.InputTitle>
                    <S.Input
                        placeholder="수령인의 이름"
                        name="name"
                        value={name}
                        onChange={changeAddress}
                    ></S.Input>
                    <S.InputTitle>휴대폰 번호</S.InputTitle>
                    <S.Input
                        placeholder="- 없이 입력"
                        name="phone"
                        value={phone}
                        onChange={changeAddress}
                    ></S.Input>
                    <S.InputTitle>우편번호</S.InputTitle>
                    <S.ZipCode>
                        <S.Input
                            placeholder="우편 번호를 검색하세요"
                            readOnly
                            name="zipcode"
                            value={zipcode}
                            onChange={changeAddress}
                        ></S.Input>
                        <Postcode
                            address={address}
                            setAddress={setAddress}
                            addr2Ref={addr2Ref}
                        ></Postcode>
                    </S.ZipCode>
                    <S.InputTitle>주소</S.InputTitle>
                    <S.Input
                        placeholder="우편 번호 검색 후, 자동입력 됩니다"
                        readOnly
                        name="addr1"
                        value={addr1}
                        onChange={changeAddress}
                    ></S.Input>
                    <S.InputTitle>상세 주소</S.InputTitle>
                    <S.Input
                        placeholder="건물, 아파트, 동/호수 입력"
                        name="addr2"
                        ref={addr2Ref}
                        value={addr2}
                        onChange={changeAddress}
                    ></S.Input>
                </S.InputInfo>
                <S.DefaltAddress>
                    <S.DefaultCheckBox
                        checked={defaultAddress}
                        onChange={() => setDefaultAddress(!defaultAddress)}
                        type="checkbox"
                    ></S.DefaultCheckBox>
                    <S.DefaultSpan>기본 배송지로 설정</S.DefaultSpan>
                </S.DefaltAddress>
                <S.Buttons>
                    <S.CancelBtn
                        type="button"
                        value="취소"
                        onClick={() => setModals([false, false, false])}
                    ></S.CancelBtn>
                    <S.SaveBtn
                        type="button"
                        value="수정하기"
                        onClick={() => {
                            updateAddress();
                            setModals([false, false, false]);
                        }}
                    ></S.SaveBtn>
                </S.Buttons>
            </S.NewAddress>
        </>
    );
};

export default NewAddressModal;
