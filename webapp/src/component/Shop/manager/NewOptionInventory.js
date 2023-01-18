import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '../../Products/style';

const NewOptionInventory = ({setInventoryOpen, seq, modalInventory, modalOption, setModalInventory, setRandom}) => {
    const updateInventory = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8080/updateInventory?seq=${seq}&option=${modalOption}&inventory=${modalInventory}`)
             .then(res => setRandom(Math.random))
             .catch(error => console.log(error))

        setInventoryOpen(false)
    }
    
    return (
        <S.Container>
            <S.LayerContainer2>
                <S.Close onClick={ e => setInventoryOpen(false)}>
                    X
                </S.Close>
                <div style={{paddingTop: "17px", paddingLeft: "20px"}}>
                <span style={{fontWeight: "700"}}>{modalOption}</span> &nbsp;
                <input type="text" onChange={e => setModalInventory(e.target.value)} value={modalInventory} width="10px"></input>
                <button onClick={(e) => updateInventory(e)} style={{marginLeft: "30px"}}>재고 수정</button>
                </div>
            </S.LayerContainer2>
        </S.Container>
    );
};

export default NewOptionInventory;