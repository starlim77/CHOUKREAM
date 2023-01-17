import axios from 'axios';
import React, { useState } from 'react';
import * as Co from './ContentStyle';
import Menu from './Menu';

const MenuList2 = ({ item, id, dummy, setDummy, setPictures, dataSetting, checked, setChecked }) => {
    return (
        <>
            <Co.MenuList>
                {/* {console.log(item)} */}
                {item.menuList.map((menu, index) => (
                    <Menu
                        key={index}
                        menu={menu}
                        dataSetting={dataSetting}
                        checked={checked}
                        setChecked={setChecked}
                    ></Menu>
                ))}
            </Co.MenuList>
        </>
    );
};

export default MenuList2;

