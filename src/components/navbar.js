import { useRef } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import Styles from '../App.module.css';
const Navbar = () => {
    let title = "<portfolio>"
    let home = "<home>"
    let about = "<about>"
    let projects = "<projects>"
    let contacts = "<contacts>"

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3>{title}</h3>
            <nav ref={navRef} className="nav-menu">
                <a href="#home">{home}</a>
                <a href="#about">{about}</a>
                <a href="#projects">{projects}</a>
                <a href="#contacts">{contacts}</a>
                <button className="nav-btn nav-closbtn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
      );
}
 
export default Navbar;