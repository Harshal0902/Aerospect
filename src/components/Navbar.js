import React,{ useState }from 'react';
import { NavLink  } from "react-router-dom";
import Hamburger from 'hamburger-react'
const Navbar = () =>{
    const [isOpen, setOpen] = useState(false);
    console.log(isOpen);
    const Links = () =>{
        return (
            <>
                <NavLink  className="nav-link" activeClassName="active" exact to="/">Home</NavLink >
                <NavLink  className="nav-link" exact to="/aboutus">AboutUs</NavLink >
                <NavLink  className="nav-link"exact to="/explore">Explore</NavLink >
                <NavLink  className="nav-link"exact to="/contactus">ContactUs</NavLink >
            </>
        );
    }
    return(
        <nav className="navbar">

            <div className="logo-container">
                <a href="/">
                    <h2 className="logo">Aerospect</h2>
                </a>
                <div class="mobile-menu-btn">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
            </div>
            <div className="link-container">
                <Links />
            </div>
            
            <div className="utility-btn-container">
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Harshal0902/Aerospect">
                    <img className="github-img" src="https://informsuiuc.files.wordpress.com/2016/10/github-bb449e0ffbacbcb7f9c703db85b1cf0b.png" alt="Github" />
                </a>
            </div>
                {isOpen && (<div className="link-container-mob"><Links /></div>)}
        </nav>
    );
}
export default Navbar;