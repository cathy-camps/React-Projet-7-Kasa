//import PropTypes from 'prop-types'
import Properties from '../../Properties/Properties'
import styles from '../Card/card.module.css'
import { useNavigate } from 'react-router-dom'

function Card({element}) {
    const navigate = useNavigate()
    const handleCardClick = () => {
        navigate(`/about/${element.id}`)
    }
    return (
        <section className={styles.section_card}>
              <article className={styles.card} onClick={handleCardClick}>
                <img className={styles.card_img} src={element.cover} alt={element.title} />
                <div>
                    <h2 className={styles.card_title}>{element.title}</h2>
                </div>
            </article>   
        </section>
    )
}

function CardList() {
    const elements = Properties
    console.log(elements)
    return (
        <div>
            {elements.map(element => (
                <Card key={element.id} element={element}/>
            ))}
        </div>
    )
}

export default CardList