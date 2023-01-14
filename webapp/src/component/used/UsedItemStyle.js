import styled from "styled-components";

export const WholeWrapper=styled.div`
   
`;
export const BaseBody = styled.div`
    display: flex;
    width:1220px;
    margin:40px auto 0px auto;
   
`;

export const ImgBody = styled.div`
    width: 560px; 
    height: 820px;
    padding:  0 40px 0  0;
    text-align: center;
    
    /* border: 1px solid black; */
`;

export const ImgBody2 = styled.div`
    width: 560px; 
    height: 560px;
    padding:  0 40px 0  0;
    text-align: center;
    
    /* border: 1px solid black; */
`;

// export const BaseDiv = styled.div`
//     width:600px;
//     height:700px;
//     border-left:1px solid rgba(236,236,236);
//     border-right:1px solid rgba(236,236,236);
//     text-align: center;
//     display: inline-block;
// `;

export const BaseDiv = styled.div`
    width: 560px;
    height: 820px;
    padding: 0 0 0 40px;

    border-left:1px solid rgba(236,236,236);

    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const BottomDiv = styled.div`
    width:1220px;
    margin:auto;
    
`;

//imgsrc설정방법
//https://velog.io/@shinwonse/React-styled-components%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80
export const MainImg=styled.img`
    width:560px;
    height:560px;
    object-fit: cover;
    border: 0.5px solid #ececec;
`;

export const MainImg2=styled.img`
    width:560px;
    height:560px;
    object-fit: cover;
    border: 0.5px solid #ececec;
`;
export const SmallImgBody=styled.div`
    display: flex;
    margin-top: 20px;
`

export const SmallImg=styled.img`
    width:175px;
    height:175px;
    object-fit: cover;
    border: 0.5px solid #ececec;
    margin-right: 5px;
    margin-left: 5px;
`;

export const SmallImg2=styled.img`
    width:100px;
    height:100px;
    padding:5px;
    object-fit: cover;
    border: 0.5px solid #ececec;
    cursor: pointer;
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
    font-size: 24px;
    text-align: left;
    margin-top: 15px;
`;

export const SizeWrapper=styled.div`
    width:550px;
    font-size:30px;
    text-align: left;
    padding: 15px 0 15px 0;
    
    display: flex;
    justify-content: space-between;

    border-bottom : 1px solid black;
`;

export const Sizetitle=styled.span`
    font-size: 10pt;
    margin-top: 14.5px;
`

export const SizeSpan=styled.span`
    font-size:30px; 
`;

export const PriceWrapper=styled.div`
    width:550px;
    font-size:30px;
    text-align: left;
    padding: 15px 0 15px 0;

    display: flex;
    justify-content: space-between;

`;
export const PriceSpan=styled.span`
    font-size:30px;
`;

export const InterestWrapper=styled.p`
    width:550px;
    text-align: center;
    border:1px solid rgba(236,236,236);
    font-size:25px;
    padding: 15px 0 15px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    :hover{
        cursor: pointer;
    }
`;

export const InterestInput=styled.img`
   margin-right: 10px;
   width: 25px;
   height: 25px;
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
    width:550px;
    min-height:250px;
    font-size: 20px;
    white-space: pre-wrap;
    word-break: break-all;
   // overflow: auto;
`;

export const ChatButton=styled.button`
    width:560px;
    font-size:50px;
    margin-bottom: 100px;

    :hover{
        cursor: pointer;
    }
`;

export const SettlementButton=styled.button`
    width:560px;
    font-size:50px;

    :hover{
        cursor: pointer;
    }
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
    font-size:15px;
    
`;

export const ModalDiv=styled.div`   

    width:300px;
    height:200px;
    float: right;
    position: fixed;
    top:20%;
    right: 5%;

`


