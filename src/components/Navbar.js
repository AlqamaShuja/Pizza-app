import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-end">
                <ul className="navbar-nav mr-5">
                    <li className="nav-item mr-4">
                        <Link className="nav-link" to="/">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="/order">Your Order</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="/contact">Contact Us</Link>
                    </li>
                </ul>
        </nav>

     );
}
 
export default Navbar;