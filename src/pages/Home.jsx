import Header from '../components/Header/IndexH'
import Banner from '../components/Banner/IndexB'

function Home() {
  return (
    <div>
      <Header />
        <main>
        <Banner origin='home' />
      </main>
    </div>
    )
}

export default Home;
