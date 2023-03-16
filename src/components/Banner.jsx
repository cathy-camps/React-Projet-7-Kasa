import banner from '../assets/banner.png'
import bannerAbout from '../assets/BannerAbout.png'
import styles from '../Styles/banner.module.css'

function Banner(props) {
  if (props.origin === 'home') {
    return (
      <div className={styles.banner}>
        <img
          className={styles.banner_img}
          src={banner}
          alt="Bannière paysage"
        />
        <div>
          <h1 className={styles.banner_title}>
            Chez vous, partout et ailleurs
          </h1>
        </div>
      </div>
    )
  } else if (props.origin === 'about') {
    return (
      <div className={styles.banner}>
        <img
          className={styles.banner_about_img}
          src={bannerAbout}
          alt="Bannière paysage"
        />
      </div>
    )
  }
}

export default Banner
