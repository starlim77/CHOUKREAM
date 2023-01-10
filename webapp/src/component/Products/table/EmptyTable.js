import React from 'react';
import * as S from '../style';

const EmptyCompleted = ({word}) => {
    return (
        <S.EmptyContent>
            <S.EmptyBg>
                <S.Blind>빈 데이터 이미지</S.Blind>
            </S.EmptyBg>
            <S.EmptyText>{word}가 아직 없습니다</S.EmptyText>
        </S.EmptyContent>
    );
};

export default EmptyCompleted;