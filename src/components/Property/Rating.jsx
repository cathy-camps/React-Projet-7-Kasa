import emptyStar from '../../assets/emptyStar.png'
import fullStar from '../../assets/fullStar.png'
import styles from '../../Styles/property.module.css'

const Rating = (props) => {
  const starsNumber = [1, 2, 3, 4, 5]
  const rating = props.rating

  return (
    <div className={styles.host_rating}>
      {starsNumber.map((star, index) =>
        rating >= star ? (
          <img key={index} className={styles.fullStar} src={fullStar} alt="" />
        ) : (
          <img
            key={index}
            className={styles.emptyStar}
            src={emptyStar}
            alt=""
          />
        )
      )}
    </div>
  )
}

export default Rating
