import React, { useState } from 'react'
import Header from '../components/Header/IndexH'
import Footer from '../components/Footer/IndexF'
import styles from '../components/Carousel/carousel'
import Properties from '../Properties/Properties'
import PropertyCarousel from '../components/Carousel/carousel'
import { useParams } from 'react-router-dom'
//import { useState } from 'react'

function Property() {
  const { propertyId } = useParams()
  //récupération de l'id du logement dans les paramètres d'URL
  const property = Properties.find((property) => property.id === propertyId)
  const props = ({ pictures, title, location, host, rating, equipments, tags } =
    property)

  const [currentPictureIndex, setCurrentPictureIndex] = useState(0)
  const prevPicture = () => {
    setCurrentPictureIndex(
      (currentPictureIndex - 1 + pictures.length) % pictures.length
    )
  }

  const nextPicture = () => {
    setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length)
  }

  return (
    <div>
      <Header />
      <main className={styles.property}>
        <h1 className={styles.property_title}>{props.title}</h1>
        <p className={styles.property_location}>{props.location}</p>
        <div className={styles.property_tags}></div>
        <PropertyCarousel
          name={title}
          pictures={pictures}
          currentIndex={currentPictureIndex}
          onPrevClick={prevPicture}
          onNextClick={nextPicture}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Property
