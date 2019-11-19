import React from 'react';
import Login from './views/Login';
import Register from './views/Register';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Login />
    },
    {
        path: '/register',
        exact: true,
        main: () => <Register />
    }
]
export default routes;