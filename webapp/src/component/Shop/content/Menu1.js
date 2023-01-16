import React, { useState } from 'react';
import * as Co from './ContentStyle';

const Menu1 = (menu, dataSetting) => {
    const [checked, setChecked] = useState(false);

    return (
        <>
            <Co.Menu>
                <Co.MenuLiText>
                    <Co.CheckBox
                        type={'checkbox'}
                        onClick={e => {
                            e.stopPropagation();
                            setChecked(!checked); // 여기서 state를 바꾸고 sort 가는건지 ?
                            //sortMenu(menu);
                        }}
                    />
                    &nbsp;
                    {menu}
                </Co.MenuLiText>
            </Co.Menu>
        </>
    );
};

export default Menu1;
