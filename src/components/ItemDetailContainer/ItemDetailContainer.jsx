import { Container } from "react-bootstrap"
import "./ItemDetailContainer.css"
import React from 'react'
import { useParams } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount'
const ItemDetailContainer = ({productos}) => {
  const {pid} = useParams()
  return (
    <Container fluid>
      <div className="detail-cont">
        <div className="detail-interior">
        <img src={productos[pid].foto} classsName='img_propiedad' alt="" />
        <h3>{productos[pid].name}</h3>
        <p className="text-detail">{productos[pid].detalle}</p>
        <h2>${productos[pid].price}</h2>
        <ItemCount/>
        </div>
      </div>
    </Container>
  
  )
}

export default ItemDetailContainer