import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './style';
import * as B from './SizeBtnStyle';

const ModalBasic = ({ setModalOpen, seq }) => {
    const [sizePrice, setSizePrice] = useState([{}])
    const [sizeForm, setSizeForm] = useState([{}])

    useEffect(() => {
        axios.get(`http://localhost:8080/getProductSize?seq=${seq}`)
             .then(res => res.data !== null && setSizeForm(res.data))
             .catch(error => console.log(error))
    }, []);
    const asdf = (size, seq)=>{
   
        axios.get("http://localhost:8080/getProductSizeMin?seq="+seq+"&size="+size)
             .then((res)=>{
                res.data !== null ?
                setSizePrice([
                    ...sizePrice, {
                        size: res.data
                    }
                ]) : setSizePrice([
                    ...sizePrice, {
                        size: ''
                    }
                ])
                console.log(sizePrice)
            }).catch(error => console.log(error))
    }



    return (
        <S.Container>
            <S.Close onClick={ e => setModalOpen(false)}>
                X
            </S.Close>
            
            {
            sizeForm.map((item, index) => (
            <B.SizeBtn key={index}>
                <B.SizeText>{item.size}</B.SizeText>
                {/* <B.SizeText>{asdf(item.size, seq)}{sizePrice.size[index]}{sizePrice}</B.SizeText> */}
            </B.SizeBtn>))
                                    }
        </S.Container>
    );
}
export default ModalBasic;