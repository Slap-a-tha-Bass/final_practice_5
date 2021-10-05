import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest}: IPrivateRoute) => {
    const TOKEN = localStorage.getItem('token');

    if(!TOKEN){
        return <Redirect to="/login" />
    } else {
        return <Route {...rest}>{children}</Route>
    }
}
interface IPrivateRoute {
    path: string,
    exact?: boolean,
    children: React.ReactNode
}
export default PrivateRoute;
