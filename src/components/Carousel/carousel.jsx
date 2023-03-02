import styles from './carousel.module.css'

function PropertyCarousel(props) {
  const { name, pictures, currentIndex, onPrevClick, onNextClick } = props
  const totalPictures = pictures.length
  const currentPicture = pictures[currentIndex]

  return <div className={styles.carousel_img}></div>
}

export default PropertyCarousel
