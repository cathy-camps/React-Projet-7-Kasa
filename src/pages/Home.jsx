import Header from '../components/Header/IndexH'
import Banner from '../components/Banner/IndexB'
import Card from '../components/Card/IndexC'
import Footer from '../components/Footer/IndexF'
import Properties from '../Properties/Properties'
import styles from '../components/Card/card.module.css'

export default function Home() {
  return (
    <div>
      <Header />
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
