import { NavLink } from 'react-router-dom'
import Logo from '../../assets/kasa.png'
import styles from '../Styles/header.module.css'

function Header(props) {
  return (
    <header className={styles._header}>
      <nav className={styles.header_container}>
        <NavLink to="/">
          <img className={styles.header_logo} src={Logo} alt="Logo Kasa" />
        </NavLink>
        <div>
          <NavLink
            className={
              props.origin === 'home'
                ? styles.header_nav_underline
                : styles.header_nav_empty
            }
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink
            className={
              props.origin === 'about'
                ? styles.header_nav_underline
                : styles.header_nav_empty
            }
            to="/about"
          >
            A propos
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
