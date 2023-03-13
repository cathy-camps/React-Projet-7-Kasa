import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Properties from '../Properties/Properties'
import styles from '../Styles/carousel.module.css'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

function PropertyCarousel() {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
  const { id } = useParams()
  //récupération de l'id du logement dans les paramètres d'URL
  const property = Properties.find((property) => property.id === id)
  if (!property) {
    return null
  }
  const { pictures } = property
  const prevPicture = () => {
    setCurrentPictureIndex(
      currentPictureIndex === 0 ? pictures.length - 1 : currentPictureIndex - 1
    )
  }
  const nextPicture = () => {
    setCurrentPictureIndex(
      currentPictureIndex === pictures.length - 1 ? 0 : currentPictureIndex + 1
    )
  }
  return (
    <section className={styles.carousel}>
      <img
        className={styles.carousel_arrow_left}
        src={arrowLeft}
        onClick={prevPicture}
        alt="previous"
      />
      <span className={styles.carousel_index}>
        {currentPictureIndex + 1} / {pictures.length}
      </span>
      <img
        className={styles.carousel_arrow_right}
        src={arrowRight}
        onClick={nextPicture}
        alt="next"
      />
      {pictures.map((picture, index) => (
        <div key={index}>
          {index === currentPictureIndex && (
            <img
              className={styles.carousel_img}
              src={picture}
              alt={picture.description}
            />
          )}
        </div>
      ))}
    </section>
  )
}

export default PropertyCarousel
