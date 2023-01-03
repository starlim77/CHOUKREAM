import styled from "styled-components";

export const BaseWrapper = styled.div`
    
    text-align: center;
`
export const BaseDiv = styled.div`
    width:600px;
    height:700px;
    border-left:1px solid rgba(236,236,236);
    border-right:1px solid rgba(236,236,236);
    text-align: center;
    display: inline-block;
`;

export const BottomDiv = styled.div`
    width:1200px;
    
`

//imgsrc설정방법
//https://velog.io/@shinwonse/React-styled-components%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80
export const MainImg=styled.img.attrs({
    src:"https://kream-phinf.pstatic.net/MjAyMjAyMThfMTQ3/MDAxNjQ1MTYwNTE0MDE4.1Ql511oqy-_vreGlE1CMTNSGWBQAl_zPWLiT8qvFdMUg.6fvpYoaxRM1dqtJO7jx_QsJ1rK6pEUSkDx3bJshoLGEg.JPEG/a_dac632a10a13407c9fc71a9e2189bd46.jpg?type=l_webp",
    alt:"mainImage"
})`
    width:560px;
    height:560px;
`;

export const SmallImg=styled.img.attrs({
    src:"https://kream-phinf.pstatic.net/MjAyMjAyMThfMTQ3/MDAxNjQ1MTYwNTE0MDE4.1Ql511oqy-_vreGlE1CMTNSGWBQAl_zPWLiT8qvFdMUg.6fvpYoaxRM1dqtJO7jx_QsJ1rK6pEUSkDx3bJshoLGEg.JPEG/a_dac632a10a13407c9fc71a9e2189bd46.jpg?type=l_webp",
    alt:"mainImage"
})`
    width:100px;
    height:100px;
    padding:25px;
`;

export const TitleWrapper=styled.div`
    width:560px;
    text-align:left;
`;

export const TitleSpan=styled.span`
    font-weight:bold;
    font-size:30px;
`;

export const ProductNameWrapper=styled.div`
    width:560px;
`;

export const ProdcuctNameSpan=styled.p`
    font-size:30px;
    text-align: left;
`;

export const SizeWrapper=styled.div`
    width:560px;
    font-size:30px;
    text-align: left;
    padding: 15px 0 15px 0;
`;

export const SizeSpan=styled.span`
    font-size:30px;
`;

export const PriceWrapper=styled.div`
    width:560px;
    font-size:30px;
    text-align: left;
    padding: 15px 0 15px 0;

`
export const PriceSpan=styled.span`
    font-size:30px;
`;

export const InterestWrapper=styled.p`
    width:560px;
    text-align: center;
    border:1px solid rgba(236,236,236);
    font-size:25px;
    padding: 15px 0 15px 0;

`;

export const InterestInput=styled.input.attrs({
    type:"radio"
})`
   
`;

export const InterestSpan=styled.span`

`;

export const InterestCount=styled.span`

`;

export const ItemWrapper=styled.div`
     text-align: left;
`;

export const ItemSpan=styled.span`
    font-size: 25px;
    font-weight: bold;
`;

export const ItemContents=styled.pre`
    border:1px solid rgba(236,236,236);
    width:560px;
    height:250px;
    font-size: 20px;
    white-space: pre-wrap;
    word-break: break-all;
    overflow: auto;
`;

export const ChatButton=styled.button`
    width:560px;
    font-size:50px;
`;

export const ProfileWrapper=styled.div`
    line-height:30px;
    //border-top:1px solid rgba(236,236,236);
    border-bottom:1px solid rgba(236,236,236);
    padding: 15px 0 15px 0;
`;

export const ProfileImg=styled.img.attrs({
    src:"/image/profileDefault2.jpg"
})`

    width:55px;
    height:55px;
    border: 1px solid black;
    border-radius: 100%;
`;

export const ProfileSpan=styled.span`
    font-size:25px;
    
`;