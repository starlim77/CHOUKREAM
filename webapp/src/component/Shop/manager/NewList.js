import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Li from './NewListStyle';
import Pagination from './Pagination';

const NewList = () => {
    const [newProductList, setNewProductList] = useState([]);

    const getNewProductList = () => {
        axios
            .get('http://localhost:8080/shop/getNewProductList')
            .then(res => setNewProductList(res.data))
            .catch(error => console.log(error));
        //.then(res => console.log(JSON.stringify(res.data)))
    };
    useEffect(() => {
        getNewProductList();
        // setNewProductList([{ ...newProductList, isChecked: false }]);
        // console.log('렌더링 1');
    }, []);

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
            //체크됐을 경우, 요소를 Set에 추가되도록 setCheckedItems를 활용해 add시킴
        } else if (!isChecked && checkedItems.has(id)) {
            checkedItems.delete(id);
            setCheckedItems(checkedItems);
        }
        // 체크되지 않았을 경우, 선택됐던 것이 해제된 것이라면 checkItems에서 delete함
    };

    const [checked, setChecked] = useState(false);
    const checkHandler = e => {
        // console.log("seq " +newProductList[0].seq);
        // newProductList.seq == e.target.id && setNewProductList({...newProductList, isChecked: true})

        // newProductList.map(item => {
        //     item.seq === e.target.id &&
        //         setNewProductList([{ ...newProductList, isChecked: true }]);
        //     // console.log(newProductList);
        // });

        // newProductList.map(item)
        setChecked(!checked);
        //console.log('e.target.key ' + e.target.value);
        // console.log('e.target.checked ' + target.checked);
        // 조건식 && set()

        console.log('e.target.id ' + e.target.id);
        console.log('e.target.checked ' + e.target.checked);
        checkedItemHandler(e.target.id, e.target.checked);
    };

    const [isAllChecked, setIsAllChecked] = useState(false);
    const allCheckedHandler = isChecked => {
        console.log('allCheckedHandler isChecked ' + isChecked);

        if (isChecked) {
            setCheckedItems(new Set(newProductList.map(({ id }) => id)));
            setIsAllChecked(true);
        } else {
            checkedItems.clear();
            setCheckedItems(setCheckedItems);
            setIsAllChecked(false);
        }
    };
    const allCheckHandler = () => setChecked(isAllChecked);
    useEffect(() => allCheckHandler(), [isAllChecked]);

    return (
        <>
            {/* <Li.MenuBtn>
                <Link to={''}>Update</Link>
            </Li.MenuBtn>
            <Li.MenuBtn>
                <Link to={''}>Delete</Link>
            </Li.MenuBtn> */}
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
                    <Li.Option value="20">30</Li.Option>
                </Li.Select>
            </Li.Label>
            {/* {console.log("리미트 뭐니 " + limit)} */}

            <Li.Table>
                <Li.Thead>
                    <Li.Tr>
                        <Li.Th style={{ width: '200px' }}>
                            <Li.Input
                                type="checkbox"
                                checked={checked}
                                // checked={isChecked} 로 바꾸면됨
                                // 객체 속성으로 ischecked 추가 하기 
                                onChange={e =>
                                    allCheckedHandler(e.target.checked)
                                }
                            ></Li.Input>
                        </Li.Th>
                        <Li.Th>seq</Li.Th>
                        <Li.Th>id</Li.Th>
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
                <Li.Tbody>
                    {/* map 오류 뜰때 && 연산자 씀으로 list가 있을때만 돌릴수 있다 */}
                    {newProductList.slice(offset, offset + limit).map(item => (
                        <Li.Tr key={item.seq}>
                            <Li.Td style={{ width: '200px' }}>
                                <Li.Input
                                    type="checkbox"
                                    checked={checked}
                                    id={item.seq}
                                    onChange={e => checkHandler(e)}
                                ></Li.Input>
                            </Li.Td>
                            <Li.Td>{item.seq}</Li.Td>
                            <Li.Td>{item.id}</Li.Td>
                            {/* <Li.Td>{item.imgName}</Li.Td> */}
                            {/* 이게 이미지 주소 */}
                            <Li.Td>
                                <Li.SmallImg
                                    src={`/newProductList/${item.imgName}`}
                                ></Li.SmallImg>
                            </Li.Td>
                            <Li.Td>{item.brand}</Li.Td>
                            <Li.Td>{item.category}</Li.Td>
                            <Li.Td>{item.categoryDetail}</Li.Td>
                            <Li.Td>{item.color}</Li.Td>
                            <Li.Td>{item.modelNum}</Li.Td>
                            <Li.Td>{item.price}</Li.Td>
                            <Li.Td>{item.releaseDate}</Li.Td>
                            <Li.Td>{item.registerProductDate}</Li.Td>
                            <Li.Td>{item.title}</Li.Td>
                            <Li.Td>{item.subTitle}</Li.Td>
                        </Li.Tr>
                    ))}
                </Li.Tbody>
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
