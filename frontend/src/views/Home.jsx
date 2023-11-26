import CarouselSlides from '../components/CarouselSlides'
import Dividers from '../components/Dividers'
import Catalog from '../components/Catalog'
import Footer from '../components/Footer'

function Home () {
  return (
    <div className='bg-dark'>
      <CarouselSlides />
      <Dividers />
      <Catalog />
      <Footer />
    </div>
  )
}

export default Home
