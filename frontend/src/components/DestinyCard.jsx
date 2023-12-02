/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Container, ListGroup, Button } from 'react-bootstrap'
import GlobalContext from '../context/GlobalContext'
import currencyFormatter from '../functions/currencyFormatter'

export default function DestinyCard ({ id, img, name, ingredients, price }) {
  const navigate = useNavigate()

  const {
    destinyToBuy,
    setDestinyToBuy,
    setDestinyTotalPrice
  } = useContext(GlobalContext)

  const goDestinyDetail = (destinyCardId) => {
    navigate(`/destinydetail/${destinyCardId}`)
  }

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
    <>
      <Container>
        <Card className='card' style={{ width: '18rem' }} key={id}>
          <div className='overflow'>
            <Card.Img className='card-img-top' variant='top' src={img} style={{ height: '15rem' }} />
          </div>
          <Card.Body>
            <Card.Title>{name[0].toUpperCase() + name.substring(1)}</Card.Title>

          </Card.Body>
          <ListGroup className='list-group-flush'>
            {ingredients.map((ingredient, idx) => (
              <ListGroup.Item
                key={idx}
                style={{ padding: '0', marginLeft: '15px' }}
              > 🌟 {ingredient[0].toUpperCase() + ingredient.substring(1)}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Card.Body>
            <Card.Text className='text-center' style={{ fontSize: '1.5rem' }}>${currencyFormatter(price)}</Card.Text>
          </Card.Body>
          <Card.Body className='d-flex justify-content-center gap-3'>
            <Button
              variant='outline-primary'
              size='sm'
              onClick={() => goDestinyDetail(id)}
            > Ver Más 👀
            </Button>
            <Button
              variant='outline-danger'
              size='sm'
              onClick={() => addToShoppingCart(id, img, name, price)}
            >Añadir  🛒
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}
