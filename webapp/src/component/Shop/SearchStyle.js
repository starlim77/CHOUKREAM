import styled from 'styled-components';

export const Container = styled.div`
    /* overflow-x: hidden; */
`;

export const SearchTop = styled.div`
    padding: 40px 40px 0;
`;
export const TopBox = styled.div`
    margin: 0 auto;
    max-width: 1200px;
`;
export const SearchTitle = styled.div`
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding: 0 10% 24px;
    position: relative;
`;
export const TitleTxt = styled.h2`
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 28px;
    font-weight: 600;
    color: #000;
    letter-spacing: -0.14px;
    cursor: pointer;
`;
export const QuickFilter = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 16px;
    white-space: nowrap;
    box-sizing: border-box;
`;
export const QuickFilterBox = styled.div`
    margin-right: 8px;
    display: inline-block;
    vertical-align: top;
`;
export const BtnQuickFilter = styled.a`
    text-decoration: none;
    margin: 0 4px;
    box-sizing: border-box;
    padding: 10px;
    display: inline-block;
    height: 38px;
    background-color: #f4f4f4;
    border-radius: 12px;
    font-size: 15px;
    letter-spacing: -0.15px;
    vertical-align: top;
`;
export const QuickFilterItems = styled.div`
    display: inline-block;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, Roboto,
        AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕,
        Segoe UI, Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
    color: #222;
`;
export const DividerQuickFilter = styled.span`
    position: relative;
    margin: 0 8px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    white-space: nowrap;
    font-family: -apple-system, BlinkMacSystemFont, Roboto,
        AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕,
        Segoe UI, Helveica, Arial, Malgun Gothic, Dotum, sans-serif;
    color: #222;

    &::after {
        content: '';
        position: absolute;
        top: 100%;
        right: 0;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 1px;
        height: 32px;
        background-color: #ebebeb;
    }
`;
export const SearchTrendContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 40px;
    display: block;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;

export const BrandList = styled.ul`
    display: flex;
    margin: 0 auto;
    margin-bottom: 15px;
    padding: 0 0 16px;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    list-style: none;
    overflow: hidden;
    justify-content: space-between;
`;

export const BrandItem = styled.li`
    background-color: transparent !important;
    display: inline-block;
    vertical-align: top;
    border-radius: 8px;
    list-style: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    white-space: nowrap;
`;
export const BrandBox = styled.a`
    width: 84px;
    height: 82px;
    display: block;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    list-style: none;
`;
export const BrandImg = styled.img`
    width: 70px;
    height: 70px;
    border: 0;
    vertical-align: top;
    user-select: none !important;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    overflow: clip;
    text-align: center;
    cursor: pointer;
    list-style: none;
    white-space: nowrap;
`;
export const BrandName = styled.p`
    margin-top: -2px;
    font-size: 13px;
    font-weight: 600;
    max-width: 80px;
    margin: -8px auto 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
    cursor: pointer;
    list-style: none;
`;

export const TagImgLi = styled.li`
    list-style: none;
    width: 84px;
    height: 84px;
    float: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    :hover {
        background-color: #e1ecf4;
        border-radius: 50px;
        cursor: pointer;
    }
`;

export const TagImgItem = styled.img`
    width: 70px;
    height: 70px;
`;

export const TagImgSpan = styled.span`
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 600;
`;