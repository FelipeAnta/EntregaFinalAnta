import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Formulario from './components/Formulario/Formulario';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { useEffect, useState } from 'react';
import { mFetch } from './utils/mFetch';

function App() {
  const [productos, setProductos] = useState([])
  useEffect(()=>{
    mFetch()
    .then(resultado=>{
      setProductos(resultado)
    })
  })
  return (
    <Router>
      <NavBar/>
      <Routes className="App">
        <Route path='/' exact element={<ItemListContainer />}/>
        <Route path='/categoria/:cid' exact element={<ItemListContainer/>}/>

        <Route path='/detail/:pid' element={<ItemDetailContainer productos={productos}/>}/>
        <Route path='/form' element={<Formulario/>}/>

        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
      <ItemCount/>
    </Router>
  );
}

export default App;
