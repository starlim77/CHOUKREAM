import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Li from './NewListStyle';
import NewProductList from './NewProductList';
import Pagination from './Pagination';

const NewList = () => {
    const [newProductList, setNewProductList] = useState([]);

    const getNewProductList = () => {
        axios
            .get('http://localhost:8080/shop/getNewProductList')
            // .then(res =>( setNewProductList(res.data), console.log(newProductList)))
            // .then(res =>( setNewProductList(res.data), setNewProductList([...newProductList, { isChecked: false }])))
            // .then(res =>( setNewProductList(res.data), setNewProductList([{...newProductList, isChecked:false}])))
            .then(res => setNewProductList(res.data))
            // .then(setNewProductList([{ ...newProductList, isChecked: false }]))
            // .then(setNewProductList({...newProductList, [isChecked]: false}))
            .catch(error => console.log(error));
        //.then(res => console.log(JSON.stringify(res.data)))
    };
    useEffect(() => {
        getNewProductList();
        // setNewProductList([{...newProductList, [isChecked]: false}])
        // setNewProductList([...newProductList, { isChecked: false }]);
        // console.log('ㅠㅠ ' + newProductList[0])
        // console.log('ㅠㅠ ' + newProductList)
        // 자꾸 유니크 키가 없다고함 키줬는데

        // console.log('렌더링 1');
    }, []);

    // console.log(newProductList)
    var copy_newProductList = [];
    newProductList.map(item => {
        copy_newProductList.push({ ...item, isChecked: false });
    });
    // console.log(copy_newProductList)

    // console.log(newProductList[0])

    // useEffect(() => {
    //     newProductList.map(item =>
    //         setNewProductList([{ ...newProductList, isChecked: false }]),
    //     );
    // }, [newProductList])

    // 페이징 처리
    const [limit, setLimit] = useState(5); // limit 페이지 당 게시물수
    const [page, setPage] = useState(1); // page 현재 페이지 번호
    const offset = (page - 1) * limit; // 첫 게시물의 위치

    // check 상태 관리 하기
    const [checkedItems, setCheckedItems] = useState(new Set()); // 빈 set로 초기값 만들기
    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
            checkedItems.add(id);
            setCheckedItems(checkedItems);
            console.log('checkItems add ' + checkedItems);
            //체크됐을 경우, 요소를 Set에 추가되도록 setCheckedItems를 활용해 add시킴
        } else if (!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
            console.log('checkItems delete ' + checkedItems);
        }
        // 체크되지 않았을 경우, 선택됐던 것이 해제된 것이라면 checkItems에서 delete함
    };

    // 전체 체크
    const [isAllChecked, setIsAllChecked] = useState(false);
    const allCheckedHandler = isChecked => {
        console.log('allCheckedHandler isChecked ' + isChecked);
        setIsAllChecked(!isAllChecked);
        // copy_newProductList.map 돌려서 isChecked 전부 바꾸기
        newProductList.map((item, index) => {
            copy_newProductList[index].isChecked = true;
            console.log(copy_newProductList);
        });
        //javascript 객체 배열 속성 바꾸기 https://blogpack.tistory.com/655

        if (isChecked) {
            setCheckedItems(new Set(newProductList.map(({ id }) => id)));
            setIsAllChecked(true);
        } else {
            checkedItems.clear();
            setCheckedItems(setCheckedItems);
            setIsAllChecked(false);
        }
    };
    // const allCheckHandler = () => {

    // }
    // useEffect(() => allCheckHandler(), [isAllChecked]);
    // useEffect(() => {

    // },[isAllChecked])

    const [checked, setChecked] = useState(false);
    const [checkedId, setCheckedId] = useState(0);
    

    const navigate = useNavigate();

    const newProductDelete = () => {
        // isChecked true 인 애들만
        // id를 보내야함
        // console.log(typeof checkedId + 'ㄴㅇㅎㄴㅇㅎㄴㅇㅎㄴㅇ');
        // console.log(checkedId + 'ㄴㅇㅎㄴㅇㅎㄴㅇㅎㄴㅇ');
        // axios.delete('http://localhost:8080/shop/delete?id=' + checkedId)
        axios
            .delete(`http://localhost:8080/shop/delete?seq=${checkedId}`)
            .then(alert('새상품 삭제 완료'))
            .catch(error => console.log(error));

        navigate('/admin/newList');
        window.location.reload();
    };
    const [disabledCheck, setDisabledCheck] = useState(true)
    
    return (
        <>
            <Li.MenuBtn
                onClick={newProductDelete}
                disabled={disabledCheck}
                style={{ backgroundColor: disabledCheck ? '' : '#fce205' }}
            >
                {/* <Link 
                    to={{pathname:'/admin/newUpdate',
                    state: {
                        name: '현욱',
                        checkedId: checkedId,
                    }
                }}>Update</Link> */}
                {/* <Link
                    to={{
                        pathname: '/admin/newUpdate',
                        state: {
                            name: '현욱',
                            checkedId: checkedId,
                        },
                    }}
                >
                    Update
                </Link> */}
                <Link
                    to={'/admin/newUpdate'}
                    state={{ name: '현욱', checkedId: checkedId }}
                    style={{ textDecoration: 'none' }}
                >
                    Update
                </Link>
            </Li.MenuBtn>
            <Li.MenuBtn
                onClick={newProductDelete}
                disabled={disabledCheck}
                style={{ backgroundColor: disabledCheck ? '' : '#fce205' }}
            >
                Delete
            </Li.MenuBtn>
            <Li.Title>새 상품 목록</Li.Title>
            <Li.Label>
                페이지 당 표시할 상품 개수:&nbsp;
                <Li.Select
                    type="number"
                    value={limit}
                    onChange={({ target: { value } }) =>
                        setLimit(Number(value))
                    }
                >
                    <Li.Option value="5">5</Li.Option>
                    <Li.Option value="10">10</Li.Option>
                    <Li.Option value="15">15</Li.Option>
                    <Li.Option value="20">20</Li.Option>
                    <Li.Option value="20">25</Li.Option>
                </Li.Select>
            </Li.Label>
            {/* {console.log("리미트 뭐니 " + limit)} */}

            <Li.Table>
                <Li.Thead>
                    <Li.Tr>
                        <Li.Th style={{ width: '200px' }}>
                            {/* <Li.Input
                                type="checkbox"
                                checked={isAllChecked}
                                // checked={isChecked} 로 바꾸면됨
                                // 객체 속성으로 ischecked 추가 하기 
                                onChange={e =>
                                    allCheckedHandler(e.target.checked)
                                }
                            ></Li.Input> */}
                        </Li.Th>
                        <Li.Th>seq</Li.Th>
                        <Li.Th>이미지 </Li.Th>
                        <Li.Th>brand</Li.Th>
                        <Li.Th>category</Li.Th>
                        <Li.Th>category_detail</Li.Th>
                        <Li.Th>color</Li.Th>
                        <Li.Th>model_num</Li.Th>
                        <Li.Th>price</Li.Th>
                        <Li.Th>releaseDate</Li.Th>
                        <Li.Th>registerProductDate</Li.Th>
                        <Li.Th>title</Li.Th>
                        <Li.Th>subTitle</Li.Th>
                    </Li.Tr>
                </Li.Thead>
                <NewProductList
                    newProductList={newProductList}
                    copy_newProductList={copy_newProductList}
                    offset={offset}
                    limit={limit}
                    checked={checked}
                    setChecked={setChecked}
                    checkedId={checkedId}
                    setCheckedId={setCheckedId}
                    disabledCheck={disabledCheck}
                    setDisabledCheck={setDisabledCheck}
                ></NewProductList>
            </Li.Table>

            <Li.Footer>
                <Pagination
                    total={newProductList.length}
                    limit={limit}
                    page={page}
                    setPage={setPage}
                />
            </Li.Footer>
        </>
    );
};

export default NewList;
