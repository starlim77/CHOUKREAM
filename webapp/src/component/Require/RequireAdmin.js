import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAdmin = ({ children, auth }) => {
    if (!auth === 'ROLE_ADMIN') {
        // login user
        return <Navigate to="/" />;
    }
    return children;
};

export default RequireAdmin;
