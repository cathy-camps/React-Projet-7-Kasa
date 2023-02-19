import Header from '../components/Header/IndexH'
import Banner from '../components/Banner/IndexB'
import CardList from '../components/Card/IndexC'
import Footer from '../components/Footer/IndexF'

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner origin="home" />
        <CardList />
        <Footer />
      </main>
    </div>
  )
}
