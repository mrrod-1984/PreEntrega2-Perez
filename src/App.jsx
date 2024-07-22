
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Carrito } from "./components/Carrito";
import Checkout from './components/Checkout';


function App() {



  return (
    <div>
      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path="/productos/:category" element={<ItemListContainer />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>

        </BrowserRouter>
        </CartProvider>
    </div>
  )
}

export default App
