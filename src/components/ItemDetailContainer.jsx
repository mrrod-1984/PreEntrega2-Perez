import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { getItemById } from "../mocks/getData";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    console.log(id)

    useEffect(() => {
       getItemById(Number(id))
         .then((res) => {
              setItem(res)
         })  
    }, [id])
    


  return (
    <div>
       {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer