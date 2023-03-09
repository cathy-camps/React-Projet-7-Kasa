import emptyStar from '../assets/emptyStar.png'
import fullStar from '../assets/fullStar.png'
import styles from '../Styles/property.module.css'

const Rating = (props) => {
  const stars = props.stars || 0
  const starNumber = [1, 2, 3, 4, 5]

  return (
    <div className={styles.host_rating}>
      {[...Array(stars)].map((_, i) => (
        <img key={i} src={fullStar} alt={`Star ${i + 1}`} />
      ))}
      {[...Array(5 - stars)].map((_, i) => (
        <img key={i + stars} src={emptyStar} alt={`Empty Star ${i + 1}`} />
      ))}
    </div>
  )
}

export default Rating
