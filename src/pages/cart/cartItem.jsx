import React, { useContext } from "react";
import "../cart/cart.css"
import { ShopContext } from "../../context/shopContext";

const CartItem = ({id, productName, price, productImage}) => {
    const {updateCartItem, removeFromCart, addToCart,cartItems} = useContext(ShopContext);

    return(
       <div className="cartItem">
        <img src={productImage} alt="" />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p><b>${price}</b></p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>-</button>
                <input value={cartItems[id]} onChange= {(e) => {updateCartItem(Number(e.target.value), id)}}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
       </div>
    )
}

export default CartItem;