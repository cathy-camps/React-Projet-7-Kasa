import Header from '../components/Header/IndexH'
import Banner from '../components/Banner/IndexB'
import Dropdown from '../components/Dropdown/IndexD'
import Footer from '../components/Footer/IndexF'

export default function About() {
  return (
    <div>
      <Header origin="home" />
      <main>
        <Banner origin="home" />
        <Dropdown />
        <Footer />
      </main>
    </div>
  )
}
