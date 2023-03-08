import Header from '../components/Header/IndexH'
import Footer from '../components/Footer/IndexF'
import styles from '../Properties/property_module.css'
import Properties from '../Properties/Properties'
import Dropdown from '../components/Dropdown/IndexD'
import PropertyCarousel from '../components/Carousel/carousel'
import Vector from '../assets/Vector.png'
import { useParams } from 'react-router-dom'

function PropertyRental() {
  const { id } = useParams()
  const displayDetails = Properties.find((property) => property.id === id)
  const { title, location, tags, host, rating, description, equipments } =
    displayDetails || {}

  return displayDetails ? (
    <div>
      <Header />
      <PropertyCarousel />
      <div>
        <h1 className={styles.property_title}>{title}</h1>
        <p className={styles.property_location}>{location}</p>
        <div className={styles.property_tags}>
          {tags.map((tag) => {
            return (
              <p key={`${tag}`} className={styles.tag}>
                {tag}
              </p>
            )
          })}
        </div>
        <div className={styles.host}>
          <div className={styles.host_profile}>
            <p className={styles.host_name}>{host.name}</p>
            <img
              className={styles.host_img}
              src={host.picture}
              alt={`Propriétaire ${host.name}`}
            />
          </div>

          <div className={styles.host_rating}>
            <img src={Vector} alt="Etoiles" />
            rate={host.rating}
          </div>
        </div>
        <div>
          <Dropdown />
        </div>

        <Footer />
      </div>
    </div>
  ) : (
    <Error />
  )
}

export default PropertyRental
