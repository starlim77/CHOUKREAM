import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children, auth }) => {
    if (!(auth === 'ROLE_USER' || auth === 'ROLE_ADMIN')) {
        // login user
        return <Navigate to="/" />;
    }
    return children;
};

export default RequireAuth;
