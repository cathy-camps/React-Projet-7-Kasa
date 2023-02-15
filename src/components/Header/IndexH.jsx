import React from 'react'
import { Link } from 'react-router-dom'
//import Logo from './assets/logo.png'
import styles from '../Header/header.module.css'

function Header() {
    return (
        <header className={styles.header-container}>
        <nav className={styles.header-nav}>
            <Link to="/">
                <img className={styles.header-logo} src={Logo} alt="Logo Kasa" />
            </Link>
            <Link to="/">Accueil</Link>
            <Link to="/properties">A propos</Link>
        </nav>
        </header>
    )
};

export default Header



