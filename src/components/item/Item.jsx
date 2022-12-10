
import {Link} from "react-router-dom"
import "./Item.css"

const Item = ({element}) => {


  return (
    <div className="card">
      <img src={element.img} alt="" />
      <h3>{element.name}</h3>
      <h2>${element.price}</h2>
      <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>
      <h6>stock disponible: {element.stock}</h6>
    </div>
  );
};

export default Item;
