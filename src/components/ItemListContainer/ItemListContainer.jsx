import React from 'react'
import"./ItemListContainer.css"
const ItemListContainer = (props) => {
  return (
    <div className='container_item'>
        <h2>Bienvenido! {props.persona}</h2>
    </div>
  )
}

export default ItemListContainer