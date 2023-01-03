import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './style';

const ModalBasic = ({ setModalOpen, seq, setSellOrderForm, setBuyOrderForm, setCompletedOrderForm, setSize }) => {
    const [sizeForm, setSizeForm] = useState([{}])

    const [allSize, setAllSize] = useState('-')

    useEffect(() => {
        axios.get(`http://localhost:8080/getProductSize?seq=${seq}`)
             .then(res => res.data !== null && setSizeForm(res.data))
             .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getSellOrderList?seq=${seq}`)
             .then(res => res.data.length !== 0 && setAllSize(res.data[0].orderPrice))
             .catch(error => console.log(error)) 
    }, []);

    const getSize = (seq, size) => {
        setSize(size);

        axios.get(`http://localhost:8080/getSellOrderListBySize?size=${size}&seq=${seq}`)
             .then(res => res.data.length !== 0 ? setSellOrderForm(res.data) : setSellOrderForm([{orderPrice: '-'}]))
             .catch(error => console.log(error))    

        axios.get(`http://localhost:8080/getBuyOrderListBySize?size=${size}&seq=${seq}`)
             .then(res => res.data.length !== 0 ? setBuyOrderForm(res.data) : setBuyOrderForm([{orderPrice: '-'}]))
             .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getCompletedOrderListBySize?size=${size}&seq=${seq}`)
             .then(res => res.data.length !== 0 ? setCompletedOrderForm(res.data) : setCompletedOrderForm([{price: '-'}]))
             .catch(error => console.log(error));   
        
        setModalOpen(false)
    }

    const getAll = (seq) => {
        setSize('모든 사이즈');

        axios.get(`http://localhost:8080/getSellOrderList?seq=${seq}`)
                .then(res => res.data.length !== 0 && setSellOrderForm(res.data))
                .catch(error => console.log(error))    

        axios.get(`http://localhost:8080/getBuyOrderList?seq=${seq}`)
                .then(res => res.data.length !== 0 && setBuyOrderForm(res.data))
                .catch(error => console.log(error))

        axios.get(`http://localhost:8080/getCompletedOrderList?seq=${seq}`)
                .then(res => res.data.length !== 0 && setCompletedOrderForm(res.data))
                .catch(error => console.log(error));    
        
        setModalOpen(false)
    }

    return (
        <S.Container>
            <S.LayerContainer>
                <S.Close onClick={ e => setModalOpen(false)}>
                    X
                </S.Close>
                <S.LayerHeader>
                    <S.LayerHeaderTitle>
                        {/* <span style={{fontSize: '18px'}}>사이즈</span> */}
                        <span>사이즈</span>
                    </S.LayerHeaderTitle>
                </S.LayerHeader>
                <S.LayerContent>
                    <S.SelectArea>
                        <S.SelectList>
                            <S.SelectItem>
                                <S.SelectLinkBuy>
                                    <S.LinkInner onClick={e => getAll(seq)}>
                                        <S.Size>모든 사이즈</S.Size>
                                        <S.Price>{ allSize }</S.Price>
                                        {/* <S.PriceNull>{item.price === null && '구매 입찰'}</S.PriceNull> */}
                                    </S.LinkInner>
                                </S.SelectLinkBuy>
                            </S.SelectItem>
                            {
                                sizeForm.map((item, index) => (
                                <S.SelectItem key={index}>
                                    <S.SelectLinkBuy onClick={e => getSize(seq, item.size)}>
                                        <S.LinkInner>
                                            <S.Size>{item.size}</S.Size>
                                            <S.Price>{item.price !== null && item.price}</S.Price>
                                            <S.PriceNull>{item.price === null && '구매 입찰'}</S.PriceNull>
                                        </S.LinkInner>
                                    </S.SelectLinkBuy>
                                </S.SelectItem>))
                            }
                        </S.SelectList>
                    </S.SelectArea>
                </S.LayerContent>
            </S.LayerContainer>
        </S.Container>
    );
}
export default ModalBasic;