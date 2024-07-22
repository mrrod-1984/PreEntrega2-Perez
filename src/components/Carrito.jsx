import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


export const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
    }



  return (
<div className="max-w-4xl mx-auto px-6 py-8">
    <h1 className='text-4xl font-bold text-center mb-10'>Carrito de compras</h1>

    {
  carrito.map((prod) => (
    <div key={prod.id} className='flex justify-between items-center mb-6 p-4 border-b-2 border-gray-200'>
        <img className='w-24 h-24 object-cover rounded-lg' src={prod.thumbnail} alt={prod.title} />
        <p className='text-2xl'>{prod.cantidad} x {prod.title}</p>
        <p className='text-2xl font-semibold'>${prod.price * prod.cantidad}</p>
    </div>
    ))
}

    {
    carrito.length > 0 && 
    <>
        <div className='flex justify-between items-center mb-6 p-4 border-t-2 border-gray-200'>
            <p className='text-2xl font-bold'>Total:</p>
            <p className='text-2xl font-bold'>${precioTotal().toFixed(2)}</p>
        </div>        
        <div className='flex justify-center gap-2'>
            <button onClick={handleVaciar} className='bg-blue-600 text-white text-lg px-6 py-3 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition ease-in-out duration-150'>Vaciar Carrito</button>
            <Link to="/checkout" className='bg-blue-600 text-white text-lg px-6 py-3 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition ease-in-out duration-150'>Finalizar compra</Link>
        </div>
    </>  
    }
</div>
  )
}
