import styled from 'styled-components';


export const H2 = styled.h2`
    margin: 40px auto 0px auto;
    width: 1200px;
    display: flex;
    justify-content: center;
    font-size: 28px;
`;

export const TagImg = styled.ul`
    margin: 16px auto 0px auto;
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
`;

export const TagImgItem = styled.img`
    width: 70px;
    height: 70px;
`;

export const TagImgSpan = styled.span`
    font-size: 14px;
`;



export const SearchHashTag = styled.div`
    margin: 16px auto 0px auto;
    width: 1200px;
    display: flex;
    justify-content: center;

    border: 1px solid red;
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
    width: 276px;
    height: 276px;
    border-radius: 15px;
    opacity:0.5;
`;
export const ItemTitle = styled.h2`
    margin-top: 7px;
    font-weight: 700;
    height: 20px;
`;
export const ItemSubTitle = styled.h2`
    margin-top: 5px;
    font-weight: 500;
    height: 20px;
`;

export const ItemContent = styled.pre`
    margin-top: 15px;
    height: 30px;
    display: -webkit-box;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    width: 17em;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const ItemPrice = styled.h2`
    margin-top: 15px;
    font-weight: 700;
`;

export const ItemLike = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
`
export const ItemLikeImg = styled.img`
`;

export const ItemLikeSpan = styled.span`
    margin-left: 5px;
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