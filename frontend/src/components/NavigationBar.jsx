import { useContext } from 'react'
import { Navbar, Container, Nav, Badge, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'
import currencyFormatter from '../functions/currencyFormatter'

export default function NavigationBar () {
  const { destinyTotalPrice } = useContext(GlobalContext)
  const setActiveClass = ({ isActive }) => {
    const auxStyle = 'text-decoration-none me-3'
    return isActive ? `text-white ${auxStyle}` : `text-secondary ${auxStyle}`
  }

  return (
    <>
      <Navbar className='sticky-top' expand='lg' bg='dark'  data-bs-theme='light'>
        <Container>
          <Navbar.Brand>
              <NavLink to='/'>
                <Image src='..\src\assets\img\hello-backpacker-high-resolution-logo-transparent.png' style={{ width: '75px' }} />
              </NavLink>
          </Navbar.Brand>
          <Navbar.Brand>
              <h1 className='text-uppercase fw-bold mb-4' style={{ paddingTop: '20px' , paddingLeft: '450px', color: 'orange',  fontFamily: 'Barrio', fontSize: '30px' }}>
                Hello Backpacker!
              </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <h5 style={{ paddingTop: '20px' , paddingLeft: '150px', fontFamily: 'Barrio', fontSize: '20px' }}><NavLink to='/loginview' className={setActiveClass}>Login</NavLink></h5>
              <h5 >
                <NavLink to='/loginview' className={setActiveClass}>
                  <Image src='..\src\assets\img\login-favicon-color.png' style={{ width: '43px', marginTop: '10px' }} />
                </NavLink>
              </h5>

              <h5 style={{ paddingTop: '20px' , paddingLeft: '50px', fontFamily: 'Barrio', fontSize: '20px' }}><NavLink to='/' className={setActiveClass}>Inicio</NavLink></h5>
              <h5 >
                <NavLink to='/' className={setActiveClass}>
                  <Image src='..\src\assets\img\home-favicon-color.png' style={{ width: '43px', marginTop: '10px' }} />
                </NavLink>
              </h5>
              
              <h5 style={{ paddingTop: '20px' , paddingLeft: '50px', fontFamily: 'Barrio', fontSize: '20px' }}><NavLink to='/shoppingcartview' className={setActiveClass}>Carro</NavLink></h5>
              <h5 >
                <NavLink to='/shoppingcartview' className={setActiveClass} rel="icon" type="image/svg+xml" href="/cart-shopping-solid.svg">
                  <Image src='..\src\assets\img\shoppingcarts-favicon-color.png' style={{ width: '43px', marginRight: '53px', marginTop: '10px' }} />
                </NavLink>
              </h5>
              <h5 style={{ paddingTop: '20px', color: 'orange',  fontFamily: 'Barrio', fontSize: '20px' }}><Badge bg='secondary'>$ {currencyFormatter(destinyTotalPrice)}</Badge></h5>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
