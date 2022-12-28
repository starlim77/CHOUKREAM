import styled from "styled-components"


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
