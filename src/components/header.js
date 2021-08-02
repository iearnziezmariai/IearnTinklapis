import '../styles/_Header.scss' 
import React from "react";
import logo from "./logo.svg";

const Header = () => {
    return(
        <header className="header">
            <a href="/" className="logolink"><img className="logo" src={logo} alt="logo"/></a>
            <nav className="nav-bar">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fa fa-bars" aria-hidden="true"/>
                </label>
                <ul className="nav-links">
                    <li className="active"><a className="nav-link" href="/">PAGRINDINIS</a></li>
                    <li><a className="nav-link" href="/">PROJEKTAI</a></li>
                    <li><a className="nav-link" href="/">VEIKLA</a></li>
                    <li><a className="nav-link" href="/">ISTORIJA</a></li>
                    <li><a className="nav-link" href="/">GALERIJA</a></li>
                </ul> 
            </nav>
        </header>
    );
}

export default Header;