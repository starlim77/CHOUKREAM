import React, { useState } from 'react';
import * as Ma from './ManagerStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ManagerPage = () => {
    
    // const [showBtn, setShowBtn] = useState(false)
    
    return (
        <>
            <Ma.Menu>
                <Ma.MenuUl>
                    <Ma.Logo>
                        <Link to={'/admin'} style={{ textDecoration: 'none' }}>
                            관리자페이지
                        </Link>
                    </Ma.Logo>
                    <Ma.MenuLi>
                        <Ma.MenuBtn style={{backgroundColor:'#fce205'}}>
                            <Link to={'/admin/newWrite'}style={{textDecoration: "none"}}>Create</Link>
                        </Ma.MenuBtn>
                        <Ma.MenuBtn style={{backgroundColor:'#fce205'}}>
                            <Link to={'/admin/newList'}style={{textDecoration: "none"}}>List</Link>
                        </Ma.MenuBtn>
                        {/* <Ma.MenuBtn style={{ display: showBtn ? '' : 'none' }}>
                            <Link to={'/admin/newList'}>Update</Link>
                        </Ma.MenuBtn>
                        <Ma.MenuBtn style={{ display: showBtn ? '' : 'none' }}>
                            <Link to={'/admin/newList'}>Delete</Link>
                        </Ma.MenuBtn> */}
                        <Link to="/admin/newSearch">
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                style={{ marginLeft: '15px' }}
                            />
                        </Link>
                    </Ma.MenuLi>
                </Ma.MenuUl>
            </Ma.Menu>
        </>
    );
};

export default ManagerPage;