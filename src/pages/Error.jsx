import Header from '../components/Header/IndexH'
import Footer from '../components/Footer/IndexF'
import { NavLink } from 'react-router-dom'
import styles from '../components/Error/error.module.css'

function Error() {
  return (
    <div>
      <Header />
      <div className={styles.error_container}>
        <h1 className={styles.error_title}>404</h1>
        <div className={styles.error_p}>
          Oups! La page que vous demandez n'existe pas.
        </div>
        <NavLink
          className={styles.error_back_home}
          to="/"
          title="Retour page d'accueil"
        >
          Retourner sur la page d'accueil
        </NavLink>
      </div>
      <Footer />
    </div>
  )
}

export default Error
