import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./cartItem";
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const {cartItems, getTotalAmount} = useContext(ShopContext);
    const totalAmount = getTotalAmount();

    const navigate = useNavigate()
    return (

        <div className="cart">
            <div>
                <h1>Your Cart Items</h1>
            </div>
            <div className="cartItems">
                {PRODUCTS.map((product) =>  { 
                    return cartItems[product.id] > 0 && <CartItem  id={product.id} productName={product.productName} price={product.price} productImage={product.productImage}/>
                    
                })}
            </div>
          {totalAmount > 0 ? <div  className="checkout"> 
                <p>Subtotal: <b>${totalAmount}</b></p>
                <button onClick={() => navigate("/")}>Cont. Shopping</button>
                
            </div> : <h1>Your Cart is empty</h1>}
            
        </div>
    )
}

export default Cart;