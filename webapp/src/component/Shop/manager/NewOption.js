import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '../../Products/style';
import NewOptionInventory from './NewOptionInventory';

const NewOption = ({ setModalOpen, seq }) => {

    const [option, setOption] = useState([])
    const [random, setRandom] = useState()

    const [modalOption, setModalOption] = useState()
    const [modalInventory, setModalInventory] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8080/getNewProductOption?seq=${seq}`)
             .then(res => res.data !== null && setOption(res.data))
             .catch(error => console.log(error))
    }, [random]);

    const [newProductOption, setNewProductOption] = useState()

    const [inventoryOpen, setInventoryOpen] = useState(false)

    const addOption = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8080/addNewProductOption?seq=${seq}&option=${newProductOption}`)
             .then(res=>setRandom(Math.random))
             .catch(error => console.log(error))
           
    }

    const inventoryMoal = (productOption, inventory) => {

        if(open1){
        setModalOption(productOption)
        setModalInventory(inventory)

        setInventoryOpen(true)
        }else if(open2) {
            if(window.confirm('정말 삭제하시겠습니까?')){
            axios.get(`http://localhost:8080/deleteNewProductOption?seq=${seq}&option=${productOption}`)
             .then(res=>setRandom(Math.random))
             .catch(error => console.log(error))
            } else {alert('삭제를 취소합니다')}
        }
    }

    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);

    const onOpen2 = (e) => {
        if(e.target.name == 6) {setOpen1(true); setOpen2(false);}
        else if(e.target.name == 7) {setOpen2(true); setOpen1(false);}
    }

    return (
        <S.Container>
            <S.LayerContainer>
                <S.Close onClick={ e => setModalOpen(false)}>
                    X
                </S.Close>
                <S.LayerHeader>
                    <S.LayerHeaderTitle>
                        <span>사이즈 / 재고 관리</span>
                    </S.LayerHeaderTitle>
                </S.LayerHeader>
                <S.TabInfo>
                    <S.LayerContentTabArea>
                        <S.LayerContentTabList>
                            <S.TabAreaItem>
                                <S.TabAreaItemLink onClick={ onOpen2 } open={ open1 } name='6'>재고 수정</S.TabAreaItemLink>
                            </S.TabAreaItem>
                            <S.TabAreaItem>
                                <S.TabAreaItemLink onClick={ onOpen2 } open={ open2 } name='7'>사이즈 삭제</S.TabAreaItemLink>
                            </S.TabAreaItem>
                        </S.LayerContentTabList>
                        <div style={{paddingLeft: "80px"}}>
                        <input type="text" onChange={e => setNewProductOption(e.target.value)}></input><button onClick={(e) => addOption(e)} style={{marginLeft: "30px"}}>사이즈 추가</button>
                        </div>
                        
                            <S.LayerContent>
                                <S.SelectArea>
                                    <S.SelectList>
                                        {
                                            option.map((item, index) => (
                                            <S.SelectItem key={index} onClick={e => inventoryMoal(item.productOption, item.inventory)}>
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
                    </S.LayerContentTabArea>
                </S.TabInfo>
            </S.LayerContainer>
            {inventoryOpen && <NewOptionInventory setInventoryOpen={setInventoryOpen} seq={seq} modalInventory={modalInventory} modalOption={modalOption} setModalInventory={setModalInventory} setRandom={setRandom}></NewOptionInventory>}
        </S.Container>
    );
};

export default NewOption;