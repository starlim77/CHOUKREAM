import axios from 'axios';
import React, { useState } from 'react';
import * as Co from './ContentStyle';

const MenuList = ({item, dummy, setDummy}) => {
    
    // const [checked, setChecked] = useState(true)
    
    const sortMenu = (menu) => {
        // checked 누른상태 true면 신발 정렬
        // checked 풀린상태 false db 에서 product list 꺼내오기
        console.log('menu 는 ' + menu);
        if (menu === '신발') {
            axios
                .get(`http://localhost:8080/shop/getShoesList?shoes=${menu}`)
                //  .then(res => console.log( JSON.stringify(res.data)))
                .then(res => {
                    setDummy(res.data);
                })
                .catch(error => console.log(error));
        }
    }
    return (
        <>
            <Co.MenuList>
                {item.menuList.map((menu, index) => (
                    <Co.Menu key={index}>
                        <Co.MenuLiText>
                            <Co.CheckBox type={'checkbox'}
                                onClick={e =>{ e.stopPropagation();                               
                                sortMenu(menu);}}
                                />
                            &nbsp;
                            {menu}
                        </Co.MenuLiText>
                    </Co.Menu>
                ))}
            </Co.MenuList>
        </>
    );
};

export default MenuList;