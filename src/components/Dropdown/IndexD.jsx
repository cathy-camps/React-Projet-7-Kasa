import { useState } from 'react'
import styles from '../Dropdown/dropdown.module.css'
import data from './data.json'
console.log(data)

//initialisation du menu déroulant sur open=false par défaut
function Dropdown() {
  const [isOpen, setIsOpen] = useState(new Array(data.length).fill(false))
  //function appelée lorsque l'utilisateur clique pour que le menu déroulant s'ouvre
  function clickDropdown(index) {
    const newIsOpen = [...isOpen]
    newIsOpen[index] = !newIsOpen[index]
    setIsOpen(newIsOpen)
  }
  return (
    <div>
      {data.map((item, index) => {
        ;<div key={index} className={styles.dropdown}>
          <h3 className={styles.dropdown_title}>{item.title}</h3>
          <button
            onClick={() => clickDropdown(index)}
            className={styles.dropdown_button}
          >
            {isOpen[index] ? 'Close Dropdown' : 'Open Dropdown'}
          </button>
          {isOpen[index] && (
            <div>
              <p className={styles.dropdown_content}>{item.text_content}</p>
            </div>
          )}
        </div>
      })}
    </div>
  )
}

export default Dropdown
