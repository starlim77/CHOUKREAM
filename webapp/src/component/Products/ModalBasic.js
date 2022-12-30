import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './style';
import * as B from './SizeBtnStyle';

const ModalBasic = ({ setModalOpen, seq }) => {
    
    const [sizeForm, setSizeForm] = useState([{}])

    useEffect(() => {
        axios.get(`http://localhost:8080/getProductSize?seq=${seq}`)
             .then(res => res.data !== null && setSizeForm(res.data))
             .catch(error => console.log(error))
    }, []);

    const asdf = (size, seq)=>{
        axios.get("http://localhost:8080/getProductSizeMin?seq="+seq+"&size="+265).then((res)=>{
            console.log(res.data)
            if(res.data!==null){
                return res.data;
            }else{
                return "없다";
            }


        })
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
                <B.SizeText>{ asdf(item.size, seq ) }</B.SizeText>
            </B.SizeBtn>))
                                    }
        </S.Container>
    );
}
export default ModalBasic;