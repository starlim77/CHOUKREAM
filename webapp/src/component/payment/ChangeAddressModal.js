import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as S from './ChangeAddressModalStyle';

const ChangeAddressModal = ({ id, setShipInfo, setModals }) => {
    const [addressList, setAddressList] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/my/getAllAddress', {
                params: { id },
            })
            .then(res => {
                setAddressList(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const changeAddress = name => {
        setShipInfo({
            shipName: addressList[name].name,
            shipPhone: addressList[name].phone,
            shipAddress: `(${addressList[name].zipcode}) ${addressList[name].addr1} ${addressList[name].addr2}`,
        });
        setModals([false, false]);
    };

    // console.log(addressList);

    return (
        <S.AddressList>
            <S.AddressListTitle>주소록</S.AddressListTitle>
            {addressList.map((item, index) => {
                return (
                    <S.Address
                        key={index}
                        name={index}
                        onClick={e =>
                            changeAddress(e.currentTarget.getAttribute('name'))
                        }
                    >
                        <S.Name>
                            {item.name}
                            {index === 0 ? <S.Mark>기본 배송지</S.Mark> : null}
                        </S.Name>
                        <S.Tel>{item.phone}</S.Tel>
                        <S.AllAddress>{`(${item.zipcode}) ${item.addr1} ${item.addr2}`}</S.AllAddress>
                        <S.Hr></S.Hr>
                    </S.Address>
                );
            })}
        </S.AddressList>
    );
};

export default ChangeAddressModal;
