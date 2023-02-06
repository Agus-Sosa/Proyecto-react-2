
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/Container/ItemListContainer'
import CartConextProvider from './components/Context/CartContext'
import Footer from './components/Footer'
import Cart from './components/Cart'

import Header from './components/Header'
import ItemDetailContainer from './components/Container/ItemDetailContainer'
import Favoritos from './components/Favoritos'
import Portada from './components/Portada'

function App() {

  return (
    <>
    <CartConextProvider>
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={[<Portada/>, <ItemListContainer/>]}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/item/:idProducto' element={<ItemDetailContainer/>}/>
      <Route path='/carrito' element={<Cart/>}/>
      <Route path='/favoritos' element={<Favoritos/>}/>
    </Routes>
    <Footer/>
      </BrowserRouter>
    </CartConextProvider>
    </>
  )
}

export default App
