import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

export const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
    }



  return (
    <div className= "container">
        <h1 className='text-3xl font-bold text-center my-8'>Carrito de compras</h1>

        {

          carrito.map((prod) => (
            <div className='flex justify-between items-center my-4'>
                <img className='w-20' src={prod.thumbnail} alt={prod.title} />
                <p className='text-xl'>{prod.cantidad} x {prod.title}</p>
                <p className='text-xl'>${prod.price * prod.cantidad}</p>
            </div>
            ))
        }

        {
        carrito.length > 0 && 
        <>
        
            <div className='flex justify-between items-center my-4'>
                <p className='text-xl font-bold'>Total:</p>
                <p className='text-xl font-bold'>${precioTotal()}</p>
            </div>        
            <div className='flex justify-center'>
                <button onClick={handleVaciar} className='btn bg-cyan-700 text-white p-2 w-max rounded-lg justify-center hover:bg-cyan-600' >Vaciar Carrito</button>
                </div>
           
        </>  
        }


    </div>
  )
}
