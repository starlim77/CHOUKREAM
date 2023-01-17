import styled from 'styled-components';

export const WriteBody = styled.div`
    margin: 40px auto 0px auto;
    width: 1200px;
    height: 820px;
    display: flex;

    /* border: 1px solid black; */

`;

// ---------------------------------------------이미지 부분
export const ImgBody = styled.div`
    width: 560px; 
    height: 820px;
    padding:  0 40px 0  0;
    
    /* border: 1px solid black; */
`;
export const ImgBody2 = styled.div`
    width: 560px; 
    height: 820px;
    padding:  0 40px 0  0;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    /* border: 1px solid black; */
`;

export const MainImgP=styled.p`
    width: 560px;
    height: 560px;
    border: 1px solid black;
    display: ${props=>props.setPosition?"":"flex"};
    position:${props=>props.setPosition?'relative':'none'};
    align-items: center;
    justify-content: center;
    overflow:hidden;
`;
export const MainImg = styled.img`
    width: ${props=>(props.sizing?"100%":"50px")};
    height: ${props=>(props.sizing?"100%":"50px")};
    display:${props=>(props.sizing?"absolute":"")};
    //1:1비율이 아닌 사진인 경우, 부분적으로만 나타내도록함.
    //감싸고 있는 태그가 overflow:hidden이 있는 조건.
    //https://liyang.tistory.com/64?category=965108
    object-fit: cover;
    :hover{
        cursor: pointer;
    }
`;

export const SubImgBody = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`;
export const SubImgP=styled.p`
    width: 175px;
    height: 175px;
    border: 1px solid black;
    align-items: center;
    justify-content: center;
    display: ${props=>props.setPosition?"":"flex"};
    position:${props=>props.setPosition?'relative':'none'};
    overflow: hidden;
`;
export const SubImg = styled.img`
    width: ${props=>props.sizing?"100%":"50px"};
    height: ${props=>props.sizing?"100%":"50px"};
    display:${props=>(props.sizing?"absolute":"")};
    //1:1비율이 아닌 사진인 경우, 부분적으로만 나타내도록함.
    //감싸고 있는 태그가 overflow:hidden이 있는 조건.
    //https://liyang.tistory.com/64?category=965108
    object-fit: cover;
    :hover{
        cursor: pointer;
    }
`;

export const DeleteMainImg = styled.img.attrs({
    src:'/image/used/deleteIcon.png' 
})`
    width:50px;
    height:50px;
    display:${props=>props.setPosition?'':'none'};
    position:${props=>props.setPosition?'absolute':'none'};
    left:90%;
`;

export const DeleteImg = styled.img.attrs({
    src:'/image/used/deleteIcon.png' 
})`
    width:50px;
    height:50px;
    display:${props=>props.setPosition?'':'none'};
    position:${props=>props.setPosition?'absolute':'none'};
    left:70%;
`;

// ----------------------------------------------내용 부분
export const Information = styled.div`
    width: 560px;
    height: 820px;
    padding: 0 0 0 40px;

    border-left: 1px solid black;

    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }

`;

//필수 입력 
export const Necessary = styled.div`
    margin-top: 30px;
    font-size: 12px;
    color: red;
`;

//입력 사항
export const Subject = styled.div`
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
`

//제목
export const Title = styled.input`
    height: 60px;
    width: 510px;
    margin-bottom: 30px;


    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
`;

//상품 이름
export const SubTitle = styled.input`
    height: 40px;
    width: 510px;

    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
`;

//상품 종류 및 사이즈
export const ItemKindPriceDiv = styled.div`
    height: 40px;
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    border: 1px solid black; 
`;

export const ItemKind = styled.select`
    :hover{
        cursor: pointer;
    }
`;
export const ItemKindOption = styled.option`

`

export const ItemSizeSpan = styled.span`

`;

export const ItemSize = styled.input`
    margin-left: 10px;
    width: 110px;

    border-top: 0px;
    border-right: 0px;
    border-left: 0px;

`;


//상품 가격
export const PriceDiv = styled.div`
    margin-bottom: 30px;
`;

export const ItemPrice = styled.input`
    height: 40px;
    width: 200px;

    border-top: 0px;
    border-right: 0px;
    border-left: 0px;

    ::-webkit-outer-spin-button,::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
    }
`;

export const ItemPriceSpan = styled.span`

`;

//판매 설명
export const ItemContent = styled.textarea`
    width: 510px;
    height: 500px;
    margin-bottom: 30px;

    resize: none;
    ::-webkit-scrollbar{
        display: none;
    }
`;

//해쉬 태그
export const HashTag = styled.div`
    width: 510px;
    margin-bottom: 10px;
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
`;

export const HashTagDiv = styled.button`
    display: flex;
    border: 0.5px solid black;
    margin-right: 10px;
    margin-top: 10px;
`
export const HasgTagSpan = styled.span``;

export const HasgTagX = styled.div`
    margin-left: 7px;
    :hover{
        cursor: pointer;
    }
`;

export const HashTagWriteDiv = styled.div`
    display: flex;
`;

export const HashTagWrite = styled.input`
    width: 150px;
    margin-bottom: 10px;
    margin-top: 10px;

    border-top: 0px;
    border-right: 0px;
    border-left: 0px;
`


export const HashTagWriteBtn = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    width: 15px;
    height: 15px;
    border: 0.5px solid black;
    border-radius: 10px;
    background-color: green;

    :hover{
        background-color: red;
        cursor: pointer;
    }
`

export const WriteBtn = styled.button`
    margin-bottom: 100px;
    float: right;
    margin-right: 30px;
`;
