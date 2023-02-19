import { useState } from 'react'
import styles from '../Dropdown/dropdown.module.css'
import DropdownText from '../Dropdown/DropdownText'

//initialisation du menu déroulant sur open=false par défaut
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false)
  //function appelée lorsque l'utilisateur clique pour que le menu déroulant s'ouvre
  function clickDropdown() {
    setIsOpen(!isOpen)
  }
  const details = DropdownText
  console.log(details)

  return (
    <div className={styles.dropdown}>
      <h3 className={styles.dropdown_title}>{details.title}</h3>
      <button onClick={clickDropdown} className={styles.dropdown_button}>
        // si open=true, le contenu s'affiche
        {isOpen ? 'Close Dropdown' : 'Open Dropdown'}
      </button>
      {isOpen && (
        <div>
          <p className={styles.dropdown_content}>{details.text_content}</p>
        </div>
      )}
    </div>
  )
}

export default Dropdown
