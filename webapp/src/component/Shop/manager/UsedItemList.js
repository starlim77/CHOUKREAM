import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as Li from './NewListStyle';
import Pagination from './Pagination';
import UsedItemListing from './UsedItemListing';

const UsedItemList = () => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(5);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;
    
    useEffect(()=>{
        axios
            .get('http://localhost:8080/used/getItem')
            .then(res => setData(res.data))
            .catch(error => console.log(error));
            // console.log(data); 
    },[])
    const [searchOption, setSearchOption] = useState('id');
    const[keyword, setKeyword]=useState('');
    const searchingForm=(e)=>{
        setKeyword(e.target.value);
    }
    const searchContent=(e)=>{
        e.preventDefault();
        axios.get("http://localhost:8080/used/search",{params:{keyword:keyword, searchOption:searchOption}})
            .then(res=>setData(res.data))
            .catch(err=>console.log(err))
    }
    return (
        <>  
            <Li.SearchingWrapper>
                    <Li.SearchSelect
                        name="searchOption"
                        onChange={e => setSearchOption(e.target.value)}>
                        <Li.SearchOption value="id">아이디</Li.SearchOption>
                        <Li.SearchOption value="title">제목</Li.SearchOption>
                    </Li.SearchSelect>
                <Li.SearchingInput value={keyword} onChange={e=>searchingForm(e)}></Li.SearchingInput>
                <Li.SearchingBTN onClick={e=>searchContent(e)}>검색</Li.SearchingBTN>
            </Li.SearchingWrapper><br></br>
            <Li.Table2>
                <Li.Thead>
                    <Li.Tr>
                            <Li.Th2>글번호</Li.Th2>
                            <Li.Th2>아이디</Li.Th2>
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
                        data.slice(0).reverse().slice(offset, offset + limit).map(item=><UsedItemListing key={item.seq} item={item}></UsedItemListing>)
                    }
                </Li.Tbody>
            </Li.Table2>
            <Li.Footer>
                <Pagination
                    total={data.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </Li.Footer>
        </>
    );
};

export default UsedItemList;