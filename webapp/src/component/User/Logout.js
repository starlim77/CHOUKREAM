import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookieToken } from './storage/Cookie';

const Logout = () => {
    const { accessToken } = useSelector(state => state.token)
    const refreshToken = getCookieToken()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    

    return (
        <div>
            
        </div>
    );
};

export default Logout;