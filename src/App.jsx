
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components/Container/ItemListContainer'
import CartConextProvider from './components/Context/CartContext'
import Footer from './components/Footer'
import Cart from './components/Cart'

import Header from './components/Header'
import ItemDetailContainer from './components/Container/ItemDetailContainer'

function App() {

  return (
    <>
    <CartConextProvider>
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/item/:idProducto' element={<ItemDetailContainer/>}/>
      <Route path='/carrito' element={<Cart/>}/>
    </Routes>
    <Footer/>
      </BrowserRouter>
    </CartConextProvider>
    </>
  )
}

export default App
