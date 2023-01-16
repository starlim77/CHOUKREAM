import React, { useState } from 'react';
import * as Co from './ContentStyle';

const Menu = ({ menu, dataSetting, checked, setChecked }) => {
    

    return (
        <>
            <Co.Menu>
                <Co.MenuLiText>
                    {/* {console.log(menu)} */}
                    <Co.CheckBox
                        type={'checkbox'}
                        onClick={e => {
                            e.stopPropagation();
                            setChecked(!checked);
                            dataSetting(menu, checked);
                        }}
                    />
                    &nbsp;
                    {menu}
                </Co.MenuLiText>
            </Co.Menu>
        </>
    );
};

export default Menu;
