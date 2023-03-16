import Header from '../components/Header'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown/Dropdown'
import data from '../components/Dropdown/data.json'
import styles from '../Styles/dropdown.module.css'

function About() {
  return (
    <div>
      <Header origin="about" />
      <main>
        <Banner origin="about" />
        <div className={styles.mainDropdown}>
          {data.map((item) => (
            <Dropdown
              key={item.id}
              title={item.title}
              text_content={item.text_content}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default About
