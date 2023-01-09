import axios from 'axios';
import React from 'react';
import * as S from './style';

const newProductOption = ({ setModalOpen, option, newProductOption, getOption }) => {
    return (  
        <S.Container>
            <S.LayerContainer>
                <S.Close onClick={ e => setModalOpen(false)}>
                    X
                </S.Close>
                <S.LayerHeader>
                    <S.LayerHeaderTitle>
                        <span>옵션</span>
                    </S.LayerHeaderTitle>
                </S.LayerHeader>
                <S.LayerContent>
                    <S.SelectArea>
                        <S.SelectList>
                            {console.log(newProductOption)}
                            {
                                newProductOption.map((item, index) => (
                                <S.SelectItem style={{border: option === item.productOption && "1px solid black"}} key={index}>
                                    <S.SelectLinkBuy onClick={e => getOption(item.productOption)}>
                                        <S.LinkInner>
                                            <S.Size style={{fontWeight: option === item.productOption && "700"}}>{item.productOption}</S.Size>
                                            <S.Price>{item.inventory !== 0 && item.inventory}</S.Price>
                                            <S.PriceNull>{item.inventory === 0 && '일시품절'}</S.PriceNull>
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

export default newProductOption;