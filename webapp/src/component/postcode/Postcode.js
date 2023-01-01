import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components';

const Postcode = props => {
    const { address, setAddress, addr2Ref } = props;
    const { zipcode, addr1 } = address;

    const open = useDaumPostcodePopup(
        '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
    );

    const handleComplete = data => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress +=
                    extraAddress !== ''
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }

        setAddress({ ...address, zipcode: data.zonecode, addr1: fullAddress });
        addr2Ref.current.focus();
        //console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    };

    const handleClick = () => {
        open({ onComplete: handleComplete });
    };

    return (
        <SearchBtn type="button" onClick={handleClick}>
            우편번호
        </SearchBtn>
    );
};

const SearchBtn = styled.button`
    position: absolute;
    right: 0;
    top: -4px;
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 12px;
    padding: 0 14px;
    width: 72px;
    height: 34px;
    cursor: pointer;
    color: rgba(34, 34, 34, 0.8);
    background-color: #fff;
`;

export default Postcode;
