import styled from 'styled-components';

export const Banner = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: flex;
    overflow-x: hidden;
`;
export const BannerBox = styled.div`
    position: relative;
    display: block;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const BannerSlide = styled.div`
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    direction: ltr;
    unicode-bidi: isolate;
    display: block;
    &::after {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }
`;
export const SlickList = styled.div`
    height: 100px;
    display: block;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
export const SlickTrack = styled.div`
    opacity: 1;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;
export const SlickSlide = styled.div`
    outline: none;
    width: 100%;
    position: relative;
    left: 0px;
    opacity: 1;
    transition: opacity 600ms ease 0s, visibility 600ms ease 0s;
    float: left;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    display: block;
`;

export const DetailBanner = styled.div`
    width: 1280px;
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
`;

// BannerLink 배경을 바꾸면 전부 바뀜 
export const BannerLink = styled.a`
    // background-color: rgb(236, 241, 243);
    height: 100px;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
`;
export const BannerImg = styled.img`
    height: 100%;
    vertical-align: top;
    user-select: none !important;
    -webkit-user-drag: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    overflow-clip-margin: content-box;
    overflow: clip;
    cursor: pointer;
`;
export const SlickPrev = styled.button`
    display: block;
    right: 44px;
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    position: absolute;
    bottom: 11px;
    background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xIC41bDQgNC00IDQiIHN0cm9rZT0iI2ZmZiIvPjwvc3ZnPg==)
        no-repeat;
    width: 8px;
    height: 9px;
    font-size: 0;
    color: transparent;
    cursor: pointer;
    z-index: 1;
    padding: 0;
    border: 0;
    outline: none;
    appearance: none;
    border-radius: 0;
`;
export const SlickNext = styled.button`
    display: block;
    right: 5px;
    position: absolute;
    bottom: 11px;
    background: url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNiA5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xIC41bDQgNC00IDQiIHN0cm9rZT0iI2ZmZiIvPjwvc3ZnPg==)
        no-repeat;
    width: 8px;
    height: 9px;
    font-size: 0;
    color: transparent;
    cursor: pointer;
    z-index: 1;
    padding: 0;
    border: 0;
    outline: none;
    appearance: none;
    border-radius: 0;
`;
export const BannerCountBox = styled.div`
    width: 55px;
    height: 30px;
    position: absolute;
    right: 8px;
    bottom: 8px;
    padding: 4px 15px 5px;
    text-align: center;
    background-color: rgba(34, 34, 34, 0.8);
    border-radius: 12px;
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
`;
export const BannerCount = styled.p`
    width: 31px;
    font-size: 11px;
    color: hsla(0, 0%, 100%, 0.8);
    font-weight: 600;
    display: inline-block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: center;
`;
export const Current = styled.span`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-size: 11px;
    color: hsla(0, 0%, 100%, 0.8);
    font-weight: 600;
`;
export const Total = styled.span`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    font-size: 11px;
    color: hsla(0, 0%, 100%, 0.8);
    font-weight: 600;
`;
