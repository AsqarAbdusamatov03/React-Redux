import React from 'react';
import {Link} from "react-router-dom";

const NavbarCom = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
            <Link to="/"  className="navbar-brand ml-5">React Redux Context App</Link>
        </div>
    );
};

export default NavbarCom;