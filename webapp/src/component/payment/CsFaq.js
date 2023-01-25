import React, { useEffect, useMemo, useState } from 'react';
import Header from '../Header/Header';

const keyword = [
    { group: '1', name: '질문1', content: '질문일입니다.' },
    { group: '1', name: '질문1', content: '질문일입니다.' },
    { group: '2', name: '질문1', content: '질문일입니다.' },
    { group: '2', name: '문2', content: '질문일이니다.' },
    { group: '3', name: '문2', content: '질문일입123니다.' },
    { group: '3', name: '문2', content: '질문일입니다.' },
    { group: '4', name: '질문삼', content: '질문일입니다.' },
    { group: '4', name: '질문4', content: '질문일입니다.' },
    { group: '5', name: '3질문43', content: '질문일입니다.' },
    { group: '5', name: '343', content: '질문일입니다.' },
];

const CsFaq = () => {
    let [data, setData] = useState(keyword);
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');
    const [visible, setVisible] = useState({});

    const onSearch = () => {
        setSearch(text);
    };
    const onClickCategory = () => {};
    data = useMemo(() => {
        return keyword.filter(item =>
            item.name.toLowerCase().includes(text.toLowerCase()),
        );
    }, [search]);

    const onClickContent = () => {};

    const handleClickItem = id => {
        setVisible({
            ...visible,
            [id]: !visible[id],
        });
    };

    // console.log('visible', visible);
    return (
        <>
            <p>자주묻는 질문</p>
            <hr />

            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={onSearch}>검색</button>
            <br />

            <table border="1">
                <tr>
                    <td onClick={onClickCategory} value="1" width="150">
                        1
                    </td>
                    <td onClick={onClickCategory} value="2" width="150">
                        2
                    </td>
                    <td onClick={onClickCategory} value="3" width="150">
                        3
                    </td>
                </tr>
                <tr>
                    <td onClick={onClickCategory} value="4" width="150">
                        4
                    </td>
                    <td onClick={onClickCategory} value="5" width="150">
                        5
                    </td>
                    <td width="150"></td>
                </tr>
            </table>

            <table>
                {data.map((item, index) => {
                    return (
                        <table key={index}>
                            <tr
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleClickItem(index)}
                            >
                                {' '}
                                <td width="30">{item.group}</td>
                                <td width="70">{item.name}</td>
                            </tr>
                            {visible[index] && (
                                <tr>
                                    <td colSpan="2">{item.content}</td>
                                </tr>
                            )}
                        </table>
                    );
                })}
            </table>
        </>
    );
};

export default CsFaq;
