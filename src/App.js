import Contador from "./components/contador/contador";
import Header from "./components/header/header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from "./pruevas";

function App() {
  return (
    <div className="App">

      <Header />
      {/* <Contador/> */}
      

      <ItemListContainer />

    </div>
  );
}

export default App;