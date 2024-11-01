import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";

function NonVeg(){
    const NonvegProducts=useSelector(state => state.products.nonveg)

    const dispatch= useDispatch()

const itemes=NonvegProducts.map((product,index)=>
<li key={index}>
    {product.name} -${product.price.toFixed(2)}
    <button onClick={()=>dispatch(addTocart(product))}>Add to Cart</button>

</li>)
    return(
        <>
        <h2>Non veg products</h2>
        <ul>
            {itemes}
        </ul>
        </>
    )
}
export default NonVeg;