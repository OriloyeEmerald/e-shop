import React, { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = ({id, productName, price, productImage}) => {
   
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemsAmount = cartItems[id]
    return (
        <div className="product ">
           <img src={productImage} alt="" />
           <div className="description">
            <p><b>{productName}</b></p>
            <p>${price}</p>
           </div>
           <button className="addToCartBttn" onClick={() => {addToCart(id)}}>Add To Cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
           </button>
        </div>
    )
}

export default Product;