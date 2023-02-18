import { NavLink } from 'react-router-dom'
import Logo from '../../assets/kasa.png'
import styles from '../Header/header.module.css'

function Header() {
    return (
        <header> 
            <nav className={styles.header_container}>
                <NavLink to="/">
                    <img className={styles.header_logo} src={Logo} alt="Logo Kasa" />
                </NavLink>
            <div>
                <NavLink className={styles.header_nav} to="/">Accueil</NavLink>
                <NavLink className={styles.header_nav}to="/about">A propos</NavLink>
            </div>
            </nav>
        </header>
    )
};

export default Header



