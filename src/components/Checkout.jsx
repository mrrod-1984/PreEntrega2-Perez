import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import {collection, addDoc} from 'firebase/firestore';
import { db } from "../firebase/config";


const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");
    
    const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
    
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
    }
    if (pedidoId) {
        return (
            <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-4">Muchas gracias por tu compra</h1>
            <p className="text-lg text-center">Tu número de pedido es: {pedidoId}</p>
        </div>
        )
    }


    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Finalizar compra </h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block">Nombre:</label>
                    <input type="text" name="name" className="border border-gray-300 px-2 py-1" placeholder="Ingrese su nombre" {...register("nombre")}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block">Email:</label>
                    <input type="email" name="email" className="border border-gray-300 px-2 py-1" placeholder="Ingrese su email" {...register("email")}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block">Teléfono:</label>
                    <input type="tel" name="phone" className="border border-gray-300 px-2 py-1" placeholder="Ingrese su teléfono"{...register("telefono")} />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Comprar</button>
            </form>
        </div>
    )
}


export default Checkout