import styled from "styled-components"

 //Trending.js


export const TrGridContainer = styled.div`
    width: 1200px;
    margin: 0px auto;
    display: flex;     
`  
export const TrGridContainerSub = styled.div`
    width: 350px;
`

export const TrGridBox = styled.div`
    width: 235px;
    padding: 20px;   
    margin-bottom: 10px;
    break-inside: avoid;
    
`
export const TrGridBoxImg = styled.img`
    width: 100%;   
    height: 100%;
    border-radius: 20px; 
    object-fit: contain;
`
export const TrTypoDiv = styled.pre`
    /* white-space: normal; */
    line-height: 1.2;
    height: 3.6em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    /* overflow: hidden; */
    height: auto;
`
export const TrBox = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
`
export const TrUsernameBox = styled.div`
    -webkit-box-flex: 1;
    flex: 1;
    padding-left: 4px;
    padding-right: 6px;
    white-space: nowrap;
    font-size: 15px;
    letter-spacing: -.15px;
    color: rgba(34,34,34,.8);

`

export const TrlikeBox = styled.div`
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    float: right;
    padding: 0 12px;
`


//Detail.js 
export const DeComment = styled.div`
    width: 550px;
    
`;

export const DeTopDiv = styled.div`
    margin: 0 auto;
    width: 500px;
`

export const DeDiv = styled.div`
    width: 500px;
    display: inline-block;
    padding-bottom: 50px;
`

//MyStyleDetail.js
export const MyDeContainer = styled.div`
    width: 100%;
    text-align: center;

`

export const MyDeheadercontainer = styled.div`
    display: inline;
`
export const MyDeprofile = styled.div`
    float:left;
    width: 450px;

`
export const MyDeIcon = styled.div`
    width: 47px;
    float: left;
    padding-top: 16px;

`
export const MyStdiv = styled.div`
    width: 500px;
`
export const MyStContent = styled.pre`
    white-space: pre-wrap;   //text 줄바꿈허용
    word-break: break-all;   //text 줄바꿈허용
    padding: 20px 0 15px 0;
`

//StyleCommentList
export const SCLdeletebutton= styled.div`
    float: right;
`

export const SCLcomment = styled.div`
    margin-bottom: 10px;
`

//Mystyle.js 
export const MyProfile = styled.div`
    text-align: center;
    width: 130px;
    border-radius: 70%;
`;

export const MyDiv = styled.div`
    text-align: center;
    padding: 20px 0 20px 0;
`;

export const MyDivText = styled.div`
    text-align: center;
    padding: 20px;
    color: gray;
    font-size: 13px ;
`;


export const MyLi = styled.li`
    display: inline;
    padding: 20px;
    font-weight: bolder;
`;


export const MyPhotoMini = styled.div`
    width: 200px;
    height: 220px;
    display: inline-block;
    padding: 20px 30px 50px 30px;

`


export const showImgSrcDiv = styled.div`
    width: 500px;

    // Overflow: hidden;        
    /* display: flex;   //사진 가로로 정렬 */
    /* width: 100vw; */
`
export const Container = styled.div`
    /* width: 500px;
    height: 400px;  */
    /* overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다. */
`;

export const showImgSrcImg = styled.img`
    width: 100%;  
    height: '100%';
    Overflow: hidden;  
    position: relative;
    
`

export const Button = styled.button`
    all: unset;
    border: 1px solid coral;
    padding: 0.5em 2em;
    color: coral;
    border-radius: 10px;
    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: coral;
        color: #fff;
    }
`

//styleProduct.js
export const ProductItem = styled.div`
    margin: 10px 0 10px;
    padding: 0 10px;
    width: 20%;
    position: relative;
    // display: inline-block;
    vertical-align: top;
`

//styleOneProduct.js
export const OneContainer = styled.div`
    width: 1200px;
    margin: 0px auto;
    display: flex;    
`

export const OneItem = styled.div`
    margin: auto;
    padding: 50px;
    width: 20%;
    position: relative;
    vertical-align: top;
`

;



