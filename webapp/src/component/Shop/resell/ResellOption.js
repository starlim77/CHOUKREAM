import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from '../../Products/style';

const ResellOption = ({ setModalOpen, seq }) => {

    const [option, setOption] = useState([])
    const [random, setRandom] = useState()

    useEffect(() => {
        axios.get(`http://localhost:8080/getProductSizeTable?seq=${seq}`)
             .then(res => res.data !== null && setOption(res.data))
             .catch(error => console.log(error))
    }, [random]);

    const [resellProductOption, setResellProductOption] = useState()

    const addOption = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:8080/addResllProductOption?seq=${seq}&option=${resellProductOption}`)
             .then(res=>setRandom(Math.random))
             .catch(error => console.log(error))
           
    }

    const inventoryMoal = (size) => {
        if(window.confirm('정말 삭제하시겠습니까?')){
        axios.get(`http://localhost:8080/deleteResllProductOption?seq=${seq}&option=${size}`)
            .then(res=>setRandom(Math.random))
            .catch(error => console.log(error))
        } else {alert('삭제를 취소합니다')}
    }

    return (
        <S.Container>
            {console.log(option)}
            <S.LayerContainer>
                <S.Close onClick={ e => setModalOpen(false)}>
                    X
                </S.Close>
                <S.LayerHeader>
                    <S.LayerHeaderTitle>
                        <span>사이즈 / 재고 관리</span>
                    </S.LayerHeaderTitle>
                </S.LayerHeader>
                <input type="text" onChange={e => setResellProductOption(e.target.value)}></input><button onClick={(e) => addOption(e)}>사이즈 추가</button>
                    <S.LayerContent>
                        <S.SelectArea>
                            <S.SelectList>
                                {
                                    option.map((item, index) => (
                                    <S.SelectItem key={index} onClick={e => inventoryMoal(item.size)}>
                                        <S.SelectLinkBuy>
                                            <S.LinkInner>
                                                <S.Size>{item.size}</S.Size>
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

export default ResellOption;