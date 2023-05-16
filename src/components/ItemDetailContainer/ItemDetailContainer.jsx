import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
const ItemDetailContainer = () => {
  const { pid } = useParams()
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'productos', pid)
    getDoc(queryDoc)
      .then(productos =>
        setProductos({ id: productos.id, ...productos.data() })
      )
      .catch(error => console.log(error))
  })
  return (
    <Container fluid>
      <ItemDetail productos={productos} />
    </Container>
  )
}

export default ItemDetailContainer