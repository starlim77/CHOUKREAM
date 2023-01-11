import axios from 'axios';
import React, { useState } from 'react';

const NewSearch = () => {
    
    const [keyword, setKeyword] = useState('')
    const [searchOption, setSearchOption] = useState('브랜드')
    
    const onSearch = e => {
        e.preventDefault();
        axios
            .get('http://localhost:8080/user/search', {
                // get방식은 2번째 인자에 null 안써줘도된다
                params: {
                    searchOption: searchOption,
                    keyword: keyword,
                },
            })
            // .then(res => setList(res.data))
            .catch(error => console.error(error));
    };
    
    return (
        <>
            
        </>
    );
};

export default NewSearch;