import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";
import "tachyons";

const Shop = () => {
    const [inputState, setInputState] = useState("")

    const filterProduct = (product) => {
        if (inputState === "") {
            return product
        } else if (product.productName.toLowerCase().includes(inputState.toLowerCase())) {
            return product
        }
    }
    return (

        <div className="shop tc">
            <div className="shopTitle">
                <h1>shop @ JIGGA's</h1>
            </div>
             <input 
            type="search" 
            placeholder="search products.."
            className="br2 pa2 ba b--black bg-lightest-blue mt4" onChange={(event) => {setInputState(event.target.value)}} />
            
            <div className="products">
              {PRODUCTS.filter(filterProduct).map((product, id) => {
              return  <Product className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-3" id={product.id} productName={product.productName} price={product.price} productImage={product.productImage} key={id}/>
            
              })}
            </div>
        </div>
    )
}

export default Shop;