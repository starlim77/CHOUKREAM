import axios from 'axios';
import React, { useState } from 'react';
import * as Co from './ContentStyle';
import NewMenu from './NewMenu';

const MenuList = ({item, dummy, setDummy, setPictures, dataSetting}) => {


    
    return (
        <>
            <Co.MenuList>
                {/* {console.log(item)} */}
                {item.menuList.map((menu, index) => (
                    <NewMenu
                        key={index}
                        menu={menu}
                        dataSetting={dataSetting}
                    ></NewMenu>
                ))}
            </Co.MenuList>
        </>
    );
};

export default MenuList;