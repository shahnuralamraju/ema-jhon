import React from 'react';
import logo from '../../images/ema-john.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
const Header = () => {
    return (
        
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark nabi">
            <div className="container-fluid">
                <div className="logo-div"><a href="/shop"><img src={logo} alt="" /></a></div>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/shop">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/review">Order Review</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/manage">Manage Inventory</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;