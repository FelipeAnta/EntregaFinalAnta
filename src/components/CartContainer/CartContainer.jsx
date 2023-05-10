import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import './CartContainer.css'
import { Link } from 'react-router-dom'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const CartContainer = () => {

  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: '',
    mensaje: ''
  })
  const { cartList, vaciarCarrito, totalPrice, removeFromCart, decrementProduct, incrementProduct } = useCartContext()

  const generarOrden = (evt) => {
    evt.preventDefault()

    const order = {}
    order.buyer = dataForm
    order.items = cartList.map(({ name, id, price, cantidad }) => ({ id, name, price, cantidad }))
    order.total = totalPrice;

    const dbFirestore = getFirestore()
    const ordersCollection = collection(dbFirestore, 'orders')

    addDoc(ordersCollection, order)
      .then(resp => console.log(resp))
    // //actualizar update
    // const queryDoc = doc(dbFirestore, 'productos', '0n7Y6vcO9tRjcgG5QdUm')
    // updateDoc(queryDoc, {stock: 120})
    // .finally(()=> 'finalizo la actualizacion')

    // //borrado logico
    // updateDoc(queryDoc, {isActive: false})
    // .finally(()=> 'finalizo la actualizacion')
  }
  const handleOnChange = (evt) => {
    console.log('nombre del input', evt.target.name)
    console.log('nombre del valor ', evt.target.value)
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
  }
  console.log(dataForm)
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
        <Link to={'/'} className="btn btn-outline-secondary">Volver al listado</Link>
      </div>

      <form onSubmit={generarOrden} className="form-container">
        <div className="form-section">
          <label htmlFor="name">Nombre:</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="name"
            value={dataForm.name}
            placeholder="Ingrese el nombre"
          />
        </div>

        <div className="form-section">
          <label htmlFor="phone">Teléfono:</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="phone"
            value={dataForm.phone}
            placeholder="Ingrese el número"
          />
        </div>

        <div className="form-section">
          <label htmlFor="email">Email:</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="email"
            value={dataForm.email}
            placeholder="Ingrese el email"
          />
        </div>

        <div className="form-section">
          <label htmlFor="mensaje">Mensaje:</label>
          <input
            onChange={handleOnChange}
            type="text"
            name="mensaje"
            value={dataForm.mensaje}
            placeholder="Ingrese el mensaje"
          />
        </div>

        <button className="btn btn-outline-success submit-button">Generar orden</button>
      </form>
    </div>
  )
}

export default CartContainer