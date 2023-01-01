import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as S from './ChangeAddressModalStyle';

const ChangeAddressModal = ({ id }) => {
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

    return (
        <S.AddressList>
            {addressList.map((item, index) => {
                return <div key={index}>{item.addr1}</div>;
            })}
        </S.AddressList>
    );
};

export default ChangeAddressModal;
