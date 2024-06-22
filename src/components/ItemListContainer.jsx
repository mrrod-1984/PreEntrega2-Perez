import { useEffect, useState } from 'react'
import { getData } from '../mocks/getData'
import ItemList from './ItemList';
import { useParams } from "react-router-dom";



const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const category = useParams().category;
    console.log(category);

    useEffect(() => {
        getData()
            .then((res) => {
                if (category){
                    setProductos(res.filter((productos) => productos.category === category))
                } else {
                setProductos(res);
                }                
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [category])

    return (
        <div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer