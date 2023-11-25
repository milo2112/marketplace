// import React from 'react'
 import { Navbar } from 'react-bootstrap'
// import '../assets/css/img.css'
// import { Carousel, Navbar } from 'react-bootstrap';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit'

// import ExampleCarouselImage from '../assets/img/violin';
// import '../assets/css/img.css'
export default function CarouselSlides() {
  return (
    <Navbar.Brand>
    <MDBCarousel showControls interval={3000}>
      <MDBCarouselItem itemId={1} interval={2000}>
        <img src='https://mdbootstrap.com/img/new/slides/051.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/052.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/054.jpg' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    </Navbar.Brand>
  )
}

