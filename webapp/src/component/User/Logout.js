import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeCookieToken } from './storage/Cookie';

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accessToken');
        removeCookieToken();
        return navigate('/login');
    };

    useEffect(() => {
        logout();
        navigate('/');
        window.location.reload();
    }, []);

    // return (
    //     <>
    //         <Link to="/" />
    //     </>
    // );
};

export default Logout;
