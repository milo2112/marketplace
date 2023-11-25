import { useContext } from 'react'
import DestinyCard from './DestinyCard'
import { Container, Row, Col } from 'react-bootstrap'
import GlobalContext from '../context/GlobalContext'

export default function Catalog () {
  const { destinyData } = useContext(GlobalContext)
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center'>
        <Row>
          {destinyData.map(({ id, img, name, ingredients, price }) => (
            <Col className='col-md-4 mt-5 mb-5' key={id}>
              <DestinyCard
                id={id}
                img={img}
                name={name}
                ingredients={ingredients}
                price={price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
