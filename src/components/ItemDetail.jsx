

const ItemDetail = ({item}) => {
  return (
    <div className="container">
        <div className="producto-detalle grid grid-cols-2 gap-8">
            <img className="detalle-img w-full" src={item.thumbnail} alt={item.title} />
            <div className="detalle flex flex-col justify-center">
                <h4 className="text-2xl font-bold">{item.title}</h4>
                <p className="text-gray-700 font-medium">{item.category}</p>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-gray-700 font-bold text-xl mb-3">${item.price}</p>
                <button className="bg-cyan-700 text-white p-2 w-max rounded-lg justify-center hover:bg-cyan-600">Agregar al carrito</button>
            </div>
        </div>

    </div>
  )
}

export default ItemDetail