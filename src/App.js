import {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'

function App() {
  const greeting="hola soy un carro de compras";
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo={greeting}/>
    </>
  );
}

export default App;
