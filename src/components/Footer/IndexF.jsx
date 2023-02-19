import styles from '../Footer/footer.module.css'
import logoFooter from '../../assets/footer.png'

function Footer() {
  return (
    <div className={styles.footer}>
      <img className={styles.footer_logo} src={logoFooter} alt="Logo Kasa" />
      <p className={footer_text}>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
