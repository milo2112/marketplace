import { useContext } from 'react'
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'
import currencyFormatter from '../functions/currencyFormatter'
import Image from 'react-bootstrap/Image';

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
                <Image src='..\src\assets\img\backpacker-trip-high-resolution-logo-transparent.png' style={{ width: '115px' }} />
              </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <h5><NavLink to='/' className={setActiveClass}>Inicio</NavLink></h5>
              <h5><NavLink to='/shoppingcartview' className={setActiveClass}>🛒</NavLink></h5>
              <h5><Badge bg='secondary'>$ {currencyFormatter(destinyTotalPrice)}</Badge></h5>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
