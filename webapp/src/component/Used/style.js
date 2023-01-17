import styled from 'styled-components';


export const H2 = styled.h2`
    margin: 40px auto 0px auto;
    width: 1200px;
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-weight: bold;

`;

export const TagImg = styled.ul`
    margin: 16px auto 20px auto;
    width: 1200px;
    display: flex;
    justify-content: space-between;

`;

export const TagImgLi = styled.li`
    list-style: none;
    width: 84px;
    height: 84px;
    float: left;

    display: flex;
    flex-direction: column;
    align-items: center;
    :hover{
        background-color: #E1ECF4;
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

export const TagReset = styled.div`
    margin: 16px auto 15px auto;
    width: 1200px;
    display: flex;
    justify-content: center;


`;
export const TagResetSpan = styled.span`
    color: #32b232;
    font-size: 15pt;

    :hover{
        cursor: pointer;
        background-color: #8DEA8D;
    }
`;

export const SearchHashTag = styled.div`
    margin: 30px auto 30px auto;
    width: 1200px;
    display: flex;
    justify-content: center;

`;

export const SearchInput = styled.input`
    width: 140px;
    border: none;
    height: 20px;
    font-size: 14px;
    background-color: #d5d6ec4d;
    border-radius: 10px;

    :focus{
        outline: none;
    }
`;

export const SearchBtn = styled.div`
    border: 0.5px solid #ececec;
    background-color: #c7fbfb;
    height: 20px;
    border-radius: 15px;
    font-size: 10pt;
    width: 35px;
    display: flex;
    justify-content: space-around;
    margin-left: 5px;
    font-weight: 700;
    align-items: center;

    :hover{
        cursor: pointer;
    }
`;




export const UsedMain = styled.div`
    margin: 16px auto 0px auto;
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
`;

export const MainItem = styled.div`
   margin-bottom: 40px;
   width: 275px;
   height: 430px;
   margin-left: 15px;
   margin-right: 10px;
   position: relative;
   :hover{
    cursor: pointer;
   }
`;

export const ItemImg = styled.img`
    width: 275px;
    height: 275px;
    border-radius: 15px;
    object-fit: cover;

    border: 0.5px solid #ececec;
`;

export const ItemLayer = styled.img.attrs({
    src:"/image/used/soldout.jpg"
})`
    position:absolute;
    top:0px;
    width: 277px;
    height: 277px;
    border-radius: 15px;
    opacity:0.5;
`;
export const ItemTitle = styled.h2`
    margin-top: 7px;
    font-weight: 700;
    font-size: 15pt;
    height: 25px;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    white-space: pre-wrap;

    line-height: 25px;
`;
export const ItemSubTitle = styled.h2`
    margin-top: 5px;
    font-weight: 500;
    font-size: 12pt;
    color: #999;
    word-break: break-all;
    white-space: pre-wrap;
    height: 16px;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const ItemContent = styled.pre`
    margin-top: 15px;
    height: 30px;
    display: -webkit-box;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    width: 17em;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    font-weight: 600;
    font-size: 10pt;
    line-height: 15px;
`;

export const ItemPrice = styled.h2`
    margin-top: 10px;
    font-weight: 700;
`;

export const ItemLike = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
`
export const ItemLikeImg = styled.img`
`;

export const ItemLikeSpan = styled.span`
    margin-left: 5px;
    font-weight: 500;
`;


export const WriteBtn = styled.img`
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 40px;
    right: 40px;

    :hover{
        cursor: pointer;
    }
`;