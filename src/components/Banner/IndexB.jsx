import banner from '../../assets/banner.png'
import styles from '../Banner/banner.module.css'

function Banner() {
    return (
        <div className={styles.banner}>
            <img className={styles.banner_img} src={banner} alt="Bannière paysage" />
            <div>
            <h1 className={styles.banner_title}>Chez vous, partout et ailleurs</h1>
            </div>
        </div>    
    )
}

export default Banner