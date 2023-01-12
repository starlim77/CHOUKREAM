import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    position: relative;
    margin: 0 auto;
    padding: 0 40px 80px;
    max-width: 1280px;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const SearchFilter = styled.div`
    width: 210px;
    margin-right: 10px;
    padding-right: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    display: block;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const FilterStatus = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 23px 0 15px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const StatusBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin: 0;
    padding: 0;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const StatusTxt = styled.span`
    font-size: 14px;
    letter-spacing: -0.21px;
    font-weight: 700;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const FilterList = styled.div`
    border-bottom: 1px solid #ebebeb;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const FilterTitle = styled.div`
    display: flex;
    padding: 16px 0;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    margin: 0;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const TitleBox = styled.div`
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    max-width: calc(100% - 30px);
    display: flex;
    margin: 0;
    padding: 0;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const MainTitle = styled.span`
    position: relative;
    font-size: 13px;
    letter-spacing: -0.07px;
    font-weight: 600;
    -webkit-box-direction: normal;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const Placeholder = styled.span`
    margin-top: 4px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 15px;
    letter-spacing: -0.15px;
    color: rgba(34, 34, 34, 0.5);
    font-family: -apple-system, BlinkMacSystemFont, Roboto,
        AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕,
        Segoe UI, Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
    color: #222;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const IcoBox = styled.div`
    height: 20px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;
export const FilterMenu = styled.div`
    padding-bottom: 24px;
    margin: 0;
    padding: 0;
    display: block;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
export const MenuList = styled.ul`
    max-height: 315px;
    list-style: none;
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
`;
export const CheckBox = styled.input`
    
`;
export const Menu = styled.li`
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: list-item;
`;
export const MenuLiText = styled.span`
    max-width: 160px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-size: 14px;
    letter-spacing: -0.21px;
    color: inherit;
    cursor: pointer;
    list-style: none;
`;

export const SearchContent = styled.div`
    -webkit-box-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;
export const SearchOption = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    height: 68px;
    margin-left: 20px;
    padding: 0;
`;
export const FilterBtns = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
`;
export const FilterExpress = styled.div`
    margin-top: 1px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;
export const FilterBrand = styled.div`
    margin-left: 6px;
    margin-top: 1px;
    display: block;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
export const ExpressBtn = styled.a`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    padding: 0 9px;
    border: 1px solid #ebebeb;
    border-radius: 17px;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
`;
export const ExpressBtn2 = styled.a`
    background-color: #48b179;
    color: #fff;
    border-color: #48b179;
    cursor: pointer;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    padding: 0 9px;
    border: 1px solid #ebebeb;
    border-radius: 17px;
    text-decoration: none;
    outline-offset: 1px;
`;
export const Text = styled.span`
    line-height: 20px;
    margin-left: 3px;
    font-size: 13px;
    letter-spacing: -0.07px;
    letter-spacing: normal;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    color: inherit;
    cursor: pointer;
`;
export const BrandBtn = styled.div`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    padding: 0 9px;
    border: 1px solid #ebebeb;
    border-radius: 17px;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
`;
export const FilterSorting = styled.div`
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;
export const SortingTitle = styled.button`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    letter-spacing: -0.21px;
    font-weight: 600;
    padding: 0;
    border: 0;
    outline: none;
    background: none;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    &::after {
        content: '';
        margin-left: 2px;
        display: inline-flex;
        width: 24px;
        height: 24px;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzIyMiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi40NyAxOS41M2wuNTMuNTMuNTMtLjUzIDQtNC0xLjA2LTEuMDYtMi43MiAyLjcyVjVoLTEuNXYxMi4xOWwtMi43Mi0yLjcyLTEuMDYgMS4wNiA0IDR6TTE3LjUzIDQuNDdMMTcgMy45NGwtLjUzLjUzLTQgNCAxLjA2IDEuMDYgMi43Mi0yLjcyVjE5aDEuNVY2LjgxbDIuNzIgMi43MiAxLjA2LTEuMDYtNC00eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+)
            no-repeat;
    }
`;
export const FilterTag = styled.div`
    display: none;
`;
export const SearchResult = styled.div`
    margin-left: 20px;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;
export const SearchResultList = styled.div`
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-column-gap: 20px;
    -webkit-column-gap: 20px;
    -moz-column-gap: 20px;
    column-gap: 20px;
    display: grid;
    grid-auto-rows: 1fr;
    grid-row-gap: 40px;
    row-gap: 40px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
export const ProductCard = styled.div`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    position: relative;
    margin: 0;
    padding: 0;
`;
export const ItemInner = styled.div`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    cursor: pointer;
    /* &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    } */
`;
export const Product = styled.div`
    background-color: #f4f4f4;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    padding-top: 100%;
    display: block;
`;
export const ProductImg = styled.img`
    display: flex;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-box-direction: normal;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
`;
export const Source = styled.source`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-box-direction: normal;
`;
export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    image-rendering: auto;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    overflow-clip-margin: content-box;
    overflow: clip;
`;
export const ProductInfoArea = styled.div`
    padding-left: 4px;
    padding-right: 4px;
    -webkit-box-flex: 1;
    flex: 1;
    padding-top: 8px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
export const Title = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    cursor: pointer;
`;
export const ProductInfoBrand = styled.p`
    margin-bottom: 2px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    line-height: 16px;
    font-size: 13px;
    letter-spacing: -0.07px;
    font-weight: 700;
    color: #333;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;
export const ProductInfoName = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;
export const Name = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 16px;
    font-size: 13px;
    -webkit-line-clamp: 2;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: -apple-system, BlinkMacSystemFont, Roboto,
        AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕,
        Segoe UI, Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
    color: #222;
`;
export const TranslatedName = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-height: 13px;
    margin-top: 2px;
    font-size: 11px;
    color: rgba(34, 34, 34, 0.5);
    -webkit-line-clamp: 2;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-family: -apple-system, BlinkMacSystemFont, Roboto,
        AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕,
        Segoe UI, Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
`;
export const ProductExpress = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: top;
    line-height: 11px;
    padding: 5.5px 4.5px 17px;
    color: #31b46e;
    background-color: #f2f9f6;
    border-radius: 2px;
    font-size: 11px;
    letter-spacing: -0.33px;
    height: 20px;
    margin-top: 6px;
    padding-top: 4px !important;
    padding-bottom: 4px !important;
    font-size: 10px !important;
    margin: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, Roboto,
        AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕,
        Segoe UI, Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
    &::after {
        content: '';
        position: absolute;
        left: 3.5px;
        top: 3px;
        width: 11px;
        height: 13px;
        background: url(/_nuxt/img/ico-express.8dac9dc.svg) 0 0 no-repeat;
        background-size: 11px 13px;
    }
`;
export const PriceInfoArea = styled.div`
    padding-left: 4px;
    padding-right: 4px;
    margin-top: 12px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;
export const Amount = styled.p`
    line-height: 17px;
    font-size: 14px;
    font-weight: 700;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    cursor: pointer;
`;
export const Desc = styled.p`
    margin-top: 2px;
    line-height: 13px;
    font-size: 11px;
    color: rgba(34, 34, 34, 0.5);
    margin: 0;
    padding: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
`;
export const ActionWishReview = styled.div`
    padding-left: 4px;
    padding-right: 4px;
    display: flex;
    grid-column-gap: 12px;
    column-gap: 12px;
    padding-top: 12px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
export const WishFigure = styled.span`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, Roboto,
        AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕,
        Segoe UI, Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
    color: #222;
`;
export const BtnWish = styled.a`
    display: flex;
    height: inherit;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    cursor: pointer;
`;
export const ReviewFigure = styled.span`
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-box-direction: normal;
    font-family: -apple-system, BlinkMacSystemFont, Roboto,
        AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕,
        Segoe UI, Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
    color: #222;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
export const ReviewLink = styled.a`
    display: inline-flex;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    cursor: pointer;
`;

// export const  = styled.div`

// `;
// export const  = styled.div`

// `;
// export const  = styled.div`

// `;
// export const  = styled.div`

// `;
// export const  = styled.div`

// `;
// export const  = styled.div`

// `;
// export const  = styled.div`

// `;
// export const  = styled.div`

// `;
// export const  = styled.div`

// `;
// export const  = styled.div`

// `;
