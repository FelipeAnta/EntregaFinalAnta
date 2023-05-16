import { Link } from "react-router-dom"
import { useState } from 'react'
import { Container } from "react-bootstrap"
import { useCartContext } from '../../context/CartContext'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = ({ productos }) => {
  const [isCant, setIsCant] = useState(false)
  const { addToCart } = useCartContext()
  const onAdd = (cantidad) => {
    addToCart({ ...productos, cantidad })
    setIsCant(true)
  }
  return (
    <Container fluid>
      <div className="detail-cont">
        <div className="detail-interior">
          <img src={productos.foto} className='img_propiedad' alt="" />
          <h3>{productos.name}</h3>
          <p className="text-detail">{productos.detalle}</p>
          <h2>${productos.price}</h2>
          {
            !isCant ?
              <ItemCount onAdd={onAdd} />
              :
              <>
                <div className='botones-detail'>
                  <Link to={'/cart'} className="btn btn-outline-danger">Ir al Carrito</Link>
                  <Link to={'/'} className="btn btn-outline-success">Seguir comprando</Link>
                </div>
              </>

          }
        </div>
      </div>
    </Container>
  )
}

export default ItemDetail