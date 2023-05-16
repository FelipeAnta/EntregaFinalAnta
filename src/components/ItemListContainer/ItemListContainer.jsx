import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading'
import ItemList from '../ItemList/ItemList'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { cid } = useParams()
  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')
    const queryCollectionFiltered = !cid ? queryCollection : query(
      queryCollection,
      where('categoria', '==', cid)
    )
    getDocs(queryCollectionFiltered)
      .then(resultado =>
        setProductos(resultado.docs.map(productos => ({ id: productos.id, ...productos.data() })))
      )
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))

  }, [cid])
  return (
    <div className='container_item'>
      <h2>Que licor estabas buscando? {props.persona}</h2>
      <div className='container_card'>
        {isLoading ?
          <SpinnerLoading />
          :
          <Container fluid>
            <ItemList productos={productos} />
          </Container>
        }
      </div>
    </div>
  )
}

export default ItemListContainer