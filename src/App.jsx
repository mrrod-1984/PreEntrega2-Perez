import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <div>
      <BrowserRouter>

          <NavBar />

        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path="/productos/:category" element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
