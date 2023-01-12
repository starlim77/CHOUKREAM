import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Li from './NewListStyle';
import UsedItemListing from './UsedItemListing';

const UsedItemList = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios
            .get('http://localhost:8080/used/getItem')
            .then(res => setData(res.data))
            .catch(error => console.log(error));
            console.log(data); 
    },[])
    const [searchOption, setSearchOption] = useState('브랜드');
    const[searching, setSearching]=useState('');
    const searchingForm=(e)=>{
        setSearching(e.target.value);
    }
    const searchContent=(e)=>{
        e.preventDefault();
        // axios.get("http://localhost:8080/used/search",params)
    }
    return (
        <>  
            <Li.SearchingWrapper>

                <Li.SearchingInput value={searching} onChange={e=>searchingForm(e)}></Li.SearchingInput>
                <Li.SearchingBTN onClick={e=>searchContent(e)}>검색</Li.SearchingBTN>
            </Li.SearchingWrapper>
            <Li.Table>
                <Li.Thead>
                    <Li.Tr>
                            <Li.Th2>seq</Li.Th2>
                            <Li.Th2>id</Li.Th2>
                            <Li.Th2>이미지</Li.Th2>
                            <Li.Th2>제목</Li.Th2>
                            <Li.Th2>제품명</Li.Th2>
                            <Li.Th2>사이즈</Li.Th2>
                            <Li.Th2>종류</Li.Th2>
                            <Li.Th2>가격</Li.Th2>
                            <Li.Th2>좋아요</Li.Th2>
                            <Li.Th2>판매여부</Li.Th2>
                            <Li.Th2>신고수</Li.Th2>
                            <Li.Th2>삭제</Li.Th2>
                    </Li.Tr>
                </Li.Thead>
                <Li.Tbody>
                    {
                        data.slice(0).reverse().map(item=><UsedItemListing key={item.seq} item={item}></UsedItemListing>)
                    }
                </Li.Tbody>
            </Li.Table>
        </>
    );
};

export default UsedItemList;