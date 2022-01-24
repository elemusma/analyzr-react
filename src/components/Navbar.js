import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import HeroSection from './HeroSection';
// import logo from '/images/Analyzr-Logo.png';

function Navbar () {
    const [click, setClick] = useState(false);
    const [desktopShow, setDesktopShow] = useState(true);
    const [mobileShow, setMobileShow] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showDesktop = () => {
        if(window.innerWidth <=960) {
            setDesktopShow(false);
        } else {
            setDesktopShow(true);
        }
    };

    useEffect(() => {
        showDesktop();
    }, []);
    window.addEventListener('resize', showDesktop);

    const showMobile = () => {
        if(window.innerWidth <=960) {
            setMobileShow(true);
        } else {
            setMobileShow(false);
        }
    };

    useEffect(() => {
        showMobile();
    }, []);
    window.addEventListener('resize', showMobile);

    return (
    <>
    <nav className="nav box-shadow position-relative">
        <div className="container">
<div className="row align-items-center">

            <Link to="/" className="col-md-2 navbar-logo" onClick={closeMobileMenu}>
                <img src="/images/Analyzr-Logo.png" width="200px" height="auto" />
            </Link>
            <div className="col-md-8">

            
            <div className='menu-icon' onClick={handleClick}>
                {mobileShow &&
                <div className={click ? 'open navToggle' : 'closed navToggle d-lg-none d-block'} style={{display:"inline-block"}}>

                    <div className="hamburger-menu" style={{display:"inline-block"}}>
                    <div className="line-1 bg-accent hamburger-bar"></div>
                    <div className="line-2 bg-accent hamburger-bar"></div>
                    <div className="line-3 bg-accent hamburger-bar"></div>
                    </div>

                </div>
                }
                {desktopShow &&
                <ul className={click ? 'nav-menu active d-flex justify-content-start align-items-center list-unstyled mb-0' : 'nav-menu d-flex justify-content-start align-items-center list-unstyled mb-0'}>
                    <li className="nav-item mx-2">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/about/' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/platform/' className='nav-links' onClick={closeMobileMenu}>
                            Platform
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/solutions/' className='nav-links' onClick={closeMobileMenu}>
                            Solutions
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/connectors/' className='nav-links' onClick={closeMobileMenu}>
                            Connectors
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/pricing/' className='nav-links' onClick={closeMobileMenu}>
                            Pricing
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link to='/contact-us/' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                }
            </div>
            </div>
            {/* <div className="col-md-4">
            {desktopShow && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div> */}

            </div>
            </div>
    </nav>
    </>
    );
}

export default Navbar;
