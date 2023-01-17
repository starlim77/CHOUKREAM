import styled from 'styled-components';

export const MainWrap = styled.div``;

export const MainProductWrap = styled.div`
    margin: 0 auto;
    width: 1280px;
`;

export const SectionTitle = styled.h4`
    font-size: 20px;
    letter-spacing: -0.1px;
    font-weight: 700;
    color: #000;
`;

export const SubTitle = styled.p`
    font-size: 14px;
    letter-spacing: -0.21px;
    color: rgba(34, 34, 34, 0.5);
`;

export const ItemtWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px 24px;
    margin: 20px 0;
`;

export const MoreButton = styled.button`
    padding: 0 30px;
    margin: 0 auto;
    margin-top: 20px;
    border: 1px solid #d3d3d3;
    color: rgba(34, 34, 34, 0.8);
    padding: 0 18px;
    height: 42px;
    border-radius: 12px;
    font-size: 14px;
    letter-spacing: -0.14px;
    background: none;
    display: block;
`;

export const ProductItemWrap = styled.div`
    flex: 1;
`;

export const ImgWrap = styled.div`
    width: 282px;
    height: 282px;
    border-radius: 8px;
`;

export const ProductImg = styled.img`
    width: 100%;
`;

export const InfoBox = styled.div`
    margin-top: 9px;
`;

export const BrandName = styled.p`
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    height: 17px;
    line-height: 17px;
    padding-bottom: 2px;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 1px solid #222;
    width: fit-content;
    max-width: 100%;
`;

export const ProductName = styled.p`
    line-height: 17px;
    margin-top: 8.5px;
    max-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    font-size: 14px;
    color: #222;
`;

export const ShippingExpress = styled.span`
    margin-top: 4px;
    position: relative;
    display: inline-block;
    vertical-align: top;
    line-height: 11px;
    padding: 4.5px 5.5px 4.5px 17px;
    color: #31b46e;
    background-color: #f2f9f6;
    border-radius: 2px;
    font-size: 11px;
    letter-spacing: -0.33px;
    height: 11px;
    &::before {
        content: '';
        position: absolute;
        left: 3.5px;
        top: 3px;
        width: 11px;
        height: 13px;
        background: url('/image/product/a_120a84f036724d0d97a2343aafff4ecf.png')
            0 0 no-repeat;
        background-size: 11px 13px;
    }
`;

export const PriceInfo = styled.p`
    margin-top: 7px;
    line-height: 17px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -0.04px;
    color: #222;
`;

export const Desc = styled.span`
    line-height: 13px;
    font-size: 11px;
    color: rgba(34, 34, 34, 0.5);
`;
