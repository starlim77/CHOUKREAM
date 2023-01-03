import styled from 'styled-components';

export const bg = styled.div `
width: 100%;
height: 100%;
position: fixed;
left: 0;
top: 0;
background: white;
`;

export const popup = styled.div `
width: 800px;
height: 100%;
background: white; 
position: fixed;
left: 50%;
top: 50%; 
padding: 30px;
box-sizing: border-box;
transform: translate(-50%, -50%); 

padding-left: 0;
padding-right: 0;
margin: 0 auto;
overflow: hidden;
`;

export const closex = styled.p `
position: absolute;
top: 20px;
right: 10px;
cursor: pointer;
width: 30px;
height: 30px;
text-align: center;
line-height: 50px;
font-size: 20px;
`;

export const searchContainer = styled.div `
   
    `;
export const searchWrap = styled.div `
padding-top: 50px;
width: 800px;
padding-left: 0;
padding-right: 0;
margin: 0 auto;
overflow: hidden;
display: flex;
`;
export const searchArea = styled.div `
   
`;
export const search = styled.div `
width: 100%;
margin: 0;
padding-bottom: 16px;
border-bottom: 3px solid #000;  
`;
export const searchinput = styled.input `
width: 770px;
color: #000;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
padding: 0 13px 0 1px;
letter-spacing: -.015em;
font-size: 24px;
line-height: 29px;
outline: 0;
border: 0;
resize: none;
border-radius: 0;
-webkit-appearance: none;
background-color: transparent;

`;

export const searchbutton = styled.button `
float: right;
height: 24px;
margin-top: -20px;
border-radius: 50%;
border: 0;
opacity: 60%;
cursor: pointer;


`;






export const searchContent = styled.div `
margin-top: 20px;
width: 800px;
padding-left: 0;
padding-right: 0;
overflow: hidden;
    `;

export const searchCardItems = styled.div `
margin: 0;
padding: 0; 
    `;
//  추천검색어   
export const searchItemTag = styled.div `
margin-bottom: 28px;
display: block;
    `;
export const searchItemTagTitle = styled.div `
margin-bottom: 12px;
    `;
export const searchTitle = styled.span `
font-size: 20px;
font-weight: 700;
    `;
export const searchTitleSub = styled.span `
display: inline;
margin-left: 5px;
font-size: 13px;
color: rgba(34,34,34,.8);
    `;
export const searchItemTagName = styled.div `
box-sizing: border-box;
-webkit-tap-highlight-color: transparent;
    `;
export const searchItemTagWrap = styled.div `

line-height: 13px;
    `;
export const searchItemTagCard = styled.a `
max-width: 142px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-size: 14px;
letter-spacing: -.21px;
color: rgba(34,34,34,.8);
background: #f4f4f4;
border: 1px solid #ebebeb;
border-radius: 20px;
padding: 8px 12px;
display: inline-block;
margin: 0 15px 12px 0;
    `;

//인기검색어
export const searchItemRanking = styled.div `
margin-bottom: 24px;
    `;
export const searchItemRankingCard = styled.div `
margin: 0;
padding: 0;
    `;
export const searchItemRankingContent = styled.ol `
column-count: 2;
list-style: none;
line-height: 17px;
font-size: 14px;
    `;
export const RankingItem = styled.li `
padding: 4px 0 16px;
cursor: pointer;
display: -webkit-box;
display: flex;
    `;
export const RankingIdx = styled.span `
font-weight: 600;
margin-right: 6px;
    `;
export const RankingFont = styled.a `
text-decoration: none;
color: inherit;
-webkit-tap-highlight-color: rgba(0,0,0,.1);
    `;
export const RankingTitle= styled.span `
font-weight: 400;
margin-right: 6px;
max-width: 108px;
overflow: hidden;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
display: inline-block;
white-space: nowrap;
    `;
export const category= styled.div `

    `;
export const brand= styled.div `

    `;

