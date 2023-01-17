import styled from 'styled-components';

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    font-size: 50px;
    font-weight: 500px;
`;
export const Table = styled.table`
    margin-left: 80px;
    display: block;
    width: 80%;
    height: 100%;
`;
export const Thead  = styled.thead`
`;
export const Tbody = styled.tbody`
`;
// border: "1", 
// cellpadding:"5",  
// rules:"rows"
export const Tr = styled.tr`
    border-spacing: 20px 20px;
`;
export const Th = styled.th`
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    width: 100px;
    padding: 15px;
`;
export const Td = styled.td`
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    border-spacing: 20px 20px;
    width: 100px;
    padding: 10px;
    text-align: center;
`;

export const Input = styled.input`
    zoom: 1.5;
`;

export const MenuBtn = styled.button`
    color: RGB(85, 26, 139);
    margin: 5px;
    //padding: 10px;
    font-size: 20px;
    align-items: center;
    text-decoration: none;
`;
export const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: absolute;
    bottom: 5px;
`;
export const LabelDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 30px;
`;

export const Select = styled.select`
    /* position: absolute;
    top: 60px; */
`;
export const Option = styled.option`

`;
export const Footer = styled.footer`

`;
export const SmallImg = styled.img`
    width: 110px;
    height: 100px;
`;
export const SearchDiv = styled.div`
    text-align: center;
    display: inline-block;
    margin-left: 80px;
    box-sizing: border-box;
`;
export const SearchForm = styled.form`
`;

export const Th2 = styled.th`
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    width: 100px;
    padding: 15px;
`;

export const MainImg=styled.img`
    width:100px;
    height:100px;
    object-fit:cover;
`;

export const Tr2 = styled.tr`
    border-spacing: 20px 20px;

`;
export const Td2 = styled.td`
    border-top: solid 1px black;
    border-bottom: solid 1px black;
    text-align: center;
    width: ${props=>props.width?"400px":"100px"};
    height:100px;
    vertical-align: middle;
`;
export const SearchingWrapper=styled.div`
    display:flex;
    justify-content: flex-end;
`
export const SearchingInput=styled.input`

`
export const SearchingBTN=styled.button`

`
export const SearchSelect = styled.select``;
export const SearchOption = styled.option``;
export const SearchInput = styled.input``;
export const SearchBtn = styled.button``;

// export const  = styled.`

// `;

