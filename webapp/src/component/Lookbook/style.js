import styled from "styled-components"

 //Trending.js
export const TrGridContainer = styled.div`
    width: 1200px;
    margin: 0px auto;
    columns: 4;
    column-gap: 10 px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-auto-rows: auto;
    

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
    border-radius: 20%; 
    object-fit: contain;
`


//Detail.js 
export const DeComment = styled.div`
    width: 400px;
    height: 800px;
`;

//Social.js 
export const SoHeader = styled.div`
    padding: 20px 0 20px 0;
    text-align: center;
    font-size: 20px;
`;

export const SoOnHeader = styled.a`
    background-color: #222;
    color: #fff;
    font-weight: 700;
    border-radius: 19px;
`;

export const SoWrapper = styled.div`
    
`;

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

