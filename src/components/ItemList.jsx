import Item from "./Item";

const ItemList = ({ productos }) => {


    return (
        <div className="container max-w-6xl p-6 m-auto">
            {/* <h2 className="main-title mt-8">Productos</h2> */}
            <div className="productos grid grid-cols-3 gap-8 p-4 ">
            {productos.map((prod)=> <Item producto={prod} key={prod.id} />)}
            </div>
            
        </div>
    )

}

export default ItemList;