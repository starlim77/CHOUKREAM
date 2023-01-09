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

    display: block;
`;
export const ColumnBind = styled.div`
    display: flex;
    border: 1px green dotted;
    /* justify-content: space-between; */
    justify-content: center; 
    position: relative;
    /* width: 1100px;
    margin: auto; */
`;

export const ColumnIsFixed = styled.div`
    float: left;
    padding-right: 3.334%;
    width: 50%;
    display: block;
`;

export const ColumnBox = styled.div`
    position: ${(props) => props.ScrollActive ? "fixed" : "absolute"};
    top: ${(props) => props.ScrollActive && "130px"};
    bottom: ${(props) => props.ScrollActive || "0"};;
`;

export const ColumnBoxFixed = styled.div`
    position: fixed;
    top: 130px;
    
`;

export const ColumnBoxAbsolute = styled.div`
    position: absolute;
    bottom: 0;
`;

export const Column = styled.div`
    position: relative;
    float: right;
    padding-left: 3.334%;
    width: 50%;
    display: block;
`;

export const BannerAlert = styled.div`
    padding-top: 20px;
`;

export const BannerAlertContent = styled.div`
    display: -webkit-box;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: flex-start;
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

    cursor: pointer;
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

    cursor: pointer;
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

    cursor: pointer;
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

    cursor: pointer;
`;

export const LargeBtnWishBtnImg = styled.img`
    width: 20px;
    height: 20px;
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

export const DeliveryWayWrap = styled.div`
    display: block;
`;

export const DeliveryWayWrapDetailTitle = styled.h3`
    line-height: 17px;
    padding-bottom: 0;
    font-size: 14px;
    letter-spacing: -.21px;
    font-weight: 400;
    color: rgba(34,34,34,.8);

    padding: 40px 0 0 0;

    display: block;
`;

export const DeliveryWay = styled.div`
    padding-top: 12px;

    padding: 18px 0;

    display: block;
`;

export const WayInfo = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
`;

export const WayStatusThumb = styled.div`
    width: 40px;
    height: 40px;

    -webkit-box-flex: 0;
    flex: none;
    margin-right: 14px;

    display: block;
`;

export const WayDesc = styled.div`
    -webkit-box-flex: 1;
    flex: 1;
    display: block;
`;

export const Company = styled.p`
    font-size: 14px;
    letter-spacing: -.21px;
    line-height: 17px;
    display: block;
`;

export const CompanyBadgeTitle = styled.span`
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -.21px;
`;

export const SubText = styled.p`
    line-height: 16px;
    margin-top: 3px;
    font-size: 14px;
    color: rgba(34,34,34,.5);
    display: block;
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

export const ProductSalesGraph = styled.div`
    position: relative;
`;

export const ProductSalesGraphTitle = styled.div`
    display: flex;
`;

export const ProductSalesGraphDetailTitle = styled.h3`
    line-height: 22px;
    padding: 40px 0 20px;
    font-size: 18px;
    letter-spacing: -.27px;
    letter-spacing: -.15px;

    font-weight: bold;
    display: block;
    font-size: 1.17em;
`;

export const ProductSalesGraphSalesFilter = styled.div`
    position: relative;
    margin-left: auto;
    padding: 40px 0 20px;
    font-size: 0;
`;

export const FilterUnit = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
`;

export const BtnBtnSelect = styled.button`
    font-size: 13px;
    letter-spacing: -.07px;
    color: rgba(34,34,34,.8);

    display: -webkit-inline-box;
    display: inline-flex;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    vertical-align: middle;
    text-align: center;
    color: rgba(34,34,34,.8);
    background-color: #fff;
    border: none;
`;

export const SelectTextLayerOpen = styled.span`
    position: relative;
    display: inline-block;
    vertical-align: top;
    line-height: 24px;
    font-weight: 700;
`;

export const LayerSizeListLayer = styled.div`
    top: 30px;
    left: auto;
    right: 0;
    bottom: auto;
    z-index: 1;

    position: absolute;
    background-color: #fff;
`;

export const LayerSizeListLayerContainer = styled.div`
    position: relative;
    top: auto;
    left: auto;
    -webkit-transform: none;
    transform: none;
    width: 176px;
    border-radius: 0;
    -webkit-box-shadow: none;
    box-shadow: none;
`;

export const LayerSizeListLayercontent = styled.div`
    border: 1px solid #d3d3d3;
    border-radius: 10px;
`;

export const SizeList = styled.ul`
    max-height: 280px;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const SizeItem = styled.li`
    max-height: 280px;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const SizeLink = styled.a`
    display: block;
    position: relative;
    padding: 10px 36px 12px 15px;
    font-size: 14px;
    color: rgba(34,34,34,.8);

    font-weight: ${(props) => props.size === props.itemSize && "700"};
    color: #222;

    cursor: pointer;
`;

export const WrapSales = styled.div`
    position: relative;
`;

export const TabArea = styled.div`
    position: relative;
`;

export const TabList = styled.ul`
    display: -webkit-box;
    display: flex;
    border-radius: 10px;
    background-color: #f4f4f4;
`;

export const TabAreaItem = styled.li`
    -webkit-box-flex: 1;
    flex: 1;
    margin: 2px;
`;

export const TabAreaItemLink = styled.a`
    background-color: #fff;
    color: #222;
    font-weight: ${(props) => props.open && '700'};
    -webkit-box-shadow: 0 0 0 0.5px #ebebeb inset;
    box-shadow: inset 0 0 0 0.5px #ebebeb;

    display: block;
    line-height: 16px;
    padding: 7px 0 9px;
    font-size: 13px;
    letter-spacing: -.07px;
    letter-spacing: -.05px;
    text-align: center;
    border-radius: 8px;
    background-color: ${(props) => !props.open && '#f4f4f4'};
    color: rgba(34,34,34,.8);

    cursor: pointer;
`;

export const WrapBids = styled.div`
    position: relative;
`;

export const TabContent = styled.div`
    display: ${(props) => props.open ? 'block' : 'none'};
    height: auto;
    overflow: hidden;
`;

export const TableWrap = styled.div`
    padding: 21px 0 20px;
`;

export const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    border-spacing: 0;
    border: 0;
    border-collapse: collapse;

    display: table;
    text-indent: initial;
`;

export const TableCaption = styled.caption`
    display: table-caption;
    text-align: -webkit-center;
    border-spacing: 0;
    border-collapse: collapse;
`;

export const TableBlind = styled.span`
    overflow: hidden!important;
    position: absolute!important;
    clip: rect(0,0,0,0)!important;
    width: 1px!important;
    height: 1px!important;
    margin: -1px!important;
`;

export const ColGroup = styled.colgroup`
    display: table-column-group;
`;

export const TableTh = styled.th`
    line-height: 14px;
    padding-bottom: 9px;
    border-bottom: 1px solid #ebebeb;
    font-size: 12px;
    letter-spacing: -.06px;
    color: rgba(34,34,34,.5);
    font-weight: 400;
    text-align: left;

    display: table-cell;
    vertical-align: inherit;
`;

export const TableThAlignRight = styled.th`
    line-height: 14px;
    padding-bottom: 9px;
    border-bottom: 1px solid #ebebeb;
    font-size: 12px;
    letter-spacing: -.06px;
    color: rgba(34,34,34,.5);
    font-weight: 400;
    text-align: right;

    display: table-cell;
    vertical-align: inherit;
`;

export const TableTd = styled.td`
    line-height: 17px;
    padding-top: 9px;
    font-size: 14px;
    font-weight: 500;

    display: table-cell;
    vertical-align: inherit;
`;

export const TableTdAlignRight = styled.td`
    line-height: 17px;
    padding-top: 9px;
    font-size: 14px;
    text-align: right;
    font-weight: 500;

    display: table-cell;
    vertical-align: inherit;
`;

export const BtnOutLineGrey = styled.a`
    font-weight: 400;

    border: 1px solid #d3d3d3;
    color: rgba(34,34,34,.8);

    padding: 0 18px;
    height: 42px;
    border-radius: 12px;
    font-size: 14px;
    letter-spacing: -.14px;

    width: 100%;

    display: inline-flex;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    vertical-align: middle;
    text-align: center;

    background-color: #fff;

    cursor: pointer;
`;

export const EmptyContent = styled.div`
    text-align: center;
    padding: 42px 0 22px;

    display: block;
`;

export const EmptyBg = styled.div`
    display: inline-block;
    vertical-align: top;
    width: 58px;
    height: 58px;
    /* background-image: url(/_nuxt/img/detail_empty_img.106499f.png); */
    background-repeat: no-repeat;
    background-size: 58px 58px;
`;

export const Blind = styled.span`
    overflow: hidden!important;
    position: absolute!important;
    clip: rect(0,0,0,0)!important;
    width: 1px!important;
    height: 1px!important;
    margin: -1px!important;
    display: hidden;
`;

export const EmptyText = styled.p`
    margin-top: 8px;
    font-size: 13px;
    letter-spacing: -.07px;
    color: rgba(34,34,34,.3);
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

export const FloatingPrice = styled.div`
    display: ${(props) => props.ScrollActive2 ? "none" : "block"};
    top: 99px;

    position: fixed;
    left: 0;
    right: 0;
    padding: 0 40px 15px;
    background-color: #fff;
    box-shadow: 4px 0 10px 0 rgb(0 0 0 / 10%);
    z-index: 1;
`;

export const FloatingPriceInnerBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;

    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const FloatingPriceProductArea = styled.div`
    padding-right: 40px;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
`;

export const FloatingPriceProductThumb = styled.div`
    overflow: hidden;
    -webkit-box-flex: 0;
    flex: none;
    margin-right: 12px;
    width: 64px;
    height: 64px;
    border-radius: 12px;

    display: block;
`;

export const PictureProductImg = styled.picture`
    display: flex;
`;

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    image-rendering: auto;
`;

export const FloatingProductInfo = styled.div`
    -webkit-box-flex: 1;
    flex: 1;

    display: block;
`;

export const FloatingProductName = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    line-height: 18px;
    font-size: 15px;
`;

export const FloatingProductTranslatedName = styled.p`
    line-height: 14px;
    margin-top: 4px;
    font-size: 12px;
    letter-spacing: -.06px;
    color: rgba(34,34,34,.5);

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const FloatingProductBtnArea = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 560px;
    height: 50px;
`;

export const FloatingBtnOutLineGrey = styled.div`
    width: 160px;

    -webkit-box-flex: 0;
    flex: none;
    height: inherit;
    line-height: 48px;
    margin-right: 8px;
    border-radius: 10px;

    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    border: 1px solid #ebebeb;
    color: #333;
    cursor: pointer;
`;

export const WishCountNum = styled.span`
    margin-left: 4px;

    font-size: 15px;
    font-weight: 600;
    letter-spacing: normal;
`;

export const FloatingPriceDivisionBtnBox = styled.div`
    -webkit-box-flex: 1;
    flex: 1;
    width: 100%;
    height: inherit;
    margin-top: 0;

    display: flex;
`;

export const FloatingPriceDivisionBuy = styled.a`
    border-radius: 10px;

    background-color: #ef6253;

    position: relative;
    display: inline-flex;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;

    cursor: pointer;

    width: 192px;
    height: 50px;
`;

export const FloatingPriceTitle = styled.strong`
    width: 44px;
    font-size: 15px;
    letter-spacing: -.15px;

    text-align: center;

    font-weight: bold;
`;

export const FloatingPriceBuyPrice = styled.div`
    margin-left: 10px;
    line-height: 15px;

    color: #fff;
`;

export const FloatingPriceBtnDivisionSell = styled.a`
    margin-left: 8px;

    border-radius: 10px;

    background-color: #41b979;

    position: relative;
    display: inline-flex;
    -webkit-box-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;

    cursor: pointer;

    width: 192px;
    height: 50px;
`;

export const FloatingPriceSellPrice = styled.div`
    margin-left: 10px;
    line-height: 15px;

    color: #fff;
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(34,34,34,.5);
    z-index: 1010;
`;

export const LayerContainer = styled.div`
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    height: 514px;

    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: #fff;
    width: 448px;
    border-radius: 16px;
    -webkit-box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 10%);
`;

/* 모달창 내부 X버튼 */
export const Close = styled.button`
    position: absolute;
    top: 18px;
    right: 20px;
    cursor: pointer;

    color: inherit;
    -webkit-tap-highlight-color: rgba(0,0,0,.1);
`;

export const LayerHeader = styled.div`
    -webkit-box-flex: 0;
    flex: none;
`;

export const LayerHeaderTitle = styled.h2`
    line-height: 22px;
    padding: 18px 50px 20px;
    min-height: 60px;
    font-size: 18px;
    letter-spacing: -.27px;
    font-weight: 700;
    letter-spacing: -.15px;
    color: #000;
    text-align: center;
    background-color: #fff;

    display: block;
    font-size: 1.0em;
    font-weight: bold;
`;

export const LayerContent = styled.div`
    position: relative;
    -webkit-box-flex: 1;
    flex: 1;
    margin-top: 10px;
    margin-bottom: 32px;
    overflow-x: hidden;
    overflow-y: auto;
`;

export const SelectArea = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0 32px;

    padding: 0 0;
    min-height: 488px;
`;

export const SelectList = styled.ul`
    line-height: 0;
    font-size: 0;

    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 10px;
`;

export const SelectItem = styled.li`
    overflow: hidden;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    width: calc(33.33333% - 8px);
    border: 1px solid #d3d3d3;
    height: 52px;
    border-radius: 10px;
    background-color: #fff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
`;

export const SelectLinkBuy = styled.button`
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: white;
    border: 0;
`;

export const LinkInner = styled.div`
    margin: 0 auto;
`;

export const Size = styled.span`
    display: block;
    line-height: 17px;
    margin-top: -3px;
    font-size: 14px;
`;

export const Price = styled.span`
    color: #f15746;
    display: block;
    line-height: 14px;
    margin-top: 1px;
    font-size: 12px;
`;

export const PriceNull = styled.span`
    color: black;
    display: block;
    line-height: 14px;
    margin-top: 1px;
    font-size: 12px;
`;

export const FeedArea = styled.div`
    margin: 0 auto;
    padding-bottom: 60px;
    max-width: 1280px;

    display: block;

    border: 1px blue dotted;
`;

export const FeedTitle = styled.h2`
    display: flex;
    padding-top: 40px;
    margin: 0 40px;
    -webkit-box-align: center;
    align-items: center;
    border-top: 1px solid #ebebeb;

    font-size: 1.5em;
    font-weight: bold;
`;

export const FeedTitleTitle = styled.span`
    font-size: 20px;
    letter-spacing: -.3px;
    font-weight: 700;
`;

export const FeedTitleNum = styled.span`
    padding-left: 4px;
    font-size: 20px;
    letter-spacing: -.1px;
    font-weight: 700;
`;

export const SocialFeeds = styled.div`
    padding: 24px 0 0;
    margin: 0 40px;
    display: block;
`;

export const MoreBtnBox = styled.div`
    padding-top: 40px;
    text-align: center;
    display: block;
`;

export const ButtonOutlineGreyMedium = styled.button`
    padding: 0 30px;
    border: 1px solid #d3d3d3;
    color: rgba(34,34,34,.8);
    height: 42px;
    border-radius: 12px;
    font-size: 14px;
    letter-spacing: -.14px;
    display: inline-flex;
    cursor: pointer;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    vertical-align: middle;
    text-align: center;
    background-color: #fff;
`;

export const BrandArea = styled.div`
    margin: 0 auto;
    padding-bottom: 40px;
    max-width: 1280px;

    display: block;
`;

export const BrandTitle = styled.h3`
    margin: 0 40px;
    padding-top: 40px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    max-width: 100%;
    line-height: 24px;
    font-size: 20px;
    letter-spacing: -.15px;
    border-top: 1px solid #ebebeb;

    font-weight: bold;
`;

export const BrandTitleBrand = styled.span`
    flex-shrink: 0;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 24px;
    font-size: 20px;
    letter-spacing: -.15px;
`;

export const BrandTitleText = styled.span`
    margin-right: 50px;
    flex-shrink: 0;
    font-weight: 400;
    line-height: 24px;
    font-size: 20px;
    letter-spacing: -.15px;
`;

export const BtnMore = styled.a`
    margin-top: -2px;
    margin-left: auto;
    padding: 3px 0 3px 5px;
    display: inline-flex;
    flex-shrink: 0;
    cursor: pointer;
`;

export const BtnText = styled.span`
    line-height: 20px;
    font-size: 13px;
    letter-spacing: -.07px;
    font-weight: 400;
    color: rgba(34,34,34,.5);
`;

export const BrandProducts = styled.div`
    display: block;
`;

export const BrandProductList = styled.div`
    padding: 0 30px;
    display: block;
`;

export const ProductItem = styled.div`
    margin: 24px 0 20px;
    padding: 0 10px;
    width: 20%;
    position: relative;
    display: inline-block;
    vertical-align: top;
`;

export const ItemInner = styled.div`
    display: block;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
`;

export const Product = styled.div`
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    border-radius: 8px;
`;

export const PictureBrandProductImg = styled.picture`
    display: flex;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

export const BrandProductImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    image-rendering: auto;
`;

export const ProductItemInfoBox = styled.div`
    padding-top: 9px;
    display: block;
`;

export const BrandTextWithOutWish = styled.p`
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

export const BrandProductInfoBoxName = styled.p`
    max-height: 44px;
    margin-bottom: 2px;
    line-height: 17px;
    margin-top: 8.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    font-size: 14px;
    color: #222;
`;

export const BrandProductInfoBoxPrice = styled.div`
    padding-top: 7px;
    display: block;
`;

export const BrandProductInfoBoxPriceAmount = styled.div`
    font-size: 0;
    line-height: 0;
    display: block;
`;

export const BrandProductInfoBoxPriceAmountNum = styled.div`
    display: inline-block;
    vertical-align: top;
    line-height: 17px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: -.04px;
    font-style: normal;
`;

export const BrandProductInfoBoxPriceDesc = styled.div`
    line-height: 13px;
    font-size: 11px;
    color: rgba(34,34,34,.5);
    display: block;
`;

export const Wrap = styled.div`
    position: relative;
    overflow-anchor: none;
    display: block;
`;

export const ColumnIsAbsolute = styled.div`
    float: left;
    padding-right: 3.334%;
    width: 50%;
    display: block;
`;

export const Spread = styled.div`
    position: static;
    display: block;
    height: 560px;
    background-color: transparent;
`;

export const NewColumnBox = styled.div`
    width: 560px;
    position: absolute;
    bottom: 0;
    display: block;
`;

export const SlideItem = styled.div`
    background-color: #f4f4f4;
    position: relative;
    display: block;
`;

export const NewPictureProductImg = styled.picture`
    display: flex;
    width: 100%;
    height: auto;
    position: absolute;
    top: 1000%;
    left: 50%;
    transform:
     translate(-50%,-50%);
`;

export const NewColumn = styled.div`
    position: relative;
    float: right;
    padding-left: 3.334%;

    width: 50%;
    display: block;
`;

export const NewProductBuyBtn = styled.button`
    background-color: rgb(239, 98, 83);
    color: rgb(255, 255, 255);
    margin-bottom: 12px;
    width: 100%;
    font-size: 18px;
    letter-spacing: -.09px;
    font-weight: 700;
    height: 60px;
    cursor: pointer;
    border-radius: 10px;
    min-width: fit-content;
    padding: 0;
    border: 0;
    outline: none;
`;

export const ProductDetailItemContent = styled.div`
    margin-top: 60px;
    display: block;
`;

export const ProductDetailTabWrap = styled.div`
    border-top: 1px solid #222;
    border-bottom: 1px solid #ebebeb;
    margin: 0 0 80px;
    padding: 21.5px 0;
    display: block;
`;

export const ProductDetailTab = styled.div`
    width: fit-content;
    margin: 0 auto;
    display: block;
`;

export const TabActive = styled.a`
    color: #333;
    font-size: 14px;
    width: 120px;
    cursor: pointer;
`;

export const Tab = styled.a`
    margin-left: 120px;
    color: rgba(34,34,34,.5);
    font-size: 14px;
    width: 120px;
    cursor: pointer;
`;

export const DetailTitleHeaderImages = styled.div`
    padding: 0 100px;
    text-align: center;
    display: block;
`;

export const DetailHeaderImgWrap = styled.div`
    margin-top: 40px;
    display: block;
`;

export const CoverImg = styled.img`
    width: -webkit-fill-available;
`;

export const DetailHeaderTitleWrap = styled.div`
    text-align: left;
    border-top: 1px solid #ebebeb;
    padding: 57px 0 0;
    margin-top: 40px;
`;

export const DetailHeaderProductNo = styled.p`
    font-size: 14px;
    color: rgba(34,34,34,.5);
`;

export const DetailHeaderTitle = styled.p`
    margin-top: 24px;
    font-size: 32px;
    letter-spacing: -.48px;
    font-weight: 700;
    text-transform: capitalize;
    padding: 0;
`;

export const DetailHeaderSubTitle = styled.p`
    margin-top: 4px;
    font-size: 28px;
    letter-spacing: -.015em;
    text-transform: capitalize;
    color: rgba(34,34,34,.8);
`;

export const DetailHeaderDescription = styled.p`
    font-size: 17px;
    margin: 24px 0 0;
    padding: 0;
    border: 0;
    line-height: 24px;
    color: rgba(34,34,34,.5);
`;

export const DetailImgWrap = styled.div`
    margin-top: 27px;
`;

export const DetailContentImages = styled.div`
    max-height: unset!important;
    position: relative;
    overflow: hidden;
`;

export const DetailTitlePreviewWrap = styled.div`
    padding: 42px 100px 0;
`;

export const DetailLinkPreviewItemTitleDetailItemTitle = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
`;

export const ProductDetailItemTitleUndefined = styled.p`
    margin-bottom: 17px;
    font-size: 17px;
    font-weight: 700;
`;

export const DetailLinkPreviewItemWrap = styled.div`
    margin: 17px 0 40px;
    width: 100%;
    font-size: 13px;
`;

export const DetailLinkPreviewItems = styled.ul`
    border-top: 1px solid #ebebeb;
    margin-block-start: 0px;
    margin-block-end: 0px;
`;

export const DetailLinkPreviewItem = styled.li`
    border-bottom: 1px solid #ebebeb;
    display: flex;

    text-align: -webkit-match-parent;
`;

export const ItemTitleWrap = styled.div`
    display: table;
`;

export const ItemTitle = styled.span`
    width: 240px;
    background: #fafafa;
    padding: 16px 20px;
    display: table-cell;
    vertical-align: middle;
`;

export const ItemDescription = styled.ul`
    padding: 16px 20px;
    width: 100%;
`;

export const ItemDescriptionLi = styled.li`
    margin-top: 8px;
`;

export const NewFloatingLargeBtn = styled.button`
    background-color: #EF6253;
    color: #FFFFFF;
    font-size: 15px;
    letter-spacing: -.15px;
    font-weight: 700;
    height: 100%;
    width: 100%;
    padding: 13px 0;
    cursor: pointer;
    border-radius: 10px;
    min-width: fit-content;
    border: 0;
`;









