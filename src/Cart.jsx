import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, remove } from "./Store";
import { useState } from "react";

function Cart(){
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart); // Fallback to an empty array if cart is undefined
  // State to store the discount percentage
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount,setcouponDiscount]=useState(0);
// Function to calculate all totals (original, discounted, and savings)
  const calculateTotals = () => {
    const originalTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discountedTotal = originalTotal - (originalTotal * discount) / 100;
    const finalAmount = discountedTotal-couponDiscount;
    return {
      originalTotal: originalTotal.toFixed(2),
      discountedTotal: discountedTotal.toFixed(2),
      finalAmount: finalAmount.toFixed(2),
    };
  };

  // Destructure the totals from calculateTotals
  const { originalTotal, discountedTotal, finalAmount } = calculateTotals();

  // Handle discount button clicks
  const applyDiscount = (percent) => {
    setDiscount(percent);
  };
  


  const handleApplyCoupon=()=>{
    let percent=0;
    
    switch(couponCode){
      case 'CHANDU10':
        setcouponDiscount(percent);
        percent=10;
        break;
        case 'CHANDU20':
          setcouponDiscount(percent);
          percent=20;
          break;
          default:
          alert('Invalid coupon code');
          return;
          
    }
    setDiscount(prevDiscount => prevDiscount + percent);
  }



  // Handle coupon code application


  const items = cartItems.map((item, index) => (
      <li key={index}>
           ${item.name} - $${item.price.toFixed(2)} - ${item.quantity}
          <button onClick={() => dispatch(increament({ name: item.name }))}>+1</button>
          <button onClick={() => dispatch(decreament({ name: item.name }))}>-1</button>
          <button onClick={() => dispatch(remove(item))}>Remove</button>
          {/* <button onClick={()=>dispatch(addTocart(item))}>Add to cart</button> */}
      </li>
  ))
  
    return(
        <>
       <div>
      {items.length === 0 ? (
        <h2>Cart is empty.</h2>
      ) : (
        <div>
          <h2>Cart Page</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <h4>Total bill before discount: ${originalTotal}</h4>
    
    <button style={{ marginRight: '10px' }} onClick={() => applyDiscount(10)}>Apply Discount 10%</button>
    <button style={{ marginRight: '10px' }} onClick={() => applyDiscount(20)}>Apply Discount 20%</button>
    <button onClick={() => applyDiscount(30)}>Apply Discount 30%</button>

    {/* Coupon code input */}
    <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Enter coupon code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
      />
      <button style={{ marginRight: '10px' }} onClick={handleApplyCoupon}>Apply Coupon</button>
    </div>

    
   
    
    <p>Discount percentage Applied: {discount}%</p>
    <p> Discount Amount ${finalAmount}</p>
    <h4>Final Bill After Discount: ${discountedTotal}</h4>
          </ul>
        </div>
      )}
    </div>
    

        </>
    )
}
export default Cart;