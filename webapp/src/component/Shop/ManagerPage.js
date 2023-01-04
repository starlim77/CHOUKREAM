import React from 'react';
import * as Ma from './ManagerStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ManagerPage = () => {
    return (
        <>
            <Ma.Menu>
                <Ma.MenuUl>
                    <Ma.Logo>관리자페이지</Ma.Logo>

                    <Ma.MenuLi>
                        <Ma.MenuP>
                            <Link to="/Shop/userWrite">Create</Link>
                        </Ma.MenuP>

                        <Ma.MenuP>List</Ma.MenuP>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Ma.MenuLi>
                </Ma.MenuUl>
            </Ma.Menu>
        </>
    );
};

export default ManagerPage;