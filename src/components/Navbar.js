import React from 'react';
import { NavLink  } from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="navbar">

            <div className="logo-container">
                <a href="">
                    <h2 className="logo">aeroSpect</h2>
                </a>
            </div>

            <div className="link-container">
                <NavLink exact  className="nav-link" activeClassName="active" to="/">Home</NavLink >
                <NavLink  className="nav-link " to="/aboutus">AboutUs</NavLink >
                <NavLink  className="nav-link " to="/explore">Explore</NavLink >
                <NavLink  className="nav-link " to="/contactus">ContactUs</NavLink >
            </div>
            <div className="utility-btn-container">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Harshal0902/Aerospect">
                    <img className="github-img" src="https://informsuiuc.files.wordpress.com/2016/10/github-bb449e0ffbacbcb7f9c703db85b1cf0b.png" alt="Github" />
                </a>
            </div>
        </nav>
    );
}
export default Navbar;