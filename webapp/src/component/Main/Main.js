import React from 'react';
import MainProduct from './MainProduct/MainProduct';

import * as S from './style';

const Main = () => {
    return (
        <S.MainWrap>
            <MainProduct title="Just Dropped" subTitle="발매 상품" />
        </S.MainWrap>
    );
};

export default Main;
