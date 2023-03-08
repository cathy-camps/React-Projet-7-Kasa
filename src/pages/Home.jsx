import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Properties from '../Properties/Properties'
import styles from '../Styles/card.module.css'

export default function Home() {
  return (
    <div>
      <Header origin="home" />
      <main>
        <Banner origin="home" />
        <section className={styles.section_card}>
          {Properties.map((element) => (
            <Card key={element.id} element={element} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
