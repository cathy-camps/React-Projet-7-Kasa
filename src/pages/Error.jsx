import Header from '../components/Header'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'
import styles from '../Styles/error.module.css'

function Error() {
  return (
    <div>
      <Header origin="error" />
      <div className={styles.error_section}>
        <div className={styles.error_title}>
          <h1 className={styles.error_h1}>404</h1>
          <p className={styles.error_p}>
            <span>Oups! La page que vous demandez n'existe pas.</span>
          </p>
          <NavLink
            className={styles.error_back_home}
            to="/"
            title="Retour page d'accueil"
          >
            Retourner sur la page d'accueil
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Error
