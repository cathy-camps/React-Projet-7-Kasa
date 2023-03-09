import styles from '../Styles/footer.module.css'
import logoFooter from '../assets/footer.png'

function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        <img className={styles.footer_logo} src={logoFooter} alt="Logo Kasa" />
        <p className={styles.footer_text}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
