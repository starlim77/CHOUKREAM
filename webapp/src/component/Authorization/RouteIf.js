import React from 'react';

const RouteIf = ({ role, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => {
                // 권한 체크
                if (role === ROLE.NONE) {
                    return <FobiddenPage />;
                }

                if (Component) {
                    // role을 컴포넌트에 전달
                    return <Component {...props} role={role} />;
                }

                return null;
            }}
        />
    );
};

export default RouteIf;
