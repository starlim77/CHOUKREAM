import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '../../Products/style';

const NewOption = ({ setModalOpen, seq }) => {

    const [option, setOption] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/getNewProductOption?seq=${seq}`)
             .then(res => res.data !== null && setOption(res.data))
             .catch(error => console.log(error))
    }, []);


    return (
        <S.Container>
            {console.log(option)}
            <S.LayerContainer>
                <S.Close onClick={ e => setModalOpen(false)}>
                    X
                </S.Close>
                <S.LayerHeader>
                    <S.LayerHeaderTitle>
                        <span>사이즈</span>
                    </S.LayerHeaderTitle>
                </S.LayerHeader>
                <S.LayerContent>
                    <S.SelectArea>
                        <S.SelectList>
                            {/* {
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
                            } */}
                        </S.SelectList>
                    </S.SelectArea>
                </S.LayerContent>
            </S.LayerContainer>
        </S.Container>
    );
};

export default NewOption;