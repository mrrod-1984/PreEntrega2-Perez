import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from '../context/CartContext';

const ItemDetail = ({item}) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const onAdd = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const onSubstract = () => {
      setCantidad(cantidad + 1)
  }



  return (
    <div className="container">
        <div className="producto-detalle grid grid-cols-2 gap-8">
            <img className="detalle-img w-full" src={item.thumbnail} alt={item.title} />
            <div className="detalle flex flex-col justify-center">
                <h4 className="text-2xl font-bold">{item.title}</h4>
                <p className="text-gray-700 font-medium">{item.category}</p>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-700 font-bold text-xl mb-3">${item.price}</p>
                <ItemCount 
                  cantidad={cantidad} 
                  onAdd={onAdd} 
                  onSubstract={onSubstract} 
                  add={() => agregarAlCarrito(item, cantidad)}
                  />
                
                
            </div>
        </div>

    </div>
  )
}

export default ItemDetail