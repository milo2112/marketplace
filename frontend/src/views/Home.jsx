import CarouselSlides from '../components/CarouselSlides'
import Dividers from '../components/Dividers'
import Catalog from '../components/Catalog'

function Home () {
  return (
    <div className='bg-dark'>
      <CarouselSlides />
      <Dividers />
      <Catalog />
    </div>
  )
}

export default Home
