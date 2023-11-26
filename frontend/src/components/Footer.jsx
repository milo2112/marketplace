import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Image } from 'react-bootstrap'

export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-secondary'>
        
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'></section>


      <section className=''>
        <MDBContainer className='text-secondary text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>

              <Image src='..\src\assets\img\hello-backpacker-high-resolution-logo-transparent.png' style={{ width: '115px', paddingBottom:'20px' }} />
              <p  style={{ fontFamily: 'Barrio', fontSize: '20px' }}>
                Te ayudamos a encontrar lo que necesitas: alojamiento, traslado,
                dónde comer y dónde ir.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-secondary fw-bold mb-4'  style={{ fontFamily: 'Barrio', fontSize: '20px' }}>SERVICIOS</h6>
              <p>
                <a href='#!' className='text-secondary'  style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                  Alojamientos
                </a>
              </p>
              <p>
                <a href='#!' className='text-secondary' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                  Traslados
                </a>
              </p>
              <p>
                <a href='#!' className='text-secondary' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                  Dónde comer
                </a>
              </p>
              <p>
                <a href='#!' className='text-secondary' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                Dónde ir
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ fontFamily: 'Barrio', fontSize: '20px' }}>Útiles</h6>
              <p>
                <a href='https://www.sernatur.cl/' className='text-secondary' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                  Sernatur
                </a>
              </p>
              <p>
                <a href='https://australbikes.cl/es/' className='text-secondary' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                  Rent a Bike
                </a>
              </p>
              <p>
                <a href='https://www.instagram.com/museopablofierro/?hl=es' className='text-secondary' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                  Museos
                </a>
              </p>
              <p>
                <a href='https://www.couchsurfing.com/places/chile' className='text-secondary' style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                  Couchsurfing
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{ fontFamily: 'Barrio', fontSize: '20px' }}>Contáctanos</h6>
              <p style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                <MDBIcon icon="home" className="me-2"/>
                Calle Santa Rosa 112, Puerto Varas
              </p>
              <p style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                <MDBIcon icon="envelope" className="me-3" />
                info@hellobackpacker.com
              </p>
              <p style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                <MDBIcon fas icon="mobile-alt" className="me-3" /> +56 9 2345 6788 
              </p>
              <p style={{ fontFamily: 'Barrio', fontSize: '14px' }}>
                <MDBIcon icon="print" className="me-3" /> +56 9 5834 6289
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', fontFamily: 'Barrio', fontSize: '14px' }}>
        © 2023 Copyright Hellobackpacker
      </div>
    </MDBFooter>
  );
}