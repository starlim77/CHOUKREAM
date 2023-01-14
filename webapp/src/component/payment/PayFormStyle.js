import styled from 'styled-components';

export const PayForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 8px;
    background-color: #fafafa;
`;
export const Address = styled.section`
    display: flex;
    flex-direction: column;
    width: 700px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 20px;
    padding: 32px;
    background-color: white;
`;

export const AddressTitle = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const AddressText = styled.h3`
    font-size: 18px;
    font-weight: 700;
`;

export const AddressAddNew = styled.a`
    font-size: 13px;
    color: rgba(34, 34, 34, 0.5);
    cursor: pointer;
`;

export const AddressContent = styled.div`
    display: flex;
`;

export const AddressDeleveryInfo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const AddressInfo = styled.div`
    display: flex;
    gap: 6px;
    margin: 12px 0;
    flex-direction: column;
`;

export const AddressInfoBox = styled.div`
    display: flex;
`;

export const AddressInfoTitle = styled.dt`
    width: 80px;
    font-size: 13px;
    color: rgba(34, 34, 34, 0.5);
`;

export const AddressInfoDesc = styled.dd`
    font-size: 14px;
`;

export const AddressChangeBtn = styled.input`
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    padding: 8px 14px;
    font-size: 12px;
    color: rgba(34, 34, 34, 0.8);
    background-color: white;
    cursor: pointer;
`;

export const AddressDeleveryAsk = styled.button`
    height: 48px;
    font-size: 14px;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    width: 100%;
    text-align: left;
    background-color: white;
    cursor: pointer;
`;

export const ShippingMemo = styled.span`
    margin-left: 8px;
    color: #222;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const Hr = styled.div`
    margin-top: 22px;
    padding-top: 15px;
    border-top: 1px solid #ebebeb;
`;

export const BrandDelevery = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 12px 15px;
    margin-top: 12px;
    border: 1px solid #222;
    border-radius: 10px;
    background-color: white;
    text-align: left;
`;

export const DeleveryImg = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 15px;
`;

export const DeleveryInfo = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

export const DeleveryTitle = styled.p``;

export const DeleveryName = styled.span`
    font-size: 14px;
    font-weight: 600;
    margin-right: 5px;
`;

export const DeleveryCost = styled.span`
    font-size: 14px;
`;

export const DeleveryDesc = styled.p`
    margin-top: 3px;
    font-size: 14px;
    color: rgba(34, 34, 34, 0.5);
`;

export const Point = styled.section`
    display: flex;
    flex-direction: column;
    width: 700px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 32px;
    background-color: white;
`;

export const UsePoint = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
`;

export const UsePointShow = styled.input`
    border: 1px solid #ebebeb;
    border-radius: 10px;
    width: 560px;
    height: 53px;
    box-sizing: border-box;
    padding: 17px 12px;
    font-size: 14px;
    cursor: default;
    &::placeholder {
        color: rgba(34, 34, 34, 0.2);
    }
`;

export const UseAllBtn = styled.button`
    border: none;
    border-radius: 12px;
    font-size: 12px;
    padding: 5px 9px;
    color: #fff;
    background-color: ${props => (props.havePoint > 0 ? 'black' : null)};
    cursor: ${props => (props.havePoint > 0 ? 'pointer' : 'default')};
`;

export const HavePoint = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
`;

export const HavePointSpan = styled.span`
    font-size: 14px;
    color: rgba(34, 34, 34, 0.5);
`;

export const HavePointShow = styled.span`
    font-size: 14px;
    margin-left: 11px;
    font-weight: 300;
`;

export const OrderInfo = styled.section`
    display: flex;
    flex-direction: column;
    width: 700px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 32px;
    background-color: white;
`;

export const PriceTitle = styled.dt`
    display: flex;
    justify-content: flex-start;
    margin-top: 24px;
    font-size: 14px;
    font-weight: 700;
`;

export const Price = styled.dd`
    display: flex;
    justify-content: flex-end;
    color: #f15746;
    font-size: 20px;
    font-weight: 700;
`;
export const PriceInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
`;
export const PriceDL = styled.dl`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
`;

export const PriceDT = styled.dt`
    color: rgba(34, 34, 34, 0.5);
`;
export const PriceDD = styled.dd``;
export const PriceFont = styled.span`
    font-style: italic;
`;
export const OrderWay = styled.section`
    display: flex;
    flex-direction: column;
    width: 700px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 32px;
    background-color: white;
`;
export const OrderNormal = styled.dl`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 14px;
`;
export const OrderNormalTitle = styled.dt`
    font-weight: 600;
    font-size: 15px;
`;
export const OrderNormalDesc = styled.dd`
    margin-left: 7px;
    font-size: 13px;
    color: rgba(34, 34, 34, 0.5);
`;
export const PayWay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #222;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 0px 13px;
    margin-top: 12px;
    width: 180px;
    height: 60px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
`;
export const PayWayImg = styled.img`
    width: 90px;
`;
export const PayWayAlert = styled.p`
    margin-top: 10px;
    font-size: 15px;
    color: rgba(34, 34, 34, 0.5);
`;
export const Agree = styled.section`
    display: flex;
    flex-direction: column;
    width: 700px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 32px;
    background-color: white;
`;
export const AgreeList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`;
export const AgreeItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export const Notice = styled.p`
    font-size: 15px;
`;
export const Checkbox = styled.input`
    width: 22px;
    height: 22px;
`;
export const HrAgree = styled.div`
    border-top: 1px solid #ebebeb;
`;
export const PayPriceShow = styled.dl`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 15px;
`;
export const PayPriceShowDiv = styled.div`
    color: #f15746;
    font-size: 20px;
    font-weight: 700;
`;
export const PayPriceShowTitle = styled.dt`
    font-size: 15px;
    font-weight: 600;
`;
export const PayBtn = styled.button`
    height: 52px;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    color: white;
    background-color: ${props => (props.disabled ? '#ebebeb' : '#ef6253')};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`;

// export const ModalBackground = styled.div`
//     position: absolute;
//     top: 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100vh;
//     z-index: 998;
//     background-color: rgba(34, 34, 34, 0.5);
// `;
