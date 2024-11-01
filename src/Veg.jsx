import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";

function Veg(){
    const dispatch= useDispatch()
const vegProducts=useSelector(state => state.products.veg)
const items=vegProducts.map((product,index)=>
<li key={index}>
    {product.name} -${product.price.toFixed(2)}
    <button onClick={()=>dispatch(addTocart(product))}>Add to Cart</button>
</li>)


    return(
        <>
        <h2>veg products</h2>
        <ul>
            {items}
        </ul>
        </>
    )
}
export default Veg;