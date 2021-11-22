import React,{ useState }from 'react';
import { NavLink  } from "react-router-dom";
import Hamburger from 'hamburger-react'
const Navbar = () =>{
    const [isOpen, setOpen] = useState(false);
    console.log(isOpen);
    const closeBurgerMenu = () =>{
        setTimeout(()=>{
            setOpen(!isOpen)
        }, 300);
    }
    const Links = () =>{
        return (
            <>
                <NavLink  className="nav-link" activeClassName="active" exact to="/" onClick={closeBurgerMenu} >Home</NavLink >
                <NavLink  className="nav-link" exact to="/aboutus" onClick={closeBurgerMenu} >AboutUs</NavLink >
                <NavLink  className="nav-link"exact to="/explore" onClick={closeBurgerMenu} >Explore</NavLink >
                <NavLink  className="nav-link"exact to="/contactus" onClick={closeBurgerMenu} >ContactUs</NavLink >
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
                    <Hamburger toggled={isOpen} toggle={setOpen} hideOutline={true} />
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