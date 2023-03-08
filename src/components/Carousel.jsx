import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Properties from '../../Properties/Properties'
import styles from '../../Styles/carousel.module.css'

function PropertyCarousel() {
  const { id } = useParams()
  //récupération de l'id du logement dans les paramètres d'URL
  const property = Properties.find((property) => property.id === id)
  if (!property) {
    return null
  }
  const { pictures } = property
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
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
      <div className={styles.carousel_controls}>
        <button className={styles.carousel_controls} onClick={prevPicture}>
          &lt; Previous
        </button>
        <span className={styles.carousel_index}>
          {currentPictureIndex + 1} / {pictures.length}
        </span>
        <button className={styles.carousel_controls} onClick={nextPicture}>
          Next &gt;
        </button>
      </div>
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
