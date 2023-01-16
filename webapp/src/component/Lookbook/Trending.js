import React, { useEffect, useState } from 'react';
import Social from '../Lookbook/Social';
import {
    Container,
} from '@mui/material';

import * as S from './style';
import axios from 'axios';
import TrendingItem from './TrendingItem';

const Trending = () => {
    const [list, setList] = useState([
        {
            seq: '',
            id: '',
            content: '',
            logtime: '',
            styleFile: '',
            originalFileName: [],
            storedFileName: [],
        },
    ]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/lookbook/getStyleList')
            .then(res => setList(res.data))
            .catch(error => console.log(error));
    }, []);

  

    const [itemLength,setItemLength] = useState(12) // 처음에 가져올 아이템 갯수

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    
    const handleScroll = () => {
        var heightTop = window.scrollY; // 화면의 Y축의 상단값

        const heightBottom = window.scrollY + window.innerHeight; // 화면의 Y축의 하단값
        const innerHeight = window.innerHeight;

        const scrollHeight = document.body.scrollHeight;
        // console.log('scrollHeight 스크롤 전체길이 ' + scrollHeight); // 불변

        if (heightBottom >= scrollHeight - 80) {
            // console.log( '하단높이 '+ heightBottom + ' , ' + (scrollHeight - 100));

            setItemLength(itemLength => itemLength + 8)
        }
    };

    return (
        <>
            <Social />
            <br/><br/><br/><br/>
            <div>태그</div>
            <Container fixed>
                <S.TrGridContainer>
                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 0 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 1 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 2 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                    <S.TrGridContainerSub>
                    {list.map((item,index) => 
                        index % 4 === 3 ? 
                        <TrendingItem key={item.seq} item = {item} index ={index} itemLength ={itemLength}/>
                        :
                        ''
                    )}
                    </S.TrGridContainerSub>

                </S.TrGridContainer>
            </Container>
            {/* </MasonryInfiniteGrid> */}
        </>
    );
};

export default Trending;