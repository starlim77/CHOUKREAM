import axios from 'axios';
import React, { useState } from 'react';
import * as Co from './ContentStyle';
import Menu from './Menu';


const MenuList2 = ({item, dummy, setDummy, setPictures, dataSetting}) => {
     
    
    return (
        <>
            <Co.MenuList>
                {item.menuList.map((menu, index) => (
                    <Menu key={index} menu={menu} dataSetting={dataSetting}></Menu>
                ))}
            </Co.MenuList>
        </>
    );
};

export default MenuList2;