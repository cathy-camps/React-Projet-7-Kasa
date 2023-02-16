//import PropTypes from 'prop-types'
import Properties from '../Properties'
import styles from '../Card/card.module.css'

function Card() {
    return (
        <section className={styles.section-card}>
            <article 
            key={element.id}
            className={styles.card}>
                <div>
                    <h2 className={card-title}>{element.title}</h2>
                </div>
            </article>
        </section>
    )
}
export default Card