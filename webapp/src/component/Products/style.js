import styled from 'styled-components';

export const ProductsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    overflow-anchor: none;
`;

export const ContainerDetail = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px red dotted;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    overflow: hidden;
    margin: 0 auto;
    padding: 30px 40px 120px;
    max-width: 1280px;
    border: 1px blue dotted;
`;
export const ColumnBind = styled.div`
    display: flex;
    border: 1px green dotted;
    justify-content: space-between;
    position: relative;
    width: 1080px;
`;

export const ColumnIsFixed = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px black dotted;
    overflow: auto;
    width: 50%;
`;

export const ColumnBox = styled.div`
    position: fixed;
    top: 130px;
`;

export const Column = styled.div`
    display: flex;
    justify-content: flex-end;
    border: 1px orange dotted;
    position: relative;
    float: right;
    padding-left: 3.334%;
    width: 50%;
`;

export const BannerAlert = styled.div`
    padding-top: 20px;
`;

export const BannerAlertContent = styled.div`
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 11px 12px 12px 11px;
    background-color: #fafafa;
    border: 1px solid rgba(34,34,34,.05);
    border-radius: 10px;
    -webkit-box-shadow: 0 2px 6px rgb(0 0 0 / 12%);
    box-shadow: 0 2px 6px rgb(0 0 0 / 12%);
    cursor: pointer;
`;

export const AlertTitleCareMark = styled.p`
    float: left;
    display: block;
    line-height: 12px;
    padding: 3px 5px 2px;
    margin-right: 4px;
    border-radius: 2px;
    font-size: 12px;
    letter-spacing: -.06px;
    font-weight: 600;
    color: #fff;
    background-color: #ff8824;
`;

export const AlertTitleAlertText = styled.span`
    overflow: hidden;
    display: block;
    line-height: 15px;
    font-size: 13px;
    letter-spacing: -.07px;
    font-weight: 600;
`;
export const AlertTitleAlertSubText = styled.p`
    overflow: hidden;
    display: block;
    line-height: 14px;
    margin-top: 4px;
    font-size: 12px;
    letter-spacing: -.06px;
    color: rgba(34,34,34,.5);
`;

export const MainTitleBoxBrand = styled.a`
    display: inline-block;
    vertical-align: top;
    line-height: 19px;
    padding-top: 1px;
    margin-bottom: 9px;
    font-size: 18px;
    letter-spacing: -.27px;
    font-weight: 800;
    border-bottom: 2px solid #222;
    cursor: pointer;
`;

export const MainTitleBoxTitle = styled.p`
    margin-bottom: 4px;
    font-size: 18px;
    letter-spacing: -.09px;
    font-weight: 400;
`;

export const DetailSize = styled.div`
    padding-top: 19px;
    padding-bottom: 12px;
    border-bottom: 1px solid #ebebeb;
    border: 1px red dotted;
    margin-top: 15px;
    min-height: 50px;
`;

export const DetailSizeTitle = styled.div`
    float: left;
`;

export const DetailSizeTitleText = styled.span`
    padding-top: 4px;
    display: inline-block;
    line-height: 16px;
    font-size: 13px;
    letter-spacing: -.07px;
    color: rgba(34,34,34,.8);
`;

export const DetailSizeSize = styled.div`
    float: right;
`;

export const BtnSize = styled.a`
    display: block;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -.21px;
    font-weight: 700;
`;

export const BtnSizeBtnText = styled.span`
    display: inline-block;
    vertical-align: top;
    margin-right: 5px;
    font-size: 16px;
    font-weight: 700;
`;

export const MainTitleBoxSubTitle = styled.p`
    line-height: 17px;
    font-size: 14px;
    letter-spacing: -.21px;
    letter-spacing: -.15px;
    color: rgba(34,34,34,.5);
`;

export const DetailPrice = styled.div`
    margin-top: 15px;
    min-height: 44px;
`;

export const DetailPriceTitle = styled.div`
    float: left;
`;

export const DetailPriceTitleText = styled.span`
    padding-top: 5px;
    display: inline-block;
    font-size: 12px;
    color: rgba(34,34,34,.8);
`;

export const DetailPricePrice = styled.div`
    float: right;
    padding-top: 2px;
    text-align: right;
`;

export const DetailPriceAmount = styled.div`
    font-weight: 700;
    font-size: 0;
`;

export const DetailPriceNum = styled.span`
    display: inline-block;
    line-height: 26px;
    vertical-align: top;
    font-size: 20px;
    letter-spacing: -.1px;
`;

export const DetailPriceWon = styled.span`
    display: inline-block;
    line-height: 26px;
    vertical-align: top;
    font-size: 18px;
    letter-spacing: -.27px;
`;

export const DivisionBtnBox = styled.div`
    margin-top: 17px; 
    display: -webkit-box;
    display: flex;
    height: 60px;
`;

export const DivisionBtnBoxBtnDivisionBuy = styled.a`
    position: relative;
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
    color: #fff;
    background-color: #ef6253;
    margin-right: 10px;
`;

export const DivisionBtnBoxBtnDivisionSell = styled.a`
    position: relative;
    display: -webkit-inline-box;
    display: inline-flex;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    align-items: center;
    border-radius: 10px;
    color: #fff;
    background-color: #41b979;
`;

export const DivisionBtnBoxTitle = styled.strong`
    width: 55px;
    text-align: center;
    font-size: 18px;
    letter-spacing: -.27px;
    font-weight: bold;
`;
export const DivisionBtnBoxPrice = styled.div`
    margin-left: 10px;
    line-height: 15px;
`;

export const DivisionBtnBoxAmount = styled.span`
    display: block;
    font-size: 0;
`;

export const DivisionBtnBoxNum = styled.em`
    display: inline-block;
    vertical-align: top;
    font-weight: 700;
    font-size: 15px;
`;

export const DivisionBtnBoxWon = styled.span`
    font-size: 14px;
    letter-spacing: -.21px;
    display: inline-block;
    vertical-align: top;
    font-weight: 700;
`;

export const DivisionBtnBoxDesc = styled.span`
    display: block;
    font-size: 11px;
    font-weight: 600;
    color: hsla(0,0%,100%,.8);
    line-height: 15px;
`;

export const LargeBtnWish = styled.a`
    height: 60px;
    line-height: 58px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    color: #333;
    margin-top: 12px;
`;

export const LargeBtnWishBtnText = styled.span`
    font-size: 15px;
    letter-spacing: -.15px;
    font-weight: 400;
    letter-spacing: normal;
`;

export const LargeBtnWishCountNum = styled.span`
    margin-left: 4px;
    font-size: 15px;
    font-weight: 600;
    font-weight: semibold;
    letter-spacing: normal;
`;

export const DetailTitleInfoTitle = styled.h3`
    margin-left: 4px;
    font-size: 15px;
    font-weight: 600;
    font-weight: semibold;
    letter-spacing: normal;
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`;

export const DetailProductWrap = styled.div`
    border: 1px solid #ebebeb;
    border-width: 1px 0;
`;

export const DetailProduct = styled.div`
    display: -webkit-box;
    display: flex;
    min-height: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const DetailBoxModelNum = styled.div`
    padding-left: 0;
    -webkit-box-flex: 1;
    flex: 1;
    padding: 0 12px;
`;

export const DetailBox = styled.div`
    padding-left: 0;
    -webkit-box-flex: 1;
    flex: 1;
    padding: 0 12px;
`;

export const DetailBoxProductTitle = styled.dt`
    line-height: 14px;
    font-size: 12px;
    letter-spacing: -.06px;
    letter-spacing: -.33px;
    color: rgba(34,34,34,.5);
`;

export const DetailBoxProductInfo = styled.dd`
    margin-top: 4px;
    word-break: break-word;
    line-height: 17px;
    font-size: 14px;
`;

export const ConfirmWrap = styled.div`
    padding-top: 39px;
`;

export const ConfirmWrapConfirmTitle = styled.h3`
    line-height: 22px;
    padding-bottom: 12px;
    font-size: 18px;
    letter-spacing: -.27px;

    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
`;

export const ConfirmWrapConfirmContemt = styled.div`
    border-top: 1px solid #ebebeb;
`;

export const DropdownHead = styled.div`
    padding: 18px 0 17px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid #ebebeb;
    cursor: pointer;
`;

export const DropdownHeadTitle = styled.p`
    max-width: 320px;
    font-size: 15px;
    letter-spacing: -.15px;
`;

export const DropdownContent = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #ebebeb;
`;

export const DropdownContentContent = styled.div`
    font-size: 13px;
    letter-spacing: -.07px;
    color: rgba(34,34,34,.8);
`;

export const Emphasis = styled.strong`
    font-weight: bold;
`;

export const ThumbArea = styled.div`
    float: left;
    width: 40px;
    margin-right: 14px;
`;

export const ThumbAreaImg = styled.img`
    width: 100%;
    vertical-align: top;
`;

export const TextAreaTitle = styled.strong`
    display: block;
    line-height: 16px;
    font-size: 13px;
    letter-spacing: -.07px;
    font-weight: 600;
    letter-spacing: normal;
    font-weight: bold;
`;

export const TextAreaDesc = styled.p`
    margin-top: 1px;
    line-height: 16px;
    font-size: 13px;
    letter-spacing: -.07px;
    letter-spacing: normal;
    color: rgba(34,34,34,.5);
`;

export const MeditationNoticeProduct = styled.p`
    padding-top: 40px;
    margin-top: 20px;
    padding-top: 20px;
    line-height: 16px;
    border-top: 1px solid #f0f0f0;
    font-size: 12px;
    letter-spacing: -.06px;
    letter-spacing: -.05px;
    color: rgba(34,34,34,.5);
`;



/* 모달창을 화면 중앙. 최상단에 노출 */
export const Container = styled.div`
    /* 모달창 크기 */
    width: 300px;
    height: 200px;
  
    /* 최상단 위치 */
    z-index: 999;
    
    /* 중앙 배치 */
    /* top, bottom, left, right 는 브라우저 기준으로 작동한다. */
    /* translate는 본인의 크기 기준으로 작동한다. */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  
    /* 모달창 디자인 */
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
`;

/* 모달창 내부 X버튼 */
export const Close = styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
`;
