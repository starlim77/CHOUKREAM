import axios from 'axios';
import React, { useState } from 'react';
import * as Co from './ContentStyle';
import Menu1 from './Menu1';

const MenuList = ({item, dummy, setDummy, dataSetting, setPictures}) => {

    // const [checked, setChecked] = useState(false)
    // console.log('처음 체크드 ' + checked)
    // console.log( '1 ' + item)
    // console.log(item)
    
    // const sortMenu = (menu) => {
    //     // checked 누른상태 true면 신발 정렬
    //     // checked 풀린상태 false db 에서 product list 꺼내오기
    //     // console.log('menu 는 ' + menu);
    //     // console.log('checked 머냐 1 ' + checked)
    //     // 리랜더링 되야지 값이 바뀐게 출력된다 
    //     // 이게 안바뀜 
    //     if (menu === '신발' && !checked) {
    //         // console.log('checked 머냐 2 ' + checked);
    //         axios
    //             .get(`http://localhost:8080/shop/getShoesList?shoes=${menu}`)
    //             // .then(res => console.log( JSON.stringify(res.data)))
    //             .then(res => {
    //                 setDummy(res.data);
    //             })
    //             .catch(error => console.log(error));
    //             setPictures(8);
                
    //     } else if (menu === '신발' && checked) {
    //         // console.log('checked 머냐 3 ' + checked);
    //         axios
    //             .get('http://localhost:8080/shop/getProductList')
    //             .then(res => setDummy(res.data))
    //             .catch(error => console.log(error));
    //     }
    // }
    return (
        <>
            <Co.MenuList>
                {item.menuList.map((menu, index) => (
                    <Menu1
                        key={index}
                        menu={menu}
                        dataSetting={dataSetting}
                    ></Menu1>
                ))}
            </Co.MenuList>
        </>
    );
};

export default MenuList;