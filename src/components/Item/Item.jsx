import React from 'react'
import"./Item.css"
import { Link } from 'react-router-dom'
const Item = (producto) => {
  return (
    <div className='card-main' >
      <div key={producto.id} className='card w-20'> 
        <img src={producto.foto} className='card-img' alt="imagen-card" />
        <div className='card-body'>
          <h6 className='name-card'>{producto.name}</h6>
          <div className='info'>
            <label>${producto.price}</label>
            <label>Categoria: {producto.categoria}</label>
          </div>
        </div>
        <Link to=	{`/detail/${producto.id}`}className='card-footer'>
          <button className='btn btn-outline-light detalle'>Detalle</button>
        </Link>
      </div>
    </div>
  ) 
}

export default Item