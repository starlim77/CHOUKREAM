import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAdmin = ({ children }) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
        const tokenJson = jwt_decode(token);
        var auth = tokenJson['auth'];
    } else {
        var auth = 'ROLE_GUEST';
    }

    if (!auth === 'ROLE_ADMIN') {
        // login user
        return <Navigate to="/login" />;
    }
    return children;
};

export default RequireAdmin;
