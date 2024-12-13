import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import classes from './header.module.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className={classes.header}>
            <Link to="/" className={classes.logo}>DUCTF CTF</Link> 
            <nav className={`${classes.nav} ${isOpen ? classes.active : ''}`}>
                <Link to="/" onClick={toggleNavbar}>Home</Link>
                <Link to="/challenges" onClick={toggleNavbar}>Challenges</Link> 
                <Link to="/dashboard" onClick={toggleNavbar}>Dashboard</Link> 
                <Link to="/contact" onClick={toggleNavbar}>Contact</Link>
                <button className={classes.navCloseBtn} onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className={classes.navBtn} onClick={toggleNavbar}>
                <FaBars />
            </button>
        </header>
    );
    
}

export default Navbar;
