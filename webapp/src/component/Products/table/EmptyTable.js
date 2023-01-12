import React from 'react';
import * as S from '../style';

const EmptyCompleted = ({word}) => {
    return (
        <S.EmptyContent>
            <S.EmptyBg>
                
                    <img src={'/image/product/close.png'} width="30px" heigh="30px"></img>
                
            </S.EmptyBg>
            <S.EmptyText>{word}가 아직 없습니다</S.EmptyText>
        </S.EmptyContent>
    );
};

export default EmptyCompleted;