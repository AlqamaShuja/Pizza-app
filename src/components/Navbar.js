import React from 'react';

const Navbar = () => {
    return ( 
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark d-flex justify-content-end mr-5">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Your Order</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact Us</a>
                    </li>
                </ul>
        </nav>

     );
}
 
export default Navbar;