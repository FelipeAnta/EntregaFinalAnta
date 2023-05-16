import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './CartContainer.css'
import { Link } from 'react-router-dom'
import Formulario from '../Formulario/Formulario'

const CartContainer = () => {
  const { cartList, vaciarCarrito, totalPrice, removeFromCart, decrementProduct, incrementProduct } = useCartContext()
  if (cartList.length === 0 && totalPrice === 0) {
    return (
      <div className='cart-vacio'>
        <p>El carrito está vacío</p>
        <Link to={'/'} className="btn btn-outline-secondary">Volver al listado</Link>
      </div>
    )
  }

  return (
    <div className='card-cart'>
      {cartList.map(prod => (
        <div className='w-50 card-cart-info'>
          <img className='w-25 img-card' src={prod.foto} alt="img" />
          <div className='card-pc'>
            <label>
              Precio: {prod.price} - Cantidad: {prod.cantidad}
            </label>

            <button
              onClick={() => decrementProduct(prod.id)}
              className='btn btn-outline-secondary btn-sm'
            >
              -
            </button>
            <button
              onClick={() => incrementProduct(prod.id)}
              className='btn btn-outline-secondary btn-sm mx-2'
            >
              +
            </button>

            <button
              onClick={() => removeFromCart(prod.id)}
              className='btn btn-outline-danger btn-sm'
            >
              X
            </button>
          </div>
        </div>
      ))}
      <div className='card-botones'>
        <label className='total-pagar'>Total a pagar: {totalPrice}</label>
        <button onClick={vaciarCarrito} className='btn btn-outline-danger'>Vaciar Carrito</button>
      </div>
      <Formulario cartList={cartList} totalPrice={totalPrice}/>
    </div>
  )
}

export default CartContainer