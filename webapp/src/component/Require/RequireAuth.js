import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const RequireAuth = ({ children }) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        const tokenJson = jwt_decode(token);
        var auth = tokenJson['auth'];
    } else {
        var auth = 'ROLE_GUEST';
    }

    if (!(auth === 'ROLE_USER' || auth === 'ROLE_ADMIN')) {
        // login user
        // console.log(auth);
        return <Navigate to="/login" />;
    }
    return children;
};

export default RequireAuth;
