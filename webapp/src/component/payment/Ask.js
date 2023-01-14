import React, { useEffect, useState } from 'react';
import * as S from './AskStyle';

const Ask = ({ ask, setAsk, setModals }) => {
    const asks = [
        '요청사항 없음',
        '문 앞에 놓아주세요',
        '경비실에 맡겨 주세요',
        '파손 위험 상품입니다. 배송 시 주의해주세요',
        '직접 입력',
    ];

    const [askText, setAskText] = useState('');
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        if (
            ask === '배송 시 요청사항을 선택해주세요' ||
            ask === '요청사항 없음'
        ) {
            setAskText(asks[0]);
            return;
        }
        for (var i = 1; i < 4; i++) {
            if (ask === asks[i]) {
                setAskText(asks[i]);
                return;
            }
        }
        setAskText('직접 입력');
        setInputText(ask);
    }, []);

    const checkMax = text => {
        if (text.length <= 40) setInputText(text);
    };

    const changeAsk = () => {
        if (askText === asks[4]) {
            setAsk(inputText);
        } else {
            setAsk(askText);
        }
        setModals([false, false, false]);
    };

    return (
        <S.AskModal>
            <S.Title>배송 요청사항</S.Title>
            {asks.map((item, index) => {
                return (
                    <>
                        <S.Asks
                            key={index}
                            onClick={e => setAskText(e.currentTarget.innerHTML)}
                            checkAsk={askText === item}
                        >
                            {item}
                        </S.Asks>
                        {index !== 4 && <S.Hr key={'hr' + index}></S.Hr>}
                    </>
                );
            })}
            {askText === asks[4] ? (
                <S.Input
                    placeholder="내용을 입력해주세요.(최대 40자)"
                    value={inputText}
                    onChange={e => checkMax(e.target.value)}
                ></S.Input>
            ) : null}
            <S.Btns>
                <S.CancelBtn
                    type="button"
                    value="취소"
                    onClick={() => setModals([false, false, false])}
                ></S.CancelBtn>
                <S.ApplyBtn
                    type="button"
                    value="적용하기"
                    onClick={changeAsk}
                ></S.ApplyBtn>
            </S.Btns>
        </S.AskModal>
    );
};

export default Ask;
