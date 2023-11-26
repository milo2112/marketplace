import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap'
import GlobalContext from '../context/GlobalContext'
import '../assets/css/img.css'
import currencyFormatter from '../functions/currencyFormatter'

export default function DestinyDetail () {
  const {
    destinyData,
    setDestinyTotalPrice,
    destinyToBuy,
    setDestinyToBuy
  } = useContext(GlobalContext)

  const { idDestiny } = useParams()

  const addToShoppingCart = (addId, addImg, addName, addPrice) => {
    setDestinyTotalPrice((prevValue) => prevValue + addPrice)
    const destinyIdx = destinyToBuy.findIndex(element => element.selectedDestiny.id === addId)
    if (destinyIdx < 0) {
      const destinyToMyCart = {
        selectedDestiny: {
          id: addId,
          name: addName,
          price: addPrice,
          img: addImg
        },
        count: 1
      }
      setDestinyToBuy([...destinyToBuy, destinyToMyCart])
    } else {
      destinyToBuy[destinyIdx].count += 1
    }
  }

  return (
    <div className='bg-dark'>
      <Container className='bg-dark mt-0 text-white'>
        {destinyData.filter((destiny) => destiny.id === idDestiny)
          .map(({ id, img, desc, name, ingredients, price }) => (
            <Row key={id}>
              <Col className='overflow mt-5' style={{ height: '50rem' }}>
                <img className='border-radius detail-img-top' src={img} />
              </Col>
              <Col>
                <div className='display-6 ms-1 mt-5'>
                  {name[0].toUpperCase() + name.substring(1)}
                </div>
                <hr />
                <div className='mt-3'>{desc}</div>
                <h5><div className='mt-3 text-decoration-none'>Servicios: </div></h5>
                <ListGroup className='list-group-flush mt-4'>
                  {ingredients.map((ingredient, idx) => (
                    <div
                      className='bg-dark text-white'
                      key={idx}
                      style={{ padding: '0', marginLeft: '50px' }}
                    >
                      <div>
                      🌟 {ingredient[0].toUpperCase() + ingredient.substring(1)}
                      </div>
                    </div>
                  ))}
                </ListGroup>
                <Card.Body className='d-flex justify-content-center gap-5'>
                  <Card.Text className='display-6 mt-4 me-5'>Precio: ${currencyFormatter(price)}</Card.Text>
                  <Button
                    className='mt-4 me-5'
                    variant='outline-danger'
                    size='lg'
                    onClick={() => addToShoppingCart(id, img, name, price)}
                  >Añadir  🛒
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          ))}
      </Container>
    </div>
  )
}
