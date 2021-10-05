import React from 'react';
import { NavLink } from 'react-router-dom';
import RootLayout from './RootLayout';

const Navbar = () => {
    return (
        <RootLayout>
            <div className="d-flex justify-content-center">
                <NavLink className="text-decoration-none mx-2" to="/">home</NavLink>
                <NavLink className="text-decoration-none mx-2" to="/books">books</NavLink>
                <NavLink className="text-decoration-none mx-2" to="/login">login</NavLink>
                <NavLink className="text-decoration-none mx-2" to="/register">register</NavLink>
            </div>
        </RootLayout>
    )
}

export default Navbar;
