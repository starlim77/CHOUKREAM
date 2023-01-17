import React, { useState } from 'react';
import * as Co from './ContentStyle';

const NewMenu = ({ menu, dataSetting }) => {
    const [checked, setChecked] = useState(false);

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
                            dataSetting(menu);
                        }}
                    />
                    &nbsp;
                    {menu}
                </Co.MenuLiText>
            </Co.Menu>
        </>
    );
};

export default NewMenu;
