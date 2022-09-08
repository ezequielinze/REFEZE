import Contador from "./components/contador/contador";
import Header from "./components/header/header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./pruevas";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailConteiner from "./components/itemDetailConteiner/itemDetailConteiner";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />
          <Route path='*' element={<Navigate to="/" />} />
          <Route path='/productos/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailConteiner/>} />

        </Routes>



      </BrowserRouter>


    </div>
  );
}

export default App;