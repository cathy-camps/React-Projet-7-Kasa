import styles from '../Styles/card.module.css'
import { useNavigate } from 'react-router-dom'

function Card({ element }) {
  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(`/properties/${element.id}`)
  }
  return (
    <article className={styles.card} onClick={handleCardClick}>
      <img
        className={styles.card_img}
        src={element.cover}
        alt={element.title}
      />
      <h2 className={styles.card_title}>{element.title}</h2>
    </article>
  )
}

export default Card
