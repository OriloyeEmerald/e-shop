import React from "react"
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";


const Navbar = () => {

    return (
      <div className="navbar">
         <div className="links">
          <Link to="/">Shop</Link>
          <Link to="/cart" className="shopcart">
            <ShoppingCart />
          </Link>
         </div>
      </div>

    )
}

export default Navbar;