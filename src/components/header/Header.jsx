import React from 'react';
import "./header.css"
const Header = () => 
{
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav__logo'>Smith</a>
                <div className='nav__menu'>
                    <ul className="nav__list grid"></ul>
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className='uil uil-estate nav-icon'></i>
                            Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className='uil uil-user nav-icon'></i>
                            About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i className='uil uil-file-alt nav-icon'></i>
                            Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className='uil uil-briefcase-alt nav-icon'></i>
                            Services
                            
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                            <i className='uil uil-scenery nav-icon'></i>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className='uil uil-message nav-icon'></i>
                            Contact
                        </a>
                    </li>
                </div>
            </nav>
            </header>

    );
}

export default Header;