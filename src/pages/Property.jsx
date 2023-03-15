import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../Styles/property.module.css'
import Properties from '../Properties/Properties'
import Dropdown from '../components/Dropdown/Dropdown'
import PropertyCarousel from '../components/Carousel'
import Rating from '../components/Property/Rating'
import HostProfile from '../components/Property/Host_profile'
import { useParams } from 'react-router-dom'
import Error from './Error'
import HostTag from '../components/Property/Host_tag'

function PropertyRental() {
  const { id } = useParams()
  const displayDetails = Properties.find((property) => property.id === id)
  const { title, location, tags, host, rating, description, equipment } =
    displayDetails || {}
  if (!displayDetails) return <Error />

  return (
    <div>
      <Header origin="property" />
      <PropertyCarousel />
      <div className={styles.section_details}>
        <div className={styles.section_details_property}>
          <h1 className={styles.property_title}>{title}</h1>
          <p className={styles.property_location}>{location}</p>
          <HostTag tags={tags} />
        </div>
        <div className={styles.section_details_host}>
          <div className={styles.host}>
            <HostProfile host={host} />
            <div>
              <Rating className={styles.host_rating} rating={rating} />
            </div>
          </div>
        </div>
      </div>
      <section className={styles.dropdown_property}>
        <div className={styles.dropdown_property_banner}>
          <Dropdown
            className={styles.dropdown_property_title}
            key={displayDetails.id}
            title="Description"
            text_content={displayDetails.description}
          ></Dropdown>
        </div>
        <div className={styles.dropdown_property_banner}>
          <Dropdown
            title="Equipements"
            className={styles.dropdown_property_title}
            text_content={displayDetails.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          ></Dropdown>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default PropertyRental
