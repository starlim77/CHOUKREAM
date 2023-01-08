import React, { useEffect, useState } from 'react';
import * as Ma from './ManagerStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ManagerPage = () => {
    
    const [showBtn, setShowBtn] = useState(false)
    
    
    return (
        <>
            <Ma.Menu>
                <Ma.MenuUl>
                    <Ma.Logo>관리자페이지</Ma.Logo>
                    <Ma.MenuLi>
                        <Ma.MenuBtn>
                            <Link to={'/admin/newWrite'}>Create</Link>
                        </Ma.MenuBtn>
                        <Ma.MenuBtn>
                            <Link to={'/admin/newList'} >List</Link>
                        </Ma.MenuBtn>
                        <Ma.MenuBtn style={{ display: showBtn ? '' : 'none' }}>
                            <Link to={'/admin/newList'}>Update</Link>
                        </Ma.MenuBtn>
                        <Ma.MenuBtn style={{ display: showBtn ? '' : 'none' }}>
                            <Link to={'/admin/newList'}>Delete</Link>
                        </Ma.MenuBtn>
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