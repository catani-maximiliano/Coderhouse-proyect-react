import {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'

function App() {
  const saludo = "Hola soy el carrito de compras"
  return (
    <>
    <NavBar/>
    <ItemListContainer saludos={saludo}/>
    </>
  );
}

export default App;
