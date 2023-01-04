import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './style';

const ModalBasic = ({ setModalOpen, seq, setSellBidsListForm, setBuyBidsListForm, setCompletedOrderForm, setSize, getSize, sizeForm, getAll }) => {

    const [allSize, setAllSize] = useState('-')

    useEffect(() => {
        axios.get(`http://localhost:8080/getSellOrderList?seq=${seq}`)
             .then(res => res.data.length !== 0 && setAllSize(res.data[0].orderPrice))
             .catch(error => console.log(error)) 
    }, []);

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