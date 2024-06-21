import { Link } from "react-router-dom"


const Item = ({producto}) => {
  return (
    <div className="producto felx flex-col rounded-2xl overflow-hidden p-2 bg-slate-300">
        <img src={producto.thumbnail} />
        <div className="p-4  flex flex-col gap-2">
            <h4 className="text-2xl font-bold">{producto.title}</h4>
            <p className="text-gray-700 font-medium">{producto.category}</p>
            <p className="text-gray-600">{producto.description}</p>
            <p className="text-gray-700 font-bold text-xl mb-3">${producto.price}</p>
            <Link className="ver-mas bg-cyan-700 text-white p-2 w-max rounded-lg justify-center hover:bg-cyan-600 " to={`/item/${producto.id}`}>Ver más</Link>
            
        </div>
    </div>
  )
}

export default Item