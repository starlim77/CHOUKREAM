import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '../../Products/style';

const NewOption = ({ setModalOpen, seq }) => {

    const [option, setOption] = useState([])
    const [random,setRandom]=useState()

    useEffect(() => {
        axios.get(`http://localhost:8080/getNewProductOption?seq=${seq}`)
             .then(res => res.data !== null && setOption(res.data))
             .catch(error => console.log(error))
    }, [random]);

    const [newProductOption, setNewProductOption] = useState()

    const [inventoryOpen, setInventoryOpen] = (false)

    const addOption = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8080/addNewProductOption?seq=${seq}&option=${newProductOption}`)
             .then(res=>setRandom(Math.random))
             .catch(error => console.log(error))
           
    }

    return (
        <S.Container>
            {console.log(newProductOption)}
            <S.LayerContainer>
                <S.Close onClick={ e => setModalOpen(false)}>
                    X
                </S.Close>
                <S.LayerHeader>
                    <S.LayerHeaderTitle>
                        <span>사이즈</span>
                    </S.LayerHeaderTitle>
                </S.LayerHeader>
                <input type="text" onChange={e => setNewProductOption(e.target.value)}></input><button onClick={(e) => addOption(e)}>사이즈 추가</button>
                <S.LayerContent>
                    <S.SelectArea>
                        <S.SelectList>
                            {
                                option.map((item, index) => (
                                <S.SelectItem key={index}>
                                    <S.SelectLinkBuy>
                                        <S.LinkInner>
                                            <S.Size>{item.productOption}</S.Size>
                                            <S.Price>{item.inventory}</S.Price>
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
};

export default NewOption;