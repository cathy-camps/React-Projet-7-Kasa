import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../Styles/property.module.css'
import Properties from '../Properties/Properties'
import Dropdown from '../components/Dropdown/Dropdown'
import PropertyCarousel from '../components/Carousel'
import Vector from '../assets/Vector.png'
import { useParams } from 'react-router-dom'

function PropertyRental() {
  const { id } = useParams()
  const displayDetails = Properties.find((property) => property.id === id)
  const { title, location, tags, host, rating, description, equipments } =
    displayDetails || {}

  return displayDetails ? (
    <div>
      <Header origin="property" />
      <PropertyCarousel />
      <div className={styles.section_details}>
        <div className={styles.section_details_property}>
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
        </div>
        <div className={styles.section_details_host}>
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
              {host.rating}
            </div>
          </div>
          <div>
            <Dropdown />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  ) : (
    <Error />
  )
}

export default PropertyRental
