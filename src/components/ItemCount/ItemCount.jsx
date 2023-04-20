import "./ItemCount.css"
import { useCounter } from '../../hook/useCounter'

const ItemCount = ({initial=1, stock=5, onAdd}) => {
  const {count, increment, decrement} = useCounter(initial, 1, stock)
  return (
    <div className='counter'>
      <button className='btn btn-outline-dark' onClick={increment}>+1</button>
      <h1 className='button-count'>Cantidad: {count}</h1>
      <button className='btn btn-outline-dark' onClick={decrement}>-1</button>
      <button className='btn btn-outline-dark'>🛒</button>
    </div>
  )
}

export default ItemCount