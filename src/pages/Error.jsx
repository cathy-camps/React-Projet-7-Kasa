import Header from '../components/Header/IndexH'
import Footer from '../components/Footer/IndexF'
import { NavLink } from 'react-router-dom'
import styles from '../components/Error/error.module.css'

function Error() {
  return (
    <div>
      <Header />
      <main className={styles.error_container}>
        <h1 className={styles.error_title}>404</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Error
