import styled from 'styled-components';

export const Banner = styled.div`
    width: 100%;
    height: 480px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    // display: flex;
    // overflow-x: hidden;
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
    height: 480px;
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
    width: 100%;
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
    height: 480px;
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
    left: 0px;
    -webkit-transform: rotate(180deg);
    transform: translateY(50%);
    position: absolute;
    bottom: 50%;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTUwIDYwTDMwIDQwbDIwLTIwIi8+PC9zdmc+) no-repeat;
    width: 80px;
    height: 80px;
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
    right: 0px;
    transform: translateY(50%);
    position: absolute;
    bottom: 50%;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA4MCA4MCI+PHBhdGggc3Ryb2tlPSIjQkJCIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTMwIDIwbDIwIDIwLTIwIDIwIi8+PC9zdmc+) no-repeat;
    width: 80px;
    height: 80px;
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

export const ContainerDots = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
`;

export const Dot = styled.button`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 0;
    margin: 0 9px;
    background-color: ${props => props.active === true ? "rgb(14, 14, 14)" : "rgb(230, 230, 230)"};
`;