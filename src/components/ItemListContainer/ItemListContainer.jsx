import React, { useEffect, useState } from 'react'
import"./ItemListContainer.css"
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading'
import ItemList from '../ItemList/ItemList'
import { Container } from 'react-bootstrap'
// import Filter from '../Filter/Filter'
import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
// import { mFetch } from '../../utils/mFetch'

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([])
  const[isLoading, setIsLoading] = useState(true)
  const{cid} = useParams()
  
  // useEffect(()=>{
  //   if(!cid) {
  //     mFetch()
  //     .then(resultado=>{
  //       setProductos(resultado)
  //     })
  //     .catch(error=>console.log(error))
  //     .finally(()=>setIsLoading(false))
  //   }else{
  //     mFetch()
  //     .then(resultado=>{
  //       setProductos(resultado.filter(producto => producto.categoria===cid))
  //     })
  //     .catch(error=>console.log(error))
  //     .finally(()=>setIsLoading(false))
  //   }
  // },[cid])

  useEffect(()=>{
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')
    if(!cid) {
      getDocs(queryCollection)
            .then(resultado=>
              setProductos(resultado.docs.map(productos => ({id: productos.id, ...productos.data()})))
            )
            .catch(error=>console.log(error))
            .finally(()=>setIsLoading(false))
    }else{
      const queryCollectionFiltered = query(
        queryCollection,
        where('categoria','==', cid)
      )
      getDocs(queryCollectionFiltered)
            .then(resultado=>
              setProductos(resultado.docs.map(productos => ({id: productos.id, ...productos.data()})))
            )
            .catch(error=>console.log(error))
            .finally(()=>setIsLoading(false))
    }
  },[cid])
 
  // const handleProductFiltered =({filterState, handleFilterChange}) =>{
  //   return(<div>
  //     <h2>Buscar Producto</h2>
  //     <input type="text" value={filterState} onChange={handleFilterChange} />
  //   </div>
  //   )
  // }

  return (
    <div className='container_item'>
        <h2>Que licor estabas buscando? {props.persona}</h2>
        <div className='container_card'>
          {isLoading ? 
          <SpinnerLoading/> 
          : 
          <Container fluid>
            <ItemList productos = {productos}/>
          </Container>
          }
        </div>
    </div>
  )
}

export default ItemListContainer