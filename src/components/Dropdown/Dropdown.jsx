import { useState } from 'react'
import styles from '../../Styles/dropdown.module.css'
import arrowDown from '../../assets/arrowDown.png'
import arrowUp from '../../assets/arrowUp.png'

//initialisation du menu déroulant sur open=false par défaut
function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdown_title_arrow}>
        <h3 className={styles.dropdown_title}>{props.title}</h3>
        <img
          className={styles.dropdown_arrow}
          src={isOpen ? arrowUp : arrowDown}
          alt="flèche"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div>
          <p className={styles.dropdown_content}>{props.text_content}</p>
        </div>
      )}
    </div>
  )
}

export default Dropdown
