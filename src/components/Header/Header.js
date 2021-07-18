import React from 'react';
import logo from '../../images/ema-john.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (

        <nav className="navbar sticky-top navbar-expand-lg navbar-dark nabi">
            <div className="container-fluid">
                <div className="logo-div"><Link to="/shop"><img src={logo} alt="" /></Link></div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/review">Order Review</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/manage">Manage Inventory</Link>
                        </li>
                        
                        <button onClick={()=>setLoggedInUser({})}>Sign Out</button>
                        

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;