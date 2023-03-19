import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for(let i = 1; i < PRODUCTS.length ; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart)

    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] + 1}));
    }
    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID] - 1}));
    }
    
    const updateCartItem =(newAmount,itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: newAmount}))
    }


    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }
    
    const contextValue = {cartItems, 
        addToCart, 
        removeFromCart,
        updateCartItem, 
        getTotalAmount
    }
    
    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
};




export default ShopContextProvider;