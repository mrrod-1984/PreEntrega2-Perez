

const ItemCount = ({cantidad, onAdd, onSubstract, add}) => {

 return (
    <div>
        <div className="flex items-center pb-3">
            <button className="bg-cyan-700 text-white p-2 w-max rounded-lg justify-center hover:bg-cyan-600" onClick={onAdd}>-</button>
            <p className="mx-3">{cantidad}</p>
            <button className="bg-cyan-700 text-white p-2 w-max rounded-lg justify-center hover:bg-cyan-600" onClick={onSubstract}>+</button>
        </div>
        <div>    
            <button className="bg-cyan-700 text-white p-2 w-max rounded-lg hover:bg-cyan-600" onClick={add}>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount